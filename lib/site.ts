// Tek bir kaynak: tüm iletişim, marka ve URL bilgileri buradan yönetilir.
// Numaraları ve e-posta adresini sadece BU dosyada güncellemen yeterli.

export const site = {
  name: 'HSN TECHNIC',
  brand: 'HSN TECHNIC',
  tagline: 'Endüstriyel Mutfak Ekipmanları Servisi',
  description:
    'HSN TECHNIC - Öztiryakiler yetkili servis hizmetleri. Endüstriyel mutfak ekipmanları kurulum, bakım, onarım ve teknik servis çözümleri. Hızlı müdahale, profesyonel ekip, kurumsal hizmet.',
  url: 'https://oztiryakileryetkiliservisi.com',
  domain: 'oztiryakileryetkiliservisi.com',
  locale: 'tr_TR',

  // İletişim
  phone: {
    display: '0536 778 23 79',
    href: '+905367782379',
  },
  whatsapp: {
    display: '0535 933 68 19',
    number: '905359336819', // başında 90 ülke kodu, + olmadan
  },
  email: 'info@oztiryakileryetkiliservisi.com',

  // Adres — yerel SEO için Schema.org'a da işlenir
  address: {
    full: 'Hürriyet Mah. Aydın Alp Sk. No:25/B Tepecik - Büyükçekmece / İstanbul',
    street: 'Hürriyet Mah. Aydın Alp Sk. No:25/B Tepecik',
    district: 'Büyükçekmece',
    city: 'İstanbul',
    country: 'TR',
    mapsQuery: 'Hürriyet Mah. Aydın Alp Sk. No:25/B Tepecik Büyükçekmece İstanbul',
  },

  // Sosyal (opsiyonel)
  social: {
    instagram: 'https://www.instagram.com/hsntechnic',
    facebook: 'https://www.facebook.com/hsn.technic',
    youtube: '',
  },
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp.number}${
    text ? `?text=${encodeURIComponent(text)}` : ''
  }`;

export const navItems = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Kurumsal', href: '/kurumsal' },
  { label: 'Servis Talep Formu', href: '/servis-talep' },
  { label: 'İletişim', href: '/iletisim' },
];

export const seoLandingPages = [
  {
    slug: 'oztiryakiler-servisi',
    title: 'Öztiryakiler Servisi',
    keyword: 'öztiryakiler servisi',
  },
  {
    slug: 'oztiryakiler-tamiri',
    title: 'Öztiryakiler Tamiri',
    keyword: 'öztiryakiler tamiri',
  },
  {
    slug: 'oztiryakiler-bakimi',
    title: 'Öztiryakiler Bakımı',
    keyword: 'öztiryakiler bakımı',
  },
  {
    slug: 'oztiryakiler-urunleri',
    title: 'Öztiryakiler Ürünleri',
    keyword: 'öztiryakiler ürünleri',
  },
];

export const services = [
  {
    slug: 'endustriyel-mutfak-servisi',
    title: 'Endüstriyel Mutfak Servisleri',
    short:
      'Endüstriyel ocak, fritöz, fırın, ızgara, benmari ve bulaşık makinelerinde profesyonel onarım ve teknik servis hizmetleri.',
    icon: 'kitchen',
  },
  {
    slug: 'mutfak-kurulum-proje',
    title: 'Kurulum ve Proje Hizmetleri',
    short:
      'Restoran, otel, catering ve toplu yemek tesisleri için anahtar teslim endüstriyel mutfak kurulumu ve proje danışmanlığı.',
    icon: 'project',
  },
  {
    slug: 'soguk-oda-sistemleri',
    title: 'Soğuk Oda Sistemleri',
    short:
      'Soğuk oda kurulumu, soğutucu motor servisi, panel ve ekipman bakımı ile sıcaklık kontrol sistemleri çözümleri.',
    icon: 'cold',
  },
  {
    slug: 'periyodik-bakim',
    title: 'Periyodik Bakım & Teknik Servis',
    short:
      'Sözleşmeli periyodik bakım planları, arıza önleyici kontroller, raporlu servis ve düzenli teknik destek.',
    icon: 'gear',
  },
  {
    slug: 'ikinci-el-ekipman',
    title: '2. El Ekipman Alım Satım',
    short:
      'İkinci el endüstriyel mutfak ekipmanı alım, satım ve revizyon hizmetleri. Yenilenmiş garantili ekipmanlar.',
    icon: 'box',
  },
];

export const detailServices = [
  'Endüstriyel Mutfak Ocak Tamiri',
  'Endüstriyel Mutfak Fritöz Tamiri',
  'Endüstriyel Bulaşık Makinesi Tamiri',
  'Endüstriyel Izgara Tamiri',
  'Endüstriyel Benmari Tamiri',
  'Endüstriyel Fırın Tamiri',
  'Endüstriyel Soğuk Oda Tamiri',
];
