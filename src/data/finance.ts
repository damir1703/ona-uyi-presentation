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

export const finance: Record<House, HouseFinance> = {
  tashkent: {
    since_ru: "Июнь 2024 — Июнь 2026",
    since_uz: "Iyun 2024 — Iyun 2026",
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
