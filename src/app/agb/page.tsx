import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function AGBPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                📋 Vertragsbedingungen
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Allgemeine Geschäftsbedingungen
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Transparente und faire Geschäftsbedingungen für unsere Kunden
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
                    {/* Einleitung */}
                    <div className="bg-gradient-to-br from-green/5 to-copper/5 rounded-2xl p-8 border border-green/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 1 Geltungsbereich</h2>
                      <p className="wv-body text-green/80 wv-spacing-md">
                        Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen der Founding Paws (Einzelunternehmen) und ihren Kunden. Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
                      </p>
                      <div className="bg-white/50 p-4 rounded-xl">
                        <p className="wv-body text-green/80 text-sm">
                          <strong>Stand:</strong> 15. Januar 2025<br />
                          <strong>Gültig ab:</strong> 15. Januar 2025
                        </p>
                      </div>
                    </div>

                    {/* Vertragspartner */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 2 Vertragspartner</h2>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-copper pl-6">
                          <h3 className="wv-h3 text-green wv-spacing-sm">Anbieter</h3>
                          <p className="wv-body text-green/80">
                            <strong>Founding Paws</strong><br />
                            Einzelunternehmen<br />
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

                    {/* Vertragsschluss */}
                    <div className="bg-gradient-to-br from-copper/5 to-green/5 rounded-2xl p-8 border border-copper/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 3 Vertragsschluss</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Angebot und Annahme</h3>
                          <p className="wv-body text-green/80 wv-spacing-sm">
                            Die auf unserer Website dargestellten Produkte stellen ein unverbindliches Angebot dar. Durch das Anklicken des "Kaufen"-Buttons geben Sie ein verbindliches Angebot zum Kauf der im Warenkorb befindlichen Waren ab.
                          </p>
                          <p className="wv-body text-green/80">
                            Wir können Ihr Angebot innerhalb von 5 Tagen durch Versendung einer Bestellbestätigung per E-Mail annehmen. Die Annahme kann auch dadurch erklärt werden, dass wir die bestellte Ware an Sie versenden.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Vertragssprache</h3>
                          <p className="wv-body text-green/80">
                            Der Vertrag wird in deutscher Sprache geschlossen. Die Vertragstexte werden von uns gespeichert und können nach Vertragsschluss nicht mehr von Ihnen abgerufen werden.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Technische Voraussetzungen</h3>
                          <p className="wv-body text-green/80">
                            Für den Vertragsschluss benötigen Sie eine gültige E-Mail-Adresse und müssen volljährig sein. Minderjährige benötigen die Einwilligung ihrer gesetzlichen Vertreter.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Preise und Zahlungsbedingungen */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 4 Preise und Zahlungsbedingungen</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Preise</h3>
                          <p className="wv-body text-green/80 wv-spacing-sm">
                            Die auf unserer Website angegebenen Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Bei Lieferungen außerhalb der Bundesrepublik Deutschland können zusätzliche Zölle, Steuern und Gebühren anfallen, die vom Kunden zu tragen sind.
                          </p>
                          <p className="wv-body text-green/80">
                            Wir behalten uns vor, die Preise zu ändern. Bereits abgeschlossene Verträge bleiben von Preiserhöhungen unberührt.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Zahlungsarten</h3>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• Kreditkarte (Visa, Mastercard, American Express)</li>
                            <li>• PayPal</li>
                            <li>• SEPA-Lastschrift</li>
                            <li>• Vorkasse (nur bei Kleinbeträgen)</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Fälligkeit</h3>
                          <p className="wv-body text-green/80">
                            Bei Zahlung per Kreditkarte oder PayPal erfolgt die Belastung sofort. Bei SEPA-Lastschrift erfolgt die Belastung spätestens 3 Werktage nach Versand. Bei Vorkasse wird die Ware erst nach Zahlungseingang versendet.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Zahlungsverzug</h3>
                          <p className="wv-body text-green/80">
                            Bei Zahlungsverzug behalten wir uns das Recht vor, die Lieferung auszusetzen oder den Vertrag zu kündigen. Verzugszinsen werden in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Lieferung und Versand */}
                    <div className="bg-gradient-to-br from-green/5 to-copper/5 rounded-2xl p-8 border border-green/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 5 Lieferung und Versand</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Liefergebiet</h3>
                          <p className="wv-body text-green/80">
                            Wir liefern innerhalb der Bundesrepublik Deutschland und in die EU. Lieferungen außerhalb der EU sind nach Rücksprache möglich. Die Versandkosten werden entsprechend angezeigt.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Lieferzeit</h3>
                          <p className="wv-body text-green/80 wv-spacing-sm">
                            Die Lieferzeit beträgt bei verfügbaren Artikeln 2-5 Werktage. Bei nicht verfügbaren Artikeln informieren wir Sie umgehend über die voraussichtliche Lieferzeit.
                          </p>
                          <p className="wv-body text-green/80">
                            Bei Lieferverzug können Sie nach erfolglosem Ablauf einer angemessenen Nachfrist vom Vertrag zurücktreten.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Versandkosten</h3>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• <strong>Deutschland:</strong> 4,95 € (kostenlos ab 50 € Bestellwert)</li>
                            <li>• <strong>EU:</strong> 9,95 € (kostenlos ab 100 € Bestellwert)</li>
                            <li>• <strong>Express-Versand:</strong> 14,95 € (1-2 Werktage)</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Lieferung und Gefahrübergang</h3>
                          <p className="wv-body text-green/80">
                            Die Ware wird an die von Ihnen angegebene Lieferadresse geliefert. Die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der Ware geht mit der Übergabe an den Spediteur auf Sie über.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Widerrufsrecht */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 6 Widerrufsrecht</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Widerrufsrecht des Verbrauchers</h3>
                          <p className="wv-body text-green/80 wv-spacing-sm">
                            Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben.
                          </p>
                          <p className="wv-body text-green/80">
                            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Founding Paws, Eppendorfer Weg, 20259 Hamburg, E-Mail: foundingpaws@gmail.com) mittels einer eindeutigen Erklärung über Ihren Entschluss, den Vertrag zu widerrufen, informieren.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Widerrufsfolgen</h3>
                          <p className="wv-body text-green/80 wv-spacing-sm">
                            Wenn Sie den Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die daraus entstehen, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
                          </p>
                          <p className="wv-body text-green/80">
                            Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Rücksendung</h3>
                          <p className="wv-body text-green/80">
                            Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen 14 Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von 14 Tagen absenden.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gewährleistung */}
                    <div className="bg-gradient-to-br from-copper/5 to-green/5 rounded-2xl p-8 border border-copper/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 7 Gewährleistung</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Gewährleistungsrechte</h3>
                          <p className="wv-body text-green/80 wv-spacing-sm">
                            Wir gewährleisten, dass die gelieferten Waren frei von Mängeln sind. Bei Mängeln haben Sie die Rechte aus der gesetzlichen Gewährleistung. Die Gewährleistungsfrist beträgt 2 Jahre ab Übergabe der Ware.
                          </p>
                          <p className="wv-body text-green/80">
                            Bei gebrauchten Waren beträgt die Gewährleistungsfrist 1 Jahr ab Übergabe der Ware.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Mängelanzeige</h3>
                          <p className="wv-body text-green/80">
                            Mängel sind uns unverzüglich nach Entdeckung anzuzeigen. Bei Verbrauchern gilt die gesetzliche Vermutung, dass Mängel, die innerhalb von 6 Monaten nach Übergabe auftreten, bereits bei Übergabe vorhanden waren.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Gewährleistungsausschluss</h3>
                          <p className="wv-body text-green/80">
                            Die Gewährleistung erstreckt sich nicht auf Schäden, die durch unsachgemäße Behandlung, unsachgemäße Lagerung oder normale Abnutzung entstehen.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Haftung */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 8 Haftung</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Haftungsbeschränkung</h3>
                          <p className="wv-body text-green/80 wv-spacing-sm">
                            Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen Pflichtverletzung beruhen, sowie für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.
                          </p>
                          <p className="wv-body text-green/80">
                            Im Übrigen ist unsere Haftung ausgeschlossen, soweit nicht zwingende gesetzliche Haftungsbestimmungen entgegenstehen.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Produkthaftung</h3>
                          <p className="wv-body text-green/80">
                            Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt. Im Übrigen haften wir nicht für Schäden, die durch die Verwendung unserer Produkte entstehen, wenn diese nicht bestimmungsgemäß verwendet werden.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Datenverlust</h3>
                          <p className="wv-body text-green/80">
                            Wir haften nicht für den Verlust von Daten, es sei denn, wir haben diese vorsätzlich oder grob fahrlässig verursacht.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Datenschutz */}
                    <div className="bg-gradient-to-br from-green/5 to-copper/5 rounded-2xl p-8 border border-green/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 9 Datenschutz</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Datenschutzbestimmungen</h3>
                          <p className="wv-body text-green/80">
                            Die Verarbeitung personenbezogener Daten erfolgt ausschließlich nach den Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Einzelheiten regelt unsere 
                            <Link href="/datenschutz" className="text-copper hover:text-copper/80 transition-colors font-medium"> Datenschutzerklärung</Link>.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Zweck der Datenverarbeitung</h3>
                          <p className="wv-body text-green/80">
                            Wir verarbeiten Ihre personenbezogenen Daten ausschließlich zur Vertragserfüllung und zur Erfüllung gesetzlicher Verpflichtungen.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Schlussbestimmungen */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">§ 10 Schlussbestimmungen</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Anwendbares Recht</h3>
                          <p className="wv-body text-green/80">
                            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern gilt das Recht des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Gerichtsstand</h3>
                          <p className="wv-body text-green/80">
                            Gerichtsstand ist Hamburg, soweit der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Salvatorische Klausel</h3>
                          <p className="wv-body text-green/80">
                            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung wird durch eine wirksame Bestimmung ersetzt, die dem wirtschaftlichen Zweck am nächsten kommt.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Änderungen der AGB</h3>
                          <p className="wv-body text-green/80">
                            Wir behalten uns vor, diese AGB zu ändern. Die geänderten AGB werden auf unserer Website veröffentlicht. Bereits abgeschlossene Verträge bleiben von Änderungen unberührt.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Online-Streitbeilegung */}
                    <div className="bg-gradient-to-r from-copper/10 to-green/10 rounded-2xl p-6 border border-copper/20 wv-spacing-lg">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">⚖️</div>
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Online-Streitbeilegung</h3>
                          <p className="wv-body text-green/80">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper/80 transition-colors font-medium"> https://ec.europa.eu/consumers/odr/</a>
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
                      <Link href="/impressum" className="block text-sm text-green/70 hover:text-copper transition-colors">
                        📄 Impressum
                      </Link>
                      <Link href="/datenschutz" className="block text-sm text-green/70 hover:text-copper transition-colors">
                        🔒 Datenschutzerklärung
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
                      Diese AGB entsprechen den deutschen Gesetzen und der EU-Verbraucherrechterichtlinie. Bei rechtlichen Fragen wenden Sie sich an einen Fachanwalt.
                    </p>
                  </div>

                  {/* Payment Methods */}
                  <div className="bg-gradient-to-br from-green/10 to-copper/10 p-6 rounded-xl border border-green/20">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Zahlungsarten</h3>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2 text-sm text-green/80">
                        <div className="text-copper">💳</div>
                        <span>Kreditkarte</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green/80">
                        <div className="text-copper">📱</div>
                        <span>PayPal</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green/80">
                        <div className="text-copper">🏦</div>
                        <span>SEPA-Lastschrift</span>
                      </div>
                    </div>
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
                Fragen zu den AGB?
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-2xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Wir stehen Ihnen gerne für alle Fragen zu unseren Geschäftsbedingungen zur Verfügung.
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