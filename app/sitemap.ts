import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { servicesData } from '@/lib/services-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/hizmetler', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/oztiryakiler-servisi', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/oztiryakiler-tamiri', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/oztiryakiler-bakimi', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/oztiryakiler-urunleri', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/kurumsal', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/servis-talep', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/iletisim', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  // Tüm hizmet detay sayfaları
  const serviceRoutes = servicesData.map((s) => ({
    path: `/hizmetler/${s.slug}`,
    priority: s.category === 'ana' ? 0.85 : 0.8,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...serviceRoutes].map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
