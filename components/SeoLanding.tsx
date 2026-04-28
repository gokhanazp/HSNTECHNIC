import Link from 'next/link';
import { site, waLink, detailServices } from '@/lib/site';
import PageHeader from './PageHeader';
import SectionHead from './SectionHead';
import CtaStrip from './CtaStrip';
import {
  CheckIcon,
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  ShieldIcon,
  BoltIcon,
  WrenchIcon,
  BuildingIcon,
  RefreshCheckIcon,
  StarIcon,
} from './Icons';

export interface SeoLandingProps {
  keyword: string;
  pageTitle: string;
  hero: {
    h1: string;
    intro: string;
  };
  intro: string[];
  features: string[];
  whyUs: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
}

const featureIcons = [ShieldIcon, BoltIcon, WrenchIcon, BuildingIcon, RefreshCheckIcon, StarIcon];

export default function SeoLanding({
  keyword,
  pageTitle,
  hero,
  intro,
  features,
  whyUs,
  faq,
  relatedLinks,
}: SeoLandingProps) {
  return (
    <>
      <PageHeader
        title={hero.h1}
        subtitle={hero.intro}
        breadcrumb={[{ label: 'Ana Sayfa', href: '/' }, { label: pageTitle }]}
      />

      {/* Intro içerik */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Sol: Metin */}
            <div>
              <span className="inline-block text-[13px] font-bold text-brand-red uppercase tracking-[2px] mb-3">
                {pageTitle}
              </span>
              <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-navy tracking-tight leading-tight mb-6">
                {pageTitle} Hakkında Bilmeniz Gerekenler
              </h2>

              <div className="prose-content space-y-5 text-slate-700 text-[16px] leading-[1.85]">
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={waLink(`Merhaba, ${keyword} hakkında bilgi almak istiyorum.`)}
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
                    href={waLink(`Merhaba, ${keyword} hakkında hızlı destek almak istiyorum.`)}
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
          <SectionHead eyebrow={`${pageTitle} Avantajları`} title={`Neden ${pageTitle} İçin HSN TECHNIC?`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
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

      {/* Detay servisler bağlantısı */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Hizmet Kapsamı"
            title={`${pageTitle} Çerçevesinde Sunduğumuz Hizmetler`}
            subtitle={`${keyword} kapsamında işletmenizin tüm ihtiyaçlarına çözüm sunuyoruz.`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {detailServices.map((d) => (
              <div
                key={d}
                className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-6 flex items-center gap-3.5 text-navy hover:border-brand-red transition-colors"
              >
                <span className="w-11 h-11 bg-brand-red/10 text-brand-red rounded-[10px] grid place-items-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5" />
                </span>
                <span className="font-semibold text-[14px]">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us — bullet liste */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Müşteri Odaklı Yaklaşım"
            title={`${pageTitle} İçin Tercih Edilme Sebeplerimiz`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUs.map((it, i) => (
              <article key={i} className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4">
                <span className="w-10 h-10 bg-brand-red text-white rounded-full grid place-items-center flex-shrink-0 font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1.5">{it.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{it.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[860px] mx-auto px-6">
          <SectionHead eyebrow="Sıkça Sorulan Sorular" title={`${pageTitle} Hakkında Merak Edilenler`} />
          <div className="space-y-4">
            {faq.map((f, i) => (
              <details
                key={i}
                className="group bg-white border border-slate-200 rounded-xl px-6 py-5 transition-shadow hover:shadow-soft"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center text-navy font-bold text-[17px]">
                  {f.q}
                  <span className="ml-4 text-brand-red text-2xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-[15px]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* İlgili sayfalar — internal linking */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-xl font-bold text-navy mb-6 text-center">İlgili Sayfalar</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-full text-navy font-medium hover:border-brand-red hover:text-brand-red transition-colors"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title={`${pageTitle} için hemen iletişime geçin`}
        description={`${site.brand} olarak ${keyword} alanında profesyonel çözümler sunuyoruz. WhatsApp veya servis talep formu ile bize ulaşın.`}
      />
    </>
  );
}
