#!/bin/bash

# Скрипт быстрой настройки проекта для FitLife_beta репозитория

echo "🚀 Настройка FitLife_beta..."

# Копируем main-beta.tsx в main.tsx
echo "📝 Настройка main.tsx..."
cp src/main-beta.tsx src/main.tsx

# Копируем AApp-beta.tsx в AApp.tsx
echo "📝 Настройка AApp.tsx..."
cp src/components/a/AApp-beta.tsx src/components/a/AApp.tsx

# Копируем README_BETA.md в README.md
echo "📝 Настройка README.md..."
cp README_BETA.md README.md

echo "✅ Настройка завершена!"
echo ""
echo "Следующие шаги:"
echo "1. git init (если еще не инициализирован)"
echo "2. git remote add origin https://github.com/yourusername/FitLife_beta.git"
echo "3. git add ."
echo "4. git commit -m 'Initial commit: FitLife Beta'"
echo "5. git branch -M main"
echo "6. git push -u origin main"

