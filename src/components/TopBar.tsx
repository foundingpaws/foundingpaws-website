export default function TopBar() {
  return (
    <div className="bg-cream text-green text-xs">
      <div className="container-wide flex items-center justify-between h-9">
        <div className="flex gap-4">
          <span>90 Tage Geld-zurück-Garantie</span>
          <span className="hidden sm:inline">Klinisch fundierte Rezepturen</span>
        </div>
        <div className="hidden sm:block">Über 20.000+ positive Bewertungen</div>
      </div>
    </div>
  );
}


