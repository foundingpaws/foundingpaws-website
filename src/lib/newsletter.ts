// Newsletter integration with email service
interface NewsletterSubscriber {
  email: string;
  firstName?: string;
  lastName?: string;
  interests: string[];
  subscribedAt: number;
  status: 'active' | 'unsubscribed' | 'pending';
  source: string;
  preferences: {
    frequency: 'weekly' | 'monthly' | 'quarterly';
    categories: string[];
    language: 'de' | 'en';
  };
}

interface NewsletterCampaign {
  id: string;
  subject: string;
  content: string;
  scheduledAt: number;
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed';
  recipients: number;
  opens: number;
  clicks: number;
}

interface NewsletterTemplate {
  id: string;
  name: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  variables: string[];
}

class NewsletterManager {
  private apiEndpoint = '/api/newsletter';
  private subscribers: Map<string, NewsletterSubscriber> = new Map();
  private campaigns: Map<string, NewsletterCampaign> = new Map();
  private templates: Map<string, NewsletterTemplate> = new Map();

  constructor() {
    this.initializeTemplates();
  }

  private initializeTemplates(): void {
    // Welcome email template
    this.templates.set('welcome', {
      id: 'welcome',
      name: 'Welcome Email',
      subject: 'Willkommen bei Founding Paws! 🐾',
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2d5016;">Willkommen bei Founding Paws!</h1>
          <p>Hallo {{firstName}},</p>
          <p>Vielen Dank, dass Sie sich für unseren Newsletter angemeldet haben! Sie erhalten jetzt regelmäßig:</p>
          <ul>
            <li>📚 Tipps für die Gesundheit Ihres Hundes</li>
            <li>🔬 Neueste Erkenntnisse aus der Veterinärmedizin</li>
            <li>🎁 Exklusive Angebote und Rabatte</li>
            <li>📖 Rezepte und Anleitungen</li>
          </ul>
          <p>Mit herzlichen Grüßen,<br>Das Founding Paws Team</p>
        </div>
      `,
      textContent: `
        Willkommen bei Founding Paws!
        
        Hallo {{firstName}},
        
        Vielen Dank, dass Sie sich für unseren Newsletter angemeldet haben! Sie erhalten jetzt regelmäßig:
        - Tipps für die Gesundheit Ihres Hundes
        - Neueste Erkenntnisse aus der Veterinärmedizin
        - Exklusive Angebote und Rabatte
        - Rezepte und Anleitungen
        
        Mit herzlichen Grüßen,
        Das Founding Paws Team
      `,
      variables: ['firstName', 'lastName'],
    });

    // Product update template
    this.templates.set('product-update', {
      id: 'product-update',
      name: 'Product Update',
      subject: 'Neue Produkte bei Founding Paws! 🆕',
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2d5016;">Neue Produkte entdecken</h1>
          <p>Hallo {{firstName}},</p>
          <p>Wir haben neue Ergänzungen für Ihren Hund entwickelt! Schauen Sie sich unsere neuesten Produkte an:</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>{{productName}}</h3>
            <p>{{productDescription}}</p>
            <a href="{{productUrl}}" style="background: #2d5016; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Jetzt entdecken</a>
          </div>
          <p>Mit herzlichen Grüßen,<br>Das Founding Paws Team</p>
        </div>
      `,
      textContent: `
        Neue Produkte entdecken
        
        Hallo {{firstName}},
        
        Wir haben neue Ergänzungen für Ihren Hund entwickelt! Schauen Sie sich unsere neuesten Produkte an:
        
        {{productName}}
        {{productDescription}}
        
        Jetzt entdecken: {{productUrl}}
        
        Mit herzlichen Grüßen,
        Das Founding Paws Team
      `,
      variables: ['firstName', 'productName', 'productDescription', 'productUrl'],
    });
  }

  public async subscribe(
    email: string,
    options: {
      firstName?: string;
      lastName?: string;
      interests?: string[];
      source?: string;
      preferences?: Partial<NewsletterSubscriber['preferences']>;
    } = {}
  ): Promise<{ success: boolean; message: string; subscriber?: NewsletterSubscriber }> {
    try {
      // Validate email
      if (!this.isValidEmail(email)) {
        return { success: false, message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' };
      }

      // Check if already subscribed
      if (this.subscribers.has(email)) {
        const existing = this.subscribers.get(email)!;
        if (existing.status === 'active') {
          return { success: false, message: 'Diese E-Mail-Adresse ist bereits angemeldet.' };
        }
      }

      // Create subscriber
      const subscriber: NewsletterSubscriber = {
        email,
        firstName: options.firstName,
        lastName: options.lastName,
        interests: options.interests || [],
        subscribedAt: Date.now(),
        status: 'pending',
        source: options.source || 'website',
        preferences: {
          frequency: 'weekly',
          categories: ['gesundheit', 'ernährung', 'produkte'],
          language: 'de',
          ...options.preferences,
        },
      };

      // Save subscriber
      this.subscribers.set(email, subscriber);

      // Send welcome email
      await this.sendWelcomeEmail(subscriber);

      // Update status to active
      subscriber.status = 'active';
      this.subscribers.set(email, subscriber);

      return {
        success: true,
        message: 'Sie haben sich erfolgreich für unseren Newsletter angemeldet!',
        subscriber,
      };
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      return { success: false, message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' };
    }
  }

  public async unsubscribe(email: string): Promise<{ success: boolean; message: string }> {
    try {
      if (!this.subscribers.has(email)) {
        return { success: false, message: 'Diese E-Mail-Adresse ist nicht in unserem System registriert.' };
      }

      const subscriber = this.subscribers.get(email)!;
      subscriber.status = 'unsubscribed';
      this.subscribers.set(email, subscriber);

      return { success: true, message: 'Sie haben sich erfolgreich vom Newsletter abgemeldet.' };
    } catch (error) {
      console.error('Error unsubscribing from newsletter:', error);
      return { success: false, message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' };
    }
  }

  public async updatePreferences(
    email: string,
    preferences: Partial<NewsletterSubscriber['preferences']>
  ): Promise<{ success: boolean; message: string }> {
    try {
      if (!this.subscribers.has(email)) {
        return { success: false, message: 'Diese E-Mail-Adresse ist nicht in unserem System registriert.' };
      }

      const subscriber = this.subscribers.get(email)!;
      subscriber.preferences = { ...subscriber.preferences, ...preferences };
      this.subscribers.set(email, subscriber);

      return { success: true, message: 'Ihre Einstellungen wurden aktualisiert.' };
    } catch (error) {
      console.error('Error updating newsletter preferences:', error);
      return { success: false, message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' };
    }
  }

  public getSubscriber(email: string): NewsletterSubscriber | undefined {
    return this.subscribers.get(email);
  }

  public getAllSubscribers(): NewsletterSubscriber[] {
    return Array.from(this.subscribers.values());
  }

  public getActiveSubscribers(): NewsletterSubscriber[] {
    return Array.from(this.subscribers.values()).filter(s => s.status === 'active');
  }

  public getSubscriberCount(): number {
    return this.subscribers.size;
  }

  public getActiveSubscriberCount(): number {
    return this.getActiveSubscribers().length;
  }

  private async sendWelcomeEmail(subscriber: NewsletterSubscriber): Promise<void> {
    const template = this.templates.get('welcome');
    if (!template) return;

    const subject = this.replaceVariables(template.subject, subscriber);
    const htmlContent = this.replaceVariables(template.htmlContent, subscriber);
    const textContent = this.replaceVariables(template.textContent, subscriber);

    // In production, you would send this via your email service
    console.log('Sending welcome email:', { email: subscriber.email, subject });
    
    // Mock API call
    await this.sendEmail({
      to: subscriber.email,
      subject,
      htmlContent,
      textContent,
    });
  }

  private async sendEmail(emailData: {
    to: string;
    subject: string;
    htmlContent: string;
    textContent: string;
  }): Promise<void> {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'send',
          ...emailData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Email sending failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  private replaceVariables(content: string, subscriber: NewsletterSubscriber): string {
    return content
      .replace(/\{\{firstName\}\}/g, subscriber.firstName || '')
      .replace(/\{\{lastName\}\}/g, subscriber.lastName || '')
      .replace(/\{\{email\}\}/g, subscriber.email);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public async createCampaign(
    subject: string,
    content: string,
    scheduledAt?: number
  ): Promise<{ success: boolean; campaignId?: string; message: string }> {
    try {
      const campaignId = `campaign_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const activeSubscribers = this.getActiveSubscribers();
      
      const campaign: NewsletterCampaign = {
        id: campaignId,
        subject,
        content,
        scheduledAt: scheduledAt || Date.now(),
        status: 'draft',
        recipients: activeSubscribers.length,
        opens: 0,
        clicks: 0,
      };

      this.campaigns.set(campaignId, campaign);

      return {
        success: true,
        campaignId,
        message: 'Kampagne erfolgreich erstellt.',
      };
    } catch (error) {
      console.error('Error creating campaign:', error);
      return { success: false, message: 'Fehler beim Erstellen der Kampagne.' };
    }
  }

  public getCampaigns(): NewsletterCampaign[] {
    return Array.from(this.campaigns.values());
  }

  public getTemplates(): NewsletterTemplate[] {
    return Array.from(this.templates.values());
  }

  public getStats(): {
    totalSubscribers: number;
    activeSubscribers: number;
    unsubscribedSubscribers: number;
    totalCampaigns: number;
    averageOpenRate: number;
    averageClickRate: number;
  } {
    const subscribers = this.getAllSubscribers();
    const campaigns = this.getCampaigns();
    
    const activeSubscribers = subscribers.filter(s => s.status === 'active').length;
    const unsubscribedSubscribers = subscribers.filter(s => s.status === 'unsubscribed').length;
    
    const totalOpens = campaigns.reduce((sum, c) => sum + c.opens, 0);
    const totalClicks = campaigns.reduce((sum, c) => sum + c.clicks, 0);
    const totalRecipients = campaigns.reduce((sum, c) => sum + c.recipients, 0);
    
    const averageOpenRate = totalRecipients > 0 ? (totalOpens / totalRecipients) * 100 : 0;
    const averageClickRate = totalRecipients > 0 ? (totalClicks / totalRecipients) * 100 : 0;

    return {
      totalSubscribers: subscribers.length,
      activeSubscribers,
      unsubscribedSubscribers,
      totalCampaigns: campaigns.length,
      averageOpenRate: Math.round(averageOpenRate * 100) / 100,
      averageClickRate: Math.round(averageClickRate * 100) / 100,
    };
  }
}

// Create global instance
export const newsletterManager = new NewsletterManager();

// Export convenience functions
export const subscribeToNewsletter = (email: string, options?: Parameters<typeof newsletterManager.subscribe>[1]) => 
  newsletterManager.subscribe(email, options);
export const unsubscribeFromNewsletter = (email: string) => 
  newsletterManager.unsubscribe(email);
export const updateNewsletterPreferences = (email: string, preferences: Partial<NewsletterSubscriber['preferences']>) => 
  newsletterManager.updatePreferences(email, preferences);
export const getNewsletterSubscriber = (email: string) => 
  newsletterManager.getSubscriber(email);
export const getNewsletterStats = () => 
  newsletterManager.getStats();
