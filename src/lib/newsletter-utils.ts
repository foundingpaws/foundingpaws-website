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
    const res = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.toLowerCase().trim(), name: 'Liebe/r Hundefreund/in', source })
    });
    if (!res.ok) {
      const data = await res.json();
      return { success: false, errorMessage: data?.error || 'Fehler beim Anmelden. Bitte versuche es erneut.' };
    }
    return { success: true };
  } catch (error) {
    return {
      success: false,
      errorMessage: 'Ein unerwarteter Fehler ist aufgetreten.'
    };
  }
}
