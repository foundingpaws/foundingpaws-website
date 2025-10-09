import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    const result = await EmailService.sendWelcomeEmail(email, name);

    return NextResponse.json({
      success: true,
      message: 'Willkommens-E-Mail erfolgreich gesendet',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Welcome email API error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der Willkommens-E-Mail' },
      { status: 500 }
    );
  }
}
