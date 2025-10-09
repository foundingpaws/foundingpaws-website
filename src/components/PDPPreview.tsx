type PDPProps = {
  title: string;
  subtitle: string;
  link: string;
};

export default function PDPPreview({ title, subtitle, link }: PDPProps) {
  return (
    <article className="bg-white/80 border border-taupe/15 rounded-[24px] p-6">
      <h3 className="use-retrips text-2xl text-green">{title}</h3>
      <p className="use-fredoka text-copper mb-3 sm:mb-4">{subtitle}</p>
      <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-sm text-green/80">
        <div>
          <div className="font-medium text-green">Wirkprinzip</div>
          <p>Synergistische Nährstoffprofile unterstützen gezielte Körperfunktionen – fundiert, nicht esoterisch.</p>
        </div>
        <div>
          <div className="font-medium text-green">Inhaltsstoffe</div>
          <p>Nur laborgeprüfte Rohstoffe in evidenzbasierter Dosierung – ohne Füllstoffe.</p>
        </div>
        <div>
          <div className="font-medium text-green">Anwendung</div>
          <p>Einfach täglich zum Futter geben – klare Dosierungsempfehlung nach Gewicht.</p>
        </div>
      </div>
      <a href={link} className="pill bg-copper text-cream px-5 py-2 inline-block mt-6 text-sm">Mehr erfahren →</a>
    </article>
  );
}


