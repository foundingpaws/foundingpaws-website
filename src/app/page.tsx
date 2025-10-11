import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
const TrustStrip = dynamic(() => import("@/components/TrustStrip"));
const WhyFoundingPaws = dynamic(() => import("@/components/WhyFoundingPaws"));
const ProductTeasers = dynamic(() => import("@/components/ProductTeasers"));
const IngredientsShowcase = dynamic(() => import("@/components/IngredientsShowcase"));
// const LifestyleShowcase = dynamic(() => import("@/components/LifestyleShowcase")); // not used currently
const CharitySection = dynamic(() => import("@/components/CharitySection"));
// const FinderMVP = dynamic(() => import("@/components/FinderMVP")); // not used currently
const KnowledgeHub = dynamic(() => import("@/components/KnowledgeHub"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const SocialProof = dynamic(() => import("@/components/SocialProof"));
const FAQ = dynamic(() => import("@/components/FAQ"));
import StickyCTA from "@/components/StickyCTA";
import MobileQuickNav from "@/components/MobileQuickNav";
import MobileOptimizedSection from "@/components/MobileOptimizedSection";
import LeadCaptureModal from "@/components/LeadCaptureModal";

export default function HomePage() {
  return (
    <main>
      <LeadCaptureModal delayMs={3000} />
      {/* CONVERSION-OPTIMIERTE LAYOUT */}
      <StickyCTA />
      <MobileQuickNav />
      
      <Hero />
      <TrustStrip />
      <WhyFoundingPaws />
      
      {/* Mobile-optimierte Produktsektion */}
      <MobileOptimizedSection 
        id="products" 
        title="Unsere Premium-Formeln"
        defaultExpanded={true}
      >
        <ProductTeasers />
      </MobileOptimizedSection>
      
      {/* Mobile-optimierte Zutaten-Sektion */}
      <MobileOptimizedSection 
        id="ingredients" 
        title="Wissenschaftliche Zutaten"
        compactView={
          <div className="text-center py-8">
            <p className="text-green/70 mb-4">Hochwertige, evidenzbasierte Inhaltsstoffe</p>
            <a href="#ingredients" className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all duration-300">
              Zutaten ansehen →
            </a>
          </div>
        }
      >
        <IngredientsShowcase />
      </MobileOptimizedSection>
      
      {/* OPTIMIERTE REIHENFOLGE FÜR BESSERE CONVERSION */}
      <SocialProof />
      
      {/* Lifestyle/Echte Momente und Bedarfsfinder entfernt für klareren Premium-Fokus */}
      
      <CharitySection />
      
      {/* CONTENT NACH KAUFENTSCHEIDUNG */}
      <KnowledgeHub />
      <BlogSection />
      
      {/* Mobile-optimierte FAQ-Sektion */}
      <MobileOptimizedSection 
        id="faq" 
        title="Häufige Fragen"
        compactView={
          <div className="text-center py-8">
            <p className="text-green/70 mb-4">Antworten auf deine wichtigsten Fragen</p>
            <a href="#faq" className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all duration-300">
              FAQ ansehen →
            </a>
          </div>
        }
      >
        <FAQ />
      </MobileOptimizedSection>
    </main>
  );
}