"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CollapsibleSection from "./CollapsibleSection";
import ProductBenefits from "./ProductBenefits";
import IngredientIcon from "./IngredientIcon";
import IconTrust from "@/components/icons/IconTrust";
import IconQualityLab from "@/components/icons/IconQualityLab";
import IconVetApproved from "@/components/icons/IconVetApproved";

interface Product {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  accent: string;
  comingSoon: boolean;
  benefits: string[];
  ingredients: Array<{
    name: string;
    amount: string;
    benefit: string;
    icon: string;
  }>;
  dosage: string;
  targetGroup: string;
  application: string;
  science: Array<{
    title: string;
    description: string;
    link: string;
    source: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

interface ProductSectionsProps {
  product: Product;
}

export default function ProductSections({ product }: ProductSectionsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const ids = ["overview", "ingredients", "science", "faq"];
    const sections = ids
      .map((id) => document.getElementById(`tabpanel-${id}`))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]) {
          const id = visible[0].target.id.replace("tabpanel-", "");
          setActiveTab(id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: "overview", label: "Übersicht" },
    { id: "ingredients", label: "Wirkstoffe" },
    { id: "science", label: "Wissenschaft" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <div className="space-y-16">
      {/* Tab Navigation */}
      <div className="border-b border-green/15 sticky top-14 z-20 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80 tab-navigation">
        <nav className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 container-wide overflow-x-auto tab-container" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                const el = document.getElementById(`tabpanel-${tab.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`py-3 sm:py-4 px-2 sm:px-3 md:px-4 border-b-2 font-medium text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0 tab-button ${
                activeTab === tab.id
                  ? "border-accent text-accent"
                  : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
              }`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div id="tabpanel-overview" role="tabpanel" aria-labelledby="tab-overview">
            {/* Für wen? */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Für wen ist {product.title}?</h2>
              <div className="bg-green/5 border border-green/20 rounded-2xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.targetGroup}
                </p>
              </div>
            </section>

            {/* Warum es wirkt */}
            <section className="space-y-6">
              <ProductBenefits benefits={product.benefits} category={product.category} />
            </section>

            {/* Anwendung & Dosierung */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Anwendung & Dosierung</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dosierung</h3>
                  <p className="text-lg text-gray-700">{product.dosage}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Anwendung</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{product.application}</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Ingredients Tab */}
        {activeTab === "ingredients" && (
          <div id="tabpanel-ingredients" role="tabpanel" aria-labelledby="tab-ingredients">
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Wirkstoffprofil</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IngredientIcon name={ingredient.name} className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {ingredient.name}
                          </h3>
                          <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {ingredient.amount}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {ingredient.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Science Tab */}
        {activeTab === "science" && (
          <div id="tabpanel-science" role="tabpanel" aria-labelledby="tab-science">
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Wissenschaft & Studien</h2>
              <div className="space-y-6">
                {product.science.map((study, index) => (
                  <CollapsibleSection
                    key={index}
                    title={study.title}
                    content={
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">{study.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="text-sm font-medium text-gray-500">{study.source}</span>
                          <a
                            href={study.link}
                            className="text-accent hover:text-accent-dark font-medium text-sm transition-colors"
                          >
                            Studie lesen →
                          </a>
                        </div>
                      </div>
                    }
                  />
                ))}
              </div>
            </section>

            {/* Warum Founding Paws – CTA Section */}
            <section className="mt-12">
              <div className="bg-green/5 border border-green/15 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Warum Founding Paws?</h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-green/10">
                    <IconQualityLab className="w-5 h-5 text-green" />
                    <div className="text-sm font-medium text-gray-800">Laborgeprüfte Qualität</div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-green/10">
                    <IconVetApproved className="w-5 h-5 text-green" />
                    <div className="text-sm font-medium text-gray-800">Tierärztlich entwickelt</div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-green/10">
                    <IconTrust className="w-5 h-5 text-green" />
                    <div className="text-sm font-medium text-gray-800">Transparenz & Verantwortung</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <a href="#waitlist" className="px-6 py-3 rounded-full bg-copper text-white font-medium hover:bg-copper/90 transition-colors">Warteliste sichern</a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div id="tabpanel-faq" role="tabpanel" aria-labelledby="tab-faq">
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Häufige Fragen</h2>
              <div className="space-y-4">
                {product.faqs.map((faq, index) => (
                  <CollapsibleSection
                    key={index}
                    title={faq.question}
                    content={
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    }
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
