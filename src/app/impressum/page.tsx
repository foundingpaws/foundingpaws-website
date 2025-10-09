import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                Rechtliche Informationen
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Impressum
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Angaben gemäß § 5 TMG und § 55 RStV
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ScrollAnimation>
                  <div className="prose prose-lg max-w-none">
                    {/* Unternehmensdaten */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">Unternehmensdaten</h2>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-copper pl-6">
                          <h3 className="wv-h3 text-green wv-spacing-sm">Firmenname</h3>
                          <p className="wv-body text-green/80">
                            <strong>Founding Paws</strong><br />
                            Einzelunternehmen
                          </p>
                        </div>

                        <div className="border-l-4 border-copper pl-6">
                          <h3 className="wv-h3 text-green wv-spacing-sm">Anschrift</h3>
                          <p className="wv-body text-green/80">
                            Eppendorfer Weg<br />
                            20259 Hamburg<br />
                            Deutschland
                          </p>
                        </div>

                        <div className="border-l-4 border-copper pl-6">
                          <h3 className="wv-h3 text-green wv-spacing-sm">Geschäftsführung</h3>
                          <p className="wv-body text-green/80">
                            Alica Szabries<br />
                            Nick Herbig
                          </p>
                        </div>

                        <div className="border-l-4 border-copper pl-6">
                          <h3 className="wv-h3 text-green wv-spacing-sm">Kontakt</h3>
                          <p className="wv-body text-green/80">
                            E-Mail: <a href="mailto:foundingpaws@gmail.com" className="text-copper hover:text-copper/80 transition-colors font-medium">foundingpaws@gmail.com</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Rechtliche Hinweise */}
                    <div className="bg-gradient-to-br from-green/5 to-copper/5 rounded-2xl p-8 border border-green/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">Rechtliche Hinweise</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Verantwortlich für den Inhalt</h3>
                          <p className="wv-body text-green/80">
                            Gemäß § 55 Abs. 2 RStV verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: 
                            Alica Szabries und Nick Herbig
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Umsatzsteuer-ID</h3>
                          <p className="wv-body text-green/80">
                            Kleinunternehmerregelung nach § 19 UStG<br />
                            Umsatzsteuer wird nicht ausgewiesen.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Berufsbezeichnung</h3>
                          <p className="wv-body text-green/80">
                            Tierernährung und Supplement-Entwicklung<br />
                            Verliehen in: Deutschland
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Haftungsausschluss */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">Haftungsausschluss</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Haftung für Inhalte</h3>
                          <p className="wv-body text-green/80">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Haftung für Links</h3>
                          <p className="wv-body text-green/80">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Urheberrecht</h3>
                          <p className="wv-body text-green/80">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Datenschutz */}
                    <div className="bg-gradient-to-br from-copper/5 to-green/5 rounded-2xl p-8 border border-copper/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">Datenschutz</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Datenschutzerklärung</h3>
                          <p className="wv-body text-green/80">
                            Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Cookies</h3>
                          <p className="wv-body text-green/80">
                            Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                          </p>
                        </div>

                        <div className="bg-white/50 p-4 rounded-xl">
                          <p className="wv-body text-green/80 text-sm">
                            <strong>Hinweis:</strong> Die vollständige Datenschutzerklärung finden Sie unter 
                            <Link href="/datenschutz" className="text-copper hover:text-copper/80 transition-colors font-medium"> Datenschutz</Link>.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Streitschlichtung */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">Streitschlichtung</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">EU-Streitschlichtung</h3>
                          <p className="wv-body text-green/80">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper/80 transition-colors font-medium"> https://ec.europa.eu/consumers/odr/</a>
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Verbraucherstreitbeilegung</h3>
                          <p className="wv-body text-green/80">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Aktualität */}
                    <div className="bg-gradient-to-r from-green/10 to-copper/10 rounded-2xl p-6 border border-green/20 wv-spacing-lg">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">📅</div>
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Stand der Informationen</h3>
                          <p className="wv-body text-green/80">
                            Diese Impressumsangaben wurden zuletzt am 15. Januar 2025 aktualisiert. 
                            Wir behalten uns vor, die Inhalte jederzeit und ohne vorherige Ankündigung zu ändern.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Quick Links */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Rechtliche Dokumente</h3>
                    <nav className="space-y-3 mt-4">
                      <Link href="/datenschutz" className="block text-sm text-green/70 hover:text-copper transition-colors">
                        📄 Datenschutzerklärung
                      </Link>
                      <Link href="/agb" className="block text-sm text-green/70 hover:text-copper transition-colors">
                        📋 Allgemeine Geschäftsbedingungen
                      </Link>
                      <Link href="/widerruf" className="block text-sm text-green/70 hover:text-copper transition-colors">
                        ↩️ Widerrufsrecht
                      </Link>
                    </nav>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-gradient-to-br from-copper/10 to-green/10 p-6 rounded-xl border border-copper/20">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Kontakt</h3>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center gap-3">
                        <div className="text-copper">📧</div>
                        <a href="mailto:foundingpaws@gmail.com" className="text-sm text-green/80 hover:text-copper transition-colors">
                          foundingpaws@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-copper">📍</div>
                        <span className="text-sm text-green/80">
                          Hamburg, Deutschland
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Legal Notice */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Rechtlicher Hinweis</h3>
                    <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                      Dieses Impressum wurde nach bestem Wissen und Gewissen erstellt. 
                      Bei rechtlichen Fragen wenden Sie sich bitte an einen Fachanwalt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="wv-h2 wv-spacing-sm" style={{color: 'white'}}>
                Haben Sie Fragen?
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-2xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Wir stehen Ihnen gerne für rechtliche Fragen oder allgemeine Anfragen zur Verfügung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center wv-spacing-md">
                <a href="mailto:foundingpaws@gmail.com" className="btn-primary pill text-cream px-8 py-4 font-medium">
                  E-Mail senden
                </a>
                <Link href="/kontakt" className="btn-secondary pill text-cream px-8 py-4 font-medium">
                  Kontaktformular
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}