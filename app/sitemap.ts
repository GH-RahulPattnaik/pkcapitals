import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

/** Sitemap for search engines. The site is one page, so only the home URL is listed. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }];
}
