# Инструкция: Создание репозитория FitLife_beta на GitHub

## Вариант 1: Автоматическое создание (с токеном)

Если у вас есть GitHub Personal Access Token:

```bash
export GITHUB_TOKEN='ваш_токен'
./CREATE_AND_PUSH.sh
```

## Вариант 2: Ручное создание (рекомендуется)

1. **Создайте репозиторий на GitHub:**
   - Перейдите на https://github.com/new
   - Название: `FitLife_beta`
   - Описание: `Базовый прототип FitLife с минималистичным дизайном`
   - Выберите **Public**
   - **НЕ добавляйте** README, .gitignore или лицензию
   - Нажмите "Create repository"

2. **Отправьте код:**
   ```bash
   ./PUSH_TO_GITHUB.sh
   ```

   Или вручную:
   ```bash
   git push beta main
   ```

## Текущий статус

✅ Проект настроен для beta версии
✅ Все файлы закоммичены
✅ Remote 'beta' настроен на: https://github.com/neitforever/FitLife_beta.git

Осталось только создать репозиторий на GitHub и запушить код!
