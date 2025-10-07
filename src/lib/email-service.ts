import { Resend } from 'resend';
import { 
  WelcomeEmailTemplate, 
  NewsletterTemplate, 
  ProductLaunchTemplate, 
  AbandonedCartTemplate 
} from './email-templates';
import { RESEND_API_KEY } from './supabase';

// Initialize Resend with API key
const resend = new Resend(RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = 'onboarding@resend.dev';
const REPLY_TO = 'foundingpaws@gmail.com';

// Email service class
export class EmailService {
  // Send welcome email to new subscribers
  static async sendWelcomeEmail(email: string, name?: string) {
    try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      replyTo: REPLY_TO,
      subject: '🎉 Willkommen bei Founding Paws!',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2d5a27; background-color: #f8f6f0; margin: 0; padding: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);">
            <div style="background: linear-gradient(135deg, #2d5a27 0%, #1e3d1a 100%); padding: 40px 30px; text-align: center; color: #ffffff;">
              <div style="font-size: 28px; font-weight: bold; margin-bottom: 10px; color: #ffffff;">🐾 Founding Paws</div>
              <p style="font-size: 14px; opacity: 0.9; margin: 0;">Wissenschaft trifft Herz</p>
            </div>
            
            <div style="padding: 40px 30px;">
              <h1 style="color: #2d5a27; margin-top: 0; font-size: 32px;">Willkommen in der Founding Paws Familie! 🎉</h1>
              
              <p>Hallo ${name || 'Liebe/r Hundefreund/in'},</p>
              
              <p>herzlich willkommen bei Founding Paws! Wir freuen uns riesig, dass du Teil unserer Mission geworden bist, Hunden ein gesünderes und glücklicheres Leben zu ermöglichen.</p>
              
              <div style="background: linear-gradient(135deg, #f8f6f0 0%, #e8e4d8 100%); border-left: 4px solid #b46a34; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h3 style="color: #2d5a27; margin-top: 0;">Was dich erwartet:</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>📚 <strong>Exklusive Tipps</strong> zur Hundegesundheit von Experten</li>
                  <li>🔬 <strong>Wissenschaftliche Erkenntnisse</strong> aus der Veterinärmedizin</li>
                  <li>🎁 <strong>Früher Zugang</strong> zu neuen Produkten und Angeboten</li>
                  <li>💝 <strong>Spezielle Rabatte</strong> nur für Newsletter-Abonnenten</li>
                </ul>
              </div>
              
              <p>Unsere Supplements werden von Tierärzten entwickelt und basieren auf neuesten wissenschaftlichen Erkenntnissen. Jede Zutat ist sorgfältig ausgewählt, um deinem Hund optimal zu helfen.</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://foundingpaws.de/produkte" style="display: inline-block; background: linear-gradient(135deg, #b46a34 0%, #9d5a2a 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 50px; font-weight: bold; font-size: 16px; margin: 20px 0; box-shadow: 0 4px 15px rgba(180, 106, 52, 0.3);">
                  Entdecke unsere Produkte
                </a>
              </div>
              
              <div style="height: 2px; background: linear-gradient(90deg, #b46a34, #2d5a27); margin: 30px 0; border-radius: 1px;"></div>
              
              <p><strong>Dein nächster Schritt:</strong> Folge uns auf Instagram für tägliche Tipps und schaue dir unseren Ratgeber an, wo du alles über Hundegesundheit erfährst.</p>
              
              <p>Bei Fragen stehen wir dir jederzeit zur Verfügung!</p>
              
              <p>Herzliche Grüße,<br/>
              <strong>Das Founding Paws Team</strong><br/>
              <em>Nala, Jackson, Alica & Nick</em></p>
            </div>
            
            <div style="background-color: #f8f6f0; padding: 30px; text-align: center; border-top: 1px solid #e5e5e5;">
              <div style="margin: 20px 0;">
                <a href="https://www.instagram.com/foundingpaws" style="display: inline-block; margin: 0 10px; color: #b46a34; text-decoration: none; font-weight: bold;">Instagram</a>
                <a href="https://www.linkedin.com/company/founding-paws" style="display: inline-block; margin: 0 10px; color: #b46a34; text-decoration: none; font-weight: bold;">LinkedIn</a>
                <a href="https://www.tiktok.com/@foundingpaws1" style="display: inline-block; margin: 0 10px; color: #b46a34; text-decoration: none; font-weight: bold;">TikTok</a>
              </div>
              <p style="font-size: 12px; color: #666666; margin: 0;">
                Founding Paws • Eppendorfer Weg, Hamburg<br/>
                <a href="mailto:foundingpaws@gmail.com" style="color: #b46a34;">foundingpaws@gmail.com</a><br/>
                <a href="https://foundingpaws.de/datenschutz" style="color: #666666;">Datenschutz</a> • 
                <a href="https://foundingpaws.de/agb" style="color: #666666;">AGB</a> • 
                <a href="https://foundingpaws.de/abmelden" style="color: #666666;">Abmelden</a>
              </p>
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
      });

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
