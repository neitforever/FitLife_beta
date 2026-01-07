# Инструкция по подготовке проекта FitLife_beta для GitHub

Этот документ описывает, как подготовить проект для публикации базового прототипа в отдельный репозиторий `FitLife_beta`.

## Вариант 1: Быстрая настройка (рекомендуется)

**Или используйте автоматический скрипт:**
```bash
./QUICK_SETUP.sh
```

Затем выполните шаги 4-7 ниже.

### Шаги:

1. **Скопируйте `main-beta.tsx` в `main.tsx`**:
```bash
cp src/main-beta.tsx src/main.tsx
```

2. **Скопируйте `AApp-beta.tsx` в `AApp.tsx`** (для работы без префикса /a):
```bash
cp src/components/a/AApp-beta.tsx src/components/a/AApp.tsx
```

3. **Скопируйте `README_BETA.md` в `README.md`**:
```bash
cp README_BETA.md README.md
```

4. **Инициализируйте git репозиторий** (если еще не инициализирован):
```bash
git init
```

5. **Добавьте remote для FitLife_beta**:
```bash
git remote add origin https://github.com/yourusername/FitLife_beta.git
```

6. **Добавьте файлы и сделайте коммит**:
```bash
git add .
git commit -m "Initial commit: FitLife Beta - базовый прототип"
```

7. **Запушьте в репозиторий**:
```bash
git branch -M main
git push -u origin main
```

## Вариант 2: Создание отдельной ветки

Если вы хотите сохранить оба варианта в одном репозитории:

1. **Создайте ветку beta**:
```bash
git checkout -b beta
```

2. **Замените main.tsx на main-beta.tsx**:
```bash
cp src/main-beta.tsx src/main.tsx
cp README_BETA.md README.md
```

3. **Закоммитьте изменения**:
```bash
git add .
git commit -m "Setup beta version"
```

4. **Создайте отдельный репозиторий FitLife_beta и запушьте туда ветку**:
```bash
git remote add beta https://github.com/yourusername/FitLife_beta.git
git push beta beta:main
```

## Что будет в репозитории FitLife_beta

После настройки, репозиторий будет содержать:
- Все исходные файлы проекта
- Компоненты варианта A в `src/components/a/`
- `main.tsx` настроенный на использование `AApp` (вариант A по умолчанию)
- README.md с описанием базового прототипа
- `.gitignore` с правильными исключениями

## Важно

- **Вариант B (улучшенный прототип) не будет включен** в этот репозиторий, так как `main.tsx` будет использовать только `AApp`
- Все маршруты будут работать без префикса `/a` (корневой путь `/` открывает вариант A)
- При деплое на Vercel/Netlify, убедитесь, что настроен SPA роутинг для всех путей

## Примечания

- После настройки, приложение будет работать без префикса `/a`
- Все маршруты доступны напрямую: `/`, `/workouts`, `/nutrition`, `/community`, `/profile`
- При деплое на Vercel/Netlify, убедитесь, что настроен SPA роутинг (rewrite все пути на `/index.html`)

