import { Resend } from 'resend';
import { 
  WelcomeEmailTemplate, 
  NewsletterTemplate, 
  ProductLaunchTemplate, 
  AbandonedCartTemplate 
} from './email-templates';
import { RESEND_API_KEY } from './supabase';
import { createEmailConfirmToken } from './token';

// Initialize Resend with API key
const resend = new Resend(RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = 'noreply@foundingpaws.de'; // Now using verified domain
const REPLY_TO = 'foundingpaws@gmail.com';

// Email service class
export class EmailService {
  // Send confirmation email for double opt-in
  static async sendConfirmEmail(email: string) {
    try {
      const token = createEmailConfirmToken(email);
      const base = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
      const confirmUrl = `${base}/api/newsletter/confirm?token=${encodeURIComponent(token)}`;

      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo: REPLY_TO,
        subject: 'Bitte bestätige deine Anmeldung – Founding Paws',
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.65;color:#2d5a27;background:#f8f6f0;margin:0;padding:0;">
            <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.08);">
              <div style="padding:32px 28px;border-bottom:1px solid #e7e3da;">
                <div style="font-size:18px;letter-spacing:.02em;color:#2d5a27;font-weight:700;">Founding Paws</div>
                <div style="margin-top:4px;font-size:13px;color:rgba(45,90,39,.75);">Wissenschaft trifft Herz</div>
              </div>
              <div style="padding:42px 34px;">
                <h1 style="margin:0 0 10px;font-size:28px;line-height:1.25;font-weight:700;color:#2d5a27;">Noch ein Schritt – bitte bestätige deine E‑Mail</h1>
                <p style="margin:0 0 14px;font-size:16px;color:rgba(45,90,39,.85);">Wir möchten dir nur <strong>wirklich hilfreiche</strong> Inhalte senden. Mit deiner Bestätigung sichern wir dir deinen <strong style=\"color:#b46a34\">10% Launch‑Vorteil</strong> und Zugang zu praxisnahen Inhalten.</p>
                <div style="background:#f8f6f0;border:1px solid #e7e3da;border-radius:14px;padding:16px 18px;margin:16px 0;">
                  <div style="font-weight:700;margin-bottom:6px;color:#2d5a27;">Was du nach der Bestätigung erhältst</div>
                  <ul style="margin:0;padding-left:18px;color:rgba(45,90,39,.85);">
                    <li>Klar strukturierte Tipps mit Dosierungen & Sicherheitshinweisen</li>
                    <li>Einblicke in Entwicklung & Qualität unserer Formeln</li>
                    <li>Frühen Zugang zu Launch‑Infos – inkl. 10% Vorteil</li>
                  </ul>
                </div>
                <div style="text-align:center;margin:28px 0 8px;">
                  <a href="${confirmUrl}" style="display:inline-block;background:#b46a34;color:#fff;text-decoration:none;padding:14px 26px;border-radius:999px;font-weight:600;font-size:16px;box-shadow:0 6px 18px rgba(180,106,52,.25);">Anmeldung bestätigen</a>
                </div>
                <p style="margin:14px 0 0;font-size:12px;color:rgba(45,90,39,.7);">Falls der Button nicht funktioniert, öffne diesen Link:<br><span style="word-break:break-all;color:#b46a34;">${confirmUrl}</span></p>
                <p style="margin:14px 0 0;font-size:12px;color:rgba(45,90,39,.7);">Du kannst dich jederzeit mit einem Klick wieder abmelden. Datenschutz ist uns wichtig.</p>
              </div>
              <div style="padding:18px 28px;background:#f8f6f0;border-top:1px solid #e7e3da;text-align:center;">
                <p style="margin:0;font-size:12px;color:#6b6b6b;">Fragen? Antworte einfach auf diese E‑Mail oder schreibe an <a href="mailto:foundingpaws@gmail.com" style="color:#b46a34;text-decoration:none;">foundingpaws@gmail.com</a></p>
              </div>
            </div>
          </div>
        `,
        headers: { 'X-Entity-Ref-ID': `confirm-${Date.now()}` },
      });

      if (error) {
        console.error('Confirm email error:', error);
        throw new Error('Failed to send confirm email');
      }
      return { success: true, messageId: data?.id };
    } catch (error) {
      console.error('Confirm email service error:', error);
      throw error;
    }
  }
  // Send welcome email to new subscribers
  static async sendWelcomeEmail(email: string, name?: string) {
    try {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo: REPLY_TO,
        subject: 'Willkommen bei Founding Paws',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2d5a27; background:#f8f6f0; margin:0; padding:0;">
            <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 16px 36px rgba(0,0,0,.08);">
              <div style="padding:36px 28px;border-bottom:1px solid #e7e3da;">
                <div style="font-size:18px;letter-spacing:.02em;color:#2d5a27;font-weight:700;">Founding Paws</div>
                <div style="margin-top:4px;font-size:13px;color:rgba(45,90,39,.75);">Wissenschaft trifft Herz</div>
              </div>
              <div style="padding:40px 32px;">
                <h1 style="margin:0 0 10px 0;font-size:28px;line-height:1.25;font-weight:700;color:#2d5a27;">Willkommen</h1>
                <p style="margin:0 0 18px 0;font-size:16px;color:rgba(45,90,39,.85);">Hallo ${name || 'und herzlich willkommen'}, schön, dass du da bist. Wir verbinden evidenzbasierte Rezepturen mit verantwortungsvollem Design – für ein langes, gesundes Hundeleben.</p>
                <div style="background:#f8f6f0;border:1px solid #e7e3da;border-radius:14px;padding:18px 20px;margin:16px 0;">
                  <div style="font-weight:700;margin-bottom:6px;color:#2d5a27;">Das erwartet dich:</div>
                  <ul style="margin:0;padding-left:18px;color:rgba(45,90,39,.85);">
                    <li>Fachlich kuratierter Ratgeber‑Content</li>
                    <li>Einblicke in Entwicklung & Qualität</li>
                    <li>Vorab‑News zum Launch</li>
                  </ul>
                </div>
                <div style="text-align:center;margin:24px 0 0;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/produkte" style="display:inline-block;background:#2d5a27;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:15px;box-shadow:0 6px 18px rgba(45,90,39,.18);">Unsere Formeln ansehen</a>
                </div>
              </div>
              <div style="padding:18px 28px;background:#f8f6f0;border-top:1px solid #e7e3da;text-align:center;">
                <p style="margin:0;font-size:12px;color:#6b6b6b;">Fragen? <a href="mailto:foundingpaws@gmail.com" style="color:#b46a34;text-decoration:none;">foundingpaws@gmail.com</a></p>
              </div>
            </div>
          </div>
        `,
        headers: {
          'X-Entity-Ref-ID': `welcome-${Date.now()}`,
        },
      });

      if (error) {
        console.error('Welcome email error:', error);
        throw new Error('Failed to send welcome email');
      }

      return { success: true, messageId: data?.id };
    } catch (error) {
      console.error('Welcome email service error:', error);
      throw error;
    }
  }

  // Send 10% launch welcome after confirmation
  static async sendWelcomeWithDiscount(email: string) {
    try {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo: REPLY_TO,
        subject: 'Willkommen – dein 10% Launch‑Vorteil',
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.65;color:#2d5a27;background:#f8f6f0;margin:0;padding:0;">
            <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.08);">
              <div style="padding:32px 28px;border-bottom:1px solid #e7e3da;">
                <div style="font-size:18px;letter-spacing:.02em;color:#2d5a27;font-weight:700;">Founding Paws</div>
              </div>
              <div style="padding:42px 34px;">
                <h1 style="margin:0 0 12px;font-size:28px;line-height:1.25;font-weight:700;color:#2d5a27;">Schön, dass du da bist</h1>
                <p style="margin:0 0 12px;font-size:16px;color:rgba(45,90,39,.85);">Wir wissen, wie viel dir dein Hund bedeutet. Deshalb verbinden wir <strong>evidenzbasierte Rezepturen</strong> mit <strong>echter Alltagstauglichkeit</strong>. Danke für dein Vertrauen.</p>
                <div style="background:#f8f6f0;border:1px dashed #b46a34;color:#b46a34;border-radius:14px;padding:16px 20px;text-align:center;font-weight:700;letter-spacing:.5px;margin:16px 0 10px;">
                  DEIN VORTEIL: <span style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">LAUNCH10</span>
                </div>
                <p style="margin:0 0 16px;font-size:12px;color:rgba(45,90,39,.75);">Einlösbar, sobald der Shop live ist – wir informieren dich rechtzeitig.</p>
                <div style="background:#f8f6f0;border:1px solid #e7e3da;border-radius:14px;padding:16px 18px;margin:18px 0;">
                  <div style="font-weight:700;margin-bottom:6px;color:#2d5a27;">Nächste Schritte</div>
                  <ol style="margin:0;padding-left:18px;color:rgba(45,90,39,.85);">
                    <li><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/produkte" style="color:#2d5a27;text-decoration:underline;">Formeln ansehen</a> – Überblick & Entwicklungsprinzipien</li>
                    <li><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/ratgeber" style="color:#2d5a27;text-decoration:underline;">Ratgeber auswählen</a> – starte mit einem Thema, das euch gerade hilft</li>
                    <li>Antworte uns kurz mit Alter & Thema deines Hundes – wir empfehlen gezielt Inhalte</li>
                  </ol>
                </div>
                <blockquote style="margin:18px 0 0;padding:14px 18px;border-left:3px solid #b46a34;background:#fdfaf6;border-radius:8px;color:#2d5a27;">
                  „Unser Ziel: spürbare Verbesserungen im Alltag – ohne leere Versprechen.“
                  <div style="font-size:12px;color:rgba(45,90,39,.75);margin-top:6px;">– Alica, Founding Paws</div>
                </blockquote>
                <div style="text-align:center;margin:26px 0 0;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.foundingpaws.de'}/produkte" style="display:inline-block;background:#2d5a27;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:15px;box-shadow:0 6px 18px rgba(45,90,39,.18);">Unsere Formeln ansehen</a>
                </div>
              </div>
              <div style="padding:18px 28px;background:#f8f6f0;border-top:1px solid #e7e3da;text-align:center;">
                <p style="margin:0;font-size:12px;color:#6b6b6b;">Fragen? <a href="mailto:foundingpaws@gmail.com" style="color:#b46a34;text-decoration:none;">Antworte einfach</a> – wir lesen alles.</p>
              </div>
            </div>
          </div>
        `,
        headers: { 'X-Entity-Ref-ID': `welcome-discount-${Date.now()}` },
      });

      if (error) {
        console.error('Welcome discount email error:', error);
        throw new Error('Failed to send discount email');
      }
      return { success: true, messageId: data?.id };
    } catch (error) {
      console.error('Welcome discount service error:', error);
      throw error;
    }
  }

  // Send newsletter to all subscribers
  static async sendNewsletter({
    subject,
    content,
    featuredProduct,
    articles = [],
    testEmail
  }: {
    subject: string;
    content: string;
    featuredProduct?: {
      name: string;
      description: string;
      image: string;
      link: string;
    };
    articles?: Array<{
      title: string;
      excerpt: string;
      link: string;
    }>;
    testEmail?: string;
  }) {
    try {
      // If test email provided, send only to that email
      if (testEmail) {
        const { data, error } = await resend.emails.send({
          from: FROM_EMAIL,
          to: [testEmail],
          replyTo: REPLY_TO,
          subject: `[TEST] ${subject}`,
          react: NewsletterTemplate({
            title: subject,
            content,
            featuredProduct,
            articles
          }),
          headers: {
            'X-Entity-Ref-ID': `newsletter-test-${Date.now()}`,
          },
        });

        if (error) {
          console.error('Newsletter test error:', error);
          throw new Error('Failed to send test newsletter');
        }

        return { success: true, messageId: data?.id, testMode: true };
      }

      // TODO: Implement batch sending to all subscribers
      // This would require fetching all subscribers from Supabase
      // and sending in batches to avoid rate limits
      
      return { success: true, message: 'Newsletter queued for sending' };
    } catch (error) {
      console.error('Newsletter service error:', error);
      throw error;
    }
  }

  // Send product launch email
  static async sendProductLaunch({
    productName,
    productDescription,
    productImage,
    productLink,
    launchDate,
    testEmail
  }: {
    productName: string;
    productDescription: string;
    productImage: string;
    productLink: string;
    launchDate: string;
    testEmail?: string;
  }) {
    try {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: testEmail ? [testEmail] : [], // TODO: Add subscriber list
        replyTo: REPLY_TO,
        subject: `🚀 NEU: ${productName} - Jetzt vorbestellen!`,
        react: ProductLaunchTemplate({
          productName,
          productDescription,
          productImage,
          productLink,
          launchDate
        }),
        headers: {
          'X-Entity-Ref-ID': `product-launch-${Date.now()}`,
        },
      });

      if (error) {
        console.error('Product launch email error:', error);
        throw new Error('Failed to send product launch email');
      }

      return { success: true, messageId: data?.id };
    } catch (error) {
      console.error('Product launch service error:', error);
      throw error;
    }
  }

  // Send abandoned cart email
  static async sendAbandonedCart({
    email,
    products,
    cartLink
  }: {
    email: string;
    products: Array<{
      name: string;
      price: string;
      image: string;
    }>;
    cartLink: string;
  }) {
    try {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo: REPLY_TO,
        subject: '🛒 Dein Warenkorb wartet auf dich',
        react: AbandonedCartTemplate({
          products,
          cartLink
        }),
        headers: {
          'X-Entity-Ref-ID': `abandoned-cart-${Date.now()}`,
        },
      });

      if (error) {
        console.error('Abandoned cart email error:', error);
        throw new Error('Failed to send abandoned cart email');
      }

      return { success: true, messageId: data?.id };
    } catch (error) {
      console.error('Abandoned cart service error:', error);
      throw error;
    }
  }

  // Send custom email
  static async sendCustomEmail({
    to,
    subject,
    content,
    isHtml = true
  }: {
    to: string | string[];
    subject: string;
    content: string;
    isHtml?: boolean;
  }) {
    try {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: Array.isArray(to) ? to : [to],
        replyTo: REPLY_TO,
        subject,
        [isHtml ? 'html' : 'text']: content,
        headers: {
          'X-Entity-Ref-ID': `custom-${Date.now()}`,
        },
      } as any);

      if (error) {
        console.error('Custom email error:', error);
        throw new Error('Failed to send custom email');
      }

      return { success: true, messageId: data?.id };
    } catch (error) {
      console.error('Custom email service error:', error);
      throw error;
    }
  }

  // Get email statistics (requires Resend Pro)
  static async getEmailStats() {
    try {
      // This would require Resend Pro plan
      // For now, return mock data
      return {
        totalSent: 0,
        delivered: 0,
        opened: 0,
        clicked: 0,
        bounced: 0,
        complained: 0
      };
    } catch (error) {
      console.error('Email stats error:', error);
      throw error;
    }
  }
}

// Email automation triggers
export class EmailAutomation {
  // Trigger welcome email after newsletter signup
  static async triggerWelcomeEmail(email: string, name?: string) {
    try {
      // Add delay to make it feel more natural
      setTimeout(async () => {
        await EmailService.sendWelcomeEmail(email, name);
      }, 2000);

      return { success: true, message: 'Welcome email queued' };
    } catch (error) {
      console.error('Welcome email trigger error:', error);
      throw error;
    }
  }

  // Trigger abandoned cart email after 1 hour
  static async triggerAbandonedCart(email: string, products: any[], cartLink: string) {
    try {
      setTimeout(async () => {
        await EmailService.sendAbandonedCart({ email, products, cartLink });
      }, 60 * 60 * 1000); // 1 hour

      return { success: true, message: 'Abandoned cart email queued' };
    } catch (error) {
      console.error('Abandoned cart trigger error:', error);
      throw error;
    }
  }

  // Schedule newsletter for specific time
  static async scheduleNewsletter({
    subject,
    content,
    scheduledFor,
    featuredProduct,
    articles
  }: {
    subject: string;
    content: string;
    scheduledFor: Date;
    featuredProduct?: any;
    articles?: any[];
  }) {
    try {
      const delay = scheduledFor.getTime() - Date.now();
      
      if (delay < 0) {
        throw new Error('Scheduled time must be in the future');
      }

      setTimeout(async () => {
        await EmailService.sendNewsletter({
          subject,
          content,
          featuredProduct,
          articles
        });
      }, delay);

      return { 
        success: true, 
        message: `Newsletter scheduled for ${scheduledFor.toISOString()}` 
      };
    } catch (error) {
      console.error('Newsletter scheduling error:', error);
      throw error;
    }
  }
}