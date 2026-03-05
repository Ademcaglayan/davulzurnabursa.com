# Bursa Davul Zurna — Web Sitesi Rehberi

Bu belge, web sitesinde kullanılan her dosyayı, her bölümü ve her kod parçasını açıklamaktadır.

---

## Dosya Yapısı

```
davul zurna/
├── index.html          → Sayfanın tüm içeriği (HTML yapısı)
├── styles.css          → Tüm görsel tasarım (renkler, yazı, yerleşim)
├── script.js           → Etkileşimler (menü, lightbox, kaydırma)
└── resim video/        → Görseller ve videolar
    ├── ...n.jpg        → Logo olarak kullanılan fotoğraf
    ├── ...n.jpg        → Galeri fotoğrafı
    └── ...mp4 (×5)     → Galeri videoları
```

---

## index.html — Sayfa Yapısı

### `<head>` — Başlık Bilgileri

| Satır | Ne işe yarar? |
|---|---|
| `<meta charset="UTF-8">` | Türkçe karakterlerin (ğ, ş, ü…) doğru görünmesini sağlar |
| `<meta name="viewport">` | Mobil cihazlarda sayfanın düzgün ölçeklenmesini sağlar |
| `<title>` | Tarayıcı sekmesinde görünen başlık |
| `<meta name="description">` | Google arama sonuçlarında çıkan açıklama metni |
| `<link href="fonts.googleapis.com">` | Google Fonts'tan **Amiri** (başlık) ve **Lato** (metin) fontlarını yükler |
| `<link rel="stylesheet" href="styles.css">` | CSS dosyasını sayfaya bağlar |

---

### `<header>` — Üst Menü Çubuğu

```html
<header class="header">
  <nav class="nav">
    <a href="#" class="logo"><img ...></a>   ← Logo (resim video klasöründen)
    <button class="nav-toggle">...</button   ← Mobil hamburger menü butonu
    <ul class="nav-links">                   ← Masaüstü menü linkleri
      <li><a href="#hakkimizda">...</a></li
      ...
    </ul>
  </nav>
</header>
```

- **Logo:** `resim video/` klasöründeki ilk fotoğraf kullanılıyor. Yeni logo koymak için `src="..."` içindeki dosya yolunu değiştirin.
- **Menü linkleri:** `href="#hakkimizda"` gibi değerler, sayfada aynı `id`'ye sahip bölüme zıplar. Yeni bölüm eklerseniz, buna uygun bir link de eklemeniz gerekir.
- **Hamburger buton:** 700px altındaki ekranlarda görünür. JavaScript tarafından açılıp kapatılır.

---

### `<section class="hero">` — Ana Karşılama Bölümü

```html
<section class="hero">
  <div class="hero-bg"></div>         ← Arka plan renk/gradient katmanı
  <div class="hero-content">
    <p class="hero-subtitle">...</p>  ← Üst küçük yazı (—— METİN ——)
    <h1 class="hero-title">...</h1>   ← Ana büyük başlık
    <p class="hero-desc">...</p>      ← Alt açıklama cümlesi
    <div class="hero-cta">            ← Buton grubu
      <a class="btn btn-primary">...  ← Kırmızı buton → Instagram'a gider
      <a class="btn btn-secondary">.. ← Beyaz kenarlıklı buton → İletişime zıplar
    </div>
  </div>
  <div class="hero-scroll">           ← "Aşağı kaydır" animasyonlu ok
  </div>
</section>
```

**Değiştirmek isteyebilecekleriniz:**
- Başlık metni: `<h1 class="hero-title">` içini değiştirin
- Instagram linki: `href="https://www.instagram.com/bursa_davul_zurnaa/"` kısmını güncelleyin

---

### `<section id="hakkimizda">` — Hakkımızda Bölümü

```html
<section id="hakkimizda" class="section about">
  <div class="section-ornament">✦</div>  ← Dekoratif süs (——✦——)
  <div class="container">
    <div class="about-grid">             ← Sol-sağ iki sütun düzeni
      <div class="about-content">        ← Sol: metin
      <div class="about-visual">         ← Sağ: "15+ Yıllık Deneyim" kutusu
        <div class="about-card">
          <span class="card-number">15+  ← Büyük sayı
          <span class="card-label">Yıllık Deneyim  ← Alt yazı
```

**Değiştirmek isteyebilecekleriniz:**
- Paragraf metinleri: `<p class="about-text">` içlerini düzenleyin
- Deneyim sayısı: `<span class="card-number">15+</span>` içini değiştirin

---

### `<section id="hizmetler">` — Hizmetlerimiz Bölümü

```html
<div class="services-grid">        ← 4 sütunlu kart ızgarası
  <article class="service-card">   ← Her hizmet bir kart
    <div class="service-icon">💒   ← Emoji ikon
    <h3>Düğünler</h3>              ← Kart başlığı
    <p>...</p>                     ← Kart açıklaması
```

**Yeni hizmet kartı eklemek için:**
```html
<article class="service-card">
  <div class="service-icon">🎵</div>
  <h3>Hizmet Adı</h3>
  <p>Hizmet açıklaması buraya.</p>
</article>
```

**Bilgilendirme Kutusu (❗):**
```html
<div class="info-box">
  <span class="info-icon">❗</span>
  <div class="info-text">
    <strong>Başlık</strong>
    Açıklama metni...
  </div>
</div>
```
- Sol kırmızı kenar çizgisi olan uyarı kutusudur
- Metni veya başlığı değiştirmek için `<div class="info-text">` içini düzenleyin

---

### `<section id="galeri">` — Galeri Bölümü

```html
<div class="gallery-grid">
  <!-- Fotoğraf kartı -->
  <div class="gallery-item"
    data-type="image"
    data-src="resim video/dosya.jpg">
    <img src="resim video/dosya.jpg" alt="...">
    <span class="gallery-item-badge">Fotoğraf</span>
  </div>

  <!-- Video kartı -->
  <div class="gallery-item"
    data-type="video"
    data-src="resim video/dosya.mp4">
    <video muted playsinline preload="metadata" src="..."></video>
    <span class="gallery-item-badge">Video</span>
    <span class="gallery-play-icon">▶</span>
  </div>
</div>
```

**Önemli özellikler (data-* parametreleri):**

| Özellik | Ne işe yarar? |
|---|---|
| `data-type="image"` | JavaScript'e bunun resim olduğunu söyler → lightbox'ta `<img>` gösterir |
| `data-type="video"` | JavaScript'e bunun video olduğunu söyler → lightbox'ta `<video>` oynatır |
| `data-src="..."` | Tıklandığında lightbox'ta açılacak dosyanın yolu |
| `muted` | Video, sesi kapalı olarak küçük önizlemede oynar |
| `playsinline` | iPhone'larda tam ekrana geçmeden oynar |
| `preload="metadata"` | Sayfada sadece video bilgilerini (süre, küçük resim) yükler, tüm videoyu indirmez |

**Yeni galeri öğesi eklemek:**
- Fotoğraf: `data-type="image"` + `<img>` ile şablonu kopyalayın
- Video: `data-type="video"` + `<video>` ile şablonu kopyalayın
- Her ikisinde de `data-src` ve `src` aynı dosya yolunu göstermeli

---

### `<div id="lightbox">` — Büyütme Modalı

```html
<div id="lightbox" class="lightbox" aria-hidden="true">
  <button class="lightbox-close">&times;</button>  ← Kapat (X) butonu
  <div class="lightbox-content">
    <img class="lightbox-image" ...>   ← Resim için (gizli, tıklanınca gösterilir)
    <video class="lightbox-video" controls ...>  ← Video için (gizli, tıklanınca gösterilir)
  </div>
</div>
```

- Normalde gizlidir (`opacity: 0; visibility: hidden`)
- Galeri öğesine tıklandığında JavaScript `.open` sınıfını ekler ve görünür olur
- X butonuna, ESC'ye veya dış alana tıklandığında kapanır
- `controls` özelliği video oynatıcısında oynat/durdur/ses kontrollerini gösterir

---

### `<section id="iletisim">` — İletişim Bölümü

```html
<a href="https://www.instagram.com/bursa_davul_zurnaa/" class="contact-link instagram">
<a href="https://wa.me/905000000000" class="contact-link whatsapp">
```

**WhatsApp numarasını güncellemek için:**
`905000000000` kısmını kendi numaranızla değiştirin.
Format: `90` + alan kodu + numara (baştaki sıfır olmadan)
Örnek: `0541 234 56 78` → `905412345678`

---

## styles.css — Tasarım Dosyası

### CSS Değişkenleri (`:root` bloğu)

Tüm renkleri ve fontları tek yerden kontrol eden parametreler:

```css
:root {
  --color-bg:         #f9f4ee;   /* Sayfa arka planı — krem/kağıt */
  --color-bg-alt:     #f2ebe0;   /* Alternatif bölüm arka planı — biraz daha koyu */
  --color-surface:    #ece3d4;   /* Kartlar gibi yüzey elemanlar */
  --color-text:       #2b1d0e;   /* Ana metin rengi — koyu kahve */
  --color-text-muted: #6b5540;   /* İkincil metin — soluk kahve */
  --color-red:        #a0281a;   /* Ana vurgu rengi — kızıl kırmızı */
  --color-red-dark:   #7a1c10;   /* Hover durumunda kırmızının daha koyusu */
  --color-gold:       #c8960c;   /* Altın rengi — butonlar ve çizgiler */
  --color-gold-light: #e8b830;   /* Daha açık altın tonu */
  --color-border:     rgba(139,90,43,0.28); /* Kenar çizgisi rengi — yarı saydam kahve */
  --font-display:     'Amiri';   /* Başlıklar için font (Osmanlı etkili serif) */
  --font-body:        'Lato';    /* Metin için font (okunabilir, sade) */
  --radius-sm:        4px;       /* Az yuvarlak köşe */
  --radius-md:        8px;       /* Orta yuvarlak köşe */
  --radius-lg:        16px;      /* Çok yuvarlak köşe */
  --transition:       0.3s ease; /* Animasyon hızı ve geçiş eğrisi */
}
```

> **İpucu:** Sitenin tüm renklerini değiştirmek istiyorsanız sadece bu bloğu düzenleyin, her yeri tek tek değiştirmenize gerek yoktur.

---

### Önemli CSS Kalıpları

#### `clamp()` — Duyarlı Yazı Boyutu
```css
font-size: clamp(3rem, 10vw, 6rem);
```
- `3rem` → En küçük boyut (mobilde)
- `10vw` → Ekran genişliğinin %10'u (esnek)
- `6rem` → En büyük boyut (geniş ekranda)

#### `grid-template-columns: repeat(4, 1fr)` — Izgara Düzeni
4 eşit sütunlu ızgara oluşturur. `repeat(2, 1fr)` → 2 sütun, `1fr` → tek sütun.

#### `::before` / `::after` — Sözde Elemanlar
HTML'e ek eleman eklemeden CSS ile dekoratif içerik oluşturur.
Örn: Başlığın altındaki altın çizgi, header altındaki şerit, köşe rozetleri.

#### `@media (max-width: 700px)` — Mobil Uyum
700px'den dar ekranlarda (telefon) geçerli stil kuralları.

---

## script.js — Etkileşimler

### 1. Mobil Menü (hamburger)
```js
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');         // Menüyü aç/kapat
  document.body.style.overflow = ...;   // Açıkken sayfanın kaymasını engelle
});
```
- Hamburger butona tıklandığında `.nav` elementine `open` sınıfı eklenir/kaldırılır
- CSS'de `.nav.open .nav-links { display: flex }` kuralı menüyü gösterir

### 2. Kaydırma Efekti (header)
```js
const handleScroll = () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');    // 50px aşağı inilince gölge ekler
  } else {
    header.classList.remove('scrolled');
  }
};
```
- Kullanıcı sayfayı 50px aşağı kaydırınca header'a gölge eklenir
- `window.scrollY` sayfanın kaç piksel aşağı kaydırıldığını verir

### 3. Lightbox — Galeri Büyütme
```js
function openLightbox(type, src) {
  // type: "image" veya "video"
  // src:  dosya yolu (data-src'den alınır)

  lightboxImage.src = '';   // Önceki resmi temizle
  lightboxVideo.src = '';   // Önceki videoyu temizle
  lightboxVideo.pause();    // Önceki video oynatılıyorsa durdur

  if (type === 'image') {
    lightboxImage.src = src;
    lightbox.classList.add('show-image');  // CSS ile resmi göster
  } else {
    lightboxVideo.src = src;
    lightboxVideo.load();                  // Videoyu yükle
    lightbox.classList.add('show-video'); // CSS ile videoyu göster
  }

  lightbox.classList.add('open');          // Modal'ı görünür yap
  document.body.style.overflow = 'hidden'; // Arka planda kaymayı engelle
}
```

**Kapanma tetikleyicileri:**
| Eylem | Sonuç |
|---|---|
| X butonuna tıklama | `closeLightbox()` çağrılır |
| Modal'ın dış alanına tıklama | `e.target === lightbox` kontrolü → kapanır |
| ESC tuşuna basma | `e.key === 'Escape'` kontrolü → kapanır |

---

## Sık Yapılacak Değişiklikler

### Telefon numarasını güncelle
`index.html` → Satır 192:
```html
<a href="https://wa.me/905000000000"   ← Buraya 90+numara yaz
```

### Yeni galeri görseli/videosu ekle
`index.html` → `gallery-grid` div'i içine ekle:
```html
<div class="gallery-item" data-type="image" data-src="resim video/yeni.jpg">
  <img src="resim video/yeni.jpg" alt="Açıklama">
  <span class="gallery-item-badge">Fotoğraf</span>
</div>
```

### Renk değiştir
`styles.css` → `:root` bloğundaki değişken değerlerini güncelle.

### Yazıları değiştir
`index.html` → İlgili `<p>`, `<h2>` veya `<span>` taglarının içini düzenle.

### Logo değiştir
`index.html` → Satır 17:
```html
<img src="resim video/YENI_LOGO.jpg" alt="Bursa Davul Zurna">
```

---

## Siteyi Açmak

`index.html` dosyasına çift tıklayarak herhangi bir tarayıcıda açabilirsiniz.
Videoların düzgün oynatılması için siteyi bir web sunucusunda (veya VS Code Live Server eklentisiyle) çalıştırmanız önerilir.
