# SEO / İndeksleme Sorunu — Teşhis ve Çözüm Raporu

**Site:** https://oztiryakileryetkiliservisi.com
**Altyapı:** Next.js (statik export) + Cloudflare Pages
**Tarih:** 16 Temmuz 2026

---

## 1. Özet: Asıl Sorun Ne?

Sitenin kodu (canonical etiketleri, sitemap, robots.txt, schema/JSON-LD, meta etiketler)
SEO açısından **doğru** yazılmış. Google'ın sayfaları indekslememesinin tek asıl
nedeni bir **yönlendirme (redirect) yapılandırma hatası**:

> **`www.oztiryakileryetkiliservisi.com` adresi, `oztiryakileryetkiliservisi.com`
> (apex) adresine 301 ile yönlendirilmiyor. www adresi 200 kodu ile sitenin tam
> bir kopyasını sunuyor.**

Bunu canlı olarak test ettim:

| İstek | Beklenen | Gerçekte olan |
|---|---|---|
| `https://www.../` | 301 → apex | **200 (yönlendirme yok)** ❌ |
| `https://.../oztiryakiler-servisi` (slash'sız) | 200/308 | 200 ✅ (canonical düzeltiyor) |
| `http://.../` | 301 → https | 301 → https ✅ |

www üzerinden gezildiğinde sitedeki **tüm iç linkler de www'de kalıyor** — yani
Google için apex sitesinin bire bir kopyası olan ikinci bir "www sitesi" oluşuyor.
Sayfalarda canonical apex'i işaret ettiği için Google çelişkili sinyaller alıyor
(200 kodu + apex'e canonical + head'deki JS yönlendirme). Search Console'daki
"Yeniden yönlendirme hatası" (17 sayfa) ve "Yönlendirmeli sayfa" (3 sayfa)
sonuçlarının kaynağı budur.

### Neden `_redirects` dosyası bunu çözmüyor?

`public/_redirects` dosyasında www→apex için şu satırlar vardı:

```
https://www.oztiryakileryetkiliservisi.com/* https://oztiryakileryetkiliservisi.com/:splat 301!
```

**Cloudflare Pages'in `_redirects` dosyası yalnızca YOL (path) eşleştirir; hostname
(www) veya şema (http/https) içeren kuralları YOK SAYAR.** Yani bu satırlar hiçbir
zaman çalışmadı (dosyanın kendi yorumunda da bu belirtilmiş). Bu yüzden www→apex
yönlendirmesi **mutlaka Cloudflare panelinden** yapılmalıdır.

---

## 2. Search Console'daki Her Satır Ne Anlama Geliyor?

| Sebep | Sayfa | Durum | Açıklama & Aksiyon |
|---|---|---|---|
| **Yeniden yönlendirme hatası** | 17 | 🔴 Kritik | www/apex çift içerik + çalışmayan JS yönlendirme. **Cloudflare 301 kuralı** ile çözülür (Bölüm 4). Asıl iş bu. |
| **Yönlendirmeli sayfa** | 3 | 🟡 | Yönlendiren URL'ler (eski .html / www). Konsolidasyon sonrası normalleşir. |
| **Doğru standart etikete sahip alternatif sayfa** | 2 | 🟢 Normal | Bu bir HATA DEĞİL. Google, canonical'ı doğru okuyup kopyayı apex'te birleştirdi. Aksiyon gerektirmez. |
| **Keşfedildi – şu anda dizine eklenmiş değil** | 9 | 🟡 | Google URL'yi biliyor ama henüz taramadı/indekslemedi. Yeni site + tarama bütçesi. İndeksleme isteği + iç link + backlink ile hızlanır (Bölüm 5–6). |
| **Tarandı – şu anda dizine eklenmiş değil** | 0 | 🟢 | Şu an bu kategoride sayfa yok. |

---

## 3. Kodda Yapılan Düzeltmeler (Tamamlandı)

`public/_redirects` ve `out/_redirects` dosyalarındaki **çalışmayan host bazlı
kurallar kaldırıldı**; yerine neden panelden yapılması gerektiğini açıklayan not
eklendi. Geçerli olan eski `.html → yeni yol` yönlendirmeleri korundu.

> Bu değişikliğin canlıya yansıması için sitenin yeniden deploy edilmesi gerekir
> (Bölüm 7).

Kodun geri kalanı (canonical, sitemap.xml, robots.txt, JSON-LD, meta) zaten
doğru; değiştirilmesine gerek yoktu.

---

## 4. ⭐ ANA ÇÖZÜM — Cloudflare Paneli (www → apex 301)

Bu adım sorunun %90'ını çözer. Cloudflare panelinde ilgili domaini (zone) seç.

### 4.1. www → apex için "Single Redirect" kuralı oluştur

1. Cloudflare panelinde **oztiryakileryetkiliservisi.com** domainini aç.
2. Sol menüden **Rules → Redirect Rules** (bazı hesaplarda: Rules → Overview → Redirect Rules).
3. **Create rule** → adı: `www-to-apex`.
4. **When incoming requests match → Custom filter expression** seç ve şu ifadeyi gir:

   - Field: `Hostname`  ·  Operator: `equals`  ·  Value: `www.oztiryakileryetkiliservisi.com`

   (Expression editor'da: `http.host eq "www.oztiryakileryetkiliservisi.com"`)

5. **Then... → Type: Dynamic**
   - **Expression (URL):**
     ```
     concat("https://oztiryakileryetkiliservisi.com", http.request.uri.path)
     ```
   - **Status code:** `301`
   - **Preserve query string:** ✅ (Aç)
6. **Deploy** / Save.

> Bu kural Cloudflare'in "edge" katmanında, Pages sayfayı sunmadan ÖNCE çalışır.
> Böylece www ve http varyasyonları anında 301 ile apex'e taşınır — Googlebot da
> insan ziyaretçi de tek adrese yönlenir.

### 4.2. HTTPS ve SSL ayarlarını doğrula

- **SSL/TLS → Overview:** Mod **Full (strict)** olmalı.
- **SSL/TLS → Edge Certificates → Always Use HTTPS:** **ON** (http→https zaten çalışıyor, teyit et).
- Aynı ekranda **Automatic HTTPS Rewrites: ON** önerilir.

### 4.3. www DNS kaydı

- **DNS** sekmesinde `www` kaydının var olduğundan ve **Proxied (turuncu bulut)**
  olduğundan emin ol. Redirect Rule yalnızca trafik Cloudflare'den geçerse (proxied)
  çalışır. www için ayrı bir "custom domain" olarak Pages projesine ekleme yapmana
  gerek yok; Redirect Rule yeterli.

### 4.4. Kuralı test et

Kural yayıldıktan sonra tarayıcıda `https://www.oztiryakileryetkiliservisi.com/hizmetler/`
adresini aç. Adres çubuğu otomatik olarak `https://oztiryakileryetkiliservisi.com/hizmetler/`
olmalı. (Geliştirici Araçları → Network sekmesinde ilk isteğin **301** döndüğünü
göreceksin.)

---

## 5. Google Search Console Adımları

### 5.1. "Domain property" oluştur (önerilir)

Mevcut mülkün muhtemelen tek bir URL öneki (ör. `https://oztiryakileryetkiliservisi.com/`).
Bunun yerine **Domain (Alan adı) mülkü** eklemen, www/apex ve http/https tüm
varyasyonları tek çatı altında birleştirir:

1. Search Console → Mülk ekle → **Alan adı** → `oztiryakileryetkiliservisi.com`.
2. Verilen **TXT kaydını** Cloudflare **DNS** sekmesine ekle (Cloudflare kullandığın
   için hızlı doğrulanır) → **Doğrula**.

### 5.2. Sitemap'i yeniden gönder

Search Console → **Site Haritaları** → `sitemap.xml` gir → **Gönder**.
(Adres: `https://oztiryakileryetkiliservisi.com/sitemap.xml`)

### 5.3. Düzeltmeyi doğrulat

Cloudflare kuralı aktifken ve site yeniden deploy edildikten sonra:

- **Sayfalar (İndeksleme) → "Yeniden yönlendirme hatası"** raporunu aç →
  **DOĞRULAMAYI BAŞLAT (Validate Fix)**.
- Aynısını **"Yönlendirmeli sayfa"** için de yap.
- "Doğru standart etikete sahip alternatif sayfa" için işlem yapma (bu normal).

> Doğrulama süreci Google tarafında birkaç gün–2 hafta sürebilir. Sabırlı ol,
> tekrar tekrar başlatma.

### 5.4. Önemli sayfalar için indeksleme iste

Üstteki arama kutusuna URL yapıştır (**URL İnceleme**) → **Dizine eklenmeyi iste**.
Öncelik sırası:

1. `https://oztiryakileryetkiliservisi.com/`
2. `https://oztiryakileryetkiliservisi.com/oztiryakiler-servisi/`
3. `https://oztiryakileryetkiliservisi.com/oztiryakiler-tamiri/`
4. `https://oztiryakileryetkiliservisi.com/hizmetler/`
5. Kalan `oztiryakiler-*` landing sayfaları (günde birkaç tane).

Bu adım "Keşfedildi – dizine eklenmiş değil" (9 sayfa) durumunu hızlandırır.

---

## 6. Ek SEO İyileştirme Önerileri (Yüksek Değerli)

Kod zaten iyi durumda; asıl fark yaratacaklar site-dışı ve içerik tarafında:

- **Google Business Profile (İşletme Profili):** Büyükçekmece adresinle bir işletme
  profili aç/doğrula. Yerel aramalarda ("öztiryakiler servisi istanbul") en büyük
  etkiyi bu yapar. NAP bilgileri (isim-adres-telefon) sitedeki ile birebir aynı olsun.
- **Backlink / dizin kayıtları:** Sektörel dizinler, sosyal medya profillerinden
  (Instagram/Facebook) siteye link. "Keşfedildi – dizine eklenmedi" sorununun kök
  nedeni çoğu zaman sitenin yeni ve az otoriteli olmasıdır; birkaç kaliteli link bunu
  hızlandırır.
- **İç linkleme:** Zaten iyi (footer + gövde linkleri). Landing sayfalarından
  birbirine bağlam içi link vermeye devam et.
- **Özgün içerik derinliği:** `oztiryakiler-*` sayfaları benzer şablonda. Her birine
  o ekipmana özel 2–3 paragraf özgün içerik (sık arızalar, bakım ipuçları) eklemek
  "thin/duplicate content" riskini azaltır ve sıralamayı güçlendirir.
- **Sayfa hızı / Core Web Vitals:** `hsn-logo.png` 448 KB — büyük. Logoyu
  sıkıştır/WebP'ye çevir (footer/header'da zaten `hsn-logo-200.png` var, onu kullan).
- **Görsel `alt` metinleri:** Tüm görsellerde anahtar kelime içeren açıklayıcı alt
  metinler olsun.

---

## 7. Deploy (Kod Değişikliklerini Canlıya Alma)

Cloudflare Pages projesi git'e bağlıysa:

```bash
git add public/_redirects out/_redirects SEO-DUZELTME-RAPORU.md
git commit -m "fix(seo): calismayan www redirect kurallarini _redirects'ten kaldir"
git push
```

Cloudflare Pages otomatik yeniden build alır. Manuel `out/` yüklüyorsan güncellenmiş
`out/` klasörünü yükle. (Not: www→apex 301 kuralı git'ten bağımsızdır; Bölüm 4'teki
panel adımıyla ayrıca yapılmalıdır.)

---

## 8. Kontrol Listesi

- [ ] Cloudflare'de `www-to-apex` Redirect Rule oluşturuldu (Bölüm 4.1)
- [ ] SSL/TLS: Full (strict) + Always Use HTTPS ON (Bölüm 4.2)
- [ ] `https://www.../hizmetler/` tarayıcıda apex'e 301 ile yönleniyor (Bölüm 4.4)
- [ ] Kod değişiklikleri push/deploy edildi (Bölüm 7)
- [ ] GSC Domain property eklendi ve doğrulandı (Bölüm 5.1)
- [ ] sitemap.xml yeniden gönderildi (Bölüm 5.2)
- [ ] "Yeniden yönlendirme hatası" + "Yönlendirmeli sayfa" için Doğrulamayı Başlat (Bölüm 5.3)
- [ ] Öncelikli sayfalar için indeksleme istendi (Bölüm 5.4)
- [ ] Google Business Profile açıldı/doğrulandı (Bölüm 6)

---

## 9. Beklenen Zaman Çizelgesi

- **1–3 gün:** www→apex 301 canlıda; yeni tarama başlar.
- **1–2 hafta:** "Yeniden yönlendirme hatası" ve "Yönlendirmeli sayfa" sayıları düşer;
  doğrulama "Başarılı"ya döner.
- **2–4 hafta:** "Keşfedildi/Tarandı – dizine eklenmedi" sayfalar kademeli indekslenir
  (indeksleme isteği + backlink ile hızlanır).

Not: Google'ın indeksleme kararları tamamen Google'ın kontrolündedir; bu adımlar
teknik engelleri kaldırıp süreci hızlandırır ancak kesin gün garantisi verilemez.
