import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Bakımı - Periyodik Bakım ve Sözleşmeli Servis',
  description:
    'Öztiryakiler bakımı için profesyonel periyodik bakım hizmetleri. HSN TECHNIC olarak endüstriyel mutfak ekipmanlarınızın ömrünü uzatan sözleşmeli bakım çözümleri sunuyoruz.',
  alternates: { canonical: '/oztiryakiler-bakimi/' },
  keywords: [
    'öztiryakiler bakımı',
    'öztiryakiler bakim',
    'öztiryakiler periyodik bakım',
    'öztiryakiler sözleşmeli bakım',
    'endüstriyel mutfak bakımı',
    'öztiryakiler önleyici bakım',
  ],
  openGraph: {
    title: 'Öztiryakiler Bakımı - HSN TECHNIC Yetkili Servis',
    description:
      'Öztiryakiler endüstriyel mutfak ekipmanları için periyodik bakım, önleyici servis ve sözleşmeli bakım çözümleri.',
    url: `${site.url}/oztiryakiler-bakimi/`,
    type: 'website',
    siteName: site.brand,
    locale: site.locale,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Öztiryakiler Bakımı' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function OztiryakilerBakimiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Bakımı',
    serviceType: 'Endüstriyel Mutfak Periyodik Bakım',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Öztiryakiler bakımı kapsamında periyodik bakım, önleyici servis ve sözleşmeli bakım hizmetleri.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler bakımı"
        pageTitle="Öztiryakiler Bakımı"
        hero={{
          h1: 'Öztiryakiler Bakımı - Periyodik Bakım ve Sözleşmeli Servis',
          intro:
            'Öztiryakiler bakımı için HSN TECHNIC olarak endüstriyel mutfak ekipmanlarınızın ömrünü uzatan, performansını yüksek tutan sözleşmeli periyodik bakım hizmetleri sunuyoruz.',
        }}
        intro={[
          'Öztiryakiler bakımı, endüstriyel mutfaklarda arıza riskini minimize etmenin, ekipman ömrünü uzatmanın ve enerji verimliliğini artırmanın en etkili yoludur. HSN TECHNIC olarak Öztiryakiler bakımı kapsamında işletmenizin operasyonel ihtiyaçlarına özel periyodik bakım programları hazırlıyor; aylık, üç aylık ve yıllık periyotlarda planlı bakım hizmetleri sunuyoruz.',
          'Düzenli yapılan Öztiryakiler bakımı, ani arızalar nedeniyle oluşabilecek operasyon kesintilerini ve buna bağlı gelir kayıplarını önler. Bakım sürecinde ekipmanlarınız uzman teknisyenlerimiz tarafından detaylı kontrolden geçirilir; aşınmış parçalar tespit edilerek arıza oluşmadan değişimi önerilir. Brülör performansı, gaz kaçağı kontrolü, elektrik tesisat güvenliği ve soğutma sistemleri verimi gibi kritik noktalar her bakımda kontrol edilir.',
          'Öztiryakiler bakımı sözleşmesi yapan müşterilerimiz; bakım sırasında fark edilen arızalarda öncelikli servis avantajından yararlanır, indirimli işçilik ücretleriyle hizmet alır ve dönemsel detaylı bakım raporlarına erişir. Bu, sadece kısa vadede maliyet avantajı değil; uzun vadede ekipman değer kaybını ciddi şekilde yavaşlatan stratejik bir yatırımdır.',
        ]}
        features={[
          'Aylık, 3 aylık veya yıllık esnek periyodik bakım planları sunuyoruz.',
          'Öztiryakiler bakımı kapsamında brülör, gaz, elektrik, soğutma ve emiş sistemlerinin tamamı kontrol edilir.',
          'Aşınmış parçalar arıza oluşmadan tespit edilip değişim önerilir.',
          'Sözleşmeli müşterilere arıza durumunda öncelikli servis ve indirimli işçilik avantajı.',
          'Her bakım sonunda detaylı kontrol raporu ve öneri listesi teslim edilir.',
          'Enerji verimliliği ölçümleriyle işletme giderlerinin azaltılmasına katkı sağlanır.',
        ]}
        whyUs={[
          {
            title: 'Önleyici Bakım Yaklaşımı',
            desc: 'Öztiryakiler bakımı sürecinde arıza oluşmadan müdahale anlayışıyla çalışıyoruz.',
          },
          {
            title: 'Esnek Sözleşme Modelleri',
            desc: 'İşletmenizin büyüklüğüne ve operasyon yoğunluğuna göre özel bakım sözleşmeleri hazırlıyoruz.',
          },
          {
            title: 'Detaylı Kontrol Listesi',
            desc: 'Her Öztiryakiler bakımı ziyareti, standart bir kontrol listesiyle yapılır; nokta atışı kontrol garantilenir.',
          },
          {
            title: 'Raporlu Çalışma',
            desc: 'Her bakım sonunda yapılan kontroller ve öneriler detaylı bir raporla teslim edilir.',
          },
          {
            title: 'Öncelikli Servis Avantajı',
            desc: 'Sözleşmeli müşterilerimize arıza durumunda öncelikli yerinde servis sağlanır.',
          },
          {
            title: 'Uzun Vadeli İşletme Tasarrufu',
            desc: 'Önleyici Öztiryakiler bakımı, uzun vadede onarım maliyetlerini ve ekipman yenileme harcamalarını ciddi şekilde azaltır.',
          },
        ]}
        faq={[
          {
            q: 'Öztiryakiler bakımı ne sıklıkla yapılmalı?',
            a: 'Operasyon yoğunluğuna göre değişir. Yoğun çalışan endüstriyel mutfaklarda aylık ya da 3 aylık bakım önerilir. Daha düşük yoğunluktaki işletmelerde 6 ayda bir veya yıllık bakım yeterli olabilir. İşletmenizin profilinize göre özel planlama yaparız.',
          },
          {
            q: 'Bakım sözleşmesi yaptığımda fiyat avantajı var mı?',
            a: 'Evet. Öztiryakiler bakımı sözleşmesi yapan müşterilerimiz, sözleşme dışı çağrılara kıyasla indirimli işçilik ve yedek parça koşullarından yararlanır. Ayrıca arıza durumunda öncelikli servis sunulur.',
          },
          {
            q: 'Bakımda hangi kontroller yapılıyor?',
            a: 'Brülör performansı, gaz hattı sızdırmazlık testi, elektrik tesisatı güvenliği, soğutma sistemleri verim ölçümü, sıcaklık kalibrasyonu, mekanik aksamların yağlanması başta olmak üzere tüm kritik noktaları kontrol ediyoruz.',
          },
          {
            q: 'Bakım sırasında arıza tespit edilirse?',
            a: 'Öztiryakiler bakımı sırasında tespit edilen arızalar size raporlanır ve onarım için yazılı/sözlü teklif sunulur. Onayınız doğrultusunda gerekli onarım planlanır.',
          },
          {
            q: 'Bakım hangi şehirlerde sunuluyor?',
            a: 'Türkiye genelinde Öztiryakiler bakımı hizmeti sunmaktayız. Ana iller için sözleşmeli bakım sıkça tercih edilirken, diğer illerde de planlı ziyaret programları oluşturuyoruz.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
          { label: 'Öztiryakiler Ürünleri', href: '/oztiryakiler-urunleri' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
          { label: 'İletişim', href: '/iletisim' },
        ]}
      />
    </>
  );
}
