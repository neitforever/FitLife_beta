#!/bin/bash

# Скрипт для создания репозитория FitLife_beta и отправки кода
# Требуется GitHub Personal Access Token

echo "🚀 Создание репозитория FitLife_beta на GitHub..."

# Проверяем наличие токена
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Переменная GITHUB_TOKEN не установлена"
    echo ""
    echo "Пожалуйста, установите токен:"
    echo "  export GITHUB_TOKEN='ваш_токен'"
    echo ""
    echo "Или создайте репозиторий вручную на GitHub:"
    echo "  1. Перейдите на https://github.com/new"
    echo "  2. Название: FitLife_beta"
    echo "  3. Описание: Базовый прототип FitLife с минималистичным дизайном"
    echo "  4. Public"
    echo "  5. Не добавляйте README, .gitignore или лицензию"
    echo "  6. Нажмите 'Create repository'"
    echo ""
    echo "Затем запустите: ./PUSH_TO_GITHUB.sh"
    exit 1
fi

# Создаем репозиторий через API
echo "📝 Создаем репозиторий через GitHub API..."
RESPONSE=$(curl -s -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/user/repos \
  -d '{
    "name": "FitLife_beta",
    "description": "Базовый прототип FitLife с минималистичным дизайном",
    "private": false
  }')

# Проверяем ответ
if echo "$RESPONSE" | grep -q '"name"'; then
    echo "✅ Репозиторий успешно создан!"
else
    if echo "$RESPONSE" | grep -q "already exists"; then
        echo "ℹ️  Репозиторий уже существует"
    else
        echo "❌ Ошибка при создании репозитория:"
        echo "$RESPONSE" | head -5
        exit 1
    fi
fi

# Ждем немного, чтобы GitHub обработал создание
sleep 2

# Отправляем код
echo ""
echo "📤 Отправляем код на GitHub..."
git push beta main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Успешно отправлено на GitHub!"
    echo "🌐 Репозиторий: https://github.com/neitforever/FitLife_beta"
else
    echo ""
    echo "❌ Ошибка при отправке. Попробуйте еще раз через несколько секунд."
fi

