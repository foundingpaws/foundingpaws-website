import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('newsletter_subscribers')
      .insert([
        {
          email: email.toLowerCase().trim(),
          source,
          status: 'active'
        }
      ])
      .select();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Diese E-Mail-Adresse ist bereits angemeldet' },
          { status: 409 }
        );
      }
      
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Speichern der E-Mail-Adresse' },
        { status: 500 }
      );
    }

    // Send welcome email
    try {
      const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/api/email/welcome`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          name: 'Liebe/r Hundefreund/in'
        }),
      });

      if (!emailResponse.ok) {
        console.error('Welcome email failed:', await emailResponse.text());
        // Don't fail the signup if email fails
      }
    } catch (emailError) {
      console.error('Welcome email error:', emailError);
      // Don't fail the signup if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Erfolgreich angemeldet',
        data: data[0]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('newsletter_subscribers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Laden der Abonnenten' },
        { status: 500 }
      );
    }

    return NextResponse.json({ subscribers: data });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}