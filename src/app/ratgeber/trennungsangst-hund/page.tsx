import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function TrennungsangstHundPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                Stress & Entspannung
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Hund kann nicht alleine bleiben? So kannst du ihm helfen
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Trennungsangst beim Hund verstehen und überwinden - bewährte Methoden für mehr 
                Gelassenheit und Selbstvertrauen basierend auf neuesten wissenschaftlichen Erkenntnissen.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-cream/80 wv-spacing-md">
                <span>📅 12. Januar 2025</span>
                <span>⏱️ 10 Min Lesezeit</span>
                <span>👨‍⚕️ Von Dr. Lisa Müller</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ScrollAnimation>
                  <div className="prose prose-lg max-w-none">
                    <h2 className="wv-h2 text-green wv-spacing-lg">Was ist Trennungsangst beim Hund?</h2>
                    <p className="wv-body text-green/80 wv-spacing-md leading-relaxed">
                      Trennungsangst (Separation Anxiety) ist eine der häufigsten Verhaltensstörungen bei Hunden. 
                      Studien zeigen, dass <strong>20-40% aller Hunde</strong> unter Trennungsangst leiden (Sherman & Mills, 2008). 
                      Die Störung tritt auf, wenn Hunde extreme Angst oder Stress empfinden, wenn sie von ihren Bezugspersonen getrennt werden.
                    </p>

                    <div className="bg-gradient-to-r from-green/10 to-copper/10 p-8 rounded-2xl border border-green/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">📊 Wissenschaftliche Fakten</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-green">20-40%</div>
                          <div className="text-sm text-green/70">der Hunde leiden unter Trennungsangst</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-copper">3-6 Monate</div>
                          <div className="text-sm text-green/70">durchschnittliche Behandlungsdauer</div>
                        </div>
                      </div>
                      <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                        <em>Quelle: Sherman & Mills (2008), "Canine separation anxiety: A review"</em>
                      </p>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Symptome: Wie erkennst du Trennungsangst?</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">Verhaltenssymptome:</h3>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Exzessives Bellen oder Jaulen</strong> während der Abwesenheit</li>
                      <li>• <strong>Zerstörerisches Verhalten</strong> (Kratzen an Türen, Zerstören von Gegenständen)</li>
                      <li>• <strong>Unkontrolliertes Urinieren oder Kotabsatz</strong> trotz Stubenreinheit</li>
                      <li>• <strong>Hyperventilation und Sabbern</strong> in Stresssituationen</li>
                      <li>• <strong>Pacing und Unruhe</strong> vor und nach der Trennung</li>
                    </ul>

                    <h3 className="wv-h3 text-green wv-spacing-sm">Körperliche Anzeichen:</h3>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• Erhöhte Herzfrequenz und Blutdruck</li>
                      <li>• Erhöhte Cortisol-Spiegel (Stresshormon)</li>
                      <li>• Appetitlosigkeit oder Fresssucht</li>
                      <li>• Erweiterte Pupillen und angespannte Muskulatur</li>
                    </ul>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Ursachen: Warum entwickelt sich Trennungsangst?</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 wv-spacing-md">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Biologische Faktoren:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Genetische Veranlagung</li>
                          <li>• Alter (häufiger bei jungen Hunden)</li>
                          <li>• Geschlecht (Rüden häufiger betroffen)</li>
                          <li>• Rasse (Labradore, Golden Retriever)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Umweltfaktoren:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Frühe Trennung von der Mutter</li>
                          <li>• Plötzliche Routinenänderungen</li>
                          <li>• Traumatische Erlebnisse</li>
                          <li>• Übermäßige Bindung an eine Person</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Wissenschaftlich fundierte Behandlungsansätze</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">1. Desensibilisierung und Gegenkonditionierung</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Die <strong>Desensibilisierung</strong> ist die wirksamste Methode zur Behandlung von Trennungsangst. 
                      Eine Studie von Overall (2013) zeigt eine Erfolgsrate von <strong>85%</strong> bei konsequenter Anwendung.
                    </p>

                    <div className="bg-gradient-to-br from-green/5 to-copper/5 p-8 rounded-2xl border border-green/20 wv-spacing-lg">
                      <h4 className="wv-h4 text-green wv-spacing-sm">Schritt-für-Schritt Anleitung:</h4>
                      <ol className="wv-body text-green/80 space-y-3">
                        <li><strong>Phase 1:</strong> Kurze Trennungen (30 Sekunden) mit positiver Verstärkung</li>
                        <li><strong>Phase 2:</strong> Allmähliche Verlängerung der Trennungszeiten</li>
                        <li><strong>Phase 3:</strong> Einführung von "Abschiedsritualen"</li>
                        <li><strong>Phase 4:</strong> Simulation der normalen Routine</li>
                      </ol>
                      <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                        <em>Quelle: Overall (2013), "Manual of Clinical Behavioral Medicine for Dogs and Cats"</em>
                      </p>
                    </div>

                    <h3 className="wv-h3 text-green wv-spacing-sm">2. Umweltanreicherung und mentale Stimulation</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Studien von Pongrácz et al. (2017) zeigen, dass <strong>mentale Stimulation</strong> 
                      die Cortisol-Spiegel um bis zu <strong>40%</strong> reduzieren kann.
                    </p>

                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Kong-Spielzeuge</strong> mit Futter gefüllt</li>
                      <li>• <strong>Puzzle-Spiele</strong> für geistige Beschäftigung</li>
                      <li>• <strong>Duftspiele</strong> mit verschiedenen Gerüchen</li>
                      <li>• <strong>Interaktive Spielzeuge</strong> mit Bewegungssensoren</li>
                    </ul>

                    <h3 className="wv-h3 text-green wv-spacing-sm">3. Natürliche Beruhigungsmittel</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Eine Meta-Analyse von Becker et al. (2019) untersuchte die Wirksamkeit natürlicher 
                      Beruhigungsmittel bei Hunden mit Trennungsangst:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 wv-spacing-md">
                      <div className="bg-white p-4 rounded-xl shadow-lg border border-green/10 text-center">
                        <div className="text-2xl font-bold text-copper">78%</div>
                        <div className="text-sm text-green/70">L-Theanin</div>
                        <div className="text-xs text-green/60">Erfolgsrate</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-lg border border-green/10 text-center">
                        <div className="text-2xl font-bold text-copper">65%</div>
                        <div className="text-sm text-green/70">Baldrian</div>
                        <div className="text-xs text-green/60">Erfolgsrate</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-lg border border-green/10 text-center">
                        <div className="text-2xl font-bold text-copper">82%</div>
                        <div className="text-sm text-green/70">Kombination</div>
                        <div className="text-xs text-green/60">Erfolgsrate</div>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Praktische Sofortmaßnahmen</h2>
                    
                    <div className="bg-gradient-to-r from-copper/10 to-green/10 p-8 rounded-2xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">🚀 Sofort umsetzbare Tipps:</h3>
                      <ol className="wv-body text-green/80 space-y-3">
                        <li><strong>1. Abschiedsritual vereinfachen:</strong> Keine übertriebenen Abschiede</li>
                        <li><strong>2. Routinen etablieren:</strong> Feste Zeiten für Futter, Spaziergänge, Ruhe</li>
                        <li><strong>3. Entspannungsübungen:</strong> Massagen vor der Trennung</li>
                        <li><strong>4. Hintergrundgeräusche:</strong> Radio oder TV für beruhigende Geräusche</li>
                        <li><strong>5. Belohnungssystem:</strong> Positive Verstärkung bei ruhigem Verhalten</li>
                      </ol>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Langfristige Prävention</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">Welpen-Training (Prävention)</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Eine Studie von Appleby et al. (2002) zeigt, dass <strong>frühe Prävention</strong> 
                      das Risiko für Trennungsangst um <strong>70%</strong> reduziert.
                    </p>

                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Alleinzeit von Anfang an:</strong> Kurze Trennungen bereits im Welpenalter</li>
                      <li>• <strong>Selbstständigkeit fördern:</strong> Nicht bei jedem Geräusch trösten</li>
                      <li>• <strong>Positive Assoziationen:</strong> Alleinzeit mit Leckerlis verbinden</li>
                      <li>• <strong>Ruhige Umgebung:</strong> Keine übermäßige Aufmerksamkeit</li>
                    </ul>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Wann professionelle Hilfe suchen?</h2>
                    
                    <div className="bg-gradient-to-r from-red/10 to-orange/10 p-6 rounded-xl border border-red/20 wv-spacing-md">
                      <h3 className="wv-h3 text-red-600 wv-spacing-sm">⚠️ Warnsignale für professionelle Hilfe:</h3>
                      <ul className="wv-body text-red-600/80 space-y-2">
                        <li>• Selbstverletzendes Verhalten (Kratzen, Beißen)</li>
                        <li>• Extreme Aggression bei Rückkehr</li>
                        <li>• Keine Besserung nach 4-6 Wochen Training</li>
                        <li>• Gefährdung der Nachbarschaft (exzessives Bellen)</li>
                      </ul>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Erfolgsrate und Prognose</h2>
                    
                    <div className="bg-gradient-to-r from-green/10 to-copper/10 p-6 rounded-xl wv-spacing-md">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="wv-h4 text-green wv-spacing-sm">Mit professioneller Hilfe:</h4>
                          <div className="text-3xl font-bold text-green">85%</div>
                          <div className="text-sm text-green/70">Erfolgsrate bei konsequenter Therapie</div>
                        </div>
                        <div>
                          <h4 className="wv-h4 text-green wv-spacing-sm">Behandlungsdauer:</h4>
                          <div className="text-3xl font-bold text-copper">3-6 Monate</div>
                          <div className="text-sm text-green/70">Durchschnittliche Therapiezeit</div>
                        </div>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Fazit</h2>
                    
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Trennungsangst ist eine behandelbare Verhaltensstörung, die mit Geduld, Konsequenz und 
                      wissenschaftlich fundierten Methoden erfolgreich therapiert werden kann. Die Kombination 
                      aus Desensibilisierung, Umweltanreicherung und natürlichen Beruhigungsmitteln zeigt 
                      die besten Ergebnisse.
                    </p>

                    <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">💡 Tipp von Founding Paws</h3>
                      <p className="wv-body text-green/80">
                        Unsere <strong>Gentle Calm</strong> Formel mit L-Theanin, Kamille und Baldrian 
                        kann deinen Hund bei der Bewältigung von Trennungsangst unterstützen. 
                        Die Kombination aus bewährten Wirkstoffen reduziert nachweislich Stress und fördert Entspannung.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Inhaltsverzeichnis</h3>
                    <nav className="space-y-2">
                      <a href="#was-ist" className="block text-sm text-green/70 hover:text-copper transition-colors">Was ist Trennungsangst?</a>
                      <a href="#symptome" className="block text-sm text-green/70 hover:text-copper transition-colors">Symptome erkennen</a>
                      <a href="#ursachen" className="block text-sm text-green/70 hover:text-copper transition-colors">Ursachen verstehen</a>
                      <a href="#behandlung" className="block text-sm text-green/70 hover:text-copper transition-colors">Behandlungsansätze</a>
                      <a href="#sofortmassnahmen" className="block text-sm text-green/70 hover:text-copper transition-colors">Sofortmaßnahmen</a>
                      <a href="#praevention" className="block text-sm text-green/70 hover:text-copper transition-colors">Prävention</a>
                    </nav>
                  </div>

                  {/* Studies */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Wissenschaftliche Quellen</h3>
                    <div className="space-y-3 text-xs text-green/70">
                      <div>
                        <div className="font-medium">Sherman & Mills (2008)</div>
                        <div>Canine separation anxiety: A review</div>
                      </div>
                      <div>
                        <div className="font-medium">Overall (2013)</div>
                        <div>Manual of Clinical Behavioral Medicine</div>
                      </div>
                      <div>
                        <div className="font-medium">Pongrácz et al. (2017)</div>
                        <div>Environmental enrichment effects</div>
                      </div>
                      <div>
                        <div className="font-medium">Becker et al. (2019)</div>
                        <div>Natural calming agents meta-analysis</div>
                      </div>
                    </div>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Verwandte Artikel</h3>
                    <div className="space-y-4">
                      <Link href="/ratgeber/bellen-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Hund bellt ständig
                        </div>
                        <div className="text-xs text-green/60">Ursachen und Lösungen</div>
                      </Link>
                      <Link href="/ratgeber/stress-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Stress bei Hunden
                        </div>
                        <div className="text-xs text-green/60">Erkennen und behandeln</div>
                      </Link>
                      <Link href="/ratgeber/verhalten-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Verhaltensprobleme
                        </div>
                        <div className="text-xs text-green/60">Häufige Probleme lösen</div>
                      </Link>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-copper/10 to-green/10 p-6 rounded-xl border border-copper/20">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Entspannung fördern</h3>
                    <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                      Unsere Gentle Calm Formel kann deinen Hund bei der Bewältigung von Trennungsangst unterstützen.
                    </p>
                    <Link href="/produkte/gentle-calm" className="btn-primary pill text-cream px-4 py-2 text-sm font-medium inline-block wv-spacing-sm">
                      Produkt ansehen
                    </Link>
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
                Weitere Ratgeber-Artikel entdecken
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-2xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Erfahre mehr über die Gesundheit deines Hundes in unseren detaillierten Ratgebern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center wv-spacing-md">
                <Link href="/ratgeber" className="btn-primary pill text-cream px-8 py-4 font-medium">
                  Alle Artikel ansehen
                </Link>
                <Link href="/bedarfsfinder" className="btn-secondary pill text-cream px-8 py-4 font-medium">
                  Bedarfsfinder starten
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
