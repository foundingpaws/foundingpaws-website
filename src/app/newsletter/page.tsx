import NewsletterSignup from '@/components/NewsletterSignup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter - Founding Paws',
  description: 'Melde dich für unseren Newsletter an und erhalte exklusive Tipps zur Hundegesundheit, wissenschaftliche Erkenntnisse und spezielle Angebote.',
  openGraph: {
    title: 'Newsletter - Founding Paws',
    description: 'Melde dich für unseren Newsletter an und erhalte exklusive Tipps zur Hundegesundheit.',
  },
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="container-wide py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block pill bg-copper/15 border border-copper/25 px-5 py-2 wv-eyebrow mb-6 text-copper">
              Newsletter
            </div>
            <h1 className="wv-h1 mb-6 text-green">
              Bleib auf dem Laufenden 🐾
            </h1>
            <div className="w-16 h-1 bg-copper mx-auto rounded-full mb-6"></div>
            <p className="wv-subhead text-green/70 max-w-2xl mx-auto">
              Erhalte exklusive Tipps zur Hundegesundheit, wissenschaftliche Erkenntnisse aus der Veterinärmedizin und spezielle Angebote direkt in dein Postfach.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-16">
            <NewsletterSignup />
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-green mb-3">Wissenschaftliche Erkenntnisse</h3>
              <p className="text-green/70">
                Erhalte die neuesten Forschungsergebnisse aus der Veterinärmedizin und verstehe, wie unsere Supplements deinem Hund helfen.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-green mb-3">Exklusive Angebote</h3>
              <p className="text-green/70">
                Als Newsletter-Abonnent erhältst du frühen Zugang zu neuen Produkten und spezielle Rabatte nur für dich.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-green mb-3">Persönliche Tipps</h3>
              <p className="text-green/70">
                Praktische Ratschläge von Tierärzten und Experten für die Gesundheit und das Wohlbefinden deines Hundes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-green mb-3">Hinter den Kulissen</h3>
              <p className="text-green/70">
                Einblicke in unsere Produktentwicklung und die Wissenschaft hinter unseren Premium-Supplements.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-green mb-6">Häufige Fragen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-green mb-2">Wie oft erhalte ich E-Mails?</h3>
                <p className="text-green/70 text-sm">
                  Wir senden dir etwa 1-2 E-Mails pro Monat mit wertvollen Inhalten. Keine Sorge – wir spammen nicht!
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-green mb-2">Kann ich mich jederzeit abmelden?</h3>
                <p className="text-green/70 text-sm">
                  Ja, natürlich! In jeder E-Mail findest du einen Abmelde-Link. Du kannst dich jederzeit mit einem Klick abmelden.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-green mb-2">Was passiert mit meinen Daten?</h3>
                <p className="text-green/70 text-sm">
                  Deine Daten sind bei uns sicher. Wir verwenden sie nur für den Newsletter und geben sie niemals an Dritte weiter. 
                  Mehr dazu in unserer <a href="/datenschutz" className="text-copper hover:underline">Datenschutzerklärung</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
