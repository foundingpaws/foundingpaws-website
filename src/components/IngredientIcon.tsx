"use client";
import IconLeaf from "@/components/icons/IconLeaf";
import IconBone from "@/components/icons/IconBone";
import IconBrainHeart from "@/components/icons/IconBrainHeart";
import IconHeart from "@/components/icons/IconHeart";
import IconLab from "@/components/icons/IconLab";
import IconNatural100 from "@/components/icons/IconNatural100";

interface IngredientIconProps {
  name: string;
  className?: string;
}

export default function IngredientIcon({ name, className }: IngredientIconProps) {
  const n = name.toLowerCase();
  const size = className || "w-10 h-10 text-green";
  if (n.includes("glucosamin") || n.includes("chondroitin") || n.includes("msm") || n.includes("hyaluron")) return <IconBone className={size} />;
  if (n.includes("grünlipp") || n.includes("muschel")) return <IconBone className={size} />;
  if (n.includes("omega") || n.includes("epa") || n.includes("dha") || n.includes("öl") || n.includes("leinsamen") || n.includes("lachs")) return <IconHeart className={size} />;
  if (n.includes("l-theanin") || n.includes("magnesium") || n.includes("passionsblume") || n.includes("kamille")) return <IconBrainHeart className={size} />;
  if (n.includes("vitamin") || n.includes("zink") || n.includes("biotin") || n.includes("kurkuma")) return <IconLab className={size} />;
  if (n.includes("hanf") || n.includes("nachtkerze") || n.includes("borretsch")) return <IconNatural100 className={size} />;
  return <IconLab className={size} />;
}


