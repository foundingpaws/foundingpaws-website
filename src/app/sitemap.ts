import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://foundingpaws.de';
  const now = new Date().toISOString();
  return [
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
  ];
}


