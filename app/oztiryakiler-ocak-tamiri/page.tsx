import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Ocak Tamiri - Endüstriyel Ocak Servisi',
  description:
    'Öztiryakiler ocak tamiri için HSN TECHNIC. Brülör arızası, gaz vana servisi, ateşleme problemleri ve tüm endüstriyel ocak modellerinde profesyonel onarım.',
  alternates: { canonical: '/oztiryakiler-ocak-tamiri/' },
  keywords: [
    'öztiryakiler ocak tamiri',
    'öztiryakiler ocak servisi',
    'endüstriyel ocak tamiri',
    'öztiryakiler brülör tamiri',
    'öztiryakiler ocak arıza',
    'endüstriyel ocak servisi istanbul',
  ],
  openGraph: {
    title: 'Öztiryakiler Ocak Tamiri - HSN TECHNIC Yetkili Servis',
    description:
      'Öztiryakiler endüstriyel ocaklarınız için brülör servisi, gaz vana onarımı ve ateşleme problemlerine profesyonel çözümler.',
    url: `${site.url}/oztiryakiler-ocak-tamiri/`,
    type: 'website',
    siteName: site.brand,
    locale: site.locale,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Öztiryakiler Ocak Tamiri' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function OztiryakilerOcakTamiriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Ocak Tamiri',
    serviceType: 'Endüstriyel Ocak Tamir ve Servis',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Öztiryakiler endüstriyel ocaklara brülör, gaz vana, ateşleme ve termostat servisi başta olmak üzere kapsamlı tamir hizmeti.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler ocak tamiri"
        pageTitle="Öztiryakiler Ocak Tamiri"
        hero={{
          h1: 'Öztiryakiler Ocak Tamiri - Profesyonel Endüstriyel Ocak Servisi',
          intro:
            'Öztiryakiler ocak tamiri taleplerinizde brülör, gaz hattı, ateşleme ve termostat arızalarına hızlı ve garantili çözümler sunuyoruz.',
        }}
        intro={[
          'Öztiryakiler ocak tamiri, endüstriyel mutfakların kalbi olan pişirme istasyonunun kesintisiz çalışması için kritik bir servis hizmetidir. HSN TECHNIC olarak Öztiryakiler ocak tamiri konusunda uzman teknik kadromuzla 2-4-6 gözlü tüm endüstriyel ocak modellerine yetkili servis kalitesinde onarım sağlıyoruz.',
          'Endüstriyel ocaklarda en sık karşılaşılan arızalar; brülör tıkanıklığı, gaz vana sızıntısı, pilot alev sönmesi, ateşleme bobini arızası ve termostat sapmasıdır. Öztiryakiler ocak tamiri sürecinde önce hassas bir gaz kaçağı testi yapıyor, ardından arızanın kök sebebini tespit ederek kalıcı bir onarım planı hazırlıyoruz. Geçici çözümler yerine sorunun tekrarını engelleyecek profesyonel müdahale yaklaşımıyla çalışıyoruz.',
          'Yetkili servis standartlarında orijinal veya uyumlu yedek parça kullanımı, gaz güvenlik testleri, brülör ayar kalibrasyonu ve kullanıcı eğitimi Öztiryakiler ocak tamiri sürecimizin standart aşamalarıdır. Tüm onarımlarımız işçilik garantisi kapsamındadır ve kurumsal işletmelere özel sözleşmeli periyodik bakım planlarıyla desteklenebilir.',
        ]}
        features={[
          'Brülör temizliği, başlık değişimi ve alev kalibrasyonu hizmetleri.',
          'Gaz vana, regülatör ve solenoid arızalarına profesyonel onarım.',
          'Pilot ateşleme sistemleri ve elektronik ateşleme bobini servisi.',
          'Termostat ve sıcaklık kontrol arızalarında hassas kalibrasyon.',
          'Gaz kaçağı testi, sızdırmazlık kontrolü ve güvenlik raporu.',
          'Yerinde aynı gün servis ve 7/24 acil çağrı imkanı.',
        ]}
        whyUs={[
          {
            title: 'Sertifikalı Gaz Teknisyenleri',
            desc: 'Öztiryakiler ocak tamiri operasyonlarımız gaz sertifikalı teknisyenler tarafından yürütülür.',
          },
          {
            title: 'Tüm Modellere Servis',
            desc: '2, 4, 6 gözlü ve özel kapasiteli tüm Öztiryakiler endüstriyel ocak modellerine onarım sağlıyoruz.',
          },
          {
            title: 'Orijinal Yedek Parça',
            desc: 'Brülör, vana, ateşleme parçalarında orijinal ya da uyumlu kalitede yedek parça kullanıyoruz.',
          },
          {
            title: 'Gaz Güvenlik Testi',
            desc: 'Her tamir sonrası standart gaz kaçak testi yapılır, güvenlik raporu teslim edilir.',
          },
          {
            title: 'İşçilik Garantisi',
            desc: 'Öztiryakiler ocak tamiri kapsamında yapılan tüm işlemler işçilik garantisi altındadır.',
          },
          {
            title: 'Hızlı Müdahale',
            desc: 'Aynı gün servis prensibi ile mutfak operasyonlarınızdaki kesintiyi minimize ediyoruz.',
          },
        ]}
        faq={[
          {
            q: 'Öztiryakiler ocak tamiri ortalama ne kadar sürer?',
            a: 'Tipik bir brülör temizliği veya ateşleme arızası aynı gün çözülebilir. Vana veya regülatör değişimi gibi parça temini gerektiren onarımlarda süre, parça stokuna göre değişir; süreç başında size net bilgi sunulur.',
          },
          {
            q: 'Ocağım ateşlemiyor, sebebi ne olabilir?',
            a: 'En sık nedenler; tıkanmış pilot başlık, arızalı ateşleme bobini, termokupl sorunu veya gaz vana arızasıdır. Yerinde inceleme ile kesin teşhis yapıyor ve onarım planı sunuyoruz.',
          },
          {
            q: 'Gaz kaçağı şüphesi var, ne yapmalıyım?',
            a: 'Gazı vanasından kapatın, alanı havalandırın ve elektrikli cihaz kullanmayın. Acil çağrı hattımıza ulaşın; sertifikalı ekibimiz en kısa sürede yerinde sızdırmazlık testi ve onarım yapar.',
          },
          {
            q: 'Tamir sonrası garanti veriyor musunuz?',
            a: 'Evet. Öztiryakiler ocak tamiri için işçilik garantisi standart olarak sağlanır. Kullanılan yedek parçalar için ayrıca parça garantisi sunulur, servis raporu teslim edilir.',
          },
          {
            q: 'Periyodik bakım sözleşmesi yapıyor musunuz?',
            a: 'Evet. Aylık, üç aylık veya yıllık bakım sözleşmeleriyle ocaklarınızın performansını sürekli yüksek tutuyoruz. Sözleşmeli müşterilere öncelikli servis ve indirimli işçilik avantajı sunuyoruz.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Öztiryakiler Fırın Tamiri', href: '/oztiryakiler-firin-tamiri' },
          { label: 'Öztiryakiler Fritöz Tamiri', href: '/oztiryakiler-fritoz-tamiri' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
        ]}
      />
    </>
  );
}
