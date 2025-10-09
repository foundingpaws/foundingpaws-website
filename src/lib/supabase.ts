import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rzpbfipopehqkhyrhpgy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cGJmaXBvcGVocWtoeXJocGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1OTA0NTUsImV4cCI6MjA3NTE2NjQ1NX0.mjIrfCxE6xFRbYTvQ3ydcOqIyptR4agNdBWPPd_kS9c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Service role client for admin operations
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cGJmaXBvcGVocWtoeXJocGd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTU5MDQ1NSwiZXhwIjoyMDc1MTY2NDU1fQ.MdxrYD7LjeXih0OZfVTS1Y1DLwEJlgakSDxTafxbVXc'
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Resend configuration
export const RESEND_API_KEY = 're_FX3Hp2tM_MNYDGTopxwMjDBy7WcStVrkd'
