#!/bin/bash
# Mac üzerinde çift tıklayarak çalıştırılabilir başlatıcı
cd "$(dirname "$0")"

echo "🚀 HSN TECHNIC - Geliştirme Sunucusu"
echo "===================================="
echo ""

# Node.js var mı?
if ! command -v node &> /dev/null; then
  echo "❌ Node.js kurulu değil. https://nodejs.org adresinden indirip kurun."
  echo "Pencereyi kapatmak için Enter'a basın..."
  read
  exit 1
fi

echo "✓ Node.js: $(node -v)"
echo "✓ npm:     $(npm -v)"
echo ""

# node_modules yoksa kur
if [ ! -d "node_modules" ]; then
  echo "📦 Bağımlılıklar kuruluyor (ilk seferde 1-2 dakika sürer)..."
  npm install
  echo ""
fi

echo "🔥 Dev sunucusu başlatılıyor..."
echo "🌐 http://localhost:3000 adresini tarayıcınızda açın"
echo ""
echo "Durdurmak için: CTRL+C"
echo ""

npm run dev
