import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Bulaşık Makinesi Tamiri - Cup, Hood, Tünel Servisi',
  description:
    'Öztiryakiler bulaşık makinesi tamiri için HSN TECHNIC. Cup, hood ve tünel tipi tüm endüstriyel modellerde rezistans, pompa ve panel servisi.',
  alternates: { canonical: '/oztiryakiler-bulasik-makinesi-tamiri' },
  keywords: [
    'öztiryakiler bulaşık makinesi tamiri',
    'öztiryakiler bulaşık makinesi servisi',
    'endüstriyel bulaşık makinesi tamiri',
    'cup tipi bulaşık makinesi tamiri',
    'hood tipi bulaşık makinesi tamiri',
    'tünel bulaşık makinesi tamiri',
  ],
  openGraph: {
    title: 'Öztiryakiler Bulaşık Makinesi Tamiri - HSN TECHNIC',
    description:
      'Cup, hood ve tünel tipi Öztiryakiler endüstriyel bulaşık makinelerinde profesyonel tamir hizmeti.',
    url: `${site.url}/oztiryakiler-bulasik-makinesi-tamiri`,
  },
};

export default function OztiryakilerBulasikMakinesiTamiriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Bulaşık Makinesi Tamiri',
    serviceType: 'Endüstriyel Bulaşık Makinesi Tamir ve Servis',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Cup, hood ve tünel tipi Öztiryakiler endüstriyel bulaşık makinelerine rezistans, pompa, kontrol panel ve filtre servisi.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler bulaşık makinesi tamiri"
        pageTitle="Öztiryakiler Bulaşık Makinesi Tamiri"
        hero={{
          h1: 'Öztiryakiler Bulaşık Makinesi Tamiri - Cup, Hood ve Tünel Tipi Servis',
          intro:
            'Öztiryakiler endüstriyel bulaşık makineleriniz için rezistans, sirkülasyon pompası, durulama, panel ve filtre arızalarına profesyonel tamir hizmeti sunuyoruz.',
        }}
        intro={[
          'Öztiryakiler bulaşık makinesi tamiri, restoran, otel, catering ve toplu yemek tesislerinde hijyen ve operasyonel sürekliliğin korunması için kritik bir servis hizmetidir. HSN TECHNIC olarak cup tipi, hood tipi ve tünel tipi tüm Öztiryakiler endüstriyel bulaşık makinesi modellerine yetkili servis kalitesinde tamir desteği sağlıyoruz.',
          'Endüstriyel bulaşık makinelerinde en sık karşılaşılan arızalar; rezistans yanığı, sirkülasyon ve durulama pompası problemleri, sıcaklık sensör arızaları, kontrol panel hataları, kireç tıkanıklığı ve filtre/conta yıpranmasıdır. Öztiryakiler bulaşık makinesi tamiri sürecinde önce arıza tespiti yapıyor, ardından kalıcı çözüm sunuyoruz.',
          'Yıkama performansı, su sıcaklığı, durulama basıncı ve kimyasal dozaj birbiriyle bağlantılı parametrelerdir. Onarım sonrası tüm bu noktalarda performans testi yapıp ekipmanı en üst kalitede teslim ediyoruz. Tüm tamir işlemleri işçilik garantisi kapsamındadır.',
        ]}
        features={[
          'Rezistans değişimi ve elektrik tesisat onarımı.',
          'Sirkülasyon ve durulama pompası servisi.',
          'Sıcaklık sensörü, termostat ve panel kart arızalarına onarım.',
          'Kireç sökme, dozaj sistemi ve filtre temizliği.',
          'Kapı, conta ve sızdırmazlık yenileme.',
          'Tünel modellerde konveyör motoru ve hız kontrol servisi.',
        ]}
        whyUs={[
          {
            title: 'Tüm Tip Bulaşık Makinelerine Servis',
            desc: 'Cup, hood ve tünel tipi tüm Öztiryakiler modellerine kapsamlı tamir desteği.',
          },
          {
            title: 'Hijyen Odaklı Onarım',
            desc: 'Tamir sonrası yıkama, durulama ve dezenfeksiyon performans testi yapıyoruz.',
          },
          {
            title: 'Kireç ve Filtre Bakımı',
            desc: 'Bölge su sertliğine göre kireç sökme protokolü ve filtre değişimi yapılır.',
          },
          {
            title: 'Pompa Servisi',
            desc: 'Sirkülasyon ve durulama pompalarında onarım veya değişim seçenekleri sunuyoruz.',
          },
          {
            title: 'İşçilik Garantisi',
            desc: 'Öztiryakiler bulaşık makinesi tamiri için işçilik garantisi standart olarak sağlanır.',
          },
          {
            title: 'Acil Servis',
            desc: '7/24 çağrı merkezimiz ile mutfak operasyonlarınızı durduran arızalara hızlı dönüş.',
          },
        ]}
        faq={[
          {
            q: 'Makine yıkamayı yapmıyor, sebebi ne?',
            a: 'Sirkülasyon pompa arızası, rezistans yanığı, su girişi solenoidi veya seviye sensör problemleri olabilir. Yerinde teşhis ile çözüm sunuyoruz.',
          },
          {
            q: 'Bardaklarda kireç lekesi var, neden?',
            a: 'Genelde durulama suyunda kireç ve dozaj sisteminde aksaklık vardır. Kireç sökme bakımı ve dozaj kalibrasyonu ile sorun çözülür.',
          },
          {
            q: 'Tünel makinem konveyör hareket etmiyor?',
            a: 'Konveyör motor arızası, hız kontrol kartı veya zincir problemleri olabilir. Tünel makineleri için özel servis ekibimiz var.',
          },
          {
            q: 'Periyodik bakım önerir misiniz?',
            a: 'Evet. Endüstriyel bulaşık makinelerinde periyodik bakım, kireç oluşumunu önler ve ekipman ömrünü ciddi şekilde uzatır. Sözleşmeli bakım planları sunuyoruz.',
          },
          {
            q: 'Tamir öncesi fiyat alabilir miyim?',
            a: 'Evet. Yerinde inceleme veya telefon görüşmesi sonrası tahmini fiyat sunulur, onayınız ile işleme başlanır.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
          { label: 'Öztiryakiler Bakımı', href: '/oztiryakiler-bakimi' },
          { label: 'Öztiryakiler Fırın Tamiri', href: '/oztiryakiler-firin-tamiri' },
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
        ]}
      />
    </>
  );
}
