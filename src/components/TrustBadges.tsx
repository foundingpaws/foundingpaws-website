"use client";

export default function TrustBadges() {
  const badges = [
    {
      icon: "🇩🇪",
      title: "Made in Germany",
      description: "Hergestellt in Heilbronn"
    },
    {
      icon: "🔬",
      title: "Laborgeprüft",
      description: "Jede Charge getestet"
    },
    {
      icon: "🌿",
      title: "100% Natürlich",
      description: "Keine Zusatzstoffe"
    },
    {
      icon: "🩺",
      title: "Tierärztlich entwickelt",
      description: "Von Experten entwickelt"
    },
    {
      icon: "📦",
      title: "Kostenloser Versand",
      description: "Ab 50€ Bestellwert"
    },
    {
      icon: "↩️",
      title: "30 Tage Rückgaberecht",
      description: "Zufriedenheitsgarantie"
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Unsere Garantien
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="text-2xl flex-shrink-0">
              {badge.icon}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                {badge.title}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {badge.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Trust Elements */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Sichere Zahlung</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>SSL Verschlüsselt</span>
          </div>
        </div>
      </div>
    </div>
  );
}
