# 🌿 ONA UYI — Interactive Foundation Presentation

Интерактивная презентация фонда «ONA UYI» — 11 fullscreen-слайдов на React + Vite + TypeScript.

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
```

Сборка продакшена:

```bash
npm run build    # dist/
npm run preview  # предпросмотр собранного
```

## Возможности

- **11 слайдов** fullscreen (титул, открытие, кому помогаем, услуги, результаты, выпускницы, обучение, 2 истории успеха, карта, финал).
- **RU / UZ** — переключение всего текста в navbar.
- **Загрузка фото** — клик или drag&drop на любую placeholder-зону, `object-fit: cover`, сохранение в `localStorage` (Base64), кнопка ✕ для замены.
- **Интерактивная карта Узбекистана** (слайд 10) — SVG-контур страны, 8 пульсирующих маркеров, popup по клику, двусторонняя синхронизация со списком домов.
- **CountUp** — анимация цифр от 0 на слайдах 05 и 06.
- **Framer Motion** — fadeInUp + stagger при появлении каждого слайда.
- **Lightbox** — просмотр фото сетки 3×3 (слайд 07), стрелки ← →, Escape.
- **PDF-экспорт** — кнопка «Скачать PDF» собирает все 11 слайдов в `OnaUyi_Presentation.pdf` (html2canvas + jsPDF).
- **Навигация** — стрелки по бокам, точки внизу, клавиши ← →, свайп на мобильных, `F` → fullscreen, прогресс-бар сверху.

## Структура

```
src/
├── App.tsx              # контейнер слайдов, навигация, свайп, PDF-экспорт
├── context.tsx          # язык + режим экспорта + хранилище фото (localStorage)
├── data/
│   ├── content.ts       # весь контент RU/UZ + дома
│   └── uzbekistan.ts    # контур страны + проекция lng/lat → SVG
├── components/          # Navbar, Navigation, SlideShell, PhotoUpload,
│                        # Counter, Lightbox, UzbekistanMap, motion
├── slides/              # Slide01…Slide11 + StorySlide
└── styles/global.css    # дизайн-система (токены, все слайды)
```

## Дизайн-система

Emerald + Gold + Teal, шрифты **Fraunces** (заголовки) + **Manrope** (текст), фон `#FAFAF7`.
Токены — в `:root` внутри `src/styles/global.css`.
