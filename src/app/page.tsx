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
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhyFoundingPaws />
      <ProductTeasers />
      <IngredientsShowcase />
      <LifestyleShowcase />
      <CharitySection />
      <FinderMVP />
      <KnowledgeHub />
      <BlogSection />
      <SocialProof />
      <FAQ />
      <CTA />
    </main>
  );
}