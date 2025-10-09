import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                🔒 Datenschutz & DSGVO
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Datenschutzerklärung
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Transparenz und Schutz Ihrer persönlichen Daten haben für uns höchste Priorität
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
                      <h2 className="wv-h2 text-green wv-spacing-lg">1. Einleitung</h2>
                      <p className="wv-body text-green/80 wv-spacing-md">
                        Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl online als auch offline.
                      </p>
                      <div className="bg-white/50 p-4 rounded-xl">
                        <p className="wv-body text-green/80 text-sm">
                          <strong>Stand:</strong> 15. Januar 2025<br />
                          <strong>Letzte Aktualisierung:</strong> 15. Januar 2025
                        </p>
                      </div>
                    </div>

                    {/* Verantwortlicher */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">2. Verantwortlicher</h2>
                      
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

                    {/* Allgemeine Hinweise zur Datenverarbeitung */}
                    <div className="bg-gradient-to-br from-copper/5 to-green/5 rounded-2xl p-8 border border-copper/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">3. Allgemeine Hinweise zur Datenverarbeitung</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Rechtsgrundlagen</h3>
                          <p className="wv-body text-green/80 wv-spacing-sm">
                            Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Im Einzelnen können folgende Rechtsgrundlagen maßgeblich sein:
                          </p>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung</li>
                            <li>• <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung</li>
                            <li>• <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte Interessen</li>
                            <li>• <strong>Art. 6 Abs. 1 lit. c DSGVO:</strong> Rechtliche Verpflichtung</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Datenlöschung und Speicherdauer</h3>
                          <p className="wv-body text-green/80">
                            Ihre personenbezogenen Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt oder eine gesetzliche Aufbewahrungsfrist abgelaufen ist. Zusätzlich können Speicherfristen aus anderen Rechtsvorschriften bestehen.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Sicherheit der Verarbeitung</h3>
                          <p className="wv-body text-green/80">
                            Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor unbefugtem Zugriff, Verlust, Missbrauch oder Veränderung zu schützen. Dies umfasst insbesondere die Verschlüsselung von Datenübertragungen und den Zugangsschutz zu unseren Systemen.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bereitstellung der Website */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">4. Bereitstellung der Website und Erstellung von Logfiles</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Art der verarbeiteten Daten</h3>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• IP-Adresse</li>
                            <li>• Datum und Uhrzeit des Zugriffs</li>
                            <li>• Name und URL der abgerufenen Datei</li>
                            <li>• Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                            <li>• Verwendeter Browser und ggf. das Betriebssystem</li>
                            <li>• Name Ihres Internet-Zugangsanbieters</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Zweck der Verarbeitung</h3>
                          <p className="wv-body text-green/80">
                            Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Rechtsgrundlage</h3>
                          <p className="wv-body text-green/80">
                            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der ordnungsgemäßen Bereitstellung der Website).
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Speicherdauer</h3>
                          <p className="wv-body text-green/80">
                            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Bei der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Cookies */}
                    <div className="bg-gradient-to-br from-green/5 to-copper/5 rounded-2xl p-8 border border-green/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">5. Cookies</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Was sind Cookies?</h3>
                          <p className="wv-body text-green/80">
                            Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie ermöglichen es uns, bestimmte Informationen über Sie zu speichern, während Sie unsere Website besuchen.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Arten von Cookies</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/50 p-4 rounded-xl">
                              <h4 className="wv-h4 text-green wv-spacing-xs">Notwendige Cookies</h4>
                              <p className="wv-body text-green/80 text-sm">
                                Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                              </p>
                            </div>
                            <div className="bg-white/50 p-4 rounded-xl">
                              <h4 className="wv-h4 text-green wv-spacing-xs">Funktionale Cookies</h4>
                              <p className="wv-body text-green/80 text-sm">
                                Diese Cookies verbessern die Funktionalität der Website und ermöglichen personalisierte Inhalte.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Cookie-Einstellungen</h3>
                          <p className="wv-body text-green/80">
                            Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser ändern. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website beeinträchtigen kann.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">6. Newsletter</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Art der verarbeiteten Daten</h3>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• E-Mail-Adresse</li>
                            <li>• Vor- und Nachname (optional)</li>
                            <li>• Anmeldedatum und -zeit</li>
                            <li>• IP-Adresse zum Zeitpunkt der Anmeldung</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Zweck der Verarbeitung</h3>
                          <p className="wv-body text-green/80">
                            Versendung von Informationen über unsere Produkte, Services und Neuigkeiten. Der Newsletter enthält regelmäßige Updates zu Hundegesundheit, Produktneuheiten und exklusive Angebote.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Rechtsgrundlage</h3>
                          <p className="wv-body text-green/80">
                            Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Widerruf</h3>
                          <p className="wv-body text-green/80">
                            Sie können sich jederzeit vom Newsletter abmelden, indem Sie den Abmeldelink in jeder E-Mail verwenden oder uns eine E-Mail an <a href="mailto:foundingpaws@gmail.com" className="text-copper hover:text-copper/80 transition-colors font-medium">foundingpaws@gmail.com</a> senden.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Speicherdauer</h3>
                          <p className="wv-body text-green/80">
                            Ihre Daten werden gespeichert, bis Sie sich vom Newsletter abmelden oder wir den Newsletter einstellen. Nach der Abmeldung werden Ihre Daten innerhalb von 30 Tagen gelöscht.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Kontaktformular */}
                    <div className="bg-gradient-to-br from-copper/5 to-green/5 rounded-2xl p-8 border border-copper/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">7. Kontaktformular und E-Mail-Kontakt</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Art der verarbeiteten Daten</h3>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• Name</li>
                            <li>• E-Mail-Adresse</li>
                            <li>• Nachrichtentext</li>
                            <li>• Datum und Uhrzeit der Nachricht</li>
                            <li>• IP-Adresse</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Zweck der Verarbeitung</h3>
                          <p className="wv-body text-green/80">
                            Bearbeitung Ihrer Anfrage und Kommunikation mit Ihnen. Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Rechtsgrundlage</h3>
                          <p className="wv-body text-green/80">
                            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen) oder Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Speicherdauer</h3>
                          <p className="wv-body text-green/80">
                            Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine weiteren rechtlichen Aufbewahrungsfristen bestehen.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Google Analytics */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">8. Google Analytics</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Beschreibung der Verarbeitung</h3>
                          <p className="wv-body text-green/80">
                            Diese Website verwendet Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics verwendet Cookies, um die Nutzung der Website zu analysieren.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Art der verarbeiteten Daten</h3>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• IP-Adresse (anonymisiert)</li>
                            <li>• Besuchte Seiten</li>
                            <li>• Verweildauer auf der Website</li>
                            <li>• Herkunftsland/Stadt</li>
                            <li>• Verwendeter Browser und Betriebssystem</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Zweck der Verarbeitung</h3>
                          <p className="wv-body text-green/80">
                            Analyse der Website-Nutzung zur Verbesserung unserer Inhalte und Services. Die Daten werden nur mit Ihrer Einwilligung verarbeitet.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Rechtsgrundlage</h3>
                          <p className="wv-body text-green/80">
                            Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen.
                          </p>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Widerruf</h3>
                          <p className="wv-body text-green/80">
                            Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern oder die Einwilligung über unser Cookie-Banner widerrufen.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ihre Rechte */}
                    <div className="bg-gradient-to-br from-green/5 to-copper/5 rounded-2xl p-8 border border-green/20 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">9. Ihre Rechte</h2>
                      
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white/50 p-4 rounded-xl">
                            <h4 className="wv-h4 text-green wv-spacing-xs">Auskunftsrecht (Art. 15 DSGVO)</h4>
                            <p className="wv-body text-green/80 text-sm">
                              Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.
                            </p>
                          </div>
                          <div className="bg-white/50 p-4 rounded-xl">
                            <h4 className="wv-h4 text-green wv-spacing-xs">Berichtigungsrecht (Art. 16 DSGVO)</h4>
                            <p className="wv-body text-green/80 text-sm">
                              Sie haben das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.
                            </p>
                          </div>
                          <div className="bg-white/50 p-4 rounded-xl">
                            <h4 className="wv-h4 text-green wv-spacing-xs">Löschungsrecht (Art. 17 DSGVO)</h4>
                            <p className="wv-body text-green/80 text-sm">
                              Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten unter bestimmten Voraussetzungen.
                            </p>
                          </div>
                          <div className="bg-white/50 p-4 rounded-xl">
                            <h4 className="wv-h4 text-green wv-spacing-xs">Einschränkungsrecht (Art. 18 DSGVO)</h4>
                            <p className="wv-body text-green/80 text-sm">
                              Sie haben das Recht auf Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Beschwerderecht</h3>
                          <p className="wv-body text-green/80">
                            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde ist die Hamburgische Beauftragte für Datenschutz und Informationsfreiheit.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Datensicherheit */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-green/10 wv-spacing-2xl">
                      <h2 className="wv-h2 text-green wv-spacing-lg">10. Datensicherheit</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Technische Maßnahmen</h3>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
                            <li>• Regelmäßige Sicherheitsupdates und Patches</li>
                            <li>• Zugriffskontrollen und Authentifizierung</li>
                            <li>• Firewall und Intrusion Detection</li>
                            <li>• Regelmäßige Backups und Notfallpläne</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Organisatorische Maßnahmen</h3>
                          <ul className="wv-body text-green/80 space-y-2 ml-6">
                            <li>• Datenschutzschulungen für alle Mitarbeiter</li>
                            <li>• Vertraulichkeitsvereinbarungen</li>
                            <li>• Regelmäßige Datenschutz-Audits</li>
                            <li>• Dokumentation aller Verarbeitungsvorgänge</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Änderungen der Datenschutzerklärung */}
                    <div className="bg-gradient-to-r from-copper/10 to-green/10 rounded-2xl p-6 border border-copper/20 wv-spacing-lg">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">📝</div>
                        <div>
                          <h3 className="wv-h3 text-green wv-spacing-sm">Änderungen der Datenschutzerklärung</h3>
                          <p className="wv-body text-green/80">
                            Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, um sie an geänderte Rechtslagen oder bei Änderungen unserer Leistungen sowie der Datenverarbeitung anzupassen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
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
                    <h3 className="wv-h4 text-green wv-spacing-sm">Datenschutz-Kontakt</h3>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center gap-3">
                        <div className="text-copper">📧</div>
                        <a href="mailto:foundingpaws@gmail.com" className="text-sm text-green/80 hover:text-copper transition-colors">
                          foundingpaws@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-copper">🏛️</div>
                        <span className="text-sm text-green/80">
                          Hamburgische Beauftragte für Datenschutz
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* DSGVO Info */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">DSGVO-Info</h3>
                    <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                      Diese Datenschutzerklärung entspricht den Anforderungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
                    </p>
                  </div>

                  {/* Cookie Settings */}
                  <div className="bg-gradient-to-br from-green/10 to-copper/10 p-6 rounded-xl border border-green/20">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Cookie-Einstellungen</h3>
                    <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                      Verwalten Sie Ihre Cookie-Präferenzen und Datenschutzeinstellungen.
                    </p>
                    <button className="btn-secondary pill text-green px-4 py-2 text-sm font-medium mt-3">
                      Einstellungen
                    </button>
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
                Fragen zum Datenschutz?
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-2xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Wir stehen Ihnen gerne für alle Fragen zum Datenschutz und zur Datenverarbeitung zur Verfügung.
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