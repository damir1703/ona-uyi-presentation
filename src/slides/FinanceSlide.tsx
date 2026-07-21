import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, Tooltip, LabelList, Cell as BarCell,
} from "recharts";
import SlideShell from "../components/SlideShell";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { finance } from "../data/finance";
import type { House } from "../data/finance";
import type { SlideProps } from "./types";

interface Props extends SlideProps {
  house: House;
}

const fmtUsd = (n: number) => "$" + Math.round(n).toLocaleString("ru-RU");
const fmtSum = (n: number) => Math.round(n).toLocaleString("ru-RU");

export default function FinanceSlide({ n, total, active, house }: Props) {
  const { lang } = useApp();
  const f = finance[house];
  const houseName =
    house === "tashkent"
      ? { ru: "Дом Ташкент", uz: "Toshkent uyi" }
      : { ru: "Дом Кувасой", uz: "Quvasoy uyi" };

  const pieData = f.categories.map((c) => ({
    name: lang === "ru" ? c.ru : c.uz,
    value: c.usd,
    color: c.color,
  }));
  const yearData = f.years.map((y) => ({
    name: lang === "ru" ? y.label_ru : y.label_uz,
    usd: y.usd,
  }));

  return (
    <SlideShell n={n} total={total} className="fin">
      <Reveal active={active} className="fin__wrap">
        <RItem className="center">
          <h2 className="section-title">
            {lang === "ru" ? "Финансовая прозрачность" : "Moliyaviy shaffoflik"}
          </h2>
          <span className="badge-outline fin__period">
            {houseName[lang]} · {lang === "ru" ? f.since_ru : f.since_uz}
          </span>
        </RItem>

        <RItem className="fin__grid">
          {/* Донат: структура расходов */}
          <div className="fin__panel fin__donut-panel">
            <h3 className="fin__panel-title">
              {lang === "ru" ? "Структура расходов" : "Xarajatlar tuzilmasi"}
            </h3>
            <div className="fin__donut">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="62%"
                    outerRadius="92%"
                    paddingAngle={2}
                    stroke="var(--bg)"
                    strokeWidth={3}
                    isAnimationActive={active}
                    animationDuration={900}
                  >
                    {pieData.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v) => fmtUsd(Number(v))}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      fontFamily: "Manrope",
                      fontSize: 13,
                      boxShadow: "var(--shadow-card)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="fin__donut-center">
                <span className="fin__donut-total">{fmtUsd(f.totalUsd)}</span>
                <span className="fin__donut-label">
                  {lang === "ru" ? "всего расходов" : "jami xarajat"}
                </span>
              </div>
            </div>
          </div>

          {/* Разбивка + погодовые бары */}
          <div className="fin__panel">
            <h3 className="fin__panel-title">
              {lang === "ru" ? "По категориям" : "Kategoriyalar bo'yicha"}
            </h3>
            <ul className="fin__breakdown">
              {f.categories.map((c) => {
                const pct = Math.round((c.usd / f.totalUsd) * 100);
                return (
                  <li key={c.key}>
                    <span className="fin__dot" style={{ background: c.color }} />
                    <span className="fin__cat-name">{lang === "ru" ? c.ru : c.uz}</span>
                    <span className="fin__cat-usd">{fmtUsd(c.usd)}</span>
                    <span className="fin__cat-pct">{pct}%</span>
                  </li>
                );
              })}
            </ul>

            <h3 className="fin__panel-title fin__panel-title--mt">
              {lang === "ru" ? "Расходы по периодам" : "Davrlar bo'yicha xarajatlar"}
            </h3>
            <div className="fin__bars">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearData} margin={{ top: 28, right: 8, left: 8, bottom: 0 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "var(--text-secondary)", fontSize: 12, fontFamily: "Manrope" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(16,185,129,0.08)" }}
                    formatter={(v) => fmtUsd(Number(v))}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      fontFamily: "Manrope",
                      fontSize: 13,
                    }}
                  />
                  <Bar dataKey="usd" radius={[6, 6, 0, 0]} isAnimationActive={active} maxBarSize={110}>
                    <LabelList
                      dataKey="usd"
                      position="top"
                      formatter={(v: React.ReactNode) => fmtUsd(Number(v))}
                      style={{ fill: "var(--primary-deep)", fontSize: 13, fontWeight: 700, fontFamily: "Fraunces" }}
                    />
                    {yearData.map((_, i) => (
                      <BarCell key={i} fill="#0D9488" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </RItem>

        <RItem className="center">
          <span className="fin__sum-note">
            {fmtSum(f.totalSum)} {lang === "ru" ? "сум · курс 12 000 сум = $1" : "so'm · kurs 12 000 so'm = $1"}
          </span>
        </RItem>
      </Reveal>
    </SlideShell>
  );
}
