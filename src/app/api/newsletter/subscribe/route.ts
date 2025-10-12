import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/lib/email-service';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

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
      const now = new Date().toISOString();
      const { error: dbError } = await supabaseAdmin
        .from('newsletter_subscribers')
        .insert({
          email: email.toLowerCase().trim(),
          status: 'pending',
          created_at: now,
          updated_at: now,
        });

      if (dbError) {
        console.error('[subscribe] Supabase insert error:', dbError);
        return NextResponse.json({ 
          error: 'Datenbankfehler bei der Anmeldung.',
          code: (dbError as any).code,
          message: (dbError as any).message,
          details: (dbError as any).details,
          hint: (dbError as any).hint,
        }, { status: 500 });
      }
    } catch (error: any) {
      console.error('[subscribe] Supabase insert exception:', error);
      return NextResponse.json({ error: 'Datenbankfehler (Exception).', message: String(error?.message || error) }, { status: 500 });
    }

    // Send confirm email for double opt-in
    try {
      await EmailService.sendConfirmEmail(email);
    } catch (emailError: any) {
      console.error('[subscribe] Confirm email error:', emailError);
      return NextResponse.json({ error: 'E-Mail Versand fehlgeschlagen.', message: String(emailError?.message || emailError) }, { status: 502 });
    }

    return NextResponse.json({
      success: true,
      message: 'Bitte bestätige deine Anmeldung. Wir haben dir eine E-Mail gesendet.'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
