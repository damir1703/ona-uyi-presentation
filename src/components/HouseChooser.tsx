import { ArrowRight } from "lucide-react";
import { useApp } from "../context";
import logo from "../assets/logo.png";

export default function HouseChooser() {
  const { lang, setLang, setHouse } = useApp();
  const t = {
    ru: {
      tag: "Международный благотворительный фонд",
      prompt: "Выберите презентацию",
      tashkent: "Дом Ташкент",
      tashkentSub: "Дом №1 · с июня 2024",
      quvosoy: "Дом Кувасой",
      quvosoySub: "Дом №7 · Ферганская долина · с сентября 2025",
      open: "Открыть",
    },
    uz: {
      tag: "Xalqaro xayriya jamg'armasi",
      prompt: "Prezentatsiyani tanlang",
      tashkent: "Toshkent uyi",
      tashkentSub: "1-uy · 2024-yil iyundan",
      quvosoy: "Quvasoy uyi",
      quvosoySub: "7-uy · Farg'ona vodiysi · 2025-yil sentabrdan",
      open: "Ochish",
    },
  }[lang];

  return (
    <div className="chooser">
      <div className="chooser__lang">
        <button className={lang === "ru" ? "is-active" : ""} onClick={() => setLang("ru")}>RU</button>
        <button className={lang === "uz" ? "is-active" : ""} onClick={() => setLang("uz")}>UZ</button>
      </div>

      <div className="chooser__head">
        <img src={logo} alt="ONA UYI" className="chooser__logo" />
        <span className="chooser__tag">{t.tag}</span>
        <h1 className="chooser__title">ONA UYI</h1>
        <p className="chooser__prompt">{t.prompt}</p>
      </div>

      <div className="chooser__cards">
        <button className="chooser__card chooser__card--tashkent" onClick={() => setHouse("tashkent")}>
          <span className="chooser__card-num">01</span>
          <span className="chooser__card-name">{t.tashkent}</span>
          <span className="chooser__card-sub">{t.tashkentSub}</span>
          <span className="chooser__card-cta">{t.open} <ArrowRight size={18} /></span>
        </button>

        <button className="chooser__card chooser__card--quvosoy" onClick={() => setHouse("quvosoy")}>
          <span className="chooser__card-num">07</span>
          <span className="chooser__card-name">{t.quvosoy}</span>
          <span className="chooser__card-sub">{t.quvosoySub}</span>
          <span className="chooser__card-cta">{t.open} <ArrowRight size={18} /></span>
        </button>
      </div>
    </div>
  );
}
