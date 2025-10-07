import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    const { to = 'foundingpaws@gmail.com' } = await request.json();

    // Test welcome email using our EmailService
    const result = await EmailService.sendWelcomeEmail(to, 'Test User');

    return NextResponse.json({
      success: true,
      message: 'Test-E-Mail erfolgreich gesendet!',
      messageId: result.messageId,
      to: to
    });

  } catch (error) {
    console.error('Test email API error:', error);
    return NextResponse.json(
      { 
        error: 'Fehler beim Senden der Test-E-Mail',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
