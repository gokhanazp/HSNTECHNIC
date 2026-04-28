import Link from 'next/link';
import type { Metadata } from 'next';
import { site, waLink } from '@/lib/site';
import { mainServices, repairServices } from '@/lib/services-data';
import SectionHead from '@/components/SectionHead';
import TrustGrid from '@/components/TrustGrid';
import CtaStrip from '@/components/CtaStrip';
import {
  CheckIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  KitchenIcon,
  ProjectIcon,
  ColdIcon,
  HoodIcon,
  GearIcon,
  BoxIcon,
} from '@/components/Icons';

const mainServiceIcons: Record<string, (p: any) => JSX.Element> = {
  'endustriyel-mutfak-servisi': KitchenIcon,
  'mutfak-kurulum-proje': ProjectIcon,
  'soguk-oda-sistemleri': ColdIcon,
  'davlumbaz-havalandirma': HoodIcon,
  'periyodik-bakim': GearIcon,
  'ikinci-el-ekipman': BoxIcon,
};

export const metadata: Metadata = {
  title: 'Öztiryakiler Yetkili Servis - Endüstriyel Mutfak Teknik Servisi',
  description:
    'Öztiryakiler yetkili servis hizmetleri. Endüstriyel mutfak ekipmanları için kurulum, bakım, onarım ve teknik servis çözümleri. Hızlı müdahale, profesyonel ekip, kurumsal hizmet.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#081c57] text-white py-20 md:py-24">
        <span
          aria-hidden
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.25) 0%, transparent 70%)' }}
        />
        <span aria-hidden className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-navy-light" />

        <div className="relative max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-[13px] font-semibold uppercase tracking-wide mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              Öztiryakiler Yetkili Servis Hizmeti
            </span>
            <h1 className="text-[clamp(34px,5vw,54px)] font-extrabold leading-[1.1] mb-6 tracking-tight">
              Öztiryakiler <span className="text-brand-red">Yetkili Servis</span> Hizmetleri
            </h1>
            <p className="text-[19px] leading-relaxed text-white/85 mb-9 max-w-[560px]">
              Endüstriyel mutfak ekipmanları için kurulum, bakım, onarım ve teknik servis çözümleri. Deneyimli ekibimizle
              işletmenizin kesintisiz çalışmasını güvence altına alıyoruz.
            </p>

            <div className="flex flex-wrap gap-3.5">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-base rounded-lg bg-whatsapp text-white hover:bg-whatsapp-dark transition-all hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp&apos;tan Hemen Ulaş
              </a>
              <Link
                href="/servis-talep"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold text-base rounded-lg bg-brand-red text-white hover:bg-brand-red-dark transition-all hover:-translate-y-0.5"
              >
                Servis Talebi Oluştur
              </Link>
            </div>

            <div className="flex gap-8 mt-12 flex-wrap">
              <div>
                <strong className="block text-[28px] font-extrabold leading-none">15+</strong>
                <span className="block text-[13px] text-white/70 uppercase tracking-wide mt-1.5">Yıllık Deneyim</span>
              </div>
              <div>
                <strong className="block text-[28px] font-extrabold leading-none">2.500+</strong>
                <span className="block text-[13px] text-white/70 uppercase tracking-wide mt-1.5">Tamamlanan Servis</span>
              </div>
              <div>
                <strong className="block text-[28px] font-extrabold leading-none">7/24</strong>
                <span className="block text-[13px] text-white/70 uppercase tracking-wide mt-1.5">Teknik Destek</span>
              </div>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative">
            <div className="bg-white/[0.06] border border-white/[0.12] backdrop-blur-md rounded-[20px] p-8">
              <div className="text-[14px] uppercase tracking-[1.5px] text-white/60 mb-4">Neden HSN TECHNIC?</div>
              <ul className="grid gap-3.5 list-none">
                {[
                  'Yetkili servis deneyimi ve garantili hizmet',
                  'Aynı gün hızlı müdahale ve çözüm',
                  'Profesyonel ve sertifikalı teknik ekip',
                  'Orijinal ve uyumlu yedek parça desteği',
                  'Periyodik bakım ve sözleşmeli hizmet',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[15px] text-white">
                    <span className="w-7 h-7 bg-brand-red rounded-full grid place-items-center flex-shrink-0">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Güven Unsurları"
            title="Kurumsal Servis Anlayışıyla Yanınızdayız"
            subtitle="Endüstriyel mutfak ekipmanlarınızın performansını koruyan, hızlı ve güvenilir teknik servis çözümleri sunuyoruz."
          />
          <TrustGrid />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[13px] font-bold text-brand-red uppercase tracking-[2px] mb-3">
              Hakkımızda
            </span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-navy mb-5 tracking-tight leading-tight">
              Endüstriyel Mutfaklarda Kesintisiz Operasyon İçin Çalışıyoruz
            </h2>
            <p className="text-slate-700 text-base leading-[1.75] mb-4">
              {site.brand} olarak endüstriyel mutfak ekipmanları için profesyonel teknik servis, kurulum, bakım ve onarım
              çözümleri sunuyoruz. Deneyimli ekibimizle işletmenizin mutfak operasyonlarının kesintisiz devam etmesi için
              hızlı, güvenilir ve kaliteli servis anlayışıyla çalışıyoruz.
            </p>
            <p className="text-slate-700 text-base leading-[1.75]">
              Otel, restoran, kafe, catering firmaları, hastaneler ve toplu yemek üreticileri başta olmak üzere her ölçekteki
              işletmenin mutfak ekipmanlarına yetkili servis kalitesinde destek veriyoruz.
            </p>
            <ul className="grid gap-3.5 mt-6 list-none">
              {[
                'Yetkili servis kalitesinde uzman müdahale',
                'Tüm endüstriyel mutfak markalarına teknik destek',
                'Şeffaf fiyatlandırma ve garantili hizmet',
                'Sözleşmeli periyodik bakım programları',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-slate-700">
                  <span className="w-6 h-6 bg-brand-red text-white rounded-full grid place-items-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats card */}
          <div className="relative bg-gradient-to-br from-navy to-navy-light rounded-2xl p-12 text-white overflow-hidden">
            <span
              aria-hidden
              className="absolute -bottom-12 -right-12 w-[200px] h-[200px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.3) 0%, transparent 70%)' }}
            />
            <div className="relative">
              <div className="text-[13px] uppercase tracking-[1.5px] text-white/60 mb-3.5">Rakamlarla {site.brand}</div>
              <h3 className="text-[24px] font-extrabold mb-2">Sektörde Güvenilir Bir İsim</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Yıllar içinde edindiğimiz deneyim ve memnun müşterilerimiz, sunduğumuz hizmetin en büyük teminatıdır.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  ['15+', 'Yıl Sektör Tecrübesi'],
                  ['2.500+', 'Servis Operasyonu'],
                  ['500+', 'Kurumsal Müşteri'],
                  ['7/24', 'Çağrı Merkezi'],
                ].map(([num, label]) => (
                  <div key={label} className="border-l-[3px] border-brand-red pl-4">
                    <strong className="block text-[36px] font-extrabold leading-none">{num}</strong>
                    <span className="block text-[13px] text-white/70 mt-1.5 uppercase tracking-wide">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANA HİZMETLER */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Hizmetlerimiz"
            title="Ana Hizmet Kategorileri"
            subtitle="Endüstriyel mutfak ekipmanlarınız için ihtiyaç duyabileceğiniz tüm teknik servis ve proje hizmetlerini tek çatı altında sunuyoruz."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((s) => {
              const Icon = mainServiceIcons[s.slug] || KitchenIcon;
              return (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="group relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-7 transition-all hover:-translate-y-1.5 hover:shadow-lg2 hover:border-transparent"
                >
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 h-1 w-0 bg-brand-red transition-all duration-300 group-hover:w-full"
                  />
                  <div className="w-16 h-16 bg-slate-100 text-navy rounded-xl grid place-items-center mb-5 transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon className="w-[30px] h-[30px]" />
                  </div>
                  <h3 className="text-[19px] font-bold text-navy mb-2.5">{s.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-4">{s.shortDesc}</p>
                  <span className="text-sm font-semibold text-brand-red inline-flex items-center gap-1.5">
                    Detayları Gör <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAY HİZMETLER */}
      <section className="relative overflow-hidden bg-[#081c57] text-white py-20">
        <span
          aria-hidden
          className="absolute top-0 -right-48 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.18) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Detay Servisler"
            title="Endüstriyel Mutfak Tamir Hizmetleri"
            subtitle="Tüm endüstriyel mutfak ekipmanlarınızın tamir, onarım ve bakım ihtiyaçlarına yetkili servis kalitesinde çözüm."
            invert
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {repairServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-6 flex items-center gap-3.5 transition-all hover:bg-white/[0.08] hover:border-brand-red"
              >
                <span className="w-11 h-11 bg-brand-red/15 text-brand-red rounded-[10px] grid place-items-center flex-shrink-0 transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <CheckIcon className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-[15px] leading-snug">{s.navTitle}</span>
                  <span className="text-[12px] text-white/60 group-hover:text-white/85 transition-colors inline-flex items-center gap-1">
                    Detayları gör
                    <ArrowRightIcon className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Çalışma Süreci"
            title="4 Adımda Servis Süreci"
            subtitle="Talebiniz oluştuğu andan itibaren hızlı, şeffaf ve organize bir servis deneyimi yaşatıyoruz."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['1', 'İletişim', 'WhatsApp, telefon veya servis formundan bize ulaşın.'],
              ['2', 'Ön Değerlendirme', 'Sorununuzu dinler, ekipman bilgilerinizi alırız.'],
              ['3', 'Yerinde Servis', 'Teknik ekibimiz randevu saatinde yerinizde.'],
              ['4', 'Onarım & Garanti', 'Çözüm sonrası işlem raporu ve garanti.'],
            ].map(([n, t, d]) => (
              <div key={n} className="relative bg-white rounded-[10px] pt-12 pb-8 px-6 text-center border border-slate-200">
                <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-10 h-10 bg-brand-red text-white rounded-full grid place-items-center font-extrabold text-base border-4 border-slate-50">
                  {n}
                </div>
                <h4 className="text-[17px] font-bold text-navy mb-2">{t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Mutfağınızda arıza mı var? Hemen bize ulaşın."
        description="WhatsApp üzerinden anlık iletişim veya servis talep formu ile en kısa sürede yanıt alın."
      />
    </>
  );
}
