import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    const { 
      subject, 
      content, 
      featuredProduct, 
      articles, 
      testEmail 
    } = await request.json();

    if (!subject || !content) {
      return NextResponse.json(
        { error: 'Betreff und Inhalt sind erforderlich' },
        { status: 400 }
      );
    }

    const result = await EmailService.sendNewsletter({
      subject,
      content,
      featuredProduct,
      articles,
      testEmail
    });

    return NextResponse.json({
      success: true,
      message: testEmail ? 'Test-Newsletter gesendet' : 'Newsletter erfolgreich versendet',
      messageId: result.messageId,
      testMode: result.testMode
    });

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden des Newsletters' },
      { status: 500 }
    );
  }
}
