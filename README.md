# HSN TECHNIC - Öztiryakiler Yetkili Servis

Next.js 14 (App Router) + TypeScript + Tailwind CSS ile geliştirilmiş, **Cloudflare Pages** üzerinde statik export olarak yayınlanan kurumsal yetkili servis web sitesi.

## Özellikler

- **Next.js 14** App Router + TypeScript
- **Tailwind CSS** ile modern, responsive tasarım
- **Statik export** (Cloudflare Pages için optimize)
- **SEO odaklı** — her sayfa için ayrı `generateMetadata`, JSON-LD structured data
- **4 adet hedef anahtar kelime için landing page**:
  - `/oztiryakiler-servisi`
  - `/oztiryakiler-tamiri`
  - `/oztiryakiler-bakimi`
  - `/oztiryakiler-urunleri`
- **WhatsApp odaklı iletişim** (sticky float + mobil sticky bar)
- **Dinamik sitemap.xml ve robots.txt**
- **Schema.org LocalBusiness + Service** markup
- **Otomatik OpenGraph ve Twitter card** meta etiketleri

## Hızlı Başlangıç

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusu (http://localhost:3000)
npm run dev

# Production build (out/ klasörü oluşur)
npm run build
```

`npm run build` tamamlandığında `out/` klasörü tamamen statik HTML/CSS/JS dosyalarını içerir. Bu klasör doğrudan herhangi bir static hosting'e yüklenebilir.

## Cloudflare Pages Deploy

### Yöntem 1: Git Bağlantısı (Önerilen)

1. Bu repoyu GitHub/GitLab'e push edin.
2. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Repo'yu seçin ve aşağıdaki ayarları girin:

| Ayar | Değer |
|---|---|
| **Framework preset** | Next.js (Static HTML Export) |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `/` |
| **Node version** | `20` (Environment variables → `NODE_VERSION=20`) |

4. **Save and Deploy** butonuna basın. İlk build ~2-3 dakika sürer.

### Yöntem 2: Wrangler CLI

```bash
# Wrangler kur
npm install -g wrangler

# Build
npm run build

# Deploy
wrangler pages deploy out --project-name=hsn-technic
```

### Custom Domain Bağlama

1. Cloudflare Pages → projeniz → **Custom domains** → **Set up a custom domain**.
2. `oztiryakileryetkiliservisi.com` ekleyin (DNS otomatik yönlendirilir).
3. `www.oztiryakileryetkiliservisi.com` da ekleyin — `public/_redirects` dosyasındaki kural www'yi root'a 301 yönlendirir.

## SEO Kontrol Listesi (Yayın Öncesi)

- [ ] `lib/site.ts` içindeki `phone`, `whatsapp.number`, `email` alanlarını **gerçek bilgilerle güncelleyin**.
- [ ] `lib/site.ts` içindeki `url` alanı doğru mu kontrol edin (canonical bunu kullanıyor).
- [ ] Google Search Console'da siteyi doğrulayın → `app/layout.tsx` içindeki `verification.google` alanına kodu ekleyin.
- [ ] Google Analytics / GA4 eklemek isterseniz `app/layout.tsx`'e script ekleyin.
- [ ] Google'a sitemap'i bildirin: `https://oztiryakileryetkiliservisi.com/sitemap.xml`
- [ ] Google Business Profile (Google Haritalar) kaydı yapın — yerel SEO için kritik.
- [ ] `public/og-image.jpg` (1200×630) bir OpenGraph görseli ekleyin (şu an boş).

## Performans / Core Web Vitals

Statik export sayesinde:
- **LCP** (en geç 2.5sn): Hero render hızlı, font preload edilir.
- **CLS** (≤0.1): `next/font` ile font swap yok, layout shift minimum.
- **INP** (≤200ms): Sayfa interaktivitesi minimal JS ile sağlanır.

Cloudflare Pages global CDN'iyle TTFB <100ms olur.

## Klasör Yapısı

```
app/
  layout.tsx                       # Root layout (Header, Footer, JSON-LD)
  page.tsx                         # Ana sayfa
  hizmetler/page.tsx               # Hizmetler
  kurumsal/page.tsx                # Kurumsal
  servis-talep/page.tsx            # Servis Talep Formu
  iletisim/page.tsx                # İletişim
  oztiryakiler-servisi/page.tsx    # SEO landing - "öztiryakiler servisi"
  oztiryakiler-tamiri/page.tsx     # SEO landing - "öztiryakiler tamiri"
  oztiryakiler-bakimi/page.tsx     # SEO landing - "öztiryakiler bakımı"
  oztiryakiler-urunleri/page.tsx   # SEO landing - "öztiryakiler ürünleri"
  sitemap.ts                       # Dinamik sitemap.xml
  robots.ts                        # Dinamik robots.txt
  not-found.tsx                    # 404 sayfası
  globals.css                      # Tailwind ana CSS
components/
  Header.tsx, Footer.tsx           # Navigasyon
  WhatsAppFloat.tsx, MobileBar.tsx # Sticky butonlar
  ContactForm.tsx                  # Servis talep formu (WhatsApp redirect)
  PageHeader.tsx, SectionHead.tsx  # Tekrar kullanılan başlıklar
  ServiceCard.tsx, TrustGrid.tsx   # Hizmet/güven kartları
  CtaStrip.tsx                     # CTA bantları
  SeoLanding.tsx                   # 4 SEO landing'in ortak şablonu
  Icons.tsx                        # Tüm SVG ikonlar (inline, sıfır kütüphane)
lib/
  site.ts                          # Marka, iletişim, navigasyon, hizmet config
public/
  favicon.svg, _headers, _redirects, site.webmanifest
```

## Form Davranışı

`ContactForm` doğrudan API çağrısı yapmaz — kullanıcı formu doldurduğunda bilgileri WhatsApp'a önceden doldurulmuş mesaj olarak yönlendirir. Bu, statik export'ta backend olmadan çalışır ve dönüşüm oranını yüksek tutar.

**E-posta üzerinden de form almak isterseniz** Cloudflare Pages Functions kullanılabilir — gerekirse `functions/api/servis-talep.ts` ekleyin (Resend, SendGrid veya MailChannels API'si ile).

## İletişim Bilgilerini Güncelleme

Tüm telefon, WhatsApp, e-posta bilgileri **tek bir yerden** yönetilir:

```ts
// lib/site.ts
export const site = {
  phone: { display: '0850 ...', href: '+908500000000' },
  whatsapp: { display: '0555 ...', number: '905555555555' },
  email: 'info@oztiryakileryetkiliservisi.com',
  // ...
};
```

Bu dosyayı güncelleyip rebuild yapmanız yeterlidir.

## Lisans

© HSN TECHNIC. Tüm hakları saklıdır.
