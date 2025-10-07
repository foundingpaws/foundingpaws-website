import React from 'react';

// Base Email Template Component
export const BaseEmailTemplate = ({ 
  children, 
  title 
}: { 
  children: React.ReactNode; 
  title: string;
}) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #2d5a27;
          background-color: #f8f6f0;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #2d5a27 0%, #1e3d1a 100%);
          padding: 40px 30px;
          text-align: center;
          color: #ffffff;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #ffffff;
        }
        .tagline {
          font-size: 14px;
          opacity: 0.9;
          margin: 0;
        }
        .content {
          padding: 40px 30px;
        }
        .footer {
          background-color: #f8f6f0;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #e5e5e5;
        }
        .footer-text {
          font-size: 12px;
          color: #666666;
          margin: 0;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #b46a34 0%, #9d5a2a 100%);
          color: #ffffff;
          text-decoration: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: bold;
          font-size: 16px;
          margin: 20px 0;
          box-shadow: 0 4px 15px rgba(180, 106, 52, 0.3);
          transition: all 0.3s ease;
        }
        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(180, 106, 52, 0.4);
        }
        .divider {
          height: 2px;
          background: linear-gradient(90deg, #b46a34, #2d5a27);
          margin: 30px 0;
          border-radius: 1px;
        }
        .highlight-box {
          background: linear-gradient(135deg, #f8f6f0 0%, #e8e4d8 100%);
          border-left: 4px solid #b46a34;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-link {
          display: inline-block;
          margin: 0 10px;
          color: #b46a34;
          text-decoration: none;
          font-weight: bold;
        }
        @media (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          .header, .content, .footer {
            padding: 20px;
          }
          .button {
            display: block;
            text-align: center;
            margin: 20px auto;
          }
        }
      `}</style>
    </head>
    <body>
      <div className="email-container">
        <div className="header">
          <div className="logo">🐾 Founding Paws</div>
          <p className="tagline">Wissenschaft trifft Herz</p>
        </div>
        <div className="content">
          {children}
        </div>
        <div className="footer">
          <div className="social-links">
            <a href="https://www.instagram.com/foundingpaws" className="social-link">Instagram</a>
            <a href="https://www.linkedin.com/company/founding-paws" className="social-link">LinkedIn</a>
            <a href="https://www.tiktok.com/@foundingpaws1" className="social-link">TikTok</a>
          </div>
          <p className="footer-text">
            Founding Paws • Eppendorfer Weg, Hamburg<br/>
            <a href="mailto:foundingpaws@gmail.com" style={{color: '#b46a34'}}>foundingpaws@gmail.com</a><br/>
            <a href="https://foundingpaws.de/datenschutz" style={{color: '#666666'}}>Datenschutz</a> • 
            <a href="https://foundingpaws.de/agb" style={{color: '#666666'}}>AGB</a> • 
            <a href="https://foundingpaws.de/abmelden" style={{color: '#666666'}}>Abmelden</a>
          </p>
        </div>
      </div>
    </body>
  </html>
);

// Welcome Email Template
export const WelcomeEmailTemplate = ({ 
  name = "Liebe/r Hundefreund/in" 
}: { 
  name?: string;
}) => (
  <BaseEmailTemplate title="Willkommen bei Founding Paws!">
    <h1 style={{color: '#2d5a27', marginTop: 0}}>Willkommen in der Founding Paws Familie! 🎉</h1>
    
    <p>Hallo {name},</p>
    
    <p>herzlich willkommen bei Founding Paws! Wir freuen uns riesig, dass du Teil unserer Mission geworden bist, Hunden ein gesünderes und glücklicheres Leben zu ermöglichen.</p>
    
    <div className="highlight-box">
      <h3 style={{color: '#2d5a27', marginTop: 0}}>Was dich erwartet:</h3>
      <ul style={{margin: '10px 0', paddingLeft: '20px'}}>
        <li>📚 <strong>Exklusive Tipps</strong> zur Hundegesundheit von Experten</li>
        <li>🔬 <strong>Wissenschaftliche Erkenntnisse</strong> aus der Veterinärmedizin</li>
        <li>🎁 <strong>Früher Zugang</strong> zu neuen Produkten und Angeboten</li>
        <li>💝 <strong>Spezielle Rabatte</strong> nur für Newsletter-Abonnenten</li>
      </ul>
    </div>
    
    <p>Unsere Supplements werden von Tierärzten entwickelt und basieren auf neuesten wissenschaftlichen Erkenntnissen. Jede Zutat ist sorgfältig ausgewählt, um deinem Hund optimal zu helfen.</p>
    
    <div style={{textAlign: 'center', margin: '30px 0'}}>
      <a href="https://foundingpaws.de/produkte" className="button">
        Entdecke unsere Produkte
      </a>
    </div>
    
    <div className="divider"></div>
    
    <p><strong>Dein nächster Schritt:</strong> Folge uns auf Instagram für tägliche Tipps und schaue dir unseren Ratgeber an, wo du alles über Hundegesundheit erfährst.</p>
    
    <p>Bei Fragen stehen wir dir jederzeit zur Verfügung!</p>
    
    <p>Herzliche Grüße,<br/>
    <strong>Das Founding Paws Team</strong><br/>
    <em>Nala, Jackson, Alica & Nick</em></p>
  </BaseEmailTemplate>
);

// Newsletter Template
export const NewsletterTemplate = ({ 
  title,
  content,
  featuredProduct,
  articles = []
}: {
  title: string;
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
}) => (
  <BaseEmailTemplate title={title}>
    <h1 style={{color: '#2d5a27', marginTop: 0}}>{title}</h1>
    
    <div dangerouslySetInnerHTML={{ __html: content }} />
    
    {featuredProduct && (
      <div className="highlight-box">
        <h3 style={{color: '#2d5a27', marginTop: 0}}>🌟 Produkt des Monats</h3>
        <h4 style={{color: '#b46a34'}}>{featuredProduct.name}</h4>
        <p>{featuredProduct.description}</p>
        <div style={{textAlign: 'center'}}>
          <a href={featuredProduct.link} className="button">
            Jetzt entdecken
          </a>
        </div>
      </div>
    )}
    
    {articles.length > 0 && (
      <div>
        <h3 style={{color: '#2d5a27'}}>📚 Aus unserem Ratgeber</h3>
        {articles.map((article, index) => (
          <div key={index} style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f8f6f0', borderRadius: '8px'}}>
            <h4 style={{color: '#2d5a27', margin: '0 0 10px 0'}}>{article.title}</h4>
            <p style={{margin: '0 0 10px 0', color: '#666'}}>{article.excerpt}</p>
            <a href={article.link} style={{color: '#b46a34', textDecoration: 'none', fontWeight: 'bold'}}>
              Artikel lesen →
            </a>
          </div>
        ))}
      </div>
    )}
    
    <div className="divider"></div>
    
    <p style={{textAlign: 'center', fontSize: '14px', color: '#666'}}>
      <strong>Teile diese E-Mail mit anderen Hundefreunden!</strong><br/>
      Je mehr Hunde gesund bleiben, desto besser! 🐾
    </p>
  </BaseEmailTemplate>
);

// Product Launch Email Template
export const ProductLaunchTemplate = ({ 
  productName,
  productDescription,
  productImage,
  productLink,
  launchDate
}: {
  productName: string;
  productDescription: string;
  productImage: string;
  productLink: string;
  launchDate: string;
}) => (
  <BaseEmailTemplate title={`Neues Produkt: ${productName}`}>
    <div style={{textAlign: 'center', marginBottom: '30px'}}>
      <h1 style={{color: '#2d5a27', marginTop: 0, fontSize: '32px'}}>🚀 NEU!</h1>
      <h2 style={{color: '#b46a34', margin: '10px 0'}}>{productName}</h2>
      <p style={{fontSize: '18px', color: '#666'}}>Ab {launchDate} verfügbar</p>
    </div>
    
    <div style={{textAlign: 'center', margin: '30px 0'}}>
      <img 
        src={productImage} 
        alt={productName}
        style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)'}}
      />
    </div>
    
    <div className="highlight-box">
      <h3 style={{color: '#2d5a27', marginTop: 0}}>Was macht {productName} besonders?</h3>
      <p style={{fontSize: '16px', lineHeight: '1.6'}}>{productDescription}</p>
    </div>
    
    <div style={{textAlign: 'center', margin: '30px 0'}}>
      <a href={productLink} className="button">
        Jetzt vorbestellen
      </a>
    </div>
    
    <div className="divider"></div>
    
    <p><strong>Exklusiv für Newsletter-Abonnenten:</strong> Du erhältst 15% Rabatt auf deine erste Bestellung! Verwende den Code <strong>NEWSLETTER15</strong> beim Checkout.</p>
    
    <p>Diese E-Mail ist nur für unsere treuen Newsletter-Abonnenten. Danke, dass du Teil der Founding Paws Familie bist! 💚</p>
  </BaseEmailTemplate>
);

// Abandoned Cart Email Template
export const AbandonedCartTemplate = ({ 
  products,
  cartLink
}: {
  products: Array<{
    name: string;
    price: string;
    image: string;
  }>;
  cartLink: string;
}) => (
  <BaseEmailTemplate title="Dein Warenkorb wartet auf dich">
    <h1 style={{color: '#2d5a27', marginTop: 0}}>Hast du etwas vergessen? 🤔</h1>
    
    <p>Wir haben bemerkt, dass du tolle Produkte in deinen Warenkorb gelegt hast, aber den Kauf noch nicht abgeschlossen hast.</p>
    
    <div className="highlight-box">
      <h3 style={{color: '#2d5a27', marginTop: 0}}>Deine ausgewählten Produkte:</h3>
      {products.map((product, index) => (
        <div key={index} style={{display: 'flex', alignItems: 'center', marginBottom: '15px', padding: '10px', backgroundColor: '#fff', borderRadius: '8px'}}>
          <img src={product.image} alt={product.name} style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px', marginRight: '15px'}} />
          <div>
            <h4 style={{margin: '0 0 5px 0', color: '#2d5a27'}}>{product.name}</h4>
            <p style={{margin: '0', color: '#b46a34', fontWeight: 'bold'}}>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div style={{textAlign: 'center', margin: '30px 0'}}>
      <a href={cartLink} className="button">
        Kauf jetzt abschließen
      </a>
    </div>
    
    <p><strong>Warum jetzt kaufen?</strong></p>
    <ul style={{paddingLeft: '20px'}}>
      <li>✅ <strong>Kostenloser Versand</strong> ab 50€</li>
      <li>✅ <strong>30 Tage Rückgaberecht</strong></li>
      <li>✅ <strong>Laborgeprüfte Qualität</strong></li>
      <li>✅ <strong>Von Tierärzten entwickelt</strong></li>
    </ul>
    
    <div className="divider"></div>
    
    <p style={{textAlign: 'center', fontSize: '14px', color: '#666'}}>
      Diese E-Mail wird nur einmal gesendet. Dein Warenkorb wird in 24 Stunden geleert.
    </p>
  </BaseEmailTemplate>
);
