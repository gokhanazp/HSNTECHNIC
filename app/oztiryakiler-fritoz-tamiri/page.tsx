import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Fritöz Tamiri - Endüstriyel Fritöz Servisi',
  description:
    'Öztiryakiler fritöz tamiri için HSN TECHNIC. Rezistans, termostat, yağ sirkülasyonu ve kontrol panel arızalarına profesyonel servis.',
  alternates: { canonical: '/oztiryakiler-fritoz-tamiri' },
  keywords: [
    'öztiryakiler fritöz tamiri',
    'öztiryakiler fritöz servisi',
    'endüstriyel fritöz tamiri',
    'öztiryakiler fritöz rezistans',
    'fritöz termostat tamiri',
  ],
  openGraph: {
    title: 'Öztiryakiler Fritöz Tamiri - HSN TECHNIC Yetkili Servis',
    description:
      'Endüstriyel Öztiryakiler fritözleriniz için rezistans, termostat ve yağ sirkülasyonu servisleri.',
    url: `${site.url}/oztiryakiler-fritoz-tamiri`,
  },
};

export default function OztiryakilerFritozTamiriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Fritöz Tamiri',
    serviceType: 'Endüstriyel Fritöz Tamir ve Servis',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Öztiryakiler endüstriyel fritözlere rezistans, termostat, yağ sirkülasyonu ve kontrol panel servisi.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler fritöz tamiri"
        pageTitle="Öztiryakiler Fritöz Tamiri"
        hero={{
          h1: 'Öztiryakiler Fritöz Tamiri - Profesyonel Fritöz Servisi',
          intro:
            'Öztiryakiler fritöz tamiri ihtiyacınızda rezistans, termostat, kontrol panel ve yağ sirkülasyonu arızalarına hızlı ve garantili çözümler sunuyoruz.',
        }}
        intro={[
          'Öztiryakiler fritöz tamiri, restoran, otel ve fast food işletmelerinde menü akışının korunması için kritik bir teknik servis hizmetidir. HSN TECHNIC olarak elektrikli ve gazlı tüm Öztiryakiler endüstriyel fritöz modellerine yetkili servis kalitesinde tamir hizmeti sunuyoruz.',
          'Endüstriyel fritözlerde en sık yaşanan arızalar; rezistans yanıkları, termostat sapması, yağ tahliye vana sorunu, alarm ve kontrol panel arızası, gazlı modellerde brülör ve pilot alev problemleridir. Öztiryakiler fritöz tamiri sürecinde önce arıza tespiti yapıyor, ardından parça kalitesinden ödün vermeden kalıcı bir onarım uyguluyoruz.',
          'Yağ sıcaklığının doğru tutulması yiyecek kalitesi, hijyen ve enerji verimliliği açısından kritiktir. Öztiryakiler fritöz tamiri sonrasında termostat kalibrasyonu, sıcaklık doğruluk testi ve yağ tahliye sistemi kontrolü standart olarak yapılır. Tüm işlemler işçilik garantisi kapsamındadır.',
        ]}
        features={[
          'Rezistans değişimi ve elektrik tesisat onarımı.',
          'Termostat kalibrasyonu ve sıcaklık doğruluk testi.',
          'Yağ tahliye vanası ve tasfiye sistemi servisi.',
          'Kontrol paneli, dijital ekran ve alarm onarımı.',
          'Gazlı modellerde brülör, pilot alev ve gaz vana servisi.',
          'Yağ sirkülasyonu, filtre ve hijyen sistemi kontrolü.',
        ]}
        whyUs={[
          {
            title: 'Tüm Model Fritözlere Servis',
            desc: 'Tek hazneli, çift hazneli, tezgah üstü ve ayaklı tüm Öztiryakiler fritöz modellerine onarım.',
          },
          {
            title: 'Hızlı Rezistans Servisi',
            desc: 'Stoklarımızdaki rezistanslarla aynı gün rezistans değişimi yapıyor, operasyon kaybını minimize ediyoruz.',
          },
          {
            title: 'Hassas Termostat Ayarı',
            desc: 'Sıcaklık doğruluğu için kalibre cihazlarla termostat testi ve ayarı yapıyoruz.',
          },
          {
            title: 'Gaz ve Elektrik Sertifikası',
            desc: 'Gazlı modeller için sertifikalı teknisyenler, elektrikli modeller için elektrik güvenlik kontrolü.',
          },
          {
            title: 'İşçilik Garantisi',
            desc: 'Öztiryakiler fritöz tamiri için işçilik garantisi ve detaylı servis raporu standarttır.',
          },
          {
            title: 'Hijyen Odaklı Servis',
            desc: 'Tamir sırasında yağ tahliyesi, hazne temizliği ve hijyen kontrolü ile teslim ediyoruz.',
          },
        ]}
        faq={[
          {
            q: 'Fritözüm yağı ısıtmıyor, neden?',
            a: 'En sık nedenler; rezistans yanığı, termostat arızası, kontaktör problemi veya elektrik tesisat sorunlarıdır. Yerinde inceleme ile kesin teşhis yapıyoruz.',
          },
          {
            q: 'Fritöz termostatı doğru çalışıyor mu nasıl anlarım?',
            a: 'Yağ sıcaklığının ayarladığınız değere ulaşmaması veya çok aşması termostat sapmasıdır. Kalibrasyon servisi gerekebilir.',
          },
          {
            q: 'Tamir sırasında yağ değişimi de yapılıyor mu?',
            a: 'Talep edilirse onarım sırasında yağ tahliyesi, hazne temizliği ve yeni yağ doldurma da hizmet kapsamımızdadır.',
          },
          {
            q: 'Öztiryakiler fritöz tamiri için garanti veriliyor mu?',
            a: 'Evet. Tüm onarımlarda işçilik garantisi standart olarak sağlanır; yedek parçalar için ayrıca parça garantisi sunulur.',
          },
          {
            q: 'Acil servis veriyor musunuz?',
            a: '7/24 çağrı merkezimiz aracılığıyla acil Öztiryakiler fritöz tamiri taleplerine hızlı dönüş sağlıyoruz.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
          { label: 'Öztiryakiler Ocak Tamiri', href: '/oztiryakiler-ocak-tamiri' },
          { label: 'Öztiryakiler Fırın Tamiri', href: '/oztiryakiler-firin-tamiri' },
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
        ]}
      />
    </>
  );
}
