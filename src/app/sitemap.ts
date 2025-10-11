import type { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://foundingpaws.de';
  const now = new Date().toISOString();
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/kognition-herz`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/stress-angst`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gelenke-mobilitaet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/haut-fell`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/immunsystem`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/agb`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/widerruf`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    // Ratgeber
    { url: `${base}/ratgeber`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    // Produkte
    { url: `${base}/produkte`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/produkte/bright-mind`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/produkte/gentle-calm`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/produkte/vital-joints`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const articleEntries: MetadataRoute.Sitemap = articles.map(a => ({
    url: `${base}${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const catSet = new Set<string>();
  for (const a of articles) catSet.add(a.category);
  const categoryEntries: MetadataRoute.Sitemap = Array.from(catSet).map(cat => ({
    url: `${base}/ratgeber/kategorie/${encodeURIComponent(cat)}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries, ...categoryEntries];
}


