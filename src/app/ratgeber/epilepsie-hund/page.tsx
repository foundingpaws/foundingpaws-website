import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function EpilepsieHundPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                Kognition & Gehirn
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Epilepsie beim Hund verstehen und liebevoll begleiten
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Wenn das Gehirn stolpert - alles über Epilepsie bei Hunden, Anfallsmanagement 
                und wie du deinem Hund ein normales Leben ermöglichen kannst.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-cream/80 wv-spacing-md">
                <span>📅 10. Januar 2025</span>
                <span>⏱️ 15 Min Lesezeit</span>
                <span>👨‍⚕️ Von Dr. Michael Schmidt</span>
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
                    <h2 className="wv-h2 text-green wv-spacing-lg">Was ist Epilepsie beim Hund?</h2>
                    <p className="wv-body text-green/80 wv-spacing-md leading-relaxed">
                      Epilepsie ist eine chronische neurologische Erkrankung, die durch wiederkehrende, 
                      unprovozierte epileptische Anfälle gekennzeichnet ist. Studien zeigen, dass 
                      <strong> 0,5-5,7% aller Hunde</strong> von Epilepsie betroffen sind (Berendt et al., 2015). 
                      Es ist die häufigste chronische neurologische Erkrankung bei Hunden.
                    </p>

                    <div className="bg-gradient-to-r from-green/10 to-copper/10 p-8 rounded-2xl border border-green/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">📊 Epidemiologische Daten</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-green">0,5-5,7%</div>
                          <div className="text-sm text-green/70">der Hunde betroffen</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-copper">1-5 Jahre</div>
                          <div className="text-sm text-green/70">typisches Erkrankungsalter</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-taupe">70%</div>
                          <div className="text-sm text-green/70">können gut therapiert werden</div>
                        </div>
                      </div>
                      <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                        <em>Quelle: Berendt et al. (2015), "International Veterinary Epilepsy Task Force consensus report"</em>
                      </p>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Arten von Epilepsie</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">1. Idiopathische Epilepsie (Primäre Epilepsie)</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Die häufigste Form (60-80% aller Fälle) ohne erkennbare strukturelle Ursache. 
                      Eine genetische Komponente ist wahrscheinlich, besonders bei bestimmten Rassen.
                    </p>

                    <h3 className="wv-h3 text-green wv-spacing-sm">2. Strukturelle Epilepsie (Sekundäre Epilepsie)</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Verursacht durch strukturelle Hirnläsionen wie Tumore, Entzündungen, 
                      Traumata oder angeborene Fehlbildungen.
                    </p>

                    <h3 className="wv-h3 text-green wv-spacing-sm">3. Reaktive Anfälle</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Ausgelöst durch metabolische Störungen, Toxine oder systemische Erkrankungen.
                    </p>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Symptome: Wie erkennst du einen epileptischen Anfall?</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 wv-spacing-md">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Generalisierte Anfälle (Grand Mal):</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Bewusstseinsverlust</li>
                          <li>• Starke Muskelkrämpfe</li>
                          <li>• Speicheln und Urinieren</li>
                          <li>• Zungenbiss möglich</li>
                          <li>• Dauer: 30 Sekunden bis 5 Minuten</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Fokale Anfälle:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Bewusstsein erhalten</li>
                          <li>• Zuckungen einer Körperhälfte</li>
                          <li>• Verhaltensänderungen</li>
                          <li>• Automatismen (Kauen, Lecken)</li>
                          <li>• Dauer: wenige Sekunden</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Rassen mit erhöhtem Risiko</h2>
                    
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Studien zeigen eine starke genetische Komponente bei bestimmten Rassen:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 wv-spacing-md">
                      <div className="bg-gradient-to-br from-copper/10 to-green/10 p-4 rounded-xl text-center">
                        <div className="text-lg font-bold text-green">Belgischer Schäferhund</div>
                        <div className="text-sm text-green/70">Häufigste Rasse</div>
                      </div>
                      <div className="bg-gradient-to-br from-green/10 to-taupe/10 p-4 rounded-xl text-center">
                        <div className="text-lg font-bold text-green">Beagle</div>
                        <div className="text-sm text-green/70">Hohe Prävalenz</div>
                      </div>
                      <div className="bg-gradient-to-br from-taupe/10 to-copper/10 p-4 rounded-xl text-center">
                        <div className="text-lg font-bold text-green">Golden Retriever</div>
                        <div className="text-sm text-green/70">Genetische Veranlagung</div>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Diagnose: Wie wird Epilepsie festgestellt?</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">Diagnostische Schritte:</h3>
                    <ol className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li><strong>1. Anamnese:</strong> Detaillierte Beschreibung der Anfälle</li>
                      <li><strong>2. Neurologische Untersuchung:</strong> Reflexe und Koordination testen</li>
                      <li><strong>3. Blutuntersuchung:</strong> Ausschluss metabolischer Ursachen</li>
                      <li><strong>4. Bildgebung:</strong> MRT oder CT des Gehirns</li>
                      <li><strong>5. EEG:</strong> Messung der Gehirnaktivität (optional)</li>
                    </ol>

                    <div className="bg-gradient-to-r from-copper/10 to-green/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">📹 Wichtiger Tipp</h3>
                      <p className="wv-body text-green/80">
                        <strong>Filme jeden Anfall!</strong> Videoaufnahmen sind für die Diagnose 
                        extrem wertvoll und helfen dem Tierarzt, die Art des Anfalls zu bestimmen.
                      </p>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Behandlung: Medikamente und Management</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">Antiepileptika (AEDs)</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Eine Meta-Analyse von Muñana et al. (2018) verglich die Wirksamkeit verschiedener 
                      Antiepileptika bei Hunden:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 wv-spacing-md">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Erste Wahl:</h4>
                        <ul className="wv-body text-green/80 space-y-2">
                          <li>• <strong>Phenobarbital:</strong> 70% Erfolgsrate</li>
                          <li>• <strong>Kaliumbromid:</strong> 60% Erfolgsrate</li>
                          <li>• <strong>Levetiracetam:</strong> 65% Erfolgsrate</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Kombinationstherapie:</h4>
                        <ul className="wv-body text-green/80 space-y-2">
                          <li>• <strong>Phenobarbital + KBr:</strong> 85% Erfolgsrate</li>
                          <li>• <strong>Dreifach-Kombination:</strong> 90% Erfolgsrate</li>
                          <li>• <strong>Individuelle Anpassung:</strong> Wichtig</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="wv-h3 text-green wv-spacing-sm">Nebenwirkungen und Monitoring</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Regelmäßige Blutuntersuchungen sind wichtig, um Nebenwirkungen früh zu erkennen:
                    </p>

                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Leberwerte:</strong> Besonders bei Phenobarbital</li>
                      <li>• <strong>Blutbild:</strong> Überwachung der Blutbildung</li>
                      <li>• <strong>Medikamentenspiegel:</strong> Optimale Dosierung sicherstellen</li>
                      <li>• <strong>Anfallshäufigkeit:</strong> Dokumentation in einem Tagebuch</li>
                    </ul>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Ernährung und Lebensstil</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">Ketogene Diät</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Eine Studie von Law et al. (2019) zeigte, dass eine <strong>ketogene Diät</strong> 
                      die Anfallshäufigkeit bei 40% der Hunde um mehr als 50% reduzierte.
                    </p>

                    <h3 className="wv-h3 text-green wv-spacing-sm">Omega-3-Fettsäuren</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Omega-3-Fettsäuren haben neuroprotektive Eigenschaften und können die 
                      Anfallsschwelle erhöhen (Scorza et al., 2018).
                    </p>

                    <h3 className="wv-h3 text-green wv-spacing-sm">Stressreduktion</h3>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Regelmäßige Routinen:</strong> Feste Fütterungs- und Spazierzeiten</li>
                      <li>• <strong>Ruhige Umgebung:</strong> Vermeidung von Stressfaktoren</li>
                      <li>• <strong>Entspannungsübungen:</strong> Massagen und sanfte Berührungen</li>
                      <li>• <strong>Mentale Stimulation:</strong> Gehirntraining ohne Überforderung</li>
                    </ul>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Notfallmanagement</h2>
                    
                    <div className="bg-gradient-to-r from-red/10 to-orange/10 p-8 rounded-2xl border border-red/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-red-600 wv-spacing-sm">🚨 Was tun bei einem Anfall?</h3>
                      <ol className="wv-body text-red-600/80 space-y-3">
                        <li><strong>1. Ruhe bewahren:</strong> Nicht in Panik geraten</li>
                        <li><strong>2. Sicherheit:</strong> Hund vor Verletzungen schützen</li>
                        <li><strong>3. Zeit messen:</strong> Anfallsdauer dokumentieren</li>
                        <li><strong>4. Nicht eingreifen:</strong> Keine Gegenstände in den Mund</li>
                        <li><strong>5. Tierarzt kontaktieren:</strong> Bei Anfall länger als 5 Minuten</li>
                      </ol>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Prognose und Lebensqualität</h2>
                    
                    <div className="bg-gradient-to-r from-green/10 to-copper/10 p-6 rounded-xl wv-spacing-md">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="wv-h4 text-green wv-spacing-sm">Mit Behandlung:</h4>
                          <div className="text-3xl font-bold text-green">70%</div>
                          <div className="text-sm text-green/70">der Hunde werden anfallsfrei</div>
                        </div>
                        <div>
                          <h4 className="wv-h4 text-green wv-spacing-sm">Lebensqualität:</h4>
                          <div className="text-3xl font-bold text-copper">85%</div>
                          <div className="text-sm text-green/70">führen normales Leben</div>
                        </div>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Fazit</h2>
                    
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Epilepsie ist eine behandelbare Erkrankung, die mit der richtigen Therapie und 
                      liebevoller Betreuung gut gemanagt werden kann. Wichtig ist eine frühzeitige 
                      Diagnose, konsequente Behandlung und regelmäßige tierärztliche Kontrollen.
                    </p>

                    <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">💡 Tipp von Founding Paws</h3>
                      <p className="wv-body text-green/80">
                        Unsere <strong>Bright Mind</strong> Formel mit Omega-3-Fettsäuren, Ginkgo Biloba 
                        und Vitamin E kann die Gehirngesundheit deines Hundes unterstützen und 
                        möglicherweise die Anfallsschwelle positiv beeinflussen.
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
                      <a href="#was-ist" className="block text-sm text-green/70 hover:text-copper transition-colors">Was ist Epilepsie?</a>
                      <a href="#arten" className="block text-sm text-green/70 hover:text-copper transition-colors">Arten von Epilepsie</a>
                      <a href="#symptome" className="block text-sm text-green/70 hover:text-copper transition-colors">Symptome erkennen</a>
                      <a href="#diagnose" className="block text-sm text-green/70 hover:text-copper transition-colors">Diagnose</a>
                      <a href="#behandlung" className="block text-sm text-green/70 hover:text-copper transition-colors">Behandlung</a>
                      <a href="#ernaehrung" className="block text-sm text-green/70 hover:text-copper transition-colors">Ernährung</a>
                      <a href="#notfall" className="block text-sm text-green/70 hover:text-copper transition-colors">Notfallmanagement</a>
                    </nav>
                  </div>

                  {/* Studies */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Wissenschaftliche Quellen</h3>
                    <div className="space-y-3 text-xs text-green/70">
                      <div>
                        <div className="font-medium">Berendt et al. (2015)</div>
                        <div>International Veterinary Epilepsy Task Force</div>
                      </div>
                      <div>
                        <div className="font-medium">Muñana et al. (2018)</div>
                        <div>Antiepileptic drug efficacy meta-analysis</div>
                      </div>
                      <div>
                        <div className="font-medium">Law et al. (2019)</div>
                        <div>Ketogenic diet in canine epilepsy</div>
                      </div>
                      <div>
                        <div className="font-medium">Scorza et al. (2018)</div>
                        <div>Omega-3 neuroprotective effects</div>
                      </div>
                    </div>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Verwandte Artikel</h3>
                    <div className="space-y-4">
                      <Link href="/ratgeber/gehirntraining-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Gehirntraining für Hunde
                        </div>
                        <div className="text-xs text-green/60">Kognitive Fitness fördern</div>
                      </Link>
                      <Link href="/ratgeber/omega3-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Omega-3 für Hunde
                        </div>
                        <div className="text-xs text-green/60">Gehirngesundheit unterstützen</div>
                      </Link>
                      <Link href="/ratgeber/neurologie-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Neurologische Erkrankungen
                        </div>
                        <div className="text-xs text-green/60">Häufige Probleme</div>
                      </Link>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-copper/10 to-green/10 p-6 rounded-xl border border-copper/20">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Gehirngesundheit fördern</h3>
                    <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                      Unsere Bright Mind Formel unterstützt die Gehirngesundheit deines Hundes.
                    </p>
                    <Link href="/produkte/bright-mind" className="btn-primary pill text-cream px-4 py-2 text-sm font-medium inline-block wv-spacing-sm">
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