import type { Metadata } from 'next';
import { site } from '@/lib/site';
import PageHeader from '@/components/PageHeader';
import SectionHead from '@/components/SectionHead';
import CtaStrip from '@/components/CtaStrip';
import {
  CheckIcon,
  ShieldIcon,
  BoltIcon,
  WrenchIcon,
  BuildingIcon,
  RefreshCheckIcon,
  TargetIcon,
  FlagIcon,
  StarIcon,
  InfoIcon,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Kurumsal — Hakkımızda',
  description:
    'HSN TECHNIC hakkında bilgi: Endüstriyel mutfak teknik servis alanında uzman, deneyimli ekibimiz ve kurumsal hizmet anlayışımız ile tanışın. Öztiryakiler yetkili servis kalitesi.',
  alternates: { canonical: '/kurumsal/' },
};

export default function KurumsalPage() {
  return (
    <>
      <PageHeader
        title="Kurumsal"
        subtitle="HSN TECHNIC: Endüstriyel mutfak teknik servisinde güvenin ve kalitenin adresi."
        breadcrumb={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Kurumsal' }]}
      />

      <section className="py-20">
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[13px] font-bold text-brand-red uppercase tracking-[2px] mb-3">
              Hakkımızda
            </span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-navy mb-5 tracking-tight leading-tight">
              Endüstriyel Mutfak Teknik Servisinde Güvenilir Çözüm Ortağınız
            </h2>
            <p className="text-slate-700 text-base leading-[1.75] mb-4">
              {site.brand} olarak endüstriyel mutfak ekipmanları için profesyonel teknik servis, kurulum, bakım ve onarım
              çözümleri sunuyoruz. Deneyimli ekibimizle işletmenizin mutfak operasyonlarının kesintisiz devam etmesi için
              hızlı, güvenilir ve kaliteli servis anlayışıyla çalışıyoruz.
            </p>
            <p className="text-slate-700 text-base leading-[1.75]">
              Otel, restoran, kafe, catering firmaları, hastaneler, oteller ve toplu yemek üreticileri başta olmak üzere her
              ölçekteki işletmenin mutfak ekipmanlarına yetkili servis kalitesinde destek vermekteyiz. Müşterilerimizle uzun
              vadeli iş ortaklıkları kuruyor; sadece arıza anında değil, periyodik bakım ve danışmanlık süreçlerinde de
              yanlarında oluyoruz.
            </p>
            <ul className="grid gap-3 mt-6 list-none">
              {[
                'Yetkili servis kalitesi ve standartları',
                'Sertifikalı teknik kadro',
                'Sürekli eğitim ve gelişim politikası',
                'Müşteri memnuniyeti odaklı yaklaşım',
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

          <div className="relative bg-gradient-to-br from-navy to-navy-light rounded-2xl p-12 text-white overflow-hidden">
            <span
              aria-hidden
              className="absolute -bottom-12 -right-12 w-[200px] h-[200px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.3) 0%, transparent 70%)' }}
            />
            <div className="relative">
              <div className="text-[13px] uppercase tracking-[1.5px] text-white/60 mb-3.5">{site.brand}</div>
              <h3 className="text-[24px] font-extrabold mb-2">Kurumsal Yetkili Servis Anlayışı</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Müşterilerimizin operasyonlarını güvence altına almak ve uzun ömürlü ekipman performansı sağlamak öncelikli
                hedefimizdir.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  ['15+', 'Yıl Tecrübe'],
                  ['2.500+', 'Servis'],
                  ['500+', 'Kurumsal Müşteri'],
                  ['%98', 'Memnuniyet'],
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

      <section className="bg-slate-50 py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Değerlerimiz"
            title="Vizyon, Misyon ve Çalışma İlkelerimiz"
            subtitle="İşimizi yönlendiren temel değerler ve geleceğe bakışımız."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: TargetIcon,
                title: 'Vizyonumuz',
                desc:
                  'Endüstriyel mutfak teknik servis sektöründe yenilikçi, güvenilir ve müşteri odaklı çözümler sunan; kurumsal hizmet kalitesiyle Türkiye genelinde tercih edilen lider bir servis kuruluşu olmak.',
              },
              {
                icon: FlagIcon,
                title: 'Misyonumuz',
                desc:
                  'Endüstriyel mutfak ekipmanlarında işletmelerin operasyonel sürekliliğini sağlamak; profesyonel teknik kadro, hızlı müdahale ve kaliteli yedek parça ile uzun vadeli güven temelli iş ortaklıkları kurmak.',
              },
              {
                icon: StarIcon,
                title: 'Değerlerimiz',
                desc:
                  'Güven, şeffaflık, kalite ve müşteri odaklılık temel değerlerimizdir. Verdiğimiz her sözün arkasında dururuz; her servis çağrısını aynı kurumsal disiplinle ele alırız.',
              },
            ].map((it) => (
              <article key={it.title} className="bg-white border border-slate-200 rounded-2xl p-7">
                <div className="w-16 h-16 bg-slate-100 text-navy rounded-xl grid place-items-center mb-5">
                  <it.icon className="w-[30px] h-[30px]" />
                </div>
                <h3 className="text-[19px] font-bold text-navy mb-2.5">{it.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{it.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Neden HSN TECHNIC?" title="Bizi Tercih Etmeniz İçin 6 Önemli Sebep" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: ShieldIcon, t: 'Yetkili Servis Standardı', d: 'Öztiryakiler markasının yetkili servis kalite standartlarında hizmet sunuyoruz.' },
              { icon: BoltIcon, t: 'Hızlı Çözüm', d: 'Aynı gün servis prensibimizle iş kayıplarınızı minimize ediyoruz.' },
              { icon: WrenchIcon, t: 'Uzman Teknik Kadro', d: 'Sektörde yılların verdiği deneyime sahip sertifikalı teknisyenler.' },
              { icon: BuildingIcon, t: 'Kurumsal Anlayış', d: 'Resmi süreçler, fatura, sözleşmeli hizmet ve raporlama.' },
              { icon: RefreshCheckIcon, t: 'Garantili İşçilik', d: 'Yapılan tüm onarım ve servis işlemleri için işçilik garantisi.' },
              { icon: InfoIcon, t: 'Şeffaf Fiyat', d: 'Net fiyatlandırma, gizli maliyet yok; teklif öncesi netlik.' },
            ].map((it) => (
              <article
                key={it.t}
                className="bg-white p-7 rounded-[10px] text-center border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg2 hover:border-navy"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-navy to-navy-light rounded-2xl grid place-items-center text-white">
                  <it.icon className="w-[26px] h-[26px]" />
                </div>
                <h3 className="text-base font-bold text-navy mb-1.5">{it.t}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{it.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Profesyonel servis için HSN TECHNIC'i tercih edin"
        description="Bizimle iletişime geçin, ihtiyacınıza özel çözümler sunalım."
      />
    </>
  );
}
