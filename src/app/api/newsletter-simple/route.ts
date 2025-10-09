import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/lib/email-service';

// Temporary in-memory storage until Supabase table is created
const subscribers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if already subscribed
    if (subscribers.has(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Diese E-Mail-Adresse ist bereits angemeldet' },
        { status: 409 }
      );
    }

    // Add to temporary storage
    subscribers.add(normalizedEmail);

    // Send welcome email
    try {
      await EmailService.sendWelcomeEmail(normalizedEmail, 'Liebe/r Hundefreund/in');
    } catch (emailError) {
      console.error('Welcome email error:', emailError);
      // Don't fail the signup if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Erfolgreich angemeldet',
      totalSubscribers: subscribers.size
    });

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    subscribers: Array.from(subscribers),
    total: subscribers.size 
  });
}
