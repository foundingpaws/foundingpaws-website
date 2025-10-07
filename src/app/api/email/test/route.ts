import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '@/lib/supabase';

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { to = 'foundingpaws@gmail.com' } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Founding Paws <onboarding@resend.dev>',
      to: [to],
      subject: '🎉 Test-E-Mail von Founding Paws',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f6f0; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2d5a27 0%, #1e3d1a 100%); padding: 40px; text-align: center; color: white; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">🐾 Founding Paws</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Wissenschaft trifft Herz</p>
          </div>
          
          <div style="background: white; padding: 40px; border-radius: 0 0 16px 16px;">
            <h2 style="color: #2d5a27; margin-top: 0;">Test-E-Mail erfolgreich! ✅</h2>
            
            <p style="color: #2d5a27; line-height: 1.6;">
              Hallo! Diese Test-E-Mail bestätigt, dass euer E-Mail-System korrekt funktioniert.
            </p>
            
            <div style="background: linear-gradient(135deg, #f8f6f0 0%, #e8e4d8 100%); border-left: 4px solid #b46a34; padding: 20px; margin: 20px 0; border-radius: 8px;">
              <h3 style="color: #2d5a27; margin-top: 0;">Was funktioniert:</h3>
              <ul style="color: #2d5a27; padding-left: 20px;">
                <li>✅ Resend API Integration</li>
                <li>✅ E-Mail-Templates</li>
                <li>✅ Newsletter-System</li>
                <li>✅ Supabase Integration</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://foundingpaws.de" style="display: inline-block; background: linear-gradient(135deg, #b46a34 0%, #9d5a2a 100%); color: white; text-decoration: none; padding: 16px 32px; border-radius: 50px; font-weight: bold; box-shadow: 0 4px 15px rgba(180, 106, 52, 0.3);">
                Zur Website
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px; text-align: center; margin-top: 30px;">
              Diese E-Mail wurde automatisch von eurem E-Mail-System gesendet.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Test email error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Senden der Test-E-Mail', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Test-E-Mail erfolgreich gesendet!',
      messageId: data?.id,
      to: to
    });

  } catch (error) {
    console.error('Test email API error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler beim Senden der Test-E-Mail' },
      { status: 500 }
    );
  }
}
