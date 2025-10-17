import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    const result = await EmailService.sendWelcomeWithDiscount(email);
    return NextResponse.json({ success: true, messageId: (result as any).messageId });
  } catch (error) {
    console.error('Welcome discount test API error:', error);
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 });
  }
}


