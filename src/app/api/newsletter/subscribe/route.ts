import { NextRequest, NextResponse } from 'next/server';
import { EmailService, EmailAutomation } from '@/lib/email-service';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Try to check if email already exists (optional - table might not exist yet)
    try {
      const { data: existingSubscriber } = await supabaseAdmin
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .single();

      if (existingSubscriber) {
        return NextResponse.json(
          { error: 'Diese E-Mail-Adresse ist bereits angemeldet.' },
          { status: 400 }
        );
      }
    } catch (error) {
      console.log('Table might not exist yet, continuing with email send...');
    }

    // Try to add to database (optional - table might not exist yet)
    try {
      const { error: dbError } = await supabaseAdmin
        .from('newsletter_subscribers')
        .insert({
          email,
          name: name || null,
          subscribed_at: new Date().toISOString(),
          status: 'active'
        });

      if (dbError) {
        console.log('Database insert failed, but continuing with email send:', dbError);
      }
    } catch (error) {
      console.log('Database operation failed, but continuing with email send:', error);
    }

    // Send welcome email
    try {
      await EmailAutomation.triggerWelcomeEmail(email, name);
    } catch (emailError) {
      console.error('Welcome email error:', emailError);
      // Don't fail the subscription if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Erfolgreich für den Newsletter angemeldet!'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
