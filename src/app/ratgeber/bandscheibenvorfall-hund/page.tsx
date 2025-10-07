import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function BandscheibenvorfallHundPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                Gelenke & Mobilität
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Bandscheibenvorfall beim Hund: Symptome, Behandlung und was du tun kannst
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Wenn dein Hund plötzlich lahmt oder Schmerzen hat - alles über Bandscheibenvorfälle, 
                ihre Ursachen und wie du deinem Liebling helfen kannst.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-cream/80 wv-spacing-md">
                <span>📅 15. Januar 2025</span>
                <span>⏱️ 12 Min Lesezeit</span>
                <span>👨‍⚕️ Von Dr. Sarah Weber</span>
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
                    <h2 className="wv-h2 text-green wv-spacing-lg">Was ist ein Bandscheibenvorfall beim Hund?</h2>
                    <p className="wv-body text-green/80 wv-spacing-md leading-relaxed">
                      Ein Bandscheibenvorfall (Diskusprolaps) ist eine der häufigsten Wirbelsäulenerkrankungen bei Hunden. 
                      Die Bandscheiben wirken als Stoßdämpfer zwischen den Wirbelkörpern. Wenn sie beschädigt werden, 
                      kann der gallertartige Kern austreten und auf das Rückenmark oder die Nervenwurzeln drücken.
                    </p>

                    <div className="bg-gradient-to-r from-copper/10 to-green/10 p-8 rounded-2xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">🚨 Wichtiger Hinweis</h3>
                      <p className="wv-body text-green/80">
                        Bei plötzlicher Lähmung oder starken Schmerzen solltest du <strong>sofort</strong> einen Tierarzt aufsuchen. 
                        Bandscheibenvorfälle können lebensbedrohlich sein und erfordern oft eine schnelle Behandlung.
                      </p>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Symptome: Woran erkennst du einen Bandscheibenvorfall?</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">Frühe Anzeichen:</h3>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• Plötzliche Schmerzen beim Aufstehen oder Springen</li>
                      <li>• Steife Bewegungen, besonders am Morgen</li>
                      <li>• Unwilligkeit zu springen oder Treppen zu steigen</li>
                      <li>• Berührungsempfindlichkeit im Rückenbereich</li>
                      <li>• Ungewöhnliche Körperhaltung (gekrümmter Rücken)</li>
                    </ul>

                    <h3 className="wv-h3 text-green wv-spacing-sm">Schwere Symptome:</h3>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• Lähmung der Hinterbeine (Paraplegie)</li>
                      <li>• Inkontinenz (keine Kontrolle über Blase/Darm)</li>
                      <li>• Verlust der Schmerzempfindung in den Pfoten</li>
                      <li>• Schwierigkeiten beim Gehen oder Stehen</li>
                    </ul>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Welche Hunde sind besonders gefährdet?</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 wv-spacing-md">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Rassen mit hohem Risiko:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Dackel (besonders gefährdet)</li>
                          <li>• Französische Bulldogge</li>
                          <li>• Beagle</li>
                          <li>• Cocker Spaniel</li>
                          <li>• Pekingese</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Risikofaktoren:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Übergewicht</li>
                          <li>• Alter (ab 4-5 Jahren)</li>
                          <li>• Genetische Veranlagung</li>
                          <li>• Übermäßige Belastung</li>
                          <li>• Plötzliche Bewegungen</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Behandlung: Was kann der Tierarzt tun?</h2>
                    
                    <h3 className="wv-h3 text-green wv-spacing-sm">Konservative Behandlung:</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Bei leichten Fällen kann eine konservative Behandlung ausreichen:
                    </p>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Strikte Ruhe:</strong> 4-6 Wochen Boxenruhe</li>
                      <li>• <strong>Schmerzmittel:</strong> Entzündungshemmer und Schmerztherapie</li>
                      <li>• <strong>Physiotherapie:</strong> Sanfte Massagen und Bewegungsübungen</li>
                      <li>• <strong>Kortison:</strong> Zur Reduzierung von Entzündungen</li>
                    </ul>

                    <h3 className="wv-h3 text-green wv-spacing-sm">Operative Behandlung:</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Bei schweren Fällen oder wenn die konservative Behandlung nicht anschlägt, 
                      ist eine Operation oft die beste Option. Die Erfolgsrate liegt bei 80-90%.
                    </p>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Wie kannst du deinem Hund helfen?</h2>
                    
                    <div className="bg-gradient-to-br from-green/5 to-copper/5 p-8 rounded-2xl border border-green/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">Sofortmaßnahmen:</h3>
                      <ol className="wv-body text-green/80 space-y-3">
                        <li><strong>1. Ruhe bewahren:</strong> Deinen Hund nicht bewegen, wenn er Schmerzen hat</li>
                        <li><strong>2. Tierarzt kontaktieren:</strong> Sofort einen Termin vereinbaren</li>
                        <li><strong>3. Transport:</strong> Vorsichtig in eine Box oder auf eine Trage legen</li>
                        <li><strong>4. Beobachten:</strong> Symptome dokumentieren für den Tierarzt</li>
                      </ol>
                    </div>

                    <h3 className="wv-h3 text-green wv-spacing-sm">Langfristige Unterstützung:</h3>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Gewichtskontrolle:</strong> Übergewicht vermeiden</li>
                      <li>• <strong>Gelenkunterstützung:</strong> Glucosamin und Chondroitin</li>
                      <li>• <strong>Sanfte Bewegung:</strong> Schwimmen statt Springen</li>
                      <li>• <strong>Rampen nutzen:</strong> Statt Treppen steigen</li>
                      <li>• <strong>Orthopädische Liegeplätze:</strong> Für bessere Entlastung</li>
                    </ul>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Prävention: So beugst du vor</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 wv-spacing-md">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Bewegung & Haltung:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Regelmäßige, moderate Bewegung</li>
                          <li>• Rampen statt Treppen</li>
                          <li>• Keine Sprünge aus großer Höhe</li>
                          <li>• Orthopädische Liegeplätze</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Ernährung & Gewicht:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Idealgewicht halten</li>
                          <li>• Gelenkunterstützende Nährstoffe</li>
                          <li>• Omega-3-Fettsäuren</li>
                          <li>• Antioxidantien</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Wann ist die Prognose gut?</h2>
                    
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Die Prognose hängt stark vom Schweregrad und der rechtzeitigen Behandlung ab:
                    </p>
                    
                    <div className="bg-gradient-to-r from-green/10 to-copper/10 p-6 rounded-xl wv-spacing-md">
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green">90%</div>
                          <div className="text-sm text-green/70">Bei frühzeitiger Behandlung</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-copper">80%</div>
                          <div className="text-sm text-green/70">Bei operativer Behandlung</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-taupe">60%</div>
                          <div className="text-sm text-green/70">Bei schweren Fällen</div>
                        </div>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Fazit</h2>
                    
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Ein Bandscheibenvorfall ist eine ernste Erkrankung, die aber bei rechtzeitiger Behandlung 
                      oft gut therapierbar ist. Wichtig ist, die ersten Anzeichen zu erkennen und schnell zu handeln. 
                      Mit der richtigen Behandlung und Pflege kann dein Hund ein normales, glückliches Leben führen.
                    </p>

                    <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">💡 Tipp von Founding Paws</h3>
                      <p className="wv-body text-green/80">
                        Unsere <strong>Vital Joints</strong> Formel mit Glucosamin, Chondroitin und MSM kann 
                        die Gelenkgesundheit deines Hundes unterstützen und das Risiko für Bandscheibenvorfälle reduzieren.
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
                      <a href="#was-ist" className="block text-sm text-green/70 hover:text-copper transition-colors">Was ist ein Bandscheibenvorfall?</a>
                      <a href="#symptome" className="block text-sm text-green/70 hover:text-copper transition-colors">Symptome erkennen</a>
                      <a href="#risikofaktoren" className="block text-sm text-green/70 hover:text-copper transition-colors">Risikofaktoren</a>
                      <a href="#behandlung" className="block text-sm text-green/70 hover:text-copper transition-colors">Behandlung</a>
                      <a href="#hilfe" className="block text-sm text-green/70 hover:text-copper transition-colors">Soforthilfe</a>
                      <a href="#praevention" className="block text-sm text-green/70 hover:text-copper transition-colors">Prävention</a>
                    </nav>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Verwandte Artikel</h3>
                    <div className="space-y-4">
                      <Link href="/ratgeber/spondylose-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Spondylose beim Hund
                        </div>
                        <div className="text-xs text-green/60">Symptome und Behandlung</div>
                      </Link>
                      <Link href="/ratgeber/gelenkprobleme-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Gelenkprobleme früh erkennen
                        </div>
                        <div className="text-xs text-green/60">Prävention und Therapie</div>
                      </Link>
                      <Link href="/ratgeber/schmerztherapie-hund" className="block group">
                        <div className="text-sm font-medium text-green group-hover:text-copper transition-colors">
                          Natürliche Schmerztherapie
                        </div>
                        <div className="text-xs text-green/60">Sanfte Alternativen</div>
                      </Link>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-copper/10 to-green/10 p-6 rounded-xl border border-copper/20">
                    <h3 className="wv-h4 text-green wv-spacing-sm">Gelenke unterstützen</h3>
                    <p className="wv-body text-green/80 wv-spacing-sm text-sm">
                      Unsere Vital Joints Formel kann die Gelenkgesundheit deines Hundes unterstützen.
                    </p>
                    <Link href="/produkte/vital-joints" className="btn-primary pill text-cream px-4 py-2 text-sm font-medium inline-block wv-spacing-sm">
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
