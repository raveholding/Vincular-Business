import type { MetadataRoute } from 'next';
import { RUBROS, SITIO } from '@/lib/rubros';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITIO}/`, changeFrequency: 'weekly', priority: 1 },
    ...RUBROS.map((r) => ({ url: `${SITIO}/rubros/${r.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
