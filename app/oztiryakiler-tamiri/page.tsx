import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Tamiri - Endüstriyel Mutfak Onarım Hizmetleri',
  description:
    'Öztiryakiler tamiri için profesyonel onarım hizmetleri. HSN TECHNIC olarak ocak, fritöz, fırın, bulaşık makinesi, soğuk oda dahil tüm Öztiryakiler ekipmanlarını tamir ediyoruz.',
  alternates: { canonical: '/oztiryakiler-tamiri/' },
  keywords: [
    'öztiryakiler tamiri',
    'öztiryakiler tamir',
    'öztiryakiler onarım',
    'öztiryakiler arıza tamiri',
    'endüstriyel mutfak tamiri',
    'öztiryakiler ocak tamiri',
    'öztiryakiler fritöz tamiri',
  ],
  openGraph: {
    title: 'Öztiryakiler Tamiri - HSN TECHNIC Yetkili Servis',
    description:
      'Tüm Öztiryakiler endüstriyel mutfak ekipmanları için profesyonel tamir, onarım ve teknik servis hizmetleri.',
    url: `${site.url}/oztiryakiler-tamiri/`,
    type: 'website',
    siteName: site.brand,
    locale: site.locale,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Öztiryakiler Tamiri' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function OztiryakilerTamiriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Tamiri',
    serviceType: 'Endüstriyel Mutfak Tamir ve Onarım',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Öztiryakiler tamiri kapsamında tüm endüstriyel mutfak ekipmanlarına profesyonel onarım, parça değişimi ve teknik servis.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler tamiri"
        pageTitle="Öztiryakiler Tamiri"
        hero={{
          h1: 'Öztiryakiler Tamiri - Profesyonel Onarım ve Teknik Servis',
          intro:
            'Öztiryakiler tamiri ihtiyacınız için HSN TECHNIC yanınızda. Tüm endüstriyel mutfak ekipmanlarınızdaki arızalara hızlı, kalıcı ve garantili çözümler sunuyoruz.',
        }}
        intro={[
          'Öztiryakiler tamiri, endüstriyel mutfak ekipmanlarının doğru teşhis edilip uzun ömürlü onarılması için uzmanlık gerektirir. HSN TECHNIC olarak Öztiryakiler tamiri konusunda sertifikalı teknik kadromuzla; ocak, fritöz, fırın, ızgara, benmari, bulaşık makinesi ve soğuk oda gibi tüm endüstriyel mutfak ekipmanlarına yetkili servis kalitesinde tamir hizmeti sunuyoruz.',
          'Öztiryakiler tamiri sürecinde önce hassas bir arıza tespiti yapar, ardından ekonomik ve kalıcı bir çözüm yolu öneririz. Onarımlarımızda orijinal ya da uyumlu yedek parça kullanırız; tüm tamir işlemleri için işçilik garantisi sağlarız. Geçici çözümler yerine kök sebebe yönelik onarım yapmak; ekipmanın daha sonra benzer bir arıza ile karşılaşma riskini ortadan kaldırır.',
          'Her endüstriyel mutfak işletmesinde bir ekipman arızası, kısa sürede ciddi gelir kayıplarına dönüşebilir. Öztiryakiler tamiri taleplerinize 7/24 ulaşılabilir çağrı merkezimiz ve WhatsApp hattımızla anında dönüş yapıyor; mümkün olan en kısa sürede yerinde müdahaleyi planlıyoruz. Türkiye genelinde sunduğumuz Öztiryakiler tamiri hizmeti, kurumsal işletmelerin en çok tercih ettiği teknik servis çözümlerinden biridir.',
        ]}
        features={[
          'Öztiryakiler tamiri öncesinde detaylı arıza tespiti yapılır, sorunun kök sebebi belirlenir.',
          'Onarımda orijinal veya uyumlu kalitede yedek parça kullanılır; geçici çözüm yerine kalıcı tamir yapılır.',
          'Tüm Öztiryakiler tamiri işlemleri işçilik garantisi kapsamında sunulur.',
          'Tamir öncesi şeffaf maliyet bilgisi verilir; onayınız olmadan işlem başlatılmaz.',
          'Servis sonrası detaylı bir tamir raporu hazırlanır ve teslim edilir.',
          'Tek seferlik tamir + sözleşmeli periyodik bakım kombinasyonuyla uzun ömürlü çözüm.',
        ]}
        whyUs={[
          {
            title: 'Doğru Arıza Tespiti',
            desc: 'Öztiryakiler tamiri için tecrübeli teknik kadromuz arıza kaynağını ilk seferde doğru tespit eder.',
          },
          {
            title: 'Hızlı Onarım Süresi',
            desc: 'Yedek parça stokumuz sayesinde Öztiryakiler tamiri süreçlerini olabildiğince kısa tutuyoruz.',
          },
          {
            title: 'Kalıcı Çözümler',
            desc: 'Geçici müdahale yerine sürdürülebilir tamir yaklaşımı; benzer arızaların tekrarını engelliyoruz.',
          },
          {
            title: 'Garantili İşçilik',
            desc: 'Tüm Öztiryakiler tamiri operasyonları işçilik garantisi kapsamındadır.',
          },
          {
            title: 'Şeffaf Fiyatlandırma',
            desc: 'Tamir öncesi yazılı/sözlü teklif verilir; süreç boyunca ek sürpriz maliyet oluşmaz.',
          },
          {
            title: 'Kurumsal Hizmet Anlayışı',
            desc: 'Faturalı, sözleşmeli ve raporlu Öztiryakiler tamiri ile kurumsal müşterilere uygun hizmet.',
          },
        ]}
        faq={[
          {
            q: 'Öztiryakiler tamiri ortalama ne kadar sürer?',
            a: 'Onarım süresi arızanın türüne, gerekli yedek parçanın stoklarımızda olup olmamasına ve ekipmanın durumuna bağlıdır. Stoklarımızda bulunan parçalarla yapılan tamirler genellikle aynı gün tamamlanır. Özel sipariş gerektiren parçalarda süre temin durumuna göre size bildirilir.',
          },
          {
            q: 'Öztiryakiler tamiri için garanti veriliyor mu?',
            a: 'Evet. Tüm Öztiryakiler tamiri işlemlerinde işçilik garantisi standart olarak sağlanır. Kullanılan yedek parçalar için de parça garantisi sunulur. Servis sonrası size detaylı bir rapor teslim edilir.',
          },
          {
            q: 'Hangi ekipmanlar tamir kapsamında?',
            a: 'Endüstriyel ocak tamiri, fritöz tamiri, fırın tamiri, ızgara tamiri, benmari tamiri, bulaşık makinesi tamiri ve soğuk oda tamiri başta olmak üzere tüm Öztiryakiler endüstriyel mutfak ekipmanlarına tamir hizmeti veriyoruz.',
          },
          {
            q: 'Tamir öncesinde fiyat alabilir miyim?',
            a: 'Evet. Öztiryakiler tamiri için yerinde inceleme sonrası ya da telefonda alınan bilgilere göre tahmini fiyat bilgisi sunarız. Onayınız alındıktan sonra işleme başlanır.',
          },
          {
            q: 'Acil tamir hizmeti veriyor musunuz?',
            a: 'Evet. 7/24 çağrı merkezimiz ile acil Öztiryakiler tamiri taleplerine hızlı dönüş yapıyoruz. Aynı gün servis sıkça tercih edilen seçeneğimizdir.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Öztiryakiler Bakımı', href: '/oztiryakiler-bakimi' },
          { label: 'Öztiryakiler Ürünleri', href: '/oztiryakiler-urunleri' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
          { label: 'İletişim', href: '/iletisim' },
        ]}
      />
    </>
  );
}
