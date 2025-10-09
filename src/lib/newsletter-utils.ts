import { supabase } from './supabase';

export interface NewsletterSignupResult {
  success: boolean;
  errorMessage?: string;
}

export async function handleNewsletterSignup(
  email: string, 
  source: string
): Promise<NewsletterSignupResult> {
  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ 
        email: email.toLowerCase().trim(), 
        source,
        status: 'active'
      }]);
    
    if (error) {
      if (error.code === '23505') {
        return {
          success: false,
          errorMessage: 'Diese E-Mail-Adresse ist bereits angemeldet.'
        };
      } else {
        return {
          success: false,
          errorMessage: 'Fehler beim Anmelden. Bitte versuche es erneut.'
        };
      }
    }
    
    // Send welcome email
    try {
      await fetch('/api/email/welcome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          name: 'Liebe/r Hundefreund/in'
        }),
      });
    } catch (emailError) {
      console.error('Welcome email error:', emailError);
      // Don't fail the signup if email fails
    }
    
    return { success: true };
  } catch (error) {
    return {
      success: false,
      errorMessage: 'Ein unerwarteter Fehler ist aufgetreten.'
    };
  }
}
