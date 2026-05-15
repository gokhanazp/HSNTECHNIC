import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Benmari Tamiri - Endüstriyel Sıcak Sunum Servisi',
  description:
    'Öztiryakiler benmari tamiri için HSN TECHNIC. Rezistans, termostat, su seviye sensörü ve kontrol panel arızalarına profesyonel onarım.',
  alternates: { canonical: '/oztiryakiler-benmari-tamiri/' },
  keywords: [
    'öztiryakiler benmari tamiri',
    'öztiryakiler benmari servisi',
    'endüstriyel benmari tamiri',
    'benmari rezistans değişimi',
    'sulu benmari tamiri',
  ],
  openGraph: {
    title: 'Öztiryakiler Benmari Tamiri - HSN TECHNIC Yetkili Servis',
    description:
      'Sulu, kuru ve modüler Öztiryakiler endüstriyel benmari modellerinde rezistans, termostat ve panel servisi.',
    url: `${site.url}/oztiryakiler-benmari-tamiri/`,
    type: 'website',
    siteName: site.brand,
    locale: site.locale,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Öztiryakiler Benmari Tamiri' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function OztiryakilerBenmariTamiriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Benmari Tamiri',
    serviceType: 'Endüstriyel Benmari Tamir ve Servis',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Sulu ve kuru Öztiryakiler endüstriyel benmarilerine rezistans, termostat ve kontrol panel servisi.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler benmari tamiri"
        pageTitle="Öztiryakiler Benmari Tamiri"
        hero={{
          h1: 'Öztiryakiler Benmari Tamiri - Sulu ve Kuru Benmari Servisi',
          intro:
            'Öztiryakiler benmari tamiri kapsamında rezistans, termostat, su seviye sensörü ve panel arızalarına hızlı ve garantili çözümler.',
        }}
        intro={[
          'Öztiryakiler benmari tamiri; restoran, otel, açık büfe ve catering işletmelerinde sıcak sunumun kalitesi ve hijyeni için önem taşıyan bir servis hizmetidir. HSN TECHNIC olarak sulu ve kuru tüm Öztiryakiler endüstriyel benmari modellerine yetkili servis standartlarında tamir hizmeti sunuyoruz.',
          'Endüstriyel benmarilerde en sık görülen arızalar; rezistans yanığı, termostat sapması, su seviye sensör arızası, hazne sızdırmazlık problemi ve kontrol panel hatasıdır. Öztiryakiler benmari tamiri sürecinde önce ekipmanı detaylı şekilde inceliyor, kalıcı bir onarım planı uyguluyoruz.',
          'Yiyeceklerin doğru sıcaklıkta korunması hem hijyen hem de lezzet açısından kritiktir. Onarım sonrası sıcaklık doğruluk testi, su seviye sensör kontrolü ve hazne sızdırmazlık testi standart olarak yapılır. Tüm Öztiryakiler benmari tamiri işlemleri işçilik garantisi kapsamındadır.',
        ]}
        features={[
          'Üst ve alt rezistans değişimi ve elektrik tesisat onarımı.',
          'Termostat kalibrasyonu ve sıcaklık doğruluk testi.',
          'Su seviye sensörü ve otomatik su tahliye servisi.',
          'Kontrol panel, dijital ekran ve gösterge onarımı.',
          'Hazne sızdırmazlık ve conta yenileme.',
          'Modüler benmari sistemlerinde özel parça temini.',
        ]}
        whyUs={[
          {
            title: 'Sulu ve Kuru Benmari Uzmanlığı',
            desc: 'Tüm Öztiryakiler benmari türlerine kapsamlı tamir desteği veriyoruz.',
          },
          {
            title: 'Hızlı Rezistans Değişimi',
            desc: 'Stoklarımızda sık kullanılan rezistans modelleri bulunur, aynı gün servis sağlıyoruz.',
          },
          {
            title: 'Hassas Sıcaklık Kalibrasyonu',
            desc: 'Hijyen kritik sıcaklık aralıkları için kalibre cihazlarla doğruluk testi yapıyoruz.',
          },
          {
            title: 'Su Seviye Otomasyonu',
            desc: 'Sulu modellerde otomatik su tahliye ve seviye kontrol sistemleri için özel servis.',
          },
          {
            title: 'İşçilik Garantisi',
            desc: 'Öztiryakiler benmari tamiri kapsamında işçilik garantisi standart olarak sağlanır.',
          },
          {
            title: 'Modüler Çözümler',
            desc: 'Modüler benmari hatlarında belirli üniteleri değiştirip diğerlerini koruyarak maliyet avantajı.',
          },
        ]}
        faq={[
          {
            q: 'Benmari ısıtmıyor, ne sebep olabilir?',
            a: 'En sık nedenler rezistans yanığı, termostat arızası veya kontaktör problemidir. Yerinde inceleme ile kesin teşhis yapıyoruz.',
          },
          {
            q: 'Sulu benmaride su tahliye olmuyor?',
            a: 'Su seviye sensörü, tahliye solenoidi veya tıkanma kaynaklı olabilir. Sistemin temizlenip onarılması gerekir.',
          },
          {
            q: 'Sıcaklık ayarlarına uymuyor, ne yapmalıyım?',
            a: 'Termostat sapması en yaygın sebeptir. Kalibrasyon servisi yeterli olabilir; arızalı ise değişim önerilir.',
          },
          {
            q: 'Tamir sonrası garanti veriyor musunuz?',
            a: 'Evet. Öztiryakiler benmari tamiri için işçilik garantisi standarttır; yedek parçalara parça garantisi ayrıca verilir.',
          },
          {
            q: 'Periyodik bakım gerekli mi?',
            a: 'Düzenli bakım, kireçlenme ve sensör arızalarını önler. Sulu benmariler için periyodik bakım özellikle önerilir.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
          { label: 'Öztiryakiler Izgara Tamiri', href: '/oztiryakiler-izgara-tamiri' },
          { label: 'Öztiryakiler Ocak Tamiri', href: '/oztiryakiler-ocak-tamiri' },
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
        ]}
      />
    </>
  );
}
