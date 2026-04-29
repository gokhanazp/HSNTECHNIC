import Link from 'next/link';
import Image from 'next/image';
import { site, waLink } from '@/lib/site';
import { mainServices } from '@/lib/services-data';
import { PhoneIcon, MailIcon, WhatsAppIcon, PinIcon, InstagramIcon, FacebookIcon } from './Icons';

const footerServices = mainServices.map((s) => ({
  label: s.navTitle,
  href: `/hizmetler/${s.slug}`,
}));

const footerCorp = [
  { label: 'Hakkımızda', href: '/kurumsal' },
  { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
  { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
  { label: 'Öztiryakiler Bakımı', href: '/oztiryakiler-bakimi' },
  { label: 'Öztiryakiler Ürünleri', href: '/oztiryakiler-urunleri' },
  { label: 'Öztiryakiler Ocak Tamiri', href: '/oztiryakiler-ocak-tamiri' },
  { label: 'Öztiryakiler Fritöz Tamiri', href: '/oztiryakiler-fritoz-tamiri' },
  { label: 'Öztiryakiler Fırın Tamiri', href: '/oztiryakiler-firin-tamiri' },
  { label: 'Öztiryakiler Bulaşık Makinesi Tamiri', href: '/oztiryakiler-bulasik-makinesi-tamiri' },
  { label: 'Öztiryakiler Benmari Tamiri', href: '/oztiryakiler-benmari-tamiri' },
  { label: 'Öztiryakiler Izgara Tamiri', href: '/oztiryakiler-izgara-tamiri' },
  { label: 'Servis Talebi', href: '/servis-talep' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/75 pt-16 pb-6">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 mb-12">
          {/* Marka */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white rounded-xl p-2 grid place-items-center flex-shrink-0">
                <Image
                  src="/hsn-logo.png"
                  alt="HSN TECHNIC Logo"
                  width={56}
                  height={56}
                  sizes="56px"
                  className="w-12 h-12 object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <strong className="text-[22px] font-extrabold text-white tracking-wide leading-none">
                  {site.brand}
                </strong>
                <small className="text-[11.5px] text-white/60 uppercase tracking-[1.5px] mt-1">{site.tagline}</small>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              {site.brand} olarak Öztiryakiler yetkili servis hizmetleri kapsamında endüstriyel mutfak ekipmanları için
              profesyonel kurulum, bakım, onarım ve teknik servis çözümleri sunuyoruz.
            </p>
            <div className="mt-5">
              <strong className="block text-white text-[13px] font-bold uppercase tracking-[1px] mb-3">
                Sosyal Medya
              </strong>
              <div className="flex items-center gap-3">
                {site.social.instagram && (
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener"
                    aria-label="Instagram"
                    className="w-10 h-10 bg-white/[0.06] hover:bg-brand-red text-white/80 hover:text-white rounded-lg grid place-items-center transition-colors"
                  >
                    <InstagramIcon className="w-[18px] h-[18px]" />
                  </a>
                )}
                {site.social.facebook && (
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener"
                    aria-label="Facebook"
                    className="w-10 h-10 bg-white/[0.06] hover:bg-brand-red text-white/80 hover:text-white rounded-lg grid place-items-center transition-colors"
                  >
                    <FacebookIcon className="w-[18px] h-[18px]" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Hizmetler */}
          <FooterCol title="Hizmetler">
            {footerServices.map((it) => (
              <FooterLink key={it.label} href={it.href}>
                {it.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Kurumsal */}
          <FooterCol title="Kurumsal">
            {footerCorp.map((it) => (
              <FooterLink key={it.label} href={it.href}>
                {it.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* İletişim */}
          <FooterCol title="İletişim">
            <FooterContact icon={<PhoneIcon className="w-4 h-4" />} title="Telefon">
              <a href={`tel:${site.phone.href}`} className="hover:text-white block">
                {site.phone.display}
              </a>
            </FooterContact>
            <FooterContact icon={<WhatsAppIcon className="w-4 h-4" />} title="WhatsApp">
              <a href={waLink()} target="_blank" rel="noopener" className="hover:text-white">
                {site.whatsapp.display}
              </a>
            </FooterContact>
            <FooterContact icon={<MailIcon className="w-4 h-4" />} title="E-Posta">
              <a href={`mailto:${site.email}`} className="hover:text-white break-all">
                {site.email}
              </a>
            </FooterContact>
            <FooterContact icon={<PinIcon className="w-4 h-4" />} title="Adres">
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}`}
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                {site.address.full}
              </a>
            </FooterContact>
          </FooterCol>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-white/60">
          <div>
            © {new Date().getFullYear()} {site.brand} - Öztiryakiler Yetkili Servis Hizmetleri. Tüm hakları saklıdır.
          </div>
          <div>
            <a
              href="https://gokhan-yildirim.com"
              target="_blank"
              rel="noopener"
              className="text-white/60 hover:text-white transition-colors"
            >
              Web Tasarım &amp; Yazılım
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-white text-[15px] font-bold uppercase tracking-[1px] mb-5 pb-3 relative">
        {title}
        <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-brand-red" />
      </h4>
      <ul className="grid gap-2.5 list-none">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[14px] text-white/70 hover:text-white inline-flex items-center gap-2 transition-colors before:content-['›'] before:text-brand-red before:font-bold"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterContact({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 mb-3.5 text-[14px]">
      <span className="w-9 h-9 bg-white/[0.06] text-brand-red rounded-lg grid place-items-center flex-shrink-0">
        {icon}
      </span>
      <div>
        <strong className="block text-white text-[13px] mb-0.5">{title}</strong>
        {children}
      </div>
    </div>
  );
}
