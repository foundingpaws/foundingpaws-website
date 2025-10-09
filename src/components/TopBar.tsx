export default function TopBar() {
  return (
    <div className="bg-cream text-green wv-caption">
      <div className="container-wide flex items-center justify-between h-9">
        <div className="flex gap-4">
          <span>Made in Germany</span>
          <span className="hidden sm:inline">Klinisch fundierte Rezepturen</span>
        </div>
        <div className="hidden sm:block">Über 20.000+ positive Bewertungen</div>
      </div>
    </div>
  );
}


