"use client";

import { usePathname } from "next/navigation";
import { articles } from "@/lib/articles";
import JsonLd from "@/components/JsonLd";

export default function RatgeberSeoInjector() {
  const pathname = usePathname();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.foundingpaws.de";

  if (!pathname || !pathname.startsWith("/ratgeber") || pathname === "/ratgeber") {
    return null;
  }

  const article = articles.find((a) => a.slug === pathname);
  if (!article) return null;

  const absoluteImage = article.image ? `${siteUrl}${article.image}` : `${siteUrl}/logo-header.png`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description || article.excerpt,
    image: [absoluteImage],
    author: { "@type": "Organization", name: "Founding Paws" },
    publisher: {
      "@type": "Organization",
      name: "Founding Paws",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo-header.png` },
    },
    url: `${siteUrl}${article.slug}`,
    mainEntityOfPage: `${siteUrl}${article.slug}`,
    inLanguage: "de-DE",
    articleSection: article.category,
    keywords: article.tags?.join(", ") || undefined,
    isAccessibleForFree: true,
  } as Record<string, unknown>;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${siteUrl}/ratgeber` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${siteUrl}${article.slug}` },
    ],
  };

  return (
    <>
      <JsonLd schema={articleSchema} />
      <JsonLd schema={breadcrumbSchema} />
    </>
  );
}


