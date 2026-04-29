import type { Metadata } from 'next';
import { site, waLink } from '@/lib/site';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { PhoneIcon, MailIcon, ClockIcon, PinIcon, WhatsAppIcon, CheckIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Servis Talep Formu — Hızlı Servis Talebi Oluştur',
  description:
    'HSN TECHNIC servis talep formu. Endüstriyel mutfak ekipmanlarınız için hızlı servis talebi oluşturun. Aynı gün geri dönüş, profesyonel teknik servis. Öztiryakiler yetkili servis.',
  alternates: { canonical: '/servis-talep' },
};

export default function ServisTalepPage() {
  return (
    <>
      <PageHeader
        title="Servis Talep Formu"
        subtitle="Endüstriyel mutfak ekipmanlarınız için servis talebinizi oluşturun, en kısa sürede sizinle iletişime geçelim."
        breadcrumb={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Servis Talep Formu' }]}
      />

      <section className="bg-slate-50 py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] bg-white rounded-2xl overflow-hidden shadow-soft">
            <aside className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white p-10">
              <span
                aria-hidden
                className="absolute -top-12 -right-12 w-[250px] h-[250px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(200, 16, 46, 0.25) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <h2 className="text-2xl font-extrabold mb-3">Hızlı Servis İçin Bizimle İletişime Geçin</h2>
                <p className="text-white/80 text-[15px] leading-relaxed mb-8">
                  Formu doldurun veya WhatsApp üzerinden anlık iletişim kurun. Profesyonel ekibimiz en kısa sürede size dönüş
                  yapacaktır.
                </p>

                <ul className="grid gap-5 list-none">
                  {[
                    { icon: PhoneIcon, t: 'Telefon', d: site.phone.display },
                    { icon: WhatsAppIcon, t: 'WhatsApp', d: site.whatsapp.display },
                    { icon: MailIcon, t: 'E-Posta', d: site.email },
                    { icon: PinIcon, t: 'Adres', d: site.address.full },
                    { icon: ClockIcon, t: 'Çalışma Saatleri', d: '7/24 Acil Servis Hattı' },
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

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 font-semibold text-[15px] rounded-lg bg-whatsapp text-white hover:bg-whatsapp-dark transition-colors"
                >
                  <WhatsAppIcon className="w-[18px] h-[18px]" />
                  WhatsApp ile Hemen İletişim
                </a>
              </div>
            </aside>

            <div className="p-10">
              <h2 className="text-2xl font-extrabold text-navy mb-2">Servis Talebi Oluştur</h2>
              <p className="text-slate-500 text-[15px] mb-7">
                Aşağıdaki formu doldurun, talebiniz iletildiğinde sizi WhatsApp üzerinden hızlı iletişime yönlendirelim.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <span className="inline-block text-[13px] font-bold text-brand-red uppercase tracking-[2px] mb-3">
              Sıkça Sorulan Hizmetler
            </span>
            <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-navy tracking-tight">
              Hangi Hizmetlerde Yardımcı Olabiliriz?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Ocak Tamiri',
              'Fritöz Tamiri',
              'Bulaşık Makinesi',
              'Fırın Tamiri',
              'Izgara Tamiri',
              'Benmari Tamiri',
              'Soğuk Oda',
            ].map((d) => (
              <div
                key={d}
                className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-6 flex items-center gap-3.5 text-navy"
              >
                <span className="w-11 h-11 bg-brand-red/10 text-brand-red rounded-[10px] grid place-items-center flex-shrink-0">
                  <CheckIcon className="w-5 h-5" />
                </span>
                <span className="font-semibold text-[15px]">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
