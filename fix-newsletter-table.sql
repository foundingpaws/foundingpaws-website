-- Fix Newsletter Subscribers Table
-- Execute this in your Supabase SQL Editor

-- Add missing columns if they don't exist
ALTER TABLE newsletter_subscribers 
ADD COLUMN IF NOT EXISTS name TEXT,
ADD COLUMN IF NOT EXISTS subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
ADD COLUMN IF NOT EXISTS unsubscribed_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'website',
ADD COLUMN IF NOT EXISTS ip_address INET,
ADD COLUMN IF NOT EXISTS user_agent TEXT,
ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}'::jsonb;

-- Update existing records to have subscribed_at = created_at if null
UPDATE newsletter_subscribers 
SET subscribed_at = created_at 
WHERE subscribed_at IS NULL;

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_status ON newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_created_at ON newsletter_subscribers(created_at);

-- Enable Row Level Security (RLS) if not already enabled
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Allow anonymous users to insert newsletter subscriptions" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow authenticated users to read newsletter subscriptions" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow service role full access" ON newsletter_subscribers;

-- Create policy for anonymous users to insert
CREATE POLICY "Allow anonymous users to insert newsletter subscriptions" 
ON newsletter_subscribers 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy for authenticated users to read all
CREATE POLICY "Allow authenticated users to read newsletter subscriptions" 
ON newsletter_subscribers 
FOR SELECT 
TO authenticated 
USING (true);

-- Create policy for service role to do everything
CREATE POLICY "Allow service role full access" 
ON newsletter_subscribers 
FOR ALL 
TO service_role 
USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_newsletter_subscribers_updated_at ON newsletter_subscribers;
CREATE TRIGGER update_newsletter_subscribers_updated_at 
    BEFORE UPDATE ON newsletter_subscribers 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
