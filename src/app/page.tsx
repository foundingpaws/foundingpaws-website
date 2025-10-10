import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyFoundingPaws from "@/components/WhyFoundingPaws";
import ProductTeasers from "@/components/ProductTeasers";
import IngredientsShowcase from "@/components/IngredientsShowcase";
import LifestyleShowcase from "@/components/LifestyleShowcase";
import CharitySection from "@/components/CharitySection";
import FinderMVP from "@/components/FinderMVP";
import KnowledgeHub from "@/components/KnowledgeHub";
import BlogSection from "@/components/BlogSection";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";

export default function HomePage() {
  return (
    <main>
      {/* CONVERSION-OPTIMIERTE LAYOUT */}
      <StickyCTA />
      
      <Hero />
      <TrustStrip />
      <WhyFoundingPaws />
      <ProductTeasers />
      <IngredientsShowcase />
      
      {/* OPTIMIERTE REIHENFOLGE FÜR BESSERE CONVERSION */}
      <SocialProof />
      <LifestyleShowcase />
      <FinderMVP />
      <CharitySection />
      
      {/* CONTENT NACH KAUFENTSCHEIDUNG */}
      <KnowledgeHub />
      <BlogSection />
      <FAQ />
    </main>
  );
}