import crypto from 'crypto';

// Token format: base64url(email).exp.base64url(HMAC(email.exp))
function getSecret(): string {
  // Prefer a dedicated secret if available; fall back to existing keys for dev
  const secret = process.env.NEXTAUTH_SECRET || process.env.RESEND_API_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret) {
    // As a last resort, use a static dev secret. Replace in production.
    return 'dev-secret-change-me';
  }
  return secret;
}

function base64url(input: Buffer | string): string {
  return (input instanceof Buffer ? input : Buffer.from(input))
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function unbase64url(input: string): Buffer {
  const pad = 4 - (input.length % 4);
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/') + (pad < 4 ? '='.repeat(pad) : '');
  return Buffer.from(normalized, 'base64');
}

export function createEmailConfirmToken(email: string, expiresInSeconds = 60 * 60 * 48): string {
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const emailPart = base64url(email.toLowerCase().trim());
  const payload = `${emailPart}.${exp}`;
  const hmac = crypto.createHmac('sha256', getSecret()).update(payload).digest();
  const sig = base64url(hmac);
  return `${payload}.${sig}`;
}

export function verifyEmailConfirmToken(token: string): { valid: boolean; email?: string; error?: string } {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return { valid: false, error: 'invalid_token' };
    const [emailPart, expStr, sigPart] = parts;
    const payload = `${emailPart}.${expStr}`;
    const expectedSig = base64url(crypto.createHmac('sha256', getSecret()).update(payload).digest());
    if (sigPart !== expectedSig) return { valid: false, error: 'invalid_signature' };
    const exp = parseInt(expStr, 10);
    if (Number.isNaN(exp) || exp < Math.floor(Date.now() / 1000)) return { valid: false, error: 'expired' };
    const email = unbase64url(emailPart).toString('utf8');
    return { valid: true, email };
  } catch (e) {
    return { valid: false, error: 'invalid_token' };
  }
}


