# EGG Güvenlik — Deploy Rehberi

## Vercel (Önerilen)

1. GitHub'a push edin
2. vercel.com → "New Project" → repo'yu seçin
3. Framework: Next.js (otomatik algılar)
4. Deploy →  Otomatik çalışır

## Hostinger Static Hosting

1. `npm run build` komutunu çalıştırın
2. `out/` klasörünün tüm içeriğini Hostinger File Manager'a yükleyin
3. `public_html/` klasörüne yükleyin
4. `.htaccess` dosyası oluşturun:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+)/?$ /$1/index.html [L]
```

## Gerçek Verilerle Güncellenecek Alanlar

| Alan | Dosya |
|---|---|
| Gerçek domain | `lib/seo.ts` → `SEO_BASE.siteUrl` |
| Koordinatlar | `lib/seo.ts` → `buildLocalBusinessSchema` |
| Posta kodu / tam adres | `lib/seo.ts` |
| OG görseli (1200×630px) | `public/og-image.jpg` |
| Google Search Console kodu | `app/layout.tsx` → `verification.google` |
| Instagram / Facebook | `lib/contact.ts` |
| İnceleme sayısı | `lib/seo.ts` → `reviewCount` |
