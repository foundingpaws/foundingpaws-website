import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/lib/email-service';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { 
      subject, 
      content, 
      featuredProduct, 
      articles = [],
      testEmail = null 
    } = await request.json();

    if (!subject || !content) {
      return NextResponse.json(
        { error: 'Betreff und Inhalt sind erforderlich.' },
        { status: 400 }
      );
    }

    // If test email provided, send only to that email
    if (testEmail) {
      const result = await EmailService.sendNewsletter({
        subject,
        content,
        featuredProduct,
        articles,
        testEmail
      });

      return NextResponse.json({
        success: true,
        message: 'Test-Newsletter gesendet!',
        messageId: result.messageId
      });
    }

    // Get all active subscribers
    const { data: subscribers, error: dbError } = await supabaseAdmin
      .from('newsletter_subscribers')
      .select('email, name')
      .eq('status', 'active');

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Fehler beim Laden der Abonnenten.' },
        { status: 500 }
      );
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json(
        { error: 'Keine aktiven Abonnenten gefunden.' },
        { status: 400 }
      );
    }

    // Send newsletter to all subscribers
    // Note: In production, you might want to implement batch sending
    // to avoid rate limits and improve performance
    const results = [];
    for (const subscriber of subscribers) {
      try {
        const result = await EmailService.sendNewsletter({
          subject,
          content,
          featuredProduct,
          articles
        });
        results.push({ email: subscriber.email, success: true });
      } catch (error) {
        console.error(`Failed to send to ${subscriber.email}:`, error);
        results.push({ 
          email: subscriber.email, 
          success: false, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;

    return NextResponse.json({
      success: true,
      message: `Newsletter gesendet! ${successCount} erfolgreich, ${failureCount} fehlgeschlagen.`,
      results
    });

  } catch (error) {
    console.error('Newsletter send error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten beim Senden des Newsletters.' },
      { status: 500 }
    );
  }
}
