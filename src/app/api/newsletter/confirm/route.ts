import { NextRequest, NextResponse } from 'next/server';
import { verifyEmailConfirmToken } from '@/lib/token';
import { supabaseAdmin } from '@/lib/supabase';
import { EmailService } from '@/lib/email-service';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token') || '';
    const verify = verifyEmailConfirmToken(token);
    if (!verify.valid || !verify.email) {
      return NextResponse.redirect(new URL('/newsletter/confirm?status=invalid', req.url));
    }

    const email = verify.email.toLowerCase().trim();

    // Insert or update subscriber as active
    const { error } = await supabaseAdmin
      .from('newsletter_subscribers')
      .upsert({ email, status: 'active', source: 'homepage-modal', subscribed_at: new Date().toISOString(), confirmed_at: new Date().toISOString() }, { onConflict: 'email' });
    if (error) {
      console.error('Supabase upsert error:', error);
      return NextResponse.redirect(new URL('/newsletter/confirm?status=error', req.url));
    }

    // Send welcome with discount
    try {
      const result = await EmailService.sendWelcomeWithDiscount(email);
      console.log('[confirm] Sent welcome-discount email:', result);
    } catch (e) {
      console.error('[confirm] Welcome discount send error:', e);
    }

    const res = NextResponse.redirect(new URL('/newsletter/confirm?status=ok', req.url));
    // Set cookie to suppress modal sitewide
    res.cookies.set('fp_subscribed', '1', { path: '/', maxAge: 60 * 60 * 24 * 365 });
    return res;
  } catch (e) {
    return NextResponse.redirect(new URL('/newsletter/confirm?status=error', req.url));
  }
}


