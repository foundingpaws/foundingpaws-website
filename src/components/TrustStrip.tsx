'use client';
import IconStethoscope from "@/components/icons/IconStethoscope";
import IconShield from "@/components/icons/IconShield";
import IconLeaf from "@/components/icons/IconLeaf";
import IconLab from "@/components/icons/IconLab";
import IconHeart from "@/components/icons/IconHeart";
import ParallaxElement from "@/components/ParallaxElement";
import Transform3D from "@/components/Transform3D";

export default function TrustStrip() {

  return (
    <ParallaxElement speed="fast" className="bg-gradient-to-r from-cream via-cream/95 to-cream py-8 border-y border-taupe/15">
      <div className="container-wide">
        {/* Desktop - Zentrierte Anordnung mit besserer Balance */}
        <div className="hidden md:flex items-center justify-center text-green/90">
          <div className="flex items-center gap-8">
            <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
              <IconStethoscope className="w-7 h-7 icon-hover text-copper" />
              <span className="wv-body font-medium">Mit Tierärzten entwickelt</span>
            </Transform3D>
            <div className="w-px h-6 bg-green/30" />
            <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
              <IconShield className="w-7 h-7 icon-hover text-copper" />
              <span className="wv-body font-medium">Made in Germany</span>
            </Transform3D>
            <div className="w-px h-6 bg-green/30" />
            <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
              <IconLab className="w-7 h-7 icon-hover text-copper" />
              <span className="wv-body font-medium">Laborgeprüft</span>
            </Transform3D>
            <div className="w-px h-6 bg-green/30" />
            <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
              <IconLeaf className="w-7 h-7 icon-hover text-copper" />
              <span className="wv-body font-medium">100% natürlich</span>
            </Transform3D>
            <div className="w-px h-6 bg-green/30" />
            <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
              <IconHeart className="w-7 h-7 icon-hover text-copper" />
              <span className="wv-body font-medium">Jeder Kauf zählt</span>
            </Transform3D>
          </div>
        </div>
        
        {/* Mobile - Kompaktere 2x3 Grid statt 3x2 */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-6 text-center text-green/90">
            <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-3 micro-bounce">
              <IconStethoscope className="w-8 h-8 icon-hover text-copper"/>
              <span className="wv-body font-medium">Mit Tierärzten entwickelt</span>
            </Transform3D>
            <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-3 micro-bounce">
              <IconShield className="w-8 h-8 icon-hover text-copper"/>
              <span className="wv-body font-medium">Made in Germany</span>
            </Transform3D>
            <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-3 micro-bounce">
              <IconLab className="w-8 h-8 icon-hover text-copper"/>
              <span className="wv-body font-medium">Laborgeprüft</span>
            </Transform3D>
            <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-3 micro-bounce">
              <IconLeaf className="w-8 h-8 icon-hover text-copper"/>
              <span className="wv-body font-medium">100% natürlich</span>
            </Transform3D>
            <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-3 micro-bounce col-span-2">
              <IconHeart className="w-8 h-8 icon-hover text-copper"/>
              <span className="wv-body font-medium">Jeder Kauf zählt - 1% für Tierheime</span>
            </Transform3D>
          </div>
        </div>
      </div>
    </ParallaxElement>
  );
}