import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData, getServiceBySlug, mainServices, repairServices } from '@/lib/services-data';
import { site, waLink } from '@/lib/site';
import PageHeader from '@/components/PageHeader';
import SectionHead from '@/components/SectionHead';
import CtaStrip from '@/components/CtaStrip';
import {
  CheckIcon,
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  PinIcon,
  ShieldIcon,
  BoltIcon,
  WrenchIcon,
  BuildingIcon,
  RefreshCheckIcon,
  StarIcon,
} from '@/components/Icons';

const featureIcons = [ShieldIcon, BoltIcon, WrenchIcon, BuildingIcon, RefreshCheckIcon, StarIcon];

// Static export için tüm slug'ları üret
export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/hizmetler/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  // İlgili sayfalar — aynı kategoriden 4 tane
  const sameCategory = servicesData.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 4);

  // Service Schema.org JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
  };

  // FAQ Schema.org
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHeader
        title={service.hero.h1}
        subtitle={service.hero.intro}
        breadcrumb={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hizmetler', href: '/hizmetler' },
          { label: service.navTitle },
        ]}
      />

      {/* Intro içerik */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Sol: Metin */}
            <div>
              <span className="inline-block text-[13px] font-bold text-brand-red uppercase tracking-[2px] mb-3">
                {service.category === 'ana' ? 'Ana Hizmet' : 'Tamir Hizmeti'}
              </span>
              <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-navy tracking-tight leading-tight mb-6">
                {service.title} Hakkında
              </h2>

              <div className="space-y-5 text-slate-700 text-[16px] leading-[1.85]">
                {service.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={waLink(`Merhaba, ${service.title} hizmeti almak istiyorum.`)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-base rounded-lg bg-whatsapp text-white hover:bg-whatsapp-dark transition-all hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp ile Bilgi Al
                </a>
                <Link
                  href="/servis-talep"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-base rounded-lg bg-brand-red text-white hover:bg-brand-red-dark transition-all hover:-translate-y-0.5"
                >
                  Servis Talebi Oluştur
                </Link>
              </div>
            </div>

            {/* Sağ: Sticky bilgi kartı */}
            <aside className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white rounded-2xl p-7 shadow-lg2">
                <span
                  aria-hidden
                  className="absolute -top-12 -right-12 w-[200px] h-[200px] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.3) 0%, transparent 70%)' }}
                />
                <div className="relative">
                  <div className="text-[12px] uppercase tracking-[2px] text-white/60 mb-2">Hızlı İletişim</div>
                  <h3 className="text-xl font-extrabold mb-5">7/24 Servis Hattı</h3>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-9 h-9 bg-white/10 rounded-lg grid place-items-center flex-shrink-0 text-brand-red">
                        <PhoneIcon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[12px] text-white/60">Telefon</span>
                        <a href={`tel:${site.phone.href}`} className="block text-[15px] font-semibold hover:text-brand-red transition-colors">
                          {site.phone.display}
                        </a>
                        <a href={`tel:${site.phoneAlt.href}`} className="block text-[15px] font-semibold hover:text-brand-red transition-colors">
                          {site.phoneAlt.display}
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-9 h-9 bg-white/10 rounded-lg grid place-items-center flex-shrink-0 text-brand-red">
                        <WhatsAppIcon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[12px] text-white/60">WhatsApp</span>
                        <a
                          href={waLink()}
                          target="_blank"
                          rel="noopener"
                          className="block text-[15px] font-semibold hover:text-brand-red transition-colors"
                        >
                          {site.whatsapp.display}
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-9 h-9 bg-white/10 rounded-lg grid place-items-center flex-shrink-0 text-brand-red">
                        <MailIcon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[12px] text-white/60">E-Posta</span>
                        <a
                          href={`mailto:${site.email}`}
                          className="block text-[14px] font-semibold hover:text-brand-red transition-colors break-all"
                        >
                          {site.email}
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-9 h-9 bg-white/10 rounded-lg grid place-items-center flex-shrink-0 text-brand-red">
                        <PinIcon className="w-4 h-4" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[12px] text-white/60">Adres</span>
                        <a
                          href={`https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}`}
                          target="_blank"
                          rel="noopener"
                          className="block text-[13px] font-semibold hover:text-brand-red transition-colors leading-snug"
                        >
                          {site.address.full}
                        </a>
                      </span>
                    </li>
                  </ul>

                  <div className="border-t border-white/10 pt-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-[13px] text-white/85">
                      <CheckIcon className="w-4 h-4 text-brand-red flex-shrink-0" />
                      Aynı gün servis prensibi
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-white/85">
                      <CheckIcon className="w-4 h-4 text-brand-red flex-shrink-0" />
                      İşçilik garantili onarım
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-white/85">
                      <CheckIcon className="w-4 h-4 text-brand-red flex-shrink-0" />
                      Türkiye geneli hizmet
                    </div>
                  </div>

                  <a
                    href={waLink(`Merhaba, ${service.title} için hızlı destek almak istiyorum.`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-[15px] rounded-lg bg-whatsapp text-white hover:bg-whatsapp-dark transition-colors"
                  >
                    <WhatsAppIcon className="w-[18px] h-[18px]" />
                    Hemen WhatsApp&apos;tan Yaz
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Hizmet Kapsamı" title={`${service.title} Avantajları`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <article
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg2"
                >
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-navy to-navy-light rounded-2xl grid place-items-center text-white">
                    <Icon className="w-[26px] h-[26px]" />
                  </div>
                  <p className="text-slate-700 leading-relaxed text-[15px]">{f}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Çalışma Süreci" title={`${service.title} Sürecimiz`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <article key={i} className="relative bg-white border border-slate-200 rounded-2xl p-6">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-red text-white rounded-full grid place-items-center font-extrabold text-lg shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-[17px] font-bold text-navy mb-2 mt-2">{p.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-[860px] mx-auto px-6">
          <SectionHead eyebrow="Sıkça Sorulan Sorular" title={`${service.navTitle} Hakkında Merak Edilenler`} />
          <div className="space-y-4">
            {service.faq.map((f, i) => (
              <details
                key={i}
                className="group bg-white border border-slate-200 rounded-xl px-6 py-5 transition-shadow hover:shadow-soft"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center text-navy font-bold text-[17px] gap-4">
                  <span>{f.q}</span>
                  <span className="text-brand-red text-2xl leading-none transition-transform group-open:rotate-45 flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-[15px]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* İlgili sayfalar */}
      {sameCategory.length > 0 && (
        <section className="py-16">
          <div className="max-w-container mx-auto px-6">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">İlgili Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sameCategory.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-red hover:shadow-soft transition-all"
                >
                  <h3 className="font-bold text-navy text-[15px] mb-1">{s.navTitle}</h3>
                  <p className="text-slate-500 text-[13px] line-clamp-2">{s.shortDesc}</p>
                  <span className="inline-block mt-2 text-brand-red text-[13px] font-semibold">Detayları Gör →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaStrip
        title={`${service.title} için hemen iletişime geçin`}
        description="WhatsApp veya servis talep formu ile en kısa sürede yanıt alın."
      />
    </>
  );
}
