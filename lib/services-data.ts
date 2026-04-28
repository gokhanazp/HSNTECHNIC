// Tüm hizmet detay sayfalarının içeriği. Her slug bir sayfaya karşılık gelir.
// Yeni hizmet eklemek için sadece bu listeye yeni bir nesne ekleyin.

export interface ServiceData {
  slug: string;
  category: 'ana' | 'tamir';
  title: string;
  navTitle: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    h1: string;
    intro: string;
  };
  intro: string[];
  features: string[];
  process: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export const servicesData: ServiceData[] = [
  // ============ ANA HİZMETLER ============
  {
    slug: 'endustriyel-mutfak-servisi',
    category: 'ana',
    title: 'Endüstriyel Mutfak Servisi',
    navTitle: 'Endüstriyel Mutfak Servisi',
    shortDesc:
      'Endüstriyel mutfak ekipmanlarınızdaki tüm arızalarda hızlı müdahale, profesyonel onarım ve garantili teknik servis.',
    metaTitle: 'Endüstriyel Mutfak Servisi - Yetkili Servis Hizmetleri',
    metaDescription:
      'Endüstriyel mutfak servisi için HSN TECHNIC. Tüm Öztiryakiler ve diğer marka endüstriyel mutfak ekipmanlarına yetkili servis kalitesinde teknik destek, hızlı müdahale ve garantili onarım.',
    keywords: ['endüstriyel mutfak servisi', 'endüstriyel mutfak teknik servis', 'mutfak servisi', 'öztiryakiler servisi'],
    hero: {
      h1: 'Endüstriyel Mutfak Servisi',
      intro: 'Endüstriyel mutfak ekipmanlarınızın kesintisiz çalışması için profesyonel teknik servis çözümleri.',
    },
    intro: [
      'Endüstriyel mutfak servisi, restoran, otel, catering ve toplu yemek tesislerinde operasyonel sürekliliğin temelidir. Bir ekipmanın arızalanması saatler içinde ciddi ciro kayıplarına dönüşebilir. HSN TECHNIC olarak endüstriyel mutfak servisi alanında 15 yılı aşkın tecrübemizle, sertifikalı teknik kadromuz ve hızlı müdahale prensibimizle yanınızdayız.',
      'Tüm endüstriyel mutfak ekipmanı tiplerine — ocak, fritöz, fırın, ızgara, benmari, bulaşık makinesi, davlumbaz ve soğuk oda — kapsamlı servis sağlıyoruz. Her servis çağrısı; arıza tespiti, onarım, test ve raporlama aşamalarından geçer. Endüstriyel mutfak servisi süreçlerimiz, yetkili servis standartlarına uygun şekilde işçilik garantisi kapsamında yürütülür.',
    ],
    features: [
      'Aynı gün servis prensibi ile hızlı müdahale',
      'Sertifikalı teknik kadro ile profesyonel onarım',
      'Orijinal veya uyumlu kalitede yedek parça desteği',
      'İşçilik garantisi ve detaylı servis raporu',
      'Şeffaf fiyatlandırma; gizli maliyet yok',
      '7/24 acil çağrı merkezi ve WhatsApp hattı',
    ],
    process: [
      { title: '1. İletişim', desc: 'Telefon, WhatsApp veya servis formundan bize ulaşın.' },
      { title: '2. Ön Değerlendirme', desc: 'Sorunu dinler, ekipman bilgilerini alır, randevu planlarız.' },
      { title: '3. Yerinde Servis', desc: 'Teknik ekibimiz randevu saatinde işyerinizde olur.' },
      { title: '4. Onarım & Test', desc: 'Onarım sonrası ekipman test edilir, çalıştığı kontrol edilir.' },
      { title: '5. Raporlama', desc: 'Yapılan işlemler raporlanır, garanti belgesi ile teslim edilir.' },
    ],
    faq: [
      {
        q: 'Endüstriyel mutfak servisi ne kadar sürede yapılır?',
        a: 'Çoğu çağrıya aynı gün içinde dönüş yapıyor ve ekibimizi yönlendiriyoruz. İstanbul, Ankara, İzmir gibi büyük illerde aynı gün servis sağlanır.',
      },
      {
        q: 'Hangi marka ekipmanlara servis veriyorsunuz?',
        a: 'Başta Öztiryakiler olmak üzere tüm yerli ve yabancı endüstriyel mutfak markalarına teknik servis sağlıyoruz.',
      },
      {
        q: 'Servis sonrası garanti var mı?',
        a: 'Evet, tüm endüstriyel mutfak servisi işlemlerimiz işçilik garantisi kapsamındadır. Yedek parça için ayrıca parça garantisi sunulur.',
      },
    ],
  },
  {
    slug: 'mutfak-kurulum-proje',
    category: 'ana',
    title: 'Mutfak Kurulum ve Proje Hizmetleri',
    navTitle: 'Kurulum & Proje',
    shortDesc:
      'Restoran, otel, catering ve toplu yemek tesisleri için anahtar teslim endüstriyel mutfak kurulumu ve proje danışmanlığı.',
    metaTitle: 'Endüstriyel Mutfak Kurulum ve Proje Hizmetleri',
    metaDescription:
      'Anahtar teslim endüstriyel mutfak kurulumu, proje danışmanlığı, tesisat, devreye alma ve ekipman seçimi. HSN TECHNIC ile kapsamlı mutfak proje çözümleri.',
    keywords: ['endüstriyel mutfak kurulumu', 'mutfak projesi', 'anahtar teslim mutfak', 'restoran mutfak kurulumu'],
    hero: {
      h1: 'Endüstriyel Mutfak Kurulum ve Proje Hizmetleri',
      intro: 'Restoran, otel, hastane ve toplu yemek tesisleriniz için anahtar teslim endüstriyel mutfak çözümleri.',
    },
    intro: [
      'Endüstriyel mutfak kurulumu, sadece ekipman yerleştirme değil; iş akışı, hijyen, enerji verimliliği ve güvenlik standartlarını birlikte ele alan bir mühendislik sürecidir. HSN TECHNIC olarak yeni açılan veya yenilenen işletmeler için anahtar teslim mutfak proje hizmetleri sunuyoruz.',
      'Proje sürecimiz işletmenizin operasyonel ihtiyaçlarının analizi ile başlar. Mutfak alanı, menü, kapasite ve çalışan sayısı dikkate alınarak uygun ekipman listesi ve yerleşim planı hazırlanır. Tesisat (gaz, elektrik, su, atık), havalandırma, soğutma sistemleri ve ekipman montajı koordineli olarak gerçekleştirilir.',
    ],
    features: [
      'Detaylı keşif ve operasyonel ihtiyaç analizi',
      'Mutfak yerleşim planı ve ekipman listesi hazırlanması',
      'Tesisat (gaz, elektrik, su, atık) koordinasyonu',
      'Havalandırma ve davlumbaz sistemlerinin entegrasyonu',
      'Anahtar teslim devreye alma ve eğitim',
      'Proje sonrası periyodik bakım sözleşmesi imkânı',
    ],
    process: [
      { title: '1. Keşif & Analiz', desc: 'İşletmenizi yerinde inceler, kapasite ve menü ihtiyacınızı analiz ederiz.' },
      { title: '2. Proje Tasarımı', desc: 'Yerleşim planı, ekipman listesi ve teklif hazırlanır.' },
      { title: '3. Ekipman Tedariki', desc: 'Onaylanan ekipmanlar tedarik edilir.' },
      { title: '4. Tesisat & Montaj', desc: 'Gaz, elektrik, su, havalandırma tesisatı ve ekipman montajı yapılır.' },
      { title: '5. Devreye Alma', desc: 'Tüm sistemler test edilir, kullanıcı eğitimi verilir.' },
    ],
    faq: [
      {
        q: 'Anahtar teslim mutfak projesi ne kadar sürer?',
        a: 'Proje büyüklüğüne göre 2-8 hafta arasında değişir. Detaylı keşif sonrası net süre paylaşılır.',
      },
      {
        q: 'Sadece ekipman tedariği yapıyor musunuz?',
        a: 'Evet, ekipman tedariği, mevcut mutfağa entegrasyon, sadece tesisat veya yalnızca proje danışmanlığı gibi parçalı hizmetler de sunuyoruz.',
      },
      {
        q: 'Proje sonrası servis hizmeti veriyor musunuz?',
        a: 'Evet, kurulum sonrası periyodik bakım sözleşmesi yaparak ekipmanlarınızın ömrünü uzatıyoruz.',
      },
    ],
  },
  {
    slug: 'soguk-oda-sistemleri',
    category: 'ana',
    title: 'Soğuk Oda Sistemleri',
    navTitle: 'Soğuk Oda Sistemleri',
    shortDesc:
      'Soğuk oda kurulumu, soğutucu motor servisi, panel ve ekipman bakımı ile sıcaklık kontrol sistemleri çözümleri.',
    metaTitle: 'Soğuk Oda Sistemleri - Kurulum, Servis ve Bakım',
    metaDescription:
      'Soğuk oda kurulumu, motor servisi, panel bakımı ve sıcaklık kontrol sistemleri. Endüstriyel soğutma çözümleri için HSN TECHNIC.',
    keywords: ['soğuk oda', 'soğuk oda kurulumu', 'soğuk oda servisi', 'soğuk oda tamiri', 'endüstriyel soğutma'],
    hero: {
      h1: 'Soğuk Oda Sistemleri - Kurulum ve Teknik Servis',
      intro: 'Endüstriyel soğutma sistemleriniz için kurulum, bakım, onarım ve revizyon hizmetleri.',
    },
    intro: [
      'Soğuk oda sistemleri, gıda işletmelerinin hijyen, gıda güvenliği ve operasyonel verim açısından en kritik yapılarından biridir. HSN TECHNIC olarak soğuk oda kurulumu, mevcut sistemlerin bakımı ve arızalı ünitelerin onarımı konularında uzman ekibimizle hizmet veriyoruz.',
      'Hazır panel sistemlerden özel ölçü uygulamalara, kompresör servisinden gaz dolumuna kadar tüm soğuk oda ihtiyaçlarınızı karşılıyoruz. Sıcaklık ve nem kontrol sistemleri, otomatik kapı sistemleri, raf düzenlemeleri ve enerji verimli soğutma çözümleri sunuyoruz.',
    ],
    features: [
      'Hazır panel veya özel ölçü soğuk oda kurulumu',
      'Kompresör, evaporatör ve kondenser servisi',
      'Soğutucu gaz dolumu ve kaçak tespiti',
      'Sıcaklık kontrol ve uyarı sistemleri',
      'Otomatik kapı, ışıklandırma ve raf montajı',
      'Periyodik bakım ile uzun ömürlü kullanım',
    ],
    process: [
      { title: '1. Keşif', desc: 'Soğuk oda alanı ölçülür, kapasite ihtiyacı belirlenir.' },
      { title: '2. Tasarım', desc: 'Panel ölçüleri, soğutma kapasitesi ve ekipman seçimi yapılır.' },
      { title: '3. Kurulum', desc: 'Paneller monte edilir, soğutma sistemi kurulur.' },
      { title: '4. Devreye Alma', desc: 'Sıcaklık testleri yapılır, sistem teslim edilir.' },
    ],
    faq: [
      {
        q: 'Mevcut soğuk odam arıza yapıyor, müdahale ediyor musunuz?',
        a: 'Evet, soğuk oda tamiri, motor servisi, gaz dolumu, kapı ve panel onarımı dahil tüm arızalara müdahale ediyoruz.',
      },
      {
        q: 'Yeni soğuk oda kurmak istiyorum, fiyatı ne olur?',
        a: 'Soğuk oda fiyatı; ölçü, izolasyon kalınlığı, soğutma kapasitesi ve kullanım amacına göre değişir. Yerinde keşif sonrası net teklif sunarız.',
      },
      {
        q: 'Hangi sıcaklık aralıkları mümkün?',
        a: 'Soğuk muhafaza (0°C / +4°C), şok dondurma (-40°C), derin dondurma (-18°C / -25°C) gibi tüm endüstriyel sıcaklık aralıklarında çözüm sunuyoruz.',
      },
    ],
  },
  {
    slug: 'davlumbaz-havalandirma',
    category: 'ana',
    title: 'Davlumbaz ve Havalandırma Sistemleri',
    navTitle: 'Davlumbaz & Havalandırma',
    shortDesc:
      'Davlumbaz sistemleri kurulumu, baca tesisatı, hava emiş üniteleri ve havalandırma sistemlerinde teknik servis.',
    metaTitle: 'Endüstriyel Davlumbaz ve Havalandırma Sistemleri',
    metaDescription:
      'Endüstriyel davlumbaz kurulum ve servisi, baca tesisatı, hava emiş üniteleri ve havalandırma çözümleri. HSN TECHNIC ile kapsamlı havalandırma hizmetleri.',
    keywords: ['davlumbaz', 'endüstriyel davlumbaz', 'davlumbaz tamiri', 'havalandırma', 'baca tesisatı'],
    hero: {
      h1: 'Davlumbaz ve Havalandırma Sistemleri',
      intro: 'Endüstriyel mutfaklar için davlumbaz kurulumu, baca tesisatı ve havalandırma çözümleri.',
    },
    intro: [
      'Endüstriyel davlumbaz ve havalandırma sistemleri, mutfakta oluşan duman, koku, yağ buharı ve nemin tahliyesi için kritik öneme sahiptir. Doğru tasarlanmamış bir havalandırma sistemi; çalışan sağlığı, ekipman ömrü ve işyeri konforu açısından ciddi sorunlar yaratır.',
      'HSN TECHNIC olarak davlumbaz kurulumu, baca tesisatı, hava emiş ünitelerinin montajı ve mevcut sistemlerin onarımı konularında uzman ekibimizle hizmet veriyoruz. Filtre tipi davlumbazlar, su perdeli davlumbazlar ve yağ tutucu sistemler dahil tüm uygulamalarda çözüm sunuyoruz.',
    ],
    features: [
      'Endüstriyel davlumbaz kurulumu (filtreli, su perdeli)',
      'Baca tesisatı ve hava tahliye sistemleri',
      'Hava emiş üniteleri ve aspiratör montajı',
      'Filtre temizliği ve değişimi',
      'Davlumbaz arıza onarımı ve revizyonu',
      'Yangın güvenliği için yağ tutucu sistemler',
    ],
    process: [
      { title: '1. Keşif', desc: 'Mutfak alanı ve mevcut sistem incelenir.' },
      { title: '2. Tasarım', desc: 'Doğru davlumbaz tipi ve hava akış kapasitesi belirlenir.' },
      { title: '3. Kurulum', desc: 'Davlumbaz, baca ve aspiratör monte edilir.' },
      { title: '4. Test & Bakım', desc: 'Hava akış testi yapılır, periyodik bakım planlanır.' },
    ],
    faq: [
      {
        q: 'Davlumbazımdan koku geliyor, sebebi nedir?',
        a: 'Genelde filtre tıkanıklığı, aspiratör arızası veya baca tasarım hatasından kaynaklanır. Yerinde inceleme ile sorunun kaynağı tespit edilir.',
      },
      {
        q: 'Davlumbaz filtresi ne sıklıkla değişmelidir?',
        a: 'Yoğun kullanılan mutfaklarda metal filtreler haftada bir temizlenmeli; karbon/yağ filtreler 3-6 ayda bir değiştirilmelidir.',
      },
    ],
  },
  {
    slug: 'periyodik-bakim',
    category: 'ana',
    title: 'Periyodik Bakım ve Sözleşmeli Servis',
    navTitle: 'Periyodik Bakım',
    shortDesc:
      'Sözleşmeli periyodik bakım planları, arıza önleyici kontroller, raporlu servis ve düzenli teknik destek.',
    metaTitle: 'Periyodik Bakım Sözleşmesi - Önleyici Mutfak Servisi',
    metaDescription:
      'Endüstriyel mutfak ekipmanlarınız için periyodik bakım sözleşmeleri. Arıza önleyici kontroller, raporlu servis ve öncelikli destek.',
    keywords: ['periyodik bakım', 'mutfak bakım sözleşmesi', 'önleyici bakım', 'sözleşmeli servis'],
    hero: {
      h1: 'Periyodik Bakım ve Sözleşmeli Servis',
      intro: 'Önleyici bakım anlayışıyla arıza riskini minimize ediyor, ekipman ömrünü uzatıyoruz.',
    },
    intro: [
      'Periyodik bakım, endüstriyel mutfaklarda arıza riskini ortadan kaldırmanın, ekipman ömrünü uzatmanın ve enerji verimliliğini artırmanın en akıllı yoludur. Beklenmedik arızalar yerine planlı bakım, hem maliyet hem de operasyonel süreklilik açısından büyük avantaj sağlar.',
      'HSN TECHNIC olarak işletmenizin büyüklüğüne ve operasyon yoğunluğuna göre özel periyodik bakım sözleşmeleri hazırlıyoruz. Aylık, üç aylık veya yıllık planlarla ekipmanlarınız düzenli kontrolden geçer; aşınmış parçalar arıza oluşmadan tespit edilir.',
    ],
    features: [
      'Aylık, 3 aylık veya yıllık esnek bakım planları',
      'Detaylı kontrol listesi ve raporlama',
      'Arıza önleyici parça değişim önerileri',
      'Sözleşmeli müşterilere öncelikli servis',
      'İndirimli işçilik ve yedek parça avantajı',
      'Enerji verimliliği ölçümü ve önerileri',
    ],
    process: [
      { title: '1. Sözleşme', desc: 'İhtiyacınıza özel bakım planı hazırlanır.' },
      { title: '2. Periyodik Ziyaret', desc: 'Belirlenen aralıklarla ekibimiz işyerinizde olur.' },
      { title: '3. Detaylı Kontrol', desc: 'Tüm ekipmanlar standart kontrol listesinden geçer.' },
      { title: '4. Raporlama', desc: 'Yapılan kontroller ve öneriler raporlanır.' },
    ],
    faq: [
      {
        q: 'Periyodik bakım hangi sıklıkta yapılmalı?',
        a: 'Yoğun çalışan mutfaklarda aylık veya 3 aylık bakım önerilir. Daha düşük yoğunluktaki işletmelerde 6 ayda bir veya yıllık bakım yeterli olur.',
      },
      {
        q: 'Bakım sözleşmesi indirim sağlıyor mu?',
        a: 'Evet, sözleşmeli müşterilerimize indirimli işçilik, öncelikli servis ve özel yedek parça koşulları sunulur.',
      },
    ],
  },
  {
    slug: 'ikinci-el-ekipman',
    category: 'ana',
    title: '2. El Ekipman Alım Satım',
    navTitle: '2. El Ekipman',
    shortDesc:
      'İkinci el endüstriyel mutfak ekipmanı alım, satım ve revizyon hizmetleri. Yenilenmiş garantili ekipmanlar.',
    metaTitle: 'İkinci El Endüstriyel Mutfak Ekipmanı Alım Satım',
    metaDescription:
      'İkinci el endüstriyel mutfak ekipmanı alım, satım, revizyon. Yenilenmiş ve garantili ikinci el Öztiryakiler ekipmanları.',
    keywords: ['2. el endüstriyel mutfak', 'ikinci el ekipman', 'kullanılmış mutfak ekipmanı', '2. el öztiryakiler'],
    hero: {
      h1: '2. El Endüstriyel Mutfak Ekipmanı Alım Satım',
      intro: 'Yenilenmiş, garantili ikinci el endüstriyel mutfak ekipmanları ile bütçe dostu çözümler.',
    },
    intro: [
      'İkinci el endüstriyel mutfak ekipmanları, yeni açılan işletmeler veya kapasite genişletmek isteyen mevcut işletmeler için ekonomik bir başlangıç sağlar. HSN TECHNIC olarak 2. el ekipman alım satımında, her ürünün teknik kontrolden geçtiği ve yenilendiği bir süreç işletiyoruz.',
      'Stoklarımızda Öztiryakiler başta olmak üzere çeşitli markalara ait ocak, fritöz, fırın, ızgara, bulaşık makinesi, soğuk oda, davlumbaz gibi ekipmanlar bulunmaktadır. Tüm 2. el ürünlerimiz teknik servis garantisi ile satışa sunulur.',
    ],
    features: [
      'Yenilenmiş ve teknik kontrolden geçmiş ekipmanlar',
      'Servis garantisi ile satış',
      'Mevcut ekipmanınızı değer karşılığı satın alma',
      'Revizyon ve refurbishment hizmeti',
      'Kapasite raporu ve durum belgesi',
      'Faturalı ve resmi süreç',
    ],
    process: [
      { title: '1. Talep', desc: 'İhtiyacınızı veya satmak istediğiniz ekipmanı bize iletin.' },
      { title: '2. Ekspertiz', desc: 'Satılık ekipman teknik kontrolden geçer; alıcılar için stok eşleşmesi yapılır.' },
      { title: '3. Teklif', desc: 'Şeffaf bir alım/satım teklifi sunulur.' },
      { title: '4. Teslimat', desc: 'Faturalı, garantili teslimat ile süreç tamamlanır.' },
    ],
    faq: [
      {
        q: '2. el ekipmanlarda garanti var mı?',
        a: 'Evet, satışını yaptığımız tüm 2. el ekipmanlarda servis garantisi sunulur. Detayları ekipmana göre değişir.',
      },
      {
        q: 'Ekipmanımı satmak istiyorum, alır mısınız?',
        a: 'Evet, çalışır durumdaki endüstriyel mutfak ekipmanlarınızı ekspertiz sonrası uygun fiyatla satın alıyoruz.',
      },
    ],
  },

  // ============ DETAY TAMİR HİZMETLERİ ============
  {
    slug: 'endustriyel-ocak-tamiri',
    category: 'tamir',
    title: 'Endüstriyel Ocak Tamiri',
    navTitle: 'Endüstriyel Ocak Tamiri',
    shortDesc: 'Endüstriyel ocak tamiri, brülör servisi, gaz tesisat onarımı ve termostat değişimi.',
    metaTitle: 'Endüstriyel Ocak Tamiri - Profesyonel Brülör Servisi',
    metaDescription:
      'Endüstriyel ocak tamiri için HSN TECHNIC. Brülör servisi, gaz hattı onarımı, termostat değişimi ve tüm ocak arızalarına yetkili servis kalitesinde müdahale.',
    keywords: ['endüstriyel ocak tamiri', 'ocak tamiri', 'brülör servisi', 'gaz ocağı tamiri', 'öztiryakiler ocak'],
    hero: {
      h1: 'Endüstriyel Ocak Tamiri - Yetkili Servis Kalitesinde',
      intro: 'Endüstriyel ocaklarınızdaki tüm arızalara hızlı, garantili ve uzman müdahale.',
    },
    intro: [
      'Endüstriyel ocak tamiri, mutfak operasyonunun belkemiği olan ekipmanların kesintisiz çalışması için kritik bir hizmettir. HSN TECHNIC olarak Öztiryakiler ve diğer marka tüm endüstriyel ocaklara — gazlı ocak, elektrikli ocak, kuzine ocak ve özel imalat ocaklar dahil — profesyonel tamir hizmeti sunuyoruz.',
      'Brülör arızaları, gaz hattı problemleri, termostat sorunları, alev ayarı bozuklukları ve mekanik aksam aşınmaları en sık karşılaşılan ocak arızalarıdır. Tecrübeli teknik kadromuz arızanın kaynağını ilk müdahalede tespit eder ve kalıcı çözüm sunar.',
    ],
    features: [
      'Brülör değişimi ve servisi',
      'Gaz hattı sızdırmazlık testi ve onarımı',
      'Termostat ve sensor değişimi',
      'Alev ayar mekanizması onarımı',
      'Buji, ateşleme sistemi servisi',
      'Mekanik aksam ve kapak onarımı',
    ],
    process: [
      { title: '1. Arıza Tespiti', desc: 'Ocak detaylı şekilde incelenir, sorun tespit edilir.' },
      { title: '2. Teklif', desc: 'Yapılacak işlemler ve maliyet net olarak paylaşılır.' },
      { title: '3. Onarım', desc: 'Onayınız sonrası onarım yapılır, gerekli parçalar değiştirilir.' },
      { title: '4. Test & Garanti', desc: 'Ocak test edilir, garanti belgesi ile teslim edilir.' },
    ],
    faq: [
      {
        q: 'Brülörüm tutuşmuyor, ne yapmalıyım?',
        a: 'Genelde gaz akışı, ateşleme sistemi veya brülör tıkanıklığından kaynaklanır. Gaz vanasını kapatın ve servisimizi arayın.',
      },
      {
        q: 'Endüstriyel ocak tamiri ne kadar sürer?',
        a: 'Stok parça gerektirmeyen onarımlar genellikle aynı gün tamamlanır. Özel sipariş parça gerektiren durumlarda süre size bildirilir.',
      },
    ],
  },
  {
    slug: 'endustriyel-fritoz-tamiri',
    category: 'tamir',
    title: 'Endüstriyel Fritöz Tamiri',
    navTitle: 'Endüstriyel Fritöz Tamiri',
    shortDesc: 'Endüstriyel fritöz tamiri, termostat değişimi, rezistans servisi ve yağ tahliye sistemleri.',
    metaTitle: 'Endüstriyel Fritöz Tamiri - Profesyonel Servis',
    metaDescription:
      'Endüstriyel fritöz tamiri için HSN TECHNIC. Termostat, rezistans, yağ tahliye sistemi ve tüm fritöz arızalarına yetkili servis.',
    keywords: ['endüstriyel fritöz tamiri', 'fritöz tamiri', 'fritöz servisi', 'öztiryakiler fritöz tamiri'],
    hero: {
      h1: 'Endüstriyel Fritöz Tamiri',
      intro: 'Endüstriyel fritözlerinizdeki tüm arızalara hızlı, garantili ve profesyonel müdahale.',
    },
    intro: [
      'Endüstriyel fritöz tamiri, restoran ve fast food işletmelerinde operasyonun aksamaması için kritik bir hizmettir. HSN TECHNIC olarak gazlı fritözler, elektrikli fritözler, basınçlı fritözler ve çoklu hazneli sistemler dahil tüm fritöz tiplerine tamir hizmeti sunuyoruz.',
      'Fritözlerde en sık karşılaşılan arızalar; ısıtma yapmama, termostat hataları, yağ sızdırma, otomatik tahliye sistemi sorunları ve elektrik arızalarıdır. Sertifikalı teknik kadromuz tüm bu arızalara yerinde, hızlı ve kalıcı çözüm üretir.',
    ],
    features: [
      'Termostat ve sıcaklık sensörü değişimi',
      'Rezistans veya brülör servisi',
      'Yağ tahliye ve filtre sistemi onarımı',
      'Elektrik kontrol kartı değişimi',
      'Sızdırmazlık ve conta onarımı',
      'Otomatik kontrol panel servisi',
    ],
    process: [
      { title: '1. Arıza Tespiti', desc: 'Fritöz incelenir, arızanın kaynağı belirlenir.' },
      { title: '2. Teklif', desc: 'İşlem ve maliyet bilgisi paylaşılır.' },
      { title: '3. Onarım', desc: 'Onarım gerçekleştirilir, gerekli parçalar değişir.' },
      { title: '4. Test', desc: 'Fritöz test edilir, garanti ile teslim edilir.' },
    ],
    faq: [
      {
        q: 'Fritözüm ısıtmıyor, sebebi ne olabilir?',
        a: 'Termostat arızası, rezistans yanması veya kontrol kartı sorunu olabilir. Yerinde inceleme ile kesin tespit yapılır.',
      },
      {
        q: 'Yağ sızdıran fritöz onarılır mı?',
        a: 'Evet, conta değişimi veya kaynak işlemi ile çoğu yağ sızıntısı kalıcı şekilde onarılır.',
      },
    ],
  },
  {
    slug: 'endustriyel-bulasik-makinesi-tamiri',
    category: 'tamir',
    title: 'Endüstriyel Bulaşık Makinesi Tamiri',
    navTitle: 'Bulaşık Makinesi Tamiri',
    shortDesc:
      'Endüstriyel bulaşık makinesi tamiri, pompa servisi, ısıtma elemanı ve kontrol kartı onarımı.',
    metaTitle: 'Endüstriyel Bulaşık Makinesi Tamiri',
    metaDescription:
      'Endüstriyel bulaşık makinesi tamiri için HSN TECHNIC. Pompa, rezistans, kontrol kartı ve tüm bulaşık makinesi arızalarına profesyonel servis.',
    keywords: ['endüstriyel bulaşık makinesi tamiri', 'bulaşık makinesi servisi', 'sanayi bulaşık makinesi tamiri'],
    hero: {
      h1: 'Endüstriyel Bulaşık Makinesi Tamiri',
      intro: 'Cup tipi, hood ve tünel tipi tüm endüstriyel bulaşık makinelerine profesyonel servis.',
    },
    intro: [
      'Endüstriyel bulaşık makinesi tamiri, otel ve restoran işletmelerinde hijyen ve operasyonel sürekliliğin korunması için kritik bir teknik servis hizmetidir. HSN TECHNIC olarak cup, hood ve tünel tipi tüm endüstriyel bulaşık makinesi modellerine yetkili servis kalitesinde tamir desteği sağlıyoruz.',
      'Yıkama performansı düşüklüğü, su ısıtma problemi, pompa arızaları, kapak ve conta sorunları ile elektronik kontrol arızaları en yaygın görülen bulaşık makinesi sorunlarıdır. Sertifikalı teknisyenlerimiz, sorunun kaynağını hızlıca tespit edip kalıcı çözüm sunar.',
    ],
    features: [
      'Yıkama ve durulama pompa servisi',
      'Isıtma rezistansı değişimi',
      'Elektronik kontrol kartı onarımı',
      'Kapak conta ve sızdırmazlık servisi',
      'Su giriş valfı ve filtre temizliği',
      'Deterjan ve parlatıcı dozaj sistemi',
    ],
    process: [
      { title: '1. Tespit', desc: 'Makine detaylı incelenir.' },
      { title: '2. Teklif', desc: 'İşlem maliyeti net şekilde sunulur.' },
      { title: '3. Onarım', desc: 'Sorun çözülür, gerekli parçalar değiştirilir.' },
      { title: '4. Test', desc: 'Yıkama testi yapılır, garanti ile teslim edilir.' },
    ],
    faq: [
      {
        q: 'Bulaşıklarım iyi yıkanmıyor, sebebi ne olabilir?',
        a: 'Pompa basıncı düşüklüğü, fıskiye tıkanıklığı, su sıcaklığı yetersizliği veya deterjan dozaj sorunu olabilir.',
      },
      {
        q: 'Su ısıtmıyor, ne yapmalıyım?',
        a: 'Rezistans veya termostat arızası söz konusu olabilir. Servisimizi arayın, yerinde tespit yapalım.',
      },
    ],
  },
  {
    slug: 'endustriyel-izgara-tamiri',
    category: 'tamir',
    title: 'Endüstriyel Izgara Tamiri',
    navTitle: 'Endüstriyel Izgara Tamiri',
    shortDesc: 'Endüstriyel ızgara tamiri, lavataşı ızgara servisi, gazlı ve elektrikli ızgara onarımı.',
    metaTitle: 'Endüstriyel Izgara Tamiri - Lavataşı ve Gazlı Izgara',
    metaDescription:
      'Endüstriyel ızgara tamiri için HSN TECHNIC. Lavataşı, gazlı, elektrikli ve plaka ızgaralara yetkili servis kalitesinde onarım.',
    keywords: ['endüstriyel ızgara tamiri', 'ızgara tamiri', 'lavataşı ızgara servisi', 'gazlı ızgara tamiri'],
    hero: {
      h1: 'Endüstriyel Izgara Tamiri',
      intro: 'Lavataşı, gazlı, elektrikli ve plaka ızgaralarınız için profesyonel tamir hizmetleri.',
    },
    intro: [
      'Endüstriyel ızgara tamiri, et ve fast food restoranlarının operasyonel sürekliliği için kritik bir servis dalıdır. HSN TECHNIC olarak lavataşı ızgara, gazlı ızgara, elektrikli ızgara ve plaka ızgara dahil tüm endüstriyel ızgara tiplerine tamir hizmeti sunuyoruz.',
      'Brülör arızaları, gaz akış problemleri, lava taşı yenileme, elektrik bağlantı sorunları ve mekanik aksam onarımları konularında uzman ekibimizle yanınızdayız. Tüm ızgara onarımları işçilik garantisi kapsamında yapılır.',
    ],
    features: [
      'Brülör servisi ve değişimi',
      'Gaz hattı kontrolü ve onarımı',
      'Lava taşı yenileme',
      'Elektrik bağlantısı ve termostat servisi',
      'Plaka ızgara yüzey bakımı',
      'Yağ toplama haznesi onarımı',
    ],
    process: [
      { title: '1. Tespit', desc: 'Izgara incelenir, arıza belirlenir.' },
      { title: '2. Teklif', desc: 'Onarım planı ve maliyet sunulur.' },
      { title: '3. Onarım', desc: 'Onarım yapılır.' },
      { title: '4. Test', desc: 'Test sonrası garanti ile teslim.' },
    ],
    faq: [
      {
        q: 'Lava taşı ne sıklıkla değişmeli?',
        a: 'Yoğun kullanımda 6-12 ay arası, hafif kullanımda 1-2 yılda bir yenilenmesi önerilir.',
      },
    ],
  },
  {
    slug: 'endustriyel-benmari-tamiri',
    category: 'tamir',
    title: 'Endüstriyel Benmari Tamiri',
    navTitle: 'Endüstriyel Benmari Tamiri',
    shortDesc: 'Endüstriyel benmari tamiri, ısıtma sistemleri, termostat ve gözlü benmari servisi.',
    metaTitle: 'Endüstriyel Benmari Tamiri - Servis Hizmetleri',
    metaDescription:
      'Endüstriyel benmari tamiri için HSN TECHNIC. Sulu, kuru ve gözlü tüm benmari tiplerine yetkili servis kalitesinde onarım.',
    keywords: ['endüstriyel benmari tamiri', 'benmari servisi', 'gözlü benmari tamiri', 'sulu benmari tamiri'],
    hero: {
      h1: 'Endüstriyel Benmari Tamiri',
      intro: 'Sulu, kuru ve gözlü endüstriyel benmari sistemleriniz için profesyonel tamir.',
    },
    intro: [
      'Endüstriyel benmari tamiri, otel, restoran ve catering işletmelerinde yemek servis sıcaklığının korunması için önemli bir teknik servis dalıdır. HSN TECHNIC olarak sulu benmari, kuru benmari, gözlü benmari ve özel tasarım benmari sistemlerine tamir hizmeti veriyoruz.',
      'Isıtma elemanı arızaları, termostat sorunları, su giriş/çıkış vana problemleri ve elektrik arızaları benmarilerin en sık karşılaşılan sorunlarıdır. Tecrübeli ekibimiz tüm bu sorunlara hızlı ve kalıcı çözüm sunar.',
    ],
    features: [
      'Rezistans değişimi',
      'Termostat ve sıcaklık sensörü onarımı',
      'Su giriş/çıkış vanası servisi',
      'Elektrik bağlantı ve kontrol kartı',
      'Gözlü benmari ayrıştırma servisi',
      'Sızdırmazlık ve conta yenileme',
    ],
    process: [
      { title: '1. Tespit', desc: 'Benmari incelenir.' },
      { title: '2. Teklif', desc: 'İşlem detayı paylaşılır.' },
      { title: '3. Onarım', desc: 'Tamir yapılır.' },
      { title: '4. Test', desc: 'Test edilir, teslim edilir.' },
    ],
    faq: [
      {
        q: 'Benmarim ısı tutmuyor, ne yapmalıyım?',
        a: 'Termostat veya rezistans arızası söz konusu olabilir. Servisimizi arayın.',
      },
    ],
  },
  {
    slug: 'endustriyel-firin-tamiri',
    category: 'tamir',
    title: 'Endüstriyel Fırın Tamiri',
    navTitle: 'Endüstriyel Fırın Tamiri',
    shortDesc: 'Endüstriyel fırın tamiri, konveksiyonlu, kombi ve döner fırın servisi.',
    metaTitle: 'Endüstriyel Fırın Tamiri - Konveksiyon ve Kombi Fırın',
    metaDescription:
      'Endüstriyel fırın tamiri için HSN TECHNIC. Konveksiyonlu, kombi steamer, döner fırın ve tüm endüstriyel fırın tiplerine yetkili servis.',
    keywords: ['endüstriyel fırın tamiri', 'konveksiyon fırın tamiri', 'kombi fırın servisi', 'döner fırın tamiri'],
    hero: {
      h1: 'Endüstriyel Fırın Tamiri',
      intro: 'Konveksiyonlu, kombi steamer ve döner fırınlarınız için profesyonel tamir.',
    },
    intro: [
      'Endüstriyel fırın tamiri, pastane, fırın ve restoran işletmelerinde en kritik servis dallarından biridir. HSN TECHNIC olarak konveksiyonlu fırınlar, kombi steamer fırınlar, döner fırınlar ve özel tasarım endüstriyel fırınlara tamir hizmeti sunuyoruz.',
      'Sıcaklık kontrol problemleri, fan arızaları, buhar üretim sorunları, kontrol panel arızaları ve gaz hattı problemleri en sık karşılaşılan fırın arızalarıdır. Sertifikalı ekibimiz arızanın kaynağını ilk müdahalede tespit ederek hızlı çözüm sunar.',
    ],
    features: [
      'Sıcaklık kontrol ve termostat servisi',
      'Konveksiyon fan motoru değişimi',
      'Buhar üretim sistemi onarımı (kombi)',
      'Elektronik kontrol panel servisi',
      'Gaz hattı ve brülör onarımı',
      'Kapak conta ve menteşe yenileme',
    ],
    process: [
      { title: '1. Tespit', desc: 'Fırın detaylı incelenir.' },
      { title: '2. Teklif', desc: 'Maliyet net şekilde sunulur.' },
      { title: '3. Onarım', desc: 'Tamir yapılır.' },
      { title: '4. Test', desc: 'Test edilir, garanti ile teslim.' },
    ],
    faq: [
      {
        q: 'Fırınım sıcaklığı tutmuyor, sebebi nedir?',
        a: 'Termostat, sıcaklık sensörü veya kontrol panel arızası olabilir. Yerinde inceleme ile kesin tespit yapılır.',
      },
    ],
  },
  {
    slug: 'endustriyel-davlumbaz-tamiri',
    category: 'tamir',
    title: 'Endüstriyel Davlumbaz Tamiri',
    navTitle: 'Endüstriyel Davlumbaz Tamiri',
    shortDesc: 'Endüstriyel davlumbaz tamiri, aspiratör servisi, filtre değişimi ve baca onarımı.',
    metaTitle: 'Endüstriyel Davlumbaz Tamiri - Aspiratör ve Filtre Servisi',
    metaDescription:
      'Endüstriyel davlumbaz tamiri için HSN TECHNIC. Aspiratör servisi, filtre değişimi, baca onarımı ve hava akış optimizasyonu.',
    keywords: ['endüstriyel davlumbaz tamiri', 'davlumbaz servisi', 'aspiratör tamiri', 'davlumbaz filtre değişimi'],
    hero: {
      h1: 'Endüstriyel Davlumbaz Tamiri',
      intro: 'Davlumbaz, aspiratör ve hava emiş sistemleriniz için profesyonel tamir hizmetleri.',
    },
    intro: [
      'Endüstriyel davlumbaz tamiri, mutfak içi hava kalitesi ve çalışan sağlığı için doğrudan etki eden bir servis hizmetidir. HSN TECHNIC olarak filtreli davlumbazlar, su perdeli davlumbazlar ve tüm hava emiş sistemlerine tamir hizmeti veriyoruz.',
      'Aspiratör motor arızaları, hava akış düşüklüğü, filtre tıkanıklığı, baca tesisat sorunları ve kontrol panel arızaları en sık görülen davlumbaz problemleridir. Uzman ekibimiz tüm bu sorunlara kalıcı çözüm sunar.',
    ],
    features: [
      'Aspiratör motor servisi ve değişimi',
      'Filtre temizliği ve değişimi',
      'Baca tesisat onarımı',
      'Hava akış kapasitesi optimizasyonu',
      'Su perdeli sistem onarımı',
      'Kontrol panel ve hız ayar servisi',
    ],
    process: [
      { title: '1. Tespit', desc: 'Davlumbaz ve sistem incelenir.' },
      { title: '2. Teklif', desc: 'Onarım planı paylaşılır.' },
      { title: '3. Onarım', desc: 'Tamir gerçekleştirilir.' },
      { title: '4. Test', desc: 'Hava akış testi yapılır, teslim edilir.' },
    ],
    faq: [
      {
        q: 'Davlumbazım yeterince çekmiyor, ne yapmalıyım?',
        a: 'Filtre tıkanıklığı, motor arızası veya baca problemi olabilir. Yerinde inceleme ile çözüm sunarız.',
      },
    ],
  },
  {
    slug: 'endustriyel-soguk-oda-tamiri',
    category: 'tamir',
    title: 'Endüstriyel Soğuk Oda Tamiri',
    navTitle: 'Soğuk Oda Tamiri',
    shortDesc: 'Soğuk oda tamiri, kompresör servisi, gaz dolumu, kapı ve panel onarımı.',
    metaTitle: 'Endüstriyel Soğuk Oda Tamiri - Kompresör ve Gaz Servisi',
    metaDescription:
      'Endüstriyel soğuk oda tamiri için HSN TECHNIC. Kompresör servisi, gaz dolumu, kapı onarımı ve panel servisi.',
    keywords: ['endüstriyel soğuk oda tamiri', 'soğuk oda tamiri', 'kompresör servisi', 'soğuk oda gaz dolumu'],
    hero: {
      h1: 'Endüstriyel Soğuk Oda Tamiri',
      intro: 'Soğuk oda sistemleriniz için kompresör, gaz, kapı ve panel onarım hizmetleri.',
    },
    intro: [
      'Endüstriyel soğuk oda tamiri, gıda işletmelerinin hijyen ve gıda güvenliği açısından en kritik teknik servis dallarından biridir. HSN TECHNIC olarak panel tipi, monoblok ve split sistem tüm endüstriyel soğuk odalara tamir hizmeti sunuyoruz.',
      'Kompresör arızaları, soğutucu gaz kaçakları, sıcaklık dengesizlikleri, kapı ve panel sorunları ile elektronik kontrol arızaları en yaygın soğuk oda problemleridir. Yetkili teknik kadromuz tüm bu sorunlara hızlı ve kalıcı çözüm sunar.',
    ],
    features: [
      'Kompresör servisi ve değişimi',
      'Soğutucu gaz dolumu ve kaçak tespiti',
      'Evaporatör ve kondenser temizliği',
      'Sıcaklık kontrol ve termostat servisi',
      'Soğuk oda kapı ve menteşe onarımı',
      'Panel ve izolasyon servisi',
    ],
    process: [
      { title: '1. Tespit', desc: 'Soğuk oda detaylı incelenir.' },
      { title: '2. Teklif', desc: 'İşlem ve maliyet bilgisi paylaşılır.' },
      { title: '3. Onarım', desc: 'Onarım yapılır.' },
      { title: '4. Test', desc: 'Sıcaklık testi yapılır, garanti ile teslim.' },
    ],
    faq: [
      {
        q: 'Soğuk odam soğutmuyor, sebebi nedir?',
        a: 'Gaz kaçağı, kompresör arızası veya termostat problemi olabilir. Servisimizi arayın.',
      },
      {
        q: 'Gaz dolumu yapıyor musunuz?',
        a: 'Evet, gaz kaçağı tespiti ve dolum hizmetlerini sertifikalı ekibimizle sunuyoruz.',
      },
    ],
  },
];

export const mainServices = servicesData.filter((s) => s.category === 'ana');
export const repairServices = servicesData.filter((s) => s.category === 'tamir');

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  servicesData.find((s) => s.slug === slug);
