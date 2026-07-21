import SlideShell from "../components/SlideShell";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { finance, financeDetail } from "../data/finance";
import type { House, FinCategory } from "../data/finance";
import type { SlideProps } from "./types";

interface Props extends SlideProps {
  house: House;
}

const fmtUsd = (n: number) => "$" + Math.round(n).toLocaleString("ru-RU");

export default function FinanceDetailSlide({ n, total, active, house }: Props) {
  const { lang } = useApp();
  const f = finance[house];
  const groups = financeDetail[house];
  const catBy = (key: string) => f.categories.find((c) => c.key === key) as FinCategory;
  const houseName = house === "tashkent" ? { ru: "Дом Ташкент", uz: "Toshkent uyi" } : { ru: "Дом Кувасой", uz: "Quvasoy uyi" };

  return (
    <SlideShell n={n} total={total} className="fdet">
      <Reveal active={active} className="fdet__wrap">
        <RItem className="center">
          <h2 className="section-title">{lang === "ru" ? "Детальный бюджет" : "Batafsil byudjet"}</h2>
          <span className="badge-outline fin__period">
            {houseName[lang]} · {lang === "ru" ? "всего" : "jami"} {fmtUsd(f.totalUsd)}
          </span>
        </RItem>

        <RItem className="fdet__cols">
          {groups.map((g) => {
            const cat = catBy(g.catKey);
            const maxItem = Math.max(...g.items.map((i) => i.usd));
            const pct = Math.round((cat.usd / f.totalUsd) * 100);
            return (
              <div className="fdet__col" key={g.catKey}>
                <div className="fdet__col-head" style={{ borderColor: cat.color }}>
                  <span className="fdet__col-dot" style={{ background: cat.color }} />
                  <span className="fdet__col-name">{lang === "ru" ? cat.ru : cat.uz}</span>
                  <span className="fdet__col-total">
                    {fmtUsd(cat.usd)} <em>{pct}%</em>
                  </span>
                </div>
                <ul className="fdet__items">
                  {g.items.map((it, i) => (
                    <li key={i}>
                      <span className="fdet__item-row">
                        <span className="fdet__item-name">{lang === "ru" ? it.ru : it.uz}</span>
                        <span className="fdet__item-usd">{fmtUsd(it.usd)}</span>
                      </span>
                      <span className="fdet__item-track">
                        <span
                          className="fdet__item-fill"
                          style={{ width: active ? `${(it.usd / maxItem) * 100}%` : 0, background: cat.color }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </RItem>

        <RItem className="center">
          <span className="fin__sum-note">
            {lang === "ru"
              ? "Все суммы в долларах США · курс 12 000 сум = $1"
              : "Barcha summalar AQSh dollarida · kurs 12 000 so'm = $1"}
          </span>
        </RItem>
      </Reveal>
    </SlideShell>
  );
}
