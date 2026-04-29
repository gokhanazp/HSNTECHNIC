import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Servisi - Endüstriyel Mutfak Yetkili Servis',
  description:
    'Öztiryakiler servisi için profesyonel destek. HSN TECHNIC olarak tüm Öztiryakiler endüstriyel mutfak ekipmanlarına yetkili servis kalitesinde teknik servis ve onarım sunuyoruz.',
  alternates: { canonical: '/oztiryakiler-servisi' },
  keywords: [
    'öztiryakiler servisi',
    'öztiryakiler yetkili servisi',
    'öztiryakiler servis',
    'endüstriyel mutfak servisi',
    'öztiryakiler teknik servis',
  ],
  openGraph: {
    title: 'Öztiryakiler Servisi - HSN TECHNIC Yetkili Servis',
    description:
      'Tüm Öztiryakiler endüstriyel mutfak ekipmanları için yetkili servis kalitesinde teknik destek, onarım ve bakım hizmetleri.',
    url: `${site.url}/oztiryakiler-servisi`,
  },
};

export default function OztiryakilerServisiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Servisi',
    serviceType: 'Endüstriyel Mutfak Yetkili Servis',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Öztiryakiler servisi kapsamında endüstriyel mutfak ekipmanlarına yetkili servis kalitesinde teknik destek, onarım ve bakım hizmetleri.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler servisi"
        pageTitle="Öztiryakiler Servisi"
        hero={{
          h1: 'Öztiryakiler Servisi - Profesyonel Yetkili Servis Hizmetleri',
          intro:
            'Öztiryakiler servisi için HSN TECHNIC olarak Türkiye genelinde yetkili servis kalitesinde teknik destek sunuyoruz. Endüstriyel mutfak ekipmanlarınızın kesintisiz çalışması için yanınızdayız.',
        }}
        intro={[
          'Öztiryakiler servisi, endüstriyel mutfak ekipmanlarının uzun ömürlü ve yüksek performansla çalışmasının temel anahtarıdır. HSN TECHNIC olarak, Öztiryakiler markasının yetkili servis standartlarında, sektörde 15 yılı aşkın tecrübemizle restoran, otel, catering, hastane ve toplu yemek tesislerine kapsamlı servis hizmetleri sunuyoruz.',
          'Öztiryakiler servisi alanında yalnızca arıza müdahalesi değil; periyodik bakım, performans iyileştirme, enerji verimliliği danışmanlığı, yedek parça temini ve sözleşmeli servis çözümleri de sağlıyoruz. Her servis çağrısı, sertifikalı teknik kadromuz tarafından yetkili servis kalitesinde, raporlu ve garantili bir şekilde tamamlanır.',
          'Endüstriyel mutfak operasyonunda zaman, doğrudan ciroya etki eden bir kavramdır. Bu sebeple Öztiryakiler servisi taleplerinize aynı gün içinde dönüş yapıyor; mümkün olan en kısa sürede yerinde müdahale ile işletmenizin operasyonel sürekliliğini koruyoruz. Türkiye genelinde sunduğumuz öztiryakiler servisi hizmetinde, orijinal ve uyumlu yedek parça desteğiyle kalıcı çözümler üretiyoruz.',
        ]}
        features={[
          'Öztiryakiler servisi taleplerinde aynı gün geri dönüş ve hızlı müdahale prensibimizle çalışıyoruz.',
          'Sertifikalı teknik ekibimiz, yılların verdiği deneyimle her ekipmana yetkili servis kalitesinde müdahale eder.',
          'Tüm Öztiryakiler servisi işlemlerinde işçilik garantisi ve detaylı servis raporu sağlanır.',
          'Şeffaf fiyat politikamızla servis öncesinde net teklif verir, gizli maliyet uygulamayız.',
          'Sözleşmeli periyodik bakım ile arıza riskini minimize eder, ekipman ömrünü uzatırız.',
          '7/24 ulaşılabilir çağrı merkezimiz ve WhatsApp hattımız ile her an yanınızdayız.',
        ]}
        whyUs={[
          {
            title: 'Yetkili Servis Standardı',
            desc: 'Öztiryakiler servisi sürecinde, marka standartlarına uygun teknik müdahale ve raporlama yapılır.',
          },
          {
            title: 'Tüm Ekipman Tiplerine Servis',
            desc: 'Ocak, fritöz, fırın, ızgara, benmari, bulaşık makinesi ve soğuk oda dahil tüm ürün gruplarına Öztiryakiler servisi sağlanır.',
          },
          {
            title: 'Hızlı ve Çözüm Odaklı',
            desc: 'Servis taleplerinizi 7/24 alıyor, çağrı sonrası en kısa sürede yerinde müdahale planlıyoruz.',
          },
          {
            title: 'Türkiye Geneli Hizmet',
            desc: 'İstanbul, Ankara, İzmir başta olmak üzere Türkiye genelinde yetkili servis ağımızla yanınızdayız.',
          },
          {
            title: 'Kurumsal Süreç ve Faturalama',
            desc: 'Tüm Öztiryakiler servisi işlemleri faturalı ve sözleşme bazlı yapılır; raporlu çıktı verilir.',
          },
          {
            title: 'Uzun Vadeli İş Ortaklığı',
            desc: 'Kurumsal müşterilerimize özel periyodik bakım sözleşmeleriyle önleyici servis sunuyoruz.',
          },
        ]}
        faq={[
          {
            q: 'Öztiryakiler servisi nasıl talep edilir?',
            a: 'Sitemizdeki servis talep formunu doldurabilir, çağrı merkezimizi arayabilir veya WhatsApp hattımızdan anlık iletişime geçebilirsiniz. Talebiniz alındıktan sonra en kısa sürede teknik ekibimiz size dönüş yapar ve yerinde servis randevusu planlanır.',
          },
          {
            q: 'Öztiryakiler servisi hangi şehirlerde sunuluyor?',
            a: 'HSN TECHNIC olarak Türkiye genelinde Öztiryakiler servisi hizmeti sunuyoruz. İstanbul, Ankara, İzmir, Bursa, Antalya başta olmak üzere büyük illerde aynı gün servis sağlanmaktadır. Diğer iller için randevu süreçleri operasyon yoğunluğuna göre planlanır.',
          },
          {
            q: 'Öztiryakiler servisi için işçilik garantisi var mı?',
            a: 'Evet. Tüm Öztiryakiler servisi işlemlerimiz işçilik garantisi kapsamındadır. Servis sonrası size detaylı bir servis raporu teslim ediyor ve yapılan işlemleri belgeliyoruz.',
          },
          {
            q: 'Periyodik bakım sözleşmesi yapılabiliyor mu?',
            a: 'Evet. Aylık, üç aylık veya yıllık periyodik bakım sözleşmeleri ile Öztiryakiler servisi süreçlerinizi planlı hale getirebilirsiniz. Sözleşmeli müşterilerimiz çağrılarda öncelikli servis avantajından yararlanır.',
          },
          {
            q: 'Servis ücreti nasıl belirleniyor?',
            a: 'Öztiryakiler servisi taleplerinizde, ekipman bilgisi ve arıza tanımına göre net bir teklif sunulur. Şeffaf fiyat politikamız gereği gizli maliyet bulunmaz; onayınız olmadan işlem başlatılmaz.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
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
