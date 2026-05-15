import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#16399E',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} | Öztiryakiler Yetkili Servis - Endüstriyel Mutfak Teknik Servisi`,
    template: `%s | ${site.brand} - Öztiryakiler Yetkili Servis`,
  },
  description: site.description,
  keywords: [
    'öztiryakiler servisi',
    'öztiryakiler tamiri',
    'öztiryakiler bakımı',
    'öztiryakiler ürünleri',
    'öztiryakiler yetkili servis',
    'endüstriyel mutfak servisi',
    'endüstriyel mutfak teknik servis',
    'endüstriyel mutfak tamiri',
    'endüstriyel mutfak bakımı',
    'endüstriyel ocak tamiri',
    'endüstriyel fritöz tamiri',
    'endüstriyel bulaşık makinesi tamiri',
    'endüstriyel ızgara tamiri',
    'endüstriyel benmari tamiri',
    'endüstriyel fırın tamiri',
    'soğuk oda tamiri',
    'öztiryakiler ocak tamiri',
    'öztiryakiler fritöz tamiri',
    'öztiryakiler fırın tamiri',
    'öztiryakiler bulaşık makinesi tamiri',
    'öztiryakiler benmari tamiri',
    'öztiryakiler ızgara tamiri',
    'hsn technic',
  ],
  authors: [{ name: site.brand }],
  creator: site.brand,
  publisher: site.brand,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} | Öztiryakiler Yetkili Servis Hizmetleri`,
    description: site.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${site.brand} - Öztiryakiler Yetkili Servis`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.brand} | Öztiryakiler Yetkili Servis`,
    description: site.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Google Search Console doğrulama: GSC'den alacağın 'content' değerini
  // aşağıdaki satıra yapıştır. Doğrulama tamamlandıktan sonra GSC üzerinden
  // sitemap.xml'i mutlaka manuel olarak gönder.
  verification: {
    // google: 'BURAYA_GSC_VERIFICATION_KODU',
  },
  category: 'Endüstriyel Mutfak Teknik Servisi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.brand,
    alternateName: 'Öztiryakiler Yetkili Servis',
    description: site.description,
    url: site.url,
    telephone: site.phone.href,
    email: site.email,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.phone.href,
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: 'Turkish',
      },
      {
        '@type': 'ContactPoint',
        telephone: `+${site.whatsapp.number}`,
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: 'Turkish',
      },
    ],
    priceRange: '$$',
    image: [`${site.url}/og-image.jpg`, `${site.url}/hsn-logo.png`],
    logo: `${site.url}/hsn-logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: site.address.country,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    serviceType: [
      'Öztiryakiler Servisi',
      'Öztiryakiler Tamiri',
      'Öztiryakiler Bakımı',
      'Endüstriyel Mutfak Teknik Servisi',
      'Endüstriyel Mutfak Kurulum ve Proje',
      'Soğuk Oda Sistemleri',
      'Periyodik Bakım Sözleşmeleri',
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube].filter(Boolean),
  };

  // Cloudflare _redirects dosyasındaki www→apex kuralı bazı durumlarda
  // (DNS / custom domain ayarına bağlı) çalışmıyor. Yedek olarak meta refresh +
  // inline JS ile www subdomain'inden gelen ziyaretçileri apex'e yönlendiriyoruz.
  // (Bu sadece JS açıkken çalışır; gerçek 301 için Cloudflare panelinden
  //  www.* için "Redirect Rule" ya da Bulk Redirect tanımlanmalıdır.)
  const wwwRedirectScript = `if(location.hostname==='www.${site.domain}'){location.replace('https://${site.domain}'+location.pathname+location.search+location.hash);}`;

  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: wwwRedirectScript }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
