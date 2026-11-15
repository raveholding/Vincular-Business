import type { MetadataRoute } from 'next';
import { SITIO } from '@/lib/rubros';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${SITIO}/sitemap.xml` };
}
