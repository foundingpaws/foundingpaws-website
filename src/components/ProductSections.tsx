"use client";

import { useState } from "react";
import Image from "next/image";
import CollapsibleSection from "./CollapsibleSection";

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

  const tabs = [
    { id: "overview", label: "Übersicht" },
    { id: "ingredients", label: "Wirkstoffe" },
    { id: "science", label: "Wissenschaft" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <div className="space-y-12">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab.id
                  ? "border-accent text-accent"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
              <h2 className="text-3xl font-bold text-gray-900">Warum es wirkt</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
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
                        <Image
                          src={ingredient.icon}
                          alt={ingredient.name}
                          width={32}
                          height={32}
                          className="w-8 h-8"
                        />
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
