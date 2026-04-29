import type { Metadata } from 'next';
import { site, waLink } from '@/lib/site';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import SectionHead from '@/components/SectionHead';
import { PhoneIcon, MailIcon, WhatsAppIcon, ClockIcon, PinIcon, CheckIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'İletişim — Bize Ulaşın',
  description:
    'HSN TECHNIC iletişim bilgileri. Endüstriyel mutfak servis talebi için telefon, WhatsApp ve e-posta üzerinden bizimle iletişime geçin. Öztiryakiler yetkili servis.',
  alternates: { canonical: '/iletisim' },
};

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        title="İletişim"
        subtitle="Endüstriyel mutfak ekipmanlarınız için profesyonel teknik servis çözümleri için bize ulaşın."
        breadcrumb={[{ label: 'Ana Sayfa', href: '/' }, { label: 'İletişim' }]}
      />

      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Bize Ulaşın"
            title="İletişim Kanallarımız"
            subtitle="WhatsApp, telefon, e-posta veya adresimizden bize ulaşabilirsiniz."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: PhoneIcon,
                title: 'Telefon',
                desc: 'Bizi telefon ile arayın.',
                value: site.phone.display,
                href: `tel:${site.phone.href}`,
                whatsappStyle: false,
                external: false,
              },
              {
                icon: WhatsAppIcon,
                title: 'WhatsApp',
                desc: 'Anlık iletişim için WhatsApp hattımız.',
                value: site.whatsapp.display,
                href: waLink(),
                whatsappStyle: true,
                external: true,
              },
              {
                icon: MailIcon,
                title: 'E-Posta',
                desc: 'Detaylı taleplerinizi e-posta ile iletin.',
                value: site.email,
                href: `mailto:${site.email}`,
                whatsappStyle: false,
                external: false,
              },
              {
                icon: PinIcon,
                title: 'Adres',
                desc: 'Ofisimizi haritada görüntüleyin.',
                value: site.address.full,
                href: `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}`,
                whatsappStyle: false,
                external: true,
              },
            ].map((it) => (
              <article
                key={it.title}
                className="bg-white border border-slate-200 rounded-2xl p-9 text-center transition-all hover:-translate-y-1 hover:shadow-lg2"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-5 rounded-2xl grid place-items-center text-white ${
                    it.whatsappStyle
                      ? 'bg-gradient-to-br from-whatsapp to-whatsapp-dark'
                      : 'bg-gradient-to-br from-navy to-navy-light'
                  }`}
                >
                  <it.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{it.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-3">{it.desc}</p>
                <a
                  href={it.href}
                  target={it.external ? '_blank' : undefined}
                  rel={it.external ? 'noopener' : undefined}
                  className="text-navy font-semibold hover:text-brand-red break-words text-[14px] leading-snug inline-block"
                >
                  {it.value}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 pb-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] bg-white rounded-2xl overflow-hidden shadow-soft">
            <aside className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white p-10">
              <span
                aria-hidden
                className="absolute -top-12 -right-12 w-[250px] h-[250px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.25) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <h2 className="text-2xl font-extrabold mb-3">Servis Talebi</h2>
                <p className="text-white/80 text-[15px] leading-relaxed mb-8">
                  Endüstriyel mutfak ekipmanlarınızdaki ihtiyaçlarınız için formu doldurun, profesyonel ekibimiz en kısa sürede
                  size dönüş yapsın.
                </p>
                <ul className="grid gap-5 list-none">
                  {[
                    { icon: ClockIcon, t: '7/24 Acil Servis', d: 'Çağrı merkezimiz daima açık' },
                    { icon: CheckIcon, t: 'Hızlı Geri Dönüş', d: 'Form sonrası en kısa sürede ulaşıyoruz' },
                    { icon: PinIcon, t: 'Türkiye Geneli', d: 'Tüm illere servis hizmeti' },
                  ].map((it) => (
                    <li key={it.t} className="flex gap-3.5 items-start">
                      <span className="w-10 h-10 bg-white/10 rounded-[10px] grid place-items-center flex-shrink-0 text-brand-red">
                        <it.icon className="w-[18px] h-[18px]" />
                      </span>
                      <div>
                        <strong className="block text-[15px] text-white mb-0.5">{it.t}</strong>
                        <span className="text-white/70 text-sm">{it.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="p-10">
              <h2 className="text-2xl font-extrabold text-navy mb-2">Hızlı İletişim Formu</h2>
              <p className="text-slate-500 text-[15px] mb-7">
                Bilgilerinizi bırakın, profesyonel teknik ekibimiz size dönüş yapsın.
              </p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="pb-20">
        <div className="max-w-container mx-auto px-6">
          <SectionHead
            eyebrow="Konum"
            title="Bizi Ziyaret Edin"
            subtitle={site.address.full}
          />
          <div className="rounded-2xl overflow-hidden shadow-soft border border-slate-200">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`}
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${site.brand} konumu - ${site.address.full}`}
              className="w-full block border-0"
              allowFullScreen
            />
          </div>
          <div className="text-center mt-5">
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[15px] rounded-lg bg-navy text-white hover:bg-navy-dark transition-colors"
            >
              <PinIcon className="w-4 h-4" />
              Yol Tarifi Al
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
