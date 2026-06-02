#!/bin/bash
# ═══════════════════════════════════════════════════════════
# EGG Güvenlik — Otomatik Build & Package Script
# Kullanım: bash build-and-package.sh
# ═══════════════════════════════════════════════════════════
set -e
BUILDDIR="/tmp/egg-build"
SRC="/home/claude/egg-final"

echo "🔄 Kaynak dosyalar kopyalanıyor..."
for d in app components lib public; do
  rm -rf "$BUILDDIR/$d"
  cp -r "$SRC/$d" "$BUILDDIR/$d"
done
for f in next.config.ts tsconfig.json tailwind.config.ts package.json postcss.config.mjs; do
  [ -f "$SRC/$f" ] && cp "$SRC/$f" "$BUILDDIR/$f"
done

echo "🔨 Next.js build..."
cd "$BUILDDIR" && rm -rf .next out && npx next build

echo "📦 out/ kopyalanıyor..."
rm -rf "$SRC/out"
cp -r "$BUILDDIR/out" "$SRC/out"

echo "🔗 HTML path'leri düzeltiliyor..."
python3 "$SRC/fix-paths.py"

echo "📝 index.html embed ediliyor..."
python3 "$SRC/embed-index.py"

echo "🗜️  ZIP oluşturuluyor..."
cd /home/claude
rm -f /mnt/user-data/outputs/egg-guvenlik-site.zip
zip -r /mnt/user-data/outputs/egg-guvenlik-site.zip egg-final/ \
  --exclude "egg-final/.next/*" \
  --exclude "egg-final/node_modules/*" \
  --exclude "egg-final/out/_next/static/chunks/*.map" \
  -q

echo "✅ TAMAMLANDI: $(ls -lh /mnt/user-data/outputs/egg-guvenlik-site.zip | awk '{print $5}')"
