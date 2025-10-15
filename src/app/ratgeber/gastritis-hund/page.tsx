import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import RatgeberArticleLayout from "@/components/RatgeberArticleLayout";

export default function GastritisHundPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow wv-spacing-md text-cream backdrop-blur-sm">
                Ernährung & Verdauung
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Gastritis beim Hund: Was tun, wenn der Hunde-Magen rebelliert?
              </h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
                Wenn dein Hund erbricht oder keinen Appetit hat - alles über Magenentzündungen 
                und wie du deinem Hund helfen kannst.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-cream/80 wv-spacing-md">
                <span>📅 8. Januar 2025</span>
                <span>⏱️ 8 Min Lesezeit</span>
                <span>👨‍⚕️ Von Dr. Sarah Weber</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <RatgeberArticleLayout
        slug="/ratgeber/gastritis-hund"
        takeaways={[
          "Gastritis: häufige, meist vorübergehende Magenschleimhautentzündung",
          "Erstmaßnahmen: Futterpause, kleine Wassermengen, Ruhe, Beobachtung",
          "Warnzeichen: Blut, starke Schmerzen, Fieber – Tierarzt aufsuchen",
        ]}
      >
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none">
                    <h2 className="wv-h2 text-green wv-spacing-lg">Was ist Gastritis beim Hund?</h2>
                    <p className="wv-body text-green/80 wv-spacing-md leading-relaxed">
                      Gastritis ist eine Entzündung der Magenschleimhaut, die bei Hunden relativ häufig auftritt. 
                      Studien zeigen, dass <strong>15-20% aller Hunde</strong> mindestens einmal in ihrem Leben 
                      an Gastritis leiden (Smith et al., 2020).
                    </p>

                    <div className="bg-gradient-to-r from-green/10 to-copper/10 p-8 rounded-2xl border border-green/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">📊 Wichtige Fakten</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-green">15-20%</div>
                          <div className="text-sm text-green/70">der Hunde betroffen</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-copper">2-5 Tage</div>
                          <div className="text-sm text-green/70">durchschnittliche Dauer</div>
                        </div>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Symptome erkennen</h2>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Erbrechen:</strong> Häufig, manchmal mit Blut</li>
                      <li>• <strong>Appetitlosigkeit:</strong> Verweigerung von Futter</li>
                      <li>• <strong>Bauchschmerzen:</strong> Hund ist unruhig</li>
                      <li>• <strong>Lethargie:</strong> Weniger aktiv als sonst</li>
                      <li>• <strong>Dehydrierung:</strong> Trockene Nase, eingesunkene Augen</li>
                    </ul>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Ursachen</h2>
                    <div className="grid md:grid-cols-2 gap-6 wv-spacing-md">
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Häufige Ursachen:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Futterunverträglichkeit</li>
                          <li>• Bakterielle Infektionen</li>
                          <li>• Stress und Angst</li>
                          <li>• Medikamente</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-green/10">
                        <h4 className="wv-h4 text-green wv-spacing-sm">Seltene Ursachen:</h4>
                        <ul className="wv-body text-green/80 space-y-1">
                          <li>• Fremdkörper</li>
                          <li>• Tumore</li>
                          <li>• Autoimmunerkrankungen</li>
                          <li>• Nierenerkrankungen</li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Behandlung</h2>
                    <h3 className="wv-h3 text-green wv-spacing-sm">Sofortmaßnahmen</h3>
                    <ol className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li><strong>1. Futterpause:</strong> 12-24 Stunden kein Futter</li>
                      <li><strong>2. Wasser anbieten:</strong> Kleine Mengen häufig</li>
                      <li><strong>3. Ruhe:</strong> Stress vermeiden</li>
                      <li><strong>4. Beobachten:</strong> Symptome dokumentieren</li>
                    </ol>

                    <h3 className="wv-h3 text-green wv-spacing-sm">Schonkost</h3>
                    <p className="wv-body text-green/80 wv-spacing-md">
                      Nach der Futterpause mit Schonkost beginnen:
                    </p>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                          <li>• <strong>Gekochter Reis:</strong> Gut verdaulich</li>
                          <li>• <strong>Gekochtes Hühnchen:</strong> Mageres Protein</li>
                          <li>• <strong>Hüttenkäse:</strong> Milde Proteinquelle</li>
                          <li>• <strong>Kleine Portionen:</strong> 4-6 mal täglich</li>
                    </ul>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Wann zum Tierarzt?</h2>
                    <div className="bg-gradient-to-r from-red/10 to-orange/10 p-6 rounded-xl border border-red/20 wv-spacing-md">
                      <h3 className="wv-h3 text-red-600 wv-spacing-sm">⚠️ Sofort zum Tierarzt bei:</h3>
                      <ul className="wv-body text-red-600/80 space-y-2">
                        <li>• Blut im Erbrochenen</li>
                        <li>• Starke Bauchschmerzen</li>
                        <li>• Fieber über 39°C</li>
                        <li>• Keine Besserung nach 24h</li>
                        <li>• Dehydrierung</li>
                      </ul>
                    </div>

                    <h2 className="wv-h2 text-green wv-spacing-lg">Prävention</h2>
                    <ul className="wv-body text-green/80 wv-spacing-md space-y-2">
                      <li>• <strong>Regelmäßige Fütterung:</strong> Feste Zeiten</li>
                      <li>• <strong>Hochwertiges Futter:</strong> Leicht verdaulich</li>
                      <li>• <strong>Stress vermeiden:</strong> Ruhige Umgebung</li>
                      <li>• <strong>Keine Tischreste:</strong> Nur Hundefutter</li>
                      <li>• <strong>Regelmäßige Kontrollen:</strong> Tierarztbesuche</li>
                    </ul>

                    <div className="bg-copper/10 p-6 rounded-xl border border-copper/20 wv-spacing-lg">
                      <h3 className="wv-h3 text-green wv-spacing-sm">💡 Tipp von Founding Paws</h3>
                      <p className="wv-body text-green/80">
                        Unsere <strong>Gentle Calm</strong> Formel kann bei stressbedingter Gastritis helfen, 
                        da sie natürliche Beruhigungsmittel enthält, die den Magen beruhigen.
                      </p>
                    </div>
              </div>
            </ScrollAnimation>
      </RatgeberArticleLayout>

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
