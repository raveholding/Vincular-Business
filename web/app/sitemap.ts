import type { MetadataRoute } from 'next';
import { SITIO } from '@/lib/sitio';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITIO}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITIO}/soporte`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITIO}/legal`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
