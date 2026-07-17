import { Download, Loader2 } from "lucide-react";
import { useApp } from "../context";
import { content } from "../data/content";
import logo from "../assets/logo.png";

interface Props {
  onExport: () => void;
  exporting: boolean;
}

export default function Navbar({ onExport, exporting }: Props) {
  const { lang, setLang } = useApp();
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <img className="navbar__logo-img" src={logo} alt="ONA UYI" />
        <span className="navbar__logo">ONA UYI</span>
      </div>

      <div className="navbar__actions">
        <div className="lang-toggle" role="group" aria-label="Язык">
          <button
            className={lang === "ru" ? "is-active" : ""}
            onClick={() => setLang("ru")}
            aria-pressed={lang === "ru"}
          >
            RU
          </button>
          <button
            className={lang === "uz" ? "is-active" : ""}
            onClick={() => setLang("uz")}
            aria-pressed={lang === "uz"}
          >
            UZ
          </button>
        </div>

        <button className="pdf-btn" onClick={onExport} disabled={exporting}>
          {exporting ? <Loader2 size={16} className="spin" /> : <Download size={16} />}
          <span>{content.meta.pdf[lang]}</span>
        </button>
      </div>
    </header>
  );
}
