import type { Metadata } from 'next';
import { site } from '@/lib/site';
import SeoLanding from '@/components/SeoLanding';

export const metadata: Metadata = {
  title: 'Öztiryakiler Ürünleri - Endüstriyel Mutfak Ekipmanları',
  description:
    'Öztiryakiler ürünleri için yetkili servis, kurulum, bakım ve tamir hizmetleri. HSN TECHNIC olarak tüm Öztiryakiler endüstriyel mutfak ekipmanları için profesyonel teknik servis sunuyoruz.',
  alternates: { canonical: '/oztiryakiler-urunleri/' },
  keywords: [
    'öztiryakiler ürünleri',
    'öztiryakiler urunleri',
    'öztiryakiler endüstriyel mutfak',
    'öztiryakiler ekipmanları',
    'öztiryakiler ürün servisi',
    'öztiryakiler ocak',
    'öztiryakiler fritöz',
    'öztiryakiler fırın',
  ],
  openGraph: {
    title: 'Öztiryakiler Ürünleri - HSN TECHNIC Yetkili Servis',
    description:
      'Tüm Öztiryakiler endüstriyel mutfak ürünleri için profesyonel kurulum, bakım, onarım ve teknik servis çözümleri.',
    url: `${site.url}/oztiryakiler-urunleri/`,
    type: 'website',
    siteName: site.brand,
    locale: site.locale,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Öztiryakiler Ürünleri' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
};

export default function OztiryakilerUrunleriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Öztiryakiler Ürünleri Servisi',
    serviceType: 'Endüstriyel Mutfak Ürünleri Yetkili Servis',
    provider: {
      '@type': 'LocalBusiness',
      name: site.brand,
      url: site.url,
      telephone: site.phone.href,
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    description:
      'Öztiryakiler ürünleri için kurulum, bakım, onarım ve teknik servis hizmetleri. Tüm endüstriyel mutfak ekipmanlarına uzman destek.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoLanding
        keyword="öztiryakiler ürünleri"
        pageTitle="Öztiryakiler Ürünleri"
        hero={{
          h1: 'Öztiryakiler Ürünleri - Yetkili Servis ve Teknik Destek',
          intro:
            'Öztiryakiler ürünleri için HSN TECHNIC olarak kurulum, bakım, onarım ve teknik servis hizmetleri sunuyoruz. Tüm endüstriyel mutfak ekipmanlarına uzman desteğimizle yanınızdayız.',
        }}
        intro={[
          'Öztiryakiler ürünleri, Türkiye ve uluslararası pazarda endüstriyel mutfak sektörünün en güvenilir markalarından biri olarak bilinir. Restoranlar, oteller, hastaneler, catering firmaları ve toplu yemek üreticileri günlük operasyonlarında Öztiryakiler ürünlerine güvenir. HSN TECHNIC olarak tüm Öztiryakiler ürünleri için yetkili servis kalitesinde kurulum, bakım, onarım ve danışmanlık hizmeti sunuyoruz.',
          'Öztiryakiler ürünleri arasında endüstriyel ocaklar, fritözler, fırınlar (konveksiyonlu, kombi, döner fırınlar), endüstriyel ızgaralar (lavataşı, ızgara plakalar), benmariler, endüstriyel bulaşık makineleri (cup, hood ve tünel tipi), soğuk oda ve soğutma ekipmanları yer almaktadır. Her bir ürün grubuna özel teknik bilgi ve deneyimle servis sunuyoruz.',
          'Yeni Öztiryakiler ürünleri kurulumunda, mevcut ekipmanların yenilenmesinde, bakım planlamasında ve arıza durumunda profesyonel destek sağlıyoruz. Ayrıca uygun durumlarda yenilenmiş, garantili ikinci el Öztiryakiler ürünleri sunarak işletmenizin başlangıç maliyetini optimize etmenize yardımcı oluyoruz. Tüm bu süreçler boyunca, kurumsal hizmet anlayışıyla şeffaf, faturalı ve raporlu bir iş ilişkisi yürütüyoruz.',
        ]}
        features={[
          'Tüm Öztiryakiler ürünleri için kurulum, bakım ve teknik servis tek elden sunulur.',
          'Endüstriyel ocak, fritöz, fırın, ızgara, benmari, bulaşık makinesi ve soğuk oda dahil tüm ürün gruplarına servis.',
          'Yeni ürün kurulumu, mevcut ekipman yenileme ve revizyon hizmetleri.',
          'Yenilenmiş, garantili ikinci el Öztiryakiler ürünleri alım-satım imkânı.',
          'Yedek parça temini ve orijinal/uyumlu parça desteği.',
          'Kurumsal süreçler için faturalı, sözleşmeli, raporlu hizmet.',
        ]}
        whyUs={[
          {
            title: 'Tüm Ürün Grupları',
            desc: 'Öztiryakiler ürünleri yelpazesinin tamamına hizmet veriyoruz; tek bir teknik adresle tüm ihtiyacınızı karşılıyoruz.',
          },
          {
            title: 'Kurulumdan Bakıma',
            desc: 'Yeni Öztiryakiler ürünleri kurulumundan periyodik bakıma, onarımdan revizyona uçtan uca destek.',
          },
          {
            title: 'Profesyonel Proje Desteği',
            desc: 'Mutfak projeleri için yerleşim, kapasite ve enerji verimliliği danışmanlığı sunuyoruz.',
          },
          {
            title: 'İkinci El Ekipman',
            desc: 'Bütçe dostu, yenilenmiş ve garantili ikinci el Öztiryakiler ürünleri seçenekleri sunuyoruz.',
          },
          {
            title: 'Yedek Parça Tedariği',
            desc: 'Öztiryakiler ürünleri için orijinal ve uyumlu yedek parça desteği ile arıza süresini kısaltıyoruz.',
          },
          {
            title: 'Kurumsal Süreç Uyumu',
            desc: 'Faturalı, sözleşmeli, raporlu çalışıyoruz; satın alma ve muhasebe süreçlerinize tam uyum sağlıyoruz.',
          },
        ]}
        faq={[
          {
            q: 'Hangi Öztiryakiler ürünleri için servis veriyorsunuz?',
            a: 'Endüstriyel ocak, fritöz, fırın, ızgara, benmari, bulaşık makinesi ve soğuk oda sistemleri başta olmak üzere tüm Öztiryakiler endüstriyel mutfak ürün gruplarına servis veriyoruz.',
          },
          {
            q: 'Yeni ürün kurulumu yapıyor musunuz?',
            a: 'Evet. Tek bir Öztiryakiler ürününün kurulumundan, anahtar teslim endüstriyel mutfak projesine kadar her ölçekte kurulum ve devreye alma hizmeti sunuyoruz.',
          },
          {
            q: 'İkinci el Öztiryakiler ürünleri var mı?',
            a: 'Evet. Stoklarımızda yenilenmiş ve garantili ikinci el Öztiryakiler ürünleri bulunmaktadır. İhtiyacınızı bize iletmeniz halinde uygun seçenekler sunulur.',
          },
          {
            q: 'Yedek parça temin ediyor musunuz?',
            a: 'Öztiryakiler ürünleri için yedek parça tedariki sağlıyoruz. Orijinal ya da uyumlu kalitede parça seçeneklerini sizinle paylaşıp onayınız doğrultusunda işlem yapıyoruz.',
          },
          {
            q: 'Mevcut Öztiryakiler ürünüm için bakım sözleşmesi yapabilir miyim?',
            a: 'Evet. Aylık, 3 aylık veya yıllık periyodik bakım sözleşmeleri yapıyoruz. Sözleşmeli müşterilerimize öncelikli servis ve indirimli işçilik avantajı sağlanır.',
          },
        ]}
        relatedLinks={[
          { label: 'Öztiryakiler Servisi', href: '/oztiryakiler-servisi' },
          { label: 'Öztiryakiler Tamiri', href: '/oztiryakiler-tamiri' },
          { label: 'Öztiryakiler Bakımı', href: '/oztiryakiler-bakimi' },
          { label: 'Tüm Hizmetler', href: '/hizmetler' },
          { label: 'Servis Talebi', href: '/servis-talep' },
          { label: 'İletişim', href: '/iletisim' },
        ]}
      />
    </>
  );
}
