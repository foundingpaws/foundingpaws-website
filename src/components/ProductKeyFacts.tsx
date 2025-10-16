"use client";
import IconMadeInGermany from "@/components/icons/IconMadeInGermany";
import IconLab from "@/components/icons/IconLab";
import IconStethoscope from "@/components/icons/IconStethoscope";
import IconNatural100 from "@/components/icons/IconNatural100";

interface ProductKeyFactsProps {
  productTitle: string;
}

export default function ProductKeyFacts({ productTitle }: ProductKeyFactsProps) {
  const items = [
    { icon: <IconMadeInGermany className="w-6 h-6 text-green" />, label: "Made in Germany" },
    { icon: <IconLab className="w-6 h-6 text-green" />, label: "Laborgeprüft" },
    { icon: <IconNatural100 className="w-6 h-6 text-green" />, label: "100% Natürlich" },
    { icon: <IconStethoscope className="w-6 h-6 text-green" />, label: "Tierärztlich entwickelt" },
  ];

  return (
    <section className="bg-white pdp-keyfacts">
      <div className="container-wide py-6">
        <div className="flex flex-wrap items-center gap-4 justify-center">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 border border-green/10">
              {it.icon}
              <span className="text-sm font-medium text-green">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


