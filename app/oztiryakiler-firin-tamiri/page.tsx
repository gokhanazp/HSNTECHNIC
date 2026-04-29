import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Fırın Tamiri - Konveksiyon, Kombi, Döner Fırın Servisi',
  description:
    'Öztiryakiler fırın tamiri için HSN TECHNIC. Konveksiyonlu, kombi ve döner fırın modellerinde rezistans, fan, termostat ve panel servisi.',
  alternates: { canonical: '/oztiryakiler-firin-tamiri' },
  keywords: [
    'öztiryakiler fırın tamiri',
    'öztiryakiler fırın servisi',
    'endüstriyel fırın tamiri',
    'konveksiyonlu fırın tamiri',
    'kombi fırın tamiri',
    'döner fırın tamiri',
  ],
  openGraph: {
    title: 'Öztiryakiler Fırın Tamiri - HSN TECHNIC Yetkili Servis',
    description:
      'Konveksiyonlu, kombi ve döner Öztiryakiler endüstriyel fırınlarına rezistans, fan ve panel servisi.',
    url: `${site.url}/oztiryakiler-firin-tamiri`,
  },
};

export default function OztiryakilerFirinTamiriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Fırın Tamiri',
    serviceType: 'Endüstriyel Fırın Tamir ve Servis',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Öztiryakiler konveksiyonlu, kombi ve döner fırınlara rezistans, fan motoru, termostat ve elektronik kart servisi.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler fırın tamiri"
        pageTitle="Öztiryakiler Fırın Tamiri"
        hero={{
          h1: 'Öztiryakiler Fırın Tamiri - Konveksiyon, Kombi ve Döner Fırın Servisi',
          intro:
            'Öztiryakiler fırın tamiri kapsamında konveksiyonlu, kombi ve döner fırın modellerinizde rezistans, fan motoru, termostat ve elektronik kart arızalarına profesyonel çözümler.',
        }}
        intro={[
          'Öztiryakiler fırın tamiri, pastane, otel mutfağı, restoran ve catering işletmeleri için pişirme akışının kesintisiz devam etmesini sağlayan kritik bir teknik servis hizmetidir. HSN TECHNIC olarak konveksiyonlu, kombi (combi-steamer), döner ve elektrikli/gazlı tüm Öztiryakiler endüstriyel fırın modellerine yetkili servis kalitesinde tamir hizmeti sunuyoruz.',
          'Endüstriyel fırınlarda en sık yaşanan arızalar; rezistans yanığı, fan motor arızası, termostat sapması, buhar sistemi sorunu (combi modellerde), kontrol panel/elektronik kart arızası ve kapı conta yıpranmasıdır. Öztiryakiler fırın tamiri sürecinde her arızanın kök sebebini tespit ediyor, kalıcı bir onarım planı uyguluyoruz.',
          'Sıcaklık homojenliği ve buhar dağılımı pişirme sonucunu doğrudan etkiler. Onarım sonrası sıcaklık kalibrasyonu, fan dengesi kontrolü ve combi modellerde buhar performans testi standart olarak yapılır. Tüm Öztiryakiler fırın tamiri işlemlerimiz işçilik garantisi kapsamındadır.',
        ]}
        features={[
          'Rezistans yanığı, üst/alt rezistans değişimi ve elektrik tesisat servisi.',
          'Fan motoru, fan kanat ve fan dengeleme bakımı.',
          'Termostat kalibrasyonu ve sıcaklık doğruluk testi.',
          'Combi-steamer modellerde buhar jeneratörü ve buhar valf servisi.',
          'Elektronik kontrol kartı, dijital ekran ve panel arızalarına onarım.',
          'Kapı conta değişimi ve ısı kaybı önleme servisi.',
        ]}
        whyUs={[
          {
            title: 'Konveksiyon, Kombi ve Döner Fırın Uzmanlığı',
            desc: 'Tüm Öztiryakiler endüstriyel fırın türlerine kapsamlı tamir desteği sağlıyoruz.',
          },
          {
            title: 'Hassas Sıcaklık Kalibrasyonu',
            desc: 'Pişirme sonucunu etkileyen sıcaklık doğruluğu kalibre cihazlarla ölçülüp ayarlanır.',
          },
          {
            title: 'Buhar Sistemi Servisi',
            desc: 'Combi-steamer modellerde buhar jeneratörü ve dağıtım sistemine özel servis verilir.',
          },
          {
            title: 'Elektronik Kart Onarımı',
            desc: 'Kart değişimi yerine mümkün olduğunda komponent onarımı ile maliyet avantajı sağlıyoruz.',
          },
          {
            title: 'Hızlı Yedek Parça Erişimi',
            desc: 'Sık kullanılan rezistans, fan ve termostat parçalarını stoklarımızda bulundurarak hızlı onarım sağlıyoruz.',
          },
          {
            title: 'İşçilik Garantisi',
            desc: 'Öztiryakiler fırın tamiri kapsamında yapılan tüm işlemler işçilik garantisi altındadır.',
          },
        ]}
        faq={[
          {
            q: 'Fırınım sıcaklığı tutmuyor, neden?',
            a: 'Termostat sapması, sıcaklık sensör arızası, kontrol kartı problemi veya kapı conta yıpranması sebep olabilir. Yerinde inceleme ile kesin teşhis yapıyoruz.',
          },
          {
            q: 'Fan dönmüyor, fırın çalışmıyor mu?',
            a: 'Konveksiyonlu fırınlarda fan motor arızası genelde rölaye, kondansatör veya motor sargısına bağlıdır. Fan değişimi veya onarımı ile sorun çözülür.',
          },
          {
            q: 'Combi fırınımda buhar gelmiyor, sebebi ne?',
            a: 'Buhar jeneratör rezistansı, su girişi solenoid valfı veya kireç tıkanıklığı sebep olabilir. Düzenli kireç çözme bakımı bu tür sorunları önler.',
          },
          {
            q: 'Tamir sonrası garanti veriyor musunuz?',
            a: 'Evet. Öztiryakiler fırın tamiri için işçilik garantisi standarttır; yedek parçalar için parça garantisi ayrıca verilir.',
          },
          {
            q: 'Tamir öncesi maliyet alabilir miyim?',
            a: 'Evet. Yerinde inceleme veya telefonda alınan bilgilere göre tahmini fiyat sunulur, onayınız sonrası işleme başlanır.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
          { label: 'Öztiryakiler Ocak Tamiri', href: '/oztiryakiler-ocak-tamiri' },
          { label: 'Öztiryakiler Bulaşık Makinesi Tamiri', href: '/oztiryakiler-bulasik-makinesi-tamiri' },
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
        ]}
      />
    </>
  );
}
