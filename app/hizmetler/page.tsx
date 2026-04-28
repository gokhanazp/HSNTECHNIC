import type { Metadata } from 'next';
import Link from 'next/link';
import { mainServices, repairServices } from '@/lib/services-data';
import PageHeader from '@/components/PageHeader';
import SectionHead from '@/components/SectionHead';
import CtaStrip from '@/components/CtaStrip';
import {
  CheckIcon,
  KitchenIcon,
  ProjectIcon,
  ColdIcon,
  HoodIcon,
  GearIcon,
  BoxIcon,
  ArrowRightIcon,
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
  title: 'Hizmetler — Endüstriyel Mutfak Teknik Servisi',
  description:
    'Öztiryakiler yetkili servis hizmetleri: endüstriyel mutfak servisi, kurulum, soğuk oda, davlumbaz, periyodik bakım ve tüm ekipman tamir hizmetleri.',
  alternates: { canonical: '/hizmetler' },
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHeader
        title="Endüstriyel Mutfak Teknik Servis Hizmetleri"
        subtitle="Tüm endüstriyel mutfak ekipmanlarınız için yetkili servis kalitesinde kurulum, bakım ve onarım çözümleri."
        breadcrumb={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hizmetler' }]}
      />

      {/* Ana Hizmet Kategorileri */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Ana Hizmet Kategorileri"
            title="Profesyonel Servis Çözümleri"
            subtitle="Endüstriyel mutfak operasyonlarınızın tüm aşamalarını kapsayan geniş hizmet yelpazemiz."
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

      {/* Tamir Hizmetleri */}
      <section className="relative overflow-hidden bg-navy text-white py-20">
        <span
          aria-hidden
          className="absolute top-0 -right-48 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.18) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Detay Tamir Hizmetleri"
            title="Ekipman Bazında Servis Çözümleri"
            subtitle="Her ekipman tipi için uzman servis ve onarım. Ekipmanınızı seçin, detaylı bilgi alın."
            invert
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {repairServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="group bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-6 flex items-center gap-3.5 transition-all hover:bg-white/[0.08] hover:border-brand-red"
              >
                <span className="w-11 h-11 bg-brand-red/15 text-brand-red rounded-[10px] grid place-items-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold text-[15px]">{s.navTitle}</span>
                  <span className="text-[12px] text-white/60 group-hover:text-white/80 transition-colors">
                    Detayları gör →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Süreçlerimiz */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Hizmet Süreçlerimiz" title="Yetkili Servis Kalitesinde Çalışıyoruz" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-extrabold text-navy mb-4">Endüstriyel Mutfak Servis Anlayışımız</h3>
              <p className="text-slate-700 text-base leading-[1.75] mb-4">
                Endüstriyel mutfaklarda zaman kritik bir kavramdır. Bir ekipman arızası, işletmenizin tüm operasyonunu
                durdurabilir. HSN TECHNIC olarak bu hassasiyetin farkındayız ve hızlı, kalıcı çözümler sunuyoruz.
              </p>
              <ul className="grid gap-3 mt-5 list-none">
                {[
                  'Aynı gün servis ve hızlı arıza tespiti',
                  'Orijinal ve uyumlu yedek parça desteği',
                  'Servis sonrası işçilik garantisi',
                  'Şeffaf fiyat politikası, sürpriz maliyet yok',
                  'Detaylı servis raporu ve dökümantasyon',
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
            <div>
              <h3 className="text-2xl font-extrabold text-navy mb-4">Sözleşmeli Periyodik Bakım</h3>
              <p className="text-slate-700 text-base leading-[1.75] mb-4">
                İşletmenizin endüstriyel mutfak ekipmanlarının uzun ömürlü ve verimli çalışmasını sağlamak için sözleşmeli
                periyodik bakım programlarımıza katılabilirsiniz.
              </p>
              <ul className="grid gap-3 mt-5 list-none">
                {[
                  'Aylık, üç aylık veya yıllık bakım planları',
                  'Önleyici bakım ile arıza riskini minimize etme',
                  'Performans ölçümü ve enerji verimliliği',
                  'Sözleşmeli müşterilere öncelikli servis',
                  'Detaylı bakım raporları',
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
          </div>
        </div>
      </section>

      <CtaStrip
        title="Hizmetlerimiz hakkında daha fazla bilgi alın"
        description="Hemen WhatsApp veya telefon üzerinden uzman ekibimizle iletişime geçin."
      />
    </>
  );
}
