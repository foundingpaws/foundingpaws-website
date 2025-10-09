export default function BundleTeaser() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-taupe/10 via-cream to-copper/5">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="use-retrips text-3xl sm:text-5xl text-green mb-4">Sparpakete (Platzhalter)</h2>
          <p className="use-fredoka text-green/70">Nur falls real geplant – ansonsten ausgeblendet</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <div key={i} className="bg-white/70 backdrop-blur-sm border border-taupe/20 rounded-[24px] p-6 text-center">
              <div className="pill bg-copper/15 border border-copper/25 text-copper text-xs px-3 py-1 inline-block mb-3">Platzhalter</div>
              <div className="use-fredoka text-green mb-2">Bundle {i}</div>
              <div className="text-green/70 text-sm mb-4">Beschreibung folgt</div>
              <a href="#waitlist" className="pill bg-copper text-cream px-6 py-3 inline-block text-sm">Interesse vormerken</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


