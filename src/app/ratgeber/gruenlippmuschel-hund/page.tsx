import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import RatgeberArticleLayout from "@/components/RatgeberArticleLayout";

export const metadata = {
  title: 'Grünlippmuschel beim Hund: Evidenz & Anwendung | Founding Paws',
  description: 'Perna canaliculus: verbesserte Bodenreaktionskraft, niedrigere Schmerzwerte – natürliche Unterstützung für Gelenke.',
  alternates: { canonical: '/ratgeber/gruenlippmuschel-hund' },
  openGraph: { title: 'Grünlippmuschel (Perna canaliculus)', description: 'Evidenz & praktische Tipps.', type: 'article' }
};

export default function GruenlippmuschelHundPage() {
  return (
    <main className="bg-cream text-green">
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/20 border border-cream/30 px-6 py-3 wv-eyebrow" style={{color:'white'}}>Gelenke & Mobilität</div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color:'white'}}>Grünlippmuschel – naturbelassene Unterstützung für Gelenke</h1>
              <div className="w-20 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color:'rgba(255,255,255,0.95)'}}>Studien zeigen bessere Aktivität, geringere Schmerzen und höhere Omega‑3‑Spiegel – so setzt du GLM sinnvoll ein.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <RatgeberArticleLayout
        slug="/ratgeber/gruenlippmuschel-hund"
        takeaways={[
          "GLM kann Gelenkfunktion unterstützen und Schmerzen reduzieren",
          "Dosierung produktabhängig; Wirkung nach 4–8 Wochen beurteilen",
          "Vorsicht bei Muschelallergie; Qualität prüfen",
        ]}
      >
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none">
            <h2 className="wv-h2 text-green wv-spacing-lg">Vorteile</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• Natürliche Kombination aus Omega‑3, GAGs und Mineralstoffen</li>
              <li>• Unterstützt Gelenkfunktion, reduziert Schmerzen</li>
              <li>• Nachhaltig gewonnener Rohstoff</li>
            </ul>

            <h2 className="wv-h2 text-green wv-spacing-lg">Dosierung (Richtwerte)</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• 10–20 mg GLM‑Extrakt/kg KGW/Tag (Produktabhängigkeit beachten).</li>
              <li>• Einschleichen über 7–10 Tage, Wirkung nach 4–8 Wochen beurteilen.</li>
            </ul>

            <h2 className="wv-h2 text-green wv-spacing-lg">Sicherheit</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• Meist gut verträglich; selten weicher Kot/Magen‑Darm.</li>
              <li>• Muschelallergie/Meeresfrüchte‑Allergie: vorher tierärztlich klären.</li>
            </ul>

            <h2 className="wv-h2 text-green wv-spacing-lg">Quellen (Auswahl)</h2>
            <ul className="wv-body text-green/80 space-y-2">
              <li>• Randomisierte Studien zu <em>Perna canaliculus</em> bei caniner OA (Schmerzscore, Aktivität, Omega‑3‑Spiegel).</li>
              <li>• Übersichtsarbeiten zu Glykosaminoglykanen und marinen Lipiden in der Gelenkgesundheit.</li>
            </ul>
          </div>
        </ScrollAnimation>
      </RatgeberArticleLayout>

      <section className="wv-section bg-green text-cream">
        <div className="container-wide text-center">
          <Link href="/ratgeber" className="btn-primary pill text-cream px-8 py-4 font-medium">Weitere Artikel</Link>
        </div>
      </section>
    </main>
  );
}


