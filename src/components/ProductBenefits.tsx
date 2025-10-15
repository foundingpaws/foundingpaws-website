"use client";
import IconLeaf from "@/components/icons/IconLeaf";
import IconBone from "@/components/icons/IconBone";
import IconBrainHeart from "@/components/icons/IconBrainHeart";
import IconHeart from "@/components/icons/IconHeart";
import IconSparkles from "@/components/icons/IconSparkles";

interface ProductBenefitsProps {
  benefits: string[];
  category: string;
}

function getBenefitIcon(benefit: string, category: string) {
  const b = benefit.toLowerCase();
  const c = category.toLowerCase();
  if (c.includes("gelenke")) return <IconBone className="w-6 h-6 text-green" />;
  if (c.includes("stress") || c.includes("angst") || b.includes("ruhe") || b.includes("schlaf")) return <IconBrainHeart className="w-6 h-6 text-green" />;
  if (c.includes("kognition") || b.includes("kognition") || b.includes("gehirn")) return <IconBrainHeart className="w-6 h-6 text-green" />;
  if (c.includes("herz") || b.includes("herz")) return <IconHeart className="w-6 h-6 text-green" />;
  if (c.includes("haut") || c.includes("fell") || b.includes("omega") || b.includes("haut") || b.includes("fell")) return <IconLeaf className="w-6 h-6 text-green" />;
  return <IconSparkles className="w-6 h-6 text-green" />;
}

export default function ProductBenefits({ benefits, category }: ProductBenefitsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Warum es wirkt</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-green/10 border border-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              {getBenefitIcon(benefit, category)}
            </div>
            <p className="text-gray-700 font-medium">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


