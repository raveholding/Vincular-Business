import type { MetadataRoute } from 'next';
import { SITIO, FUNDADORES } from '@/lib/sitio';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITIO}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITIO}/legal`, changeFrequency: 'yearly', priority: 0.3 },
    ...FUNDADORES.map((f) => ({ url: `${SITIO}/equipo/${f.id}`, changeFrequency: 'yearly' as const, priority: 0.4 })),
  ];
}
