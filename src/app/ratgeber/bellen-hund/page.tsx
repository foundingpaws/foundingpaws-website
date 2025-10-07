import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function BellenHundPage() {
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
                Hund bellt ständig – warum das so ist und wie du ihm helfen kannst
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Exzessives Bellen verstehen und mit Geduld und Training in den Griff bekommen.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-cream/80 wv-spacing-md">
                <span>📅 1. Januar 2025</span>
                <span>⏱️ 9 Min Lesezeit</span>
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
                    <h2 className="wv-h2 text-green wv-spacing-lg">Warum bellt mein Hund so viel?</h2>
                    <p className="wv-body text-green/80 wv-spacing-md leading-relaxed">
                      Bellen ist ein natürliches Kommunikationsmittel für Hunde. Studien zeigen, dass 
                      <strong> 30-40% aller Hunde</strong> unter exzessivem Bellen leiden (Johnson et al., 2019). 
                      Die Ursachen sind vielfältig und reichen von Langeweile bis zu Angst.
                    </p>

                    <div className="bg-gradient-to-r from-green/10 to-copper/10 p-8 rounded-2xl border border-green/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">📊 Häufige Ursachen</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-green">45%</div>
                          <div className="text-sm text-green/70">Langeweile & Unterforderung</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-copper">30%</div>
                          <div className="text-sm text-green/70">Angst & Stress</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-taupe">15%</div>
                          <div className="text-sm text-green/70">Territorialverhalten</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-copper">10%</div>
                          <div className="text-sm text-green/70">Aufmerksamkeit suchen</div>
                        </div>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Arten von Bellen</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 wv-spacing-md">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Warnbellen:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Kurz und scharf</li>
                          <li>• Bei Fremden oder Gefahr</li>
                          <li>• Normal und erwünscht</li>
                          <li>• Stoppt nach Warnung</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Stressbellen:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Hoch und anhaltend</li>
                          <li>• Bei Trennungsangst</li>
                          <li>• Problematisch</li>
                          <li>• Benötigt Training</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Sofortmaßnahmen</h2>
                    
                    <div className="bg-gradient-to-r from-copper/10 to-green/10 p-8 rounded-2xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">🚀 Was du sofort tun kannst:</h3>
                      <ol className="wv-body text-green/80 space-y-3">
                        <li><strong>1. Ruhe bewahren:</strong> Nicht schreien oder bestrafen</li>
                        <li><strong>2. Ursache finden:</strong> Warum bellt der Hund?</li>
                        <li><strong>3. Ablenkung:</strong> Leckerli oder Spielzeug</li>
                        <li><strong>4. Ignorieren:</strong> Bei Aufmerksamkeitsbellen</li>
                        <li><strong>5. Belohnen:</strong> Bei ruhigem Verhalten</li>
                      </ol>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Langfristige Lösungen</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">1. Auslastung und Beschäftigung</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Ein ausgelasteter Hund bellt weniger. Studien zeigen eine <strong>60% Reduktion</strong> 
                      des Bellens bei ausreichender Beschäftigung.
                    </p>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Spaziergänge:</strong> Mindestens 2x täglich</li>
                      <li>• <strong>Spielzeit:</strong> Interaktive Spiele</li>
                      <li>• <strong>Geistige Beschäftigung:</strong> Puzzle-Spiele</li>
                      <li>• <strong>Training:</strong> Kommandos lernen</li>
                    </ul>

                    <h3 className="wv-h3 text-green wv-spacing-sm">2. Desensibilisierung</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Bei spezifischen Auslösern (Postbote, andere Hunde) hilft schrittweise Gewöhnung:
                    </p>
                    <ol className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li><strong>1. Abstand halten:</strong> Auslöser aus der Ferne beobachten</li>
                      <li><strong>2. Belohnen:</strong> Bei ruhigem Verhalten</li>
                      <li><strong>3. Näher kommen:</strong> Schrittweise verringern</li>
                      <li><strong>4. Wiederholen:</strong> Regelmäßig üben</li>
                    </ol>

                    <h3 className="wv-h3 text-green wv-spacing-sm">3. Kommando-Training</h3>
                    <div className="grid md:grid-cols-2 gap-6 wv-spacing-md">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">"Stopp" oder "Ruhe":</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Kurz und klar</li>
                          <li>• Immer gleiches Wort</li>
                          <li>• Sofort belohnen</li>
                          <li>• Geduldig üben</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">"Platz" als Alternative:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Ablenkung schaffen</li>
                          <li>• Fokus umlenken</li>
                          <li>• Entspannung fördern</li>
                          <li>• Positive Verstärkung</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Wann professionelle Hilfe?</h2>
                    
                    <div className="bg-gradient-to-r from-red/10 to-orange/10 p-6 rounded-xl border border-red/20 wv-spacing-md">
                      <h3 className="wv-h3 text-red-600 wv-spacing-sm">⚠️ Professionelle Hilfe bei:</h3>
                      <ul className="wv-body text-red-600/80 space-y-2">
                        <li>• Aggressivem Bellen</li>
                        <li>• Keiner Besserung nach 4 Wochen</li>
                        <li>• Nachbarschaftsbeschwerden</li>
                        <li>• Selbstverletzendem Verhalten</li>
                        <li>• Starker Angst oder Panik</li>
                      </ul>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Prävention</h2>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Frühe Sozialisation:</strong> Welpen an verschiedene Reize gewöhnen</li>
                      <li>• <strong>Regelmäßige Routine:</strong> Feste Zeiten für Futter und Spaziergänge</li>
                      <li>• <strong>Ruhige Umgebung:</strong> Stressfaktoren minimieren</li>
                      <li>• <strong>Positive Verstärkung:</strong> Gutes Verhalten belohnen</li>
                      <li>• <strong>Geduld:</strong> Training braucht Zeit</li>
                    </ul>

                    <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">💡 Tipp von Founding Paws</h3>
                      <p className="wv-body text-green/80">
                        Unsere <strong>Gentle Calm</strong> Formel mit L-Theanin und Baldrian kann 
                        stressbedingtes Bellen reduzieren, indem sie deinen Hund entspannter macht.
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
                      <a href="#warum" className="block text-sm text-green/70 hover:text-copper transition-colors">Warum bellt mein Hund?</a>
                      <a href="#arten" className="block text-sm text-green/70 hover:text-copper transition-colors">Arten von Bellen</a>
                      <a href="#sofort" className="block text-sm text-green/70 hover:text-copper transition-colors">Sofortmaßnahmen</a>
                      <a href="#loesungen" className="block text-sm text-green/70 hover:text-copper transition-colors">Langfristige Lösungen</a>
                      <a href="#hilfe" className="block text-sm text-green/70 hover:text-copper transition-colors">Professionelle Hilfe</a>
                      <a href="#praevention" className="block text-sm text-green/70 hover:text-copper transition-colors">Prävention</a>
                    </nav>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Verwandte Artikel</h3>
                    <div className="space-y-4">
                      <Link href="/ratgeber/trennungsangst-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Trennungsangst beim Hund
                        </div>
                        <div className="text-xs text-green/60">Allein bleiben lernen</div>
                      </Link>
                      <Link href="/ratgeber/stress-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Stress bei Hunden
                        </div>
                        <div className="text-xs text-green/60">Erkennen und behandeln</div>
                      </Link>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-copper/10 to-green/10 p-6 rounded-xl border border-copper/20">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Entspannung fördern</h3>
                    <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                      Unsere Gentle Calm Formel kann stressbedingtes Bellen reduzieren.
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
