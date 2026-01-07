#!/bin/bash

# Скрипт для отправки FitLife_beta на GitHub
# Убедитесь, что репозиторий FitLife_beta создан на GitHub

echo "🚀 Отправка FitLife_beta на GitHub..."

# Проверяем, существует ли remote beta
if git remote get-url beta >/dev/null 2>&1; then
    echo "✅ Remote 'beta' уже настроен"
else
    echo "📝 Добавляем remote 'beta'..."
    git remote add beta https://github.com/neitforever/FitLife_beta.git
fi

# Показываем текущие remotes
echo ""
echo "Текущие remotes:"
git remote -v

echo ""
echo "📤 Отправляем код на GitHub..."
git push beta main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Успешно отправлено на GitHub!"
    echo "🌐 Репозиторий: https://github.com/neitforever/FitLife_beta"
else
    echo ""
    echo "❌ Ошибка при отправке. Убедитесь, что:"
    echo "   1. Репозиторий FitLife_beta создан на GitHub"
    echo "   2. У вас есть права на запись в репозиторий"
    echo "   3. Вы аутентифицированы в Git (git config --global user.name и user.email)"
fi

