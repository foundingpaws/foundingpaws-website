"use client";
import IconMadeInGermany from "@/components/icons/IconMadeInGermany";
import IconLab from "@/components/icons/IconLab";
import IconStethoscope from "@/components/icons/IconStethoscope";
import IconShield from "@/components/icons/IconShield";
import IconRocket from "@/components/icons/IconRocket";
import IconNatural100 from "@/components/icons/IconNatural100";

export default function TrustBadges() {
  const badges = [
    {
      icon: <IconMadeInGermany className="w-5 h-5 text-green-700" />,
      title: "Made in Germany",
      description: "Hergestellt in Heilbronn"
    },
    {
      icon: <IconLab className="w-5 h-5 text-green-700" />,
      title: "Laborgeprüft",
      description: "Jede Charge getestet"
    },
    {
      icon: <IconNatural100 className="w-5 h-5 text-green-700" />,
      title: "100% Natürlich",
      description: "Keine Zusatzstoffe"
    },
    {
      icon: <IconStethoscope className="w-5 h-5 text-green-700" />,
      title: "Tierärztlich entwickelt",
      description: "Von Experten entwickelt"
    },
    {
      icon: <IconRocket className="w-5 h-5 text-green-700" />,
      title: "Schneller Versand",
      description: "Ab 50€ kostenfrei"
    },
    {
      icon: <IconShield className="w-5 h-5 text-green-700" />,
      title: "30 Tage Rückgabe",
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
            <div className="flex-shrink-0">
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
            <IconShield className="w-4 h-4 text-green-600" />
            <span>Sichere Zahlung</span>
          </div>
          <div className="flex items-center gap-2">
            <IconShield className="w-4 h-4 text-green-600" />
            <span>SSL Verschlüsselt</span>
          </div>
        </div>
      </div>
    </div>
  );
}
