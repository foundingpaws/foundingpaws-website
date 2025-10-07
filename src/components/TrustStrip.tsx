'use client';
import IconStethoscope from "@/components/icons/IconStethoscope";
import IconShield from "@/components/icons/IconShield";
import IconLeaf from "@/components/icons/IconLeaf";
import ParallaxElement from "@/components/ParallaxElement";
import Transform3D from "@/components/Transform3D";

export default function TrustStrip() {

  return (
    <ParallaxElement speed="fast" className="bg-cream py-6 border-y border-taupe/15">
      <div className="container-wide">
        <div className="hidden md:flex items-center justify-between text-green/90">
          <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
            <IconStethoscope className="w-6 h-6 icon-hover" />
            <span className="wv-body">Mit Tierärzten entwickelt</span>
          </Transform3D>
          <div className="w-px h-5 bg-green/20" />
          <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
            <IconShield className="w-6 h-6 icon-hover" />
            <span className="wv-body">Made in Germany</span>
          </Transform3D>
          <div className="w-px h-5 bg-green/20" />
          <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
            <IconShield className="w-6 h-6 icon-hover" />
            <span className="wv-body">Manufaktur Heilbronn</span>
          </Transform3D>
          <div className="w-px h-5 bg-green/20" />
          <Transform3D hoverEffect="tilt" className="flex items-center gap-3 micro-pulse">
            <IconLeaf className="w-6 h-6 icon-hover" />
            <span className="wv-body">100% natürliche Inhaltsstoffe</span>
          </Transform3D>
        </div>
        <div className="md:hidden grid grid-cols-2 gap-4 text-center text-green/90">
          <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-2 micro-bounce">
            <IconStethoscope className="w-6 h-6 icon-hover"/>
            <span className="wv-caption">Tierärzte</span>
          </Transform3D>
          <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-2 micro-bounce">
            <IconShield className="w-6 h-6 icon-hover"/>
            <span className="wv-caption">Made in DE</span>
          </Transform3D>
          <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-2 micro-bounce">
            <IconShield className="w-6 h-6 icon-hover"/>
            <span className="wv-caption">Heilbronn</span>
          </Transform3D>
          <Transform3D hoverEffect="tilt" className="flex flex-col items-center gap-2 micro-bounce">
            <IconLeaf className="w-6 h-6 icon-hover"/>
            <span className="wv-caption">Natürlich</span>
          </Transform3D>
        </div>
      </div>
    </ParallaxElement>
  );
}