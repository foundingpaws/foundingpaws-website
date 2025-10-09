import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalLeadCapture from "@/components/GlobalLeadCapture";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <ProductShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <GlobalLeadCapture />
    </main>
  );
}
