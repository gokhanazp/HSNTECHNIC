'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { site, waLink } from '@/lib/site';
import { mainServices, repairServices } from '@/lib/services-data';
import {
  PhoneIcon,
  MailIcon,
  ClockIcon,
  PinIcon,
  WhatsAppIcon,
  KitchenIcon,
  ProjectIcon,
  ColdIcon,
  HoodIcon,
  GearIcon,
  BoxIcon,
  CheckIcon,
} from './Icons';

const mainServiceIcons: Record<string, (p: any) => JSX.Element> = {
  'endustriyel-mutfak-servisi': KitchenIcon,
  'mutfak-kurulum-proje': ProjectIcon,
  'soguk-oda-sistemleri': ColdIcon,
  'davlumbaz-havalandirma': HoodIcon,
  'periyodik-bakim': GearIcon,
  'ikinci-el-ekipman': BoxIcon,
};

const navItems = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler', dropdown: 'services' as const },
  { label: 'Kurumsal', href: '/kurumsal' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-slate-200 shadow-sm">
      {/* Üst bar */}
      <div className="bg-navy text-slate-100 text-[13px] py-2 hidden md:block">
        <div className="max-w-container mx-auto px-6 flex justify-between items-center flex-wrap gap-3">
          <div className="flex gap-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <PinIcon className="w-3.5 h-3.5" /> Türkiye Geneli Hizmet
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5" /> 7/24 Çağrı Merkezi
            </span>
          </div>
          <div className="flex gap-6 flex-wrap">
            <a href={`tel:${site.phone.href}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <PhoneIcon className="w-3.5 h-3.5" /> {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <MailIcon className="w-3.5 h-3.5" /> {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Ana navigasyon */}
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="HSN TECHNIC - Endüstriyel Mutfak Ekipmanları Servisi">
            <Image
              src="/hsn-logo.png"
              alt="HSN TECHNIC Logo"
              width={64}
              height={64}
              priority
              sizes="64px"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0"
            />
            <span className="flex flex-col leading-tight">
              <strong className="text-[22px] sm:text-[26px] font-extrabold text-navy tracking-wide leading-none">
                {site.brand}
              </strong>
              <small className="text-[10.5px] sm:text-[12px] text-slate-500 uppercase tracking-[1.2px] sm:tracking-[1.5px] mt-1">
                {site.tagline}
              </small>
            </span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center" aria-label="Ana menü">
            <ul className="flex gap-1 items-center list-none">
              {navItems.map((item) => {
                if (item.dropdown === 'services') {
                  return (
                    <li
                      key={item.href}
                      className="relative"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 font-medium text-[15px] rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'text-navy bg-slate-100 font-semibold'
                            : 'text-slate-700 hover:text-navy hover:bg-slate-100'
                        }`}
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </Link>

                      {/* Mega Menu */}
                      {dropdownOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                          onMouseEnter={openDropdown}
                          onMouseLeave={closeDropdown}
                        >
                          <div className="w-[760px] bg-white rounded-2xl shadow-lg2 border border-slate-200 overflow-hidden">
                            <div className="grid grid-cols-2">
                              {/* Sol: Ana Hizmetler */}
                              <div className="p-6 border-r border-slate-100">
                                <div className="text-[11px] font-bold text-brand-red uppercase tracking-[2px] mb-4">
                                  Ana Hizmetler
                                </div>
                                <ul className="space-y-1">
                                  {mainServices.map((s) => {
                                    const Icon = mainServiceIcons[s.slug] || KitchenIcon;
                                    return (
                                      <li key={s.slug}>
                                        <Link
                                          href={`/hizmetler/${s.slug}`}
                                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                                        >
                                          <span className="w-9 h-9 bg-slate-100 text-navy rounded-lg grid place-items-center flex-shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                                            <Icon className="w-[18px] h-[18px]" />
                                          </span>
                                          <span className="flex-1 min-w-0">
                                            <span className="block text-[14px] font-semibold text-navy">
                                              {s.navTitle}
                                            </span>
                                            <span className="block text-[12px] text-slate-500 mt-0.5 line-clamp-1">
                                              {s.shortDesc}
                                            </span>
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>

                              {/* Sağ: Tamir Hizmetleri */}
                              <div className="p-6">
                                <div className="text-[11px] font-bold text-brand-red uppercase tracking-[2px] mb-4">
                                  Detay Tamir Hizmetleri
                                </div>
                                <ul className="grid grid-cols-1 gap-0.5">
                                  {repairServices.map((s) => (
                                    <li key={s.slug}>
                                      <Link
                                        href={`/hizmetler/${s.slug}`}
                                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors text-[13.5px] text-slate-700 hover:text-navy"
                                      >
                                        <CheckIcon className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                                        {s.navTitle}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            {/* Alt CTA bandı */}
                            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 flex items-center justify-between">
                              <Link
                                href="/hizmetler"
                                className="text-[13px] font-semibold text-navy hover:text-brand-red"
                              >
                                Tüm hizmetleri gör →
                              </Link>
                              <a
                                href={waLink('Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.')}
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-whatsapp hover:text-whatsapp-dark"
                              >
                                <WhatsAppIcon className="w-4 h-4" />
                                WhatsApp ile sor
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`inline-block px-4 py-2.5 font-medium text-[15px] rounded-lg transition-colors ${
                        isActive(item.href)
                          ? 'text-navy bg-slate-100 font-semibold'
                          : 'text-slate-700 hover:text-navy hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex gap-2.5 items-center">
            <Link
              href="/servis-talep"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-semibold text-[14px] rounded-lg border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all"
            >
              Servis Talebi
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-semibold text-[14px] rounded-lg bg-whatsapp text-white hover:bg-whatsapp-dark transition-all hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
          >
            <span
              className={`block w-6 h-0.5 bg-navy my-1.5 transition-transform ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span className={`block w-6 h-0.5 bg-navy my-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block w-6 h-0.5 bg-navy my-1.5 transition-transform ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden pb-4 border-t border-slate-200 -mx-4 sm:-mx-6 px-4 sm:px-6 pt-3" aria-label="Mobil menü">
            <ul className="flex flex-col gap-1 list-none">
              <li>
                <Link
                  href="/"
                  className={`block px-4 py-3 font-medium rounded-lg ${
                    isActive('/') ? 'text-navy bg-slate-100 font-semibold' : 'text-slate-700'
                  }`}
                >
                  Ana Sayfa
                </Link>
              </li>

              {/* Hizmetler accordion */}
              <li>
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className={`w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg ${
                    isActive('/hizmetler') ? 'text-navy bg-slate-100 font-semibold' : 'text-slate-700'
                  }`}
                  aria-expanded={mobileServicesOpen}
                >
                  Hizmetler
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="ml-3 mt-1 mb-2 border-l-2 border-slate-200 pl-3 space-y-3">
                    <div>
                      <div className="text-[11px] font-bold text-brand-red uppercase tracking-wider mb-1.5 px-3">
                        Ana Hizmetler
                      </div>
                      <ul className="space-y-0.5">
                        {mainServices.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/hizmetler/${s.slug}`}
                              className="block px-3 py-2 text-[14px] text-slate-700 hover:text-navy hover:bg-slate-50 rounded-md"
                            >
                              {s.navTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-brand-red uppercase tracking-wider mb-1.5 px-3">
                        Tamir Hizmetleri
                      </div>
                      <ul className="space-y-0.5">
                        {repairServices.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/hizmetler/${s.slug}`}
                              className="block px-3 py-2 text-[14px] text-slate-700 hover:text-navy hover:bg-slate-50 rounded-md"
                            >
                              {s.navTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/hizmetler"
                      className="block px-3 py-2 text-[13px] font-semibold text-brand-red hover:underline"
                    >
                      Tüm hizmetleri gör →
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/kurumsal"
                  className={`block px-4 py-3 font-medium rounded-lg ${
                    isActive('/kurumsal') ? 'text-navy bg-slate-100 font-semibold' : 'text-slate-700'
                  }`}
                >
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className={`block px-4 py-3 font-medium rounded-lg ${
                    isActive('/iletisim') ? 'text-navy bg-slate-100 font-semibold' : 'text-slate-700'
                  }`}
                >
                  İletişim
                </Link>
              </li>

              <li className="pt-3 mt-2 border-t border-slate-200 grid grid-cols-2 gap-2">
                <Link
                  href="/servis-talep"
                  className="text-center px-4 py-3 font-semibold rounded-lg border-2 border-brand-red text-brand-red"
                >
                  Servis Talebi
                </Link>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-lg bg-whatsapp text-white"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
