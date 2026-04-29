import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Izgara Tamiri - Lavataşı ve Plaka Izgara Servisi',
  description:
    'Öztiryakiler ızgara tamiri için HSN TECHNIC. Lavataşı, plaka, kömür ve gazlı endüstriyel ızgara modellerinde profesyonel onarım hizmeti.',
  alternates: { canonical: '/oztiryakiler-izgara-tamiri' },
  keywords: [
    'öztiryakiler ızgara tamiri',
    'öztiryakiler ızgara servisi',
    'endüstriyel ızgara tamiri',
    'lavataşı ızgara tamiri',
    'plaka ızgara tamiri',
    'gazlı ızgara servisi',
  ],
  openGraph: {
    title: 'Öztiryakiler Izgara Tamiri - HSN TECHNIC Yetkili Servis',
    description:
      'Lavataşı, plaka ve gazlı Öztiryakiler endüstriyel ızgaralarına brülör, gaz vana ve plaka servisi.',
    url: `${site.url}/oztiryakiler-izgara-tamiri`,
  },
};

export default function OztiryakilerIzgaraTamiriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Izgara Tamiri',
    serviceType: 'Endüstriyel Izgara Tamir ve Servis',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Lavataşı, plaka ve gazlı Öztiryakiler endüstriyel ızgaralarına brülör, gaz vana ve plaka servisi.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler ızgara tamiri"
        pageTitle="Öztiryakiler Izgara Tamiri"
        hero={{
          h1: 'Öztiryakiler Izgara Tamiri - Lavataşı, Plaka ve Gazlı Izgara Servisi',
          intro:
            'Öztiryakiler ızgara tamiri kapsamında brülör, gaz vana, plaka ve lavataşı arızalarına profesyonel ve garantili çözümler.',
        }}
        intro={[
          'Öztiryakiler ızgara tamiri, restoran, kebapçı, otel ve toplu yemek işletmelerinde et ve sebze pişirme istasyonunun kesintisiz çalışması için kritik öneme sahiptir. HSN TECHNIC olarak lavataşı, plaka, gazlı ve elektrikli tüm Öztiryakiler endüstriyel ızgara modellerine yetkili servis kalitesinde tamir hizmeti sağlıyoruz.',
          'Endüstriyel ızgaralarda en sık görülen sorunlar; brülör tıkanıklığı, gaz vana sızıntısı, ateşleme arızası, lavataşı çatlağı, plaka deformasyonu, ısı dağılım problemi ve elektrikli modellerde rezistans yanığıdır. Öztiryakiler ızgara tamiri sürecinde önce arıza tespiti yapıyor, ekipmana özel kalıcı çözümler sunuyoruz.',
          'Doğru ısı dağılımı pişirme kalitesini doğrudan etkiler. Onarım sonrası brülör ayarı, gaz kaçak testi (gazlı modellerde) ve sıcaklık homojenlik kontrolü standart olarak yapılır. Tüm Öztiryakiler ızgara tamiri operasyonları işçilik garantisi kapsamındadır.',
        ]}
        features={[
          'Brülör temizliği, başlık değişimi ve alev kalibrasyonu.',
          'Gaz vana, regülatör ve solenoid arızalarına onarım.',
          'Pilot ateşleme ve elektronik ateşleme bobini servisi.',
          'Lavataşı kontrol/değişim ve plaka deformasyonu onarımı.',
          'Elektrikli modellerde rezistans değişimi ve termostat servisi.',
          'Yağ tahliye ve hijyen sistemi temizliği.',
        ]}
        whyUs={[
          {
            title: 'Lavataşı, Plaka ve Gazlı Izgara Uzmanlığı',
            desc: 'Tüm Öztiryakiler endüstriyel ızgara türlerine kapsamlı tamir desteği veriyoruz.',
          },
          {
            title: 'Sertifikalı Gaz Teknisyenleri',
            desc: 'Gazlı ızgaralarda gaz sertifikalı teknisyenlerimiz güvenli onarım yapar.',
          },
          {
            title: 'Brülör Ayar ve Kalibrasyonu',
            desc: 'Pişirme kalitesi için brülör başlığı, hava ayarı ve alev kalibrasyonu yapıyoruz.',
          },
          {
            title: 'Lavataşı ve Plaka Servisi',
            desc: 'Çatlamış lavataşları ve deforme plakalar için değişim ve restorasyon hizmetleri.',
          },
          {
            title: 'İşçilik Garantisi',
            desc: 'Öztiryakiler ızgara tamiri için işçilik garantisi standart olarak sağlanır.',
          },
          {
            title: 'Hijyen Kontrolü',
            desc: 'Yağ tahliye sistemi temizliği ve hijyen kontrolü her servis sonrası yapılır.',
          },
        ]}
        faq={[
          {
            q: 'Izgaramda ısı homojen değil, sebebi ne?',
            a: 'Brülör tıkanıklığı, gaz dağıtım problemi veya plaka deformasyonu sebep olabilir. Yerinde inceleme ile kesin teşhis yapıyoruz.',
          },
          {
            q: 'Lavataşı çatlamış, değişmesi gerekiyor mu?',
            a: 'Evet. Çatlak lavataşı hem güvenlik hem de pişirme verimi açısından sorundur. Hızlı lavataşı temini ve değişimi yapıyoruz.',
          },
          {
            q: 'Gazlı ızgaramda alev sönüyor, nedeni?',
            a: 'Termokupl arızası, pilot başlık tıkanıklığı veya gaz vana problemleri olabilir. Sertifikalı teknisyenlerimiz çözüyor.',
          },
          {
            q: 'Tamir sonrası garanti veriliyor mu?',
            a: 'Evet. Öztiryakiler ızgara tamiri için işçilik garantisi standarttır; yedek parçalar için parça garantisi sunulur.',
          },
          {
            q: 'Acil servis veriyor musunuz?',
            a: '7/24 çağrı merkezimizle acil ızgara arızalarına hızlı dönüş yapıyoruz; aynı gün servis tercih edilebilir.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
          { label: 'Öztiryakiler Ocak Tamiri', href: '/oztiryakiler-ocak-tamiri' },
          { label: 'Öztiryakiler Benmari Tamiri', href: '/oztiryakiler-benmari-tamiri' },
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
        ]}
      />
    </>
  );
}
