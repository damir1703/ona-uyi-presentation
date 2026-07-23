// Финансовые данные по домам (из финотчётов). Курс: 12 000 сум = $1.
// Палитра категорий прошла CVD-валидатор dataviz: emerald / gold / purple.

export type House = "tashkent" | "quvosoy";

export interface FinCategory {
  key: string;
  ru: string;
  uz: string;
  sum: number;
  usd: number;
  color: string;
}
export interface FinYear {
  label_ru: string;
  label_uz: string;
  usd: number;
}
export interface HouseFinance {
  since_ru: string;
  since_uz: string;
  totalSum: number;
  totalUsd: number;
  categories: FinCategory[];
  years: FinYear[];
}

const CARE = "#10B981";
const HOUSE = "#D97706";
const MGMT = "#7C3AED";

export interface DetailItem {
  ru: string;
  uz: string;
  usd: number;
}
export interface DetailGroup {
  catKey: "care" | "house" | "mgmt";
  items: DetailItem[];
}

// Детальная разбивка бюджета по статьям (из финотчётов, $ = сум / 12000)
export const financeDetail: Record<House, DetailGroup[]> = {
  tashkent: [
    {
      catKey: "care",
      items: [
        { ru: "Питание и сан-гигиена", uz: "Oziq-ovqat va gigiena", usd: 31387 },
        { ru: "Одежда", uz: "Kiyim", usd: 270 },
        { ru: "Лекарства и мед. услуги", uz: "Dori va tibbiy xizmat", usd: 7530 },
        { ru: "Психолог", uz: "Psixolog", usd: 6627 },
        { ru: "Медработник", uz: "Tibbiyot xodimi", usd: 3159 },
        { ru: "Специалист соц. работы (2 чел.)", uz: "Ijtimoiy ish mutaxassisi (2 kishi)", usd: 9046 },
        { ru: "Координатор", uz: "Koordinator", usd: 29427 },
      ],
    },
    {
      catKey: "house",
      items: [
        { ru: "Аренда помещения + налог, риэлтор", uz: "Ijara + soliq, rieltor", usd: 97229 },
        { ru: "Обустройство дома", uz: "Uyni jihozlash", usd: 11472 },
        { ru: "Коммунальные услуги", uz: "Kommunal xizmatlar", usd: 240 },
        { ru: "Хозтовары", uz: "Xo'jalik mollari", usd: 944 },
        { ru: "Услуги связи", uz: "Aloqa xizmatlari", usd: 46 },
        { ru: "Видеонаблюдение", uz: "Videokuzatuv", usd: 52 },
      ],
    },
    {
      catKey: "mgmt",
      items: [
        { ru: "Зарплата АУП + налоги", uz: "ABH maoshi + soliq", usd: 63191 },
        { ru: "Единовременный расход на открытие", uz: "Ochilish uchun bir martalik xarajat", usd: 6831 },
        { ru: "Транспорт / ГСМ", uz: "Transport / YoQM", usd: 3848 },
        { ru: "Мобилограф", uz: "Mobilograf", usd: 2534 },
        { ru: "Мероприятия", uz: "Tadbirlar", usd: 1147 },
        { ru: "Непредвиденные (матпомощь)", uz: "Kutilmagan (moddiy yordam)", usd: 948 },
        { ru: "Канцтовары + корп. номера", uz: "Kanselyariya + korp. raqamlar", usd: 848 },
        { ru: "Услуги банка", uz: "Bank xizmatlari", usd: 542 },
        { ru: "Аренда офиса + налог", uz: "Ofis ijarasi + soliq", usd: 376 },
        { ru: "Аудит", uz: "Audit", usd: 135 },
      ],
    },
  ],
  quvosoy: [
    {
      catKey: "care",
      items: [
        { ru: "Питание и сан-гигиена", uz: "Oziq-ovqat va gigiena", usd: 13724 },
        { ru: "Специалист соц. работы (2 чел.)", uz: "Ijtimoiy ish mutaxassisi (2 kishi)", usd: 12919 },
        { ru: "Координатор", uz: "Koordinator", usd: 5494 },
        { ru: "Психолог", uz: "Psixolog", usd: 5154 },
        { ru: "Медработник", uz: "Tibbiyot xodimi", usd: 2431 },
        { ru: "Лекарства и мед. услуги", uz: "Dori va tibbiy xizmat", usd: 919 },
        { ru: "Одежда", uz: "Kiyim", usd: 553 },
      ],
    },
    {
      catKey: "house",
      items: [
        { ru: "Аренда помещения + налог, риэлтор", uz: "Ijara + soliq, rieltor", usd: 18007 },
        { ru: "Коммунальные услуги", uz: "Kommunal xizmatlar", usd: 1743 },
        { ru: "Обустройство дома", uz: "Uyni jihozlash", usd: 1180 },
        { ru: "Хозтовары", uz: "Xo'jalik mollari", usd: 774 },
        { ru: "Видеонаблюдение", uz: "Videokuzatuv", usd: 207 },
        { ru: "Услуги связи", uz: "Aloqa xizmatlari", usd: 107 },
      ],
    },
    {
      catKey: "mgmt",
      items: [
        { ru: "Единовременный расход на открытие", uz: "Ochilish uchun bir martalik xarajat", usd: 11031 },
        { ru: "Зарплата АУП + налоги", uz: "ABH maoshi + soliq", usd: 8114 },
        { ru: "Мобилограф", uz: "Mobilograf", usd: 1850 },
        { ru: "Транспорт / ГСМ", uz: "Transport / YoQM", usd: 1205 },
        { ru: "Мероприятия", uz: "Tadbirlar", usd: 697 },
        { ru: "Канцтовары", uz: "Kanselyariya", usd: 537 },
        { ru: "Аренда офиса + налог", uz: "Ofis ijarasi + soliq", usd: 405 },
        { ru: "Аудит", uz: "Audit", usd: 326 },
        { ru: "Услуги банка", uz: "Bank xizmatlari", usd: 245 },
        { ru: "Непредвиденные (матпомощь)", uz: "Kutilmagan (moddiy yordam)", usd: 13 },
      ],
    },
  ],
};

export const finance: Record<House, HouseFinance> = {
  tashkent: {
    since_ru: "Май 2024 — Июнь 2026",
    since_uz: "May 2024 — Iyun 2026",
    totalSum: 3333943992,
    totalUsd: 277828,
    categories: [
      { key: "care", ru: "Содержание подопечных", uz: "Onalar va bolalarni ta'minlash", sum: 1049348758, usd: 87446, color: CARE },
      { key: "house", ru: "Содержание дома", uz: "Uyni saqlash", sum: 1319808514, usd: 109984, color: HOUSE },
      { key: "mgmt", ru: "Управление проектом", uz: "Loyihani boshqarish", sum: 964786720, usd: 80399, color: MGMT },
    ],
    years: [
      { label_ru: "2024 (май–дек)", label_uz: "2024 (may–dek)", usd: 104210 },
      { label_ru: "2025", label_uz: "2025", usd: 102457 },
      { label_ru: "2026 (I пол.)", label_uz: "2026 (I yarim)", usd: 71162 },
    ],
  },
  quvosoy: {
    since_ru: "Август 2025 — Июнь 2026",
    since_uz: "Avgust 2025 — Iyun 2026",
    totalSum: 1051593810,
    totalUsd: 87633,
    categories: [
      { key: "care", ru: "Содержание подопечных", uz: "Onalar va bolalarni ta'minlash", sum: 494318549, usd: 41193, color: CARE },
      { key: "house", ru: "Содержание дома", uz: "Uyni saqlash", sum: 264219307, usd: 22018, color: HOUSE },
      { key: "mgmt", ru: "Управление проектом", uz: "Loyihani boshqarish", sum: 293055954, usd: 24421, color: MGMT },
    ],
    years: [
      { label_ru: "2025 (авг–дек)", label_uz: "2025 (avg–dek)", usd: 41101 },
      { label_ru: "2026 (I пол.)", label_uz: "2026 (I yarim)", usd: 46532 },
    ],
  },
};
