import { CheckCircle2, AlertTriangle } from "lucide-react";
import SlideShell from "../components/SlideShell";
import PhotoUpload from "../components/PhotoUpload";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import type { SlideProps } from "./types";
import type { Lang } from "../data/content";

type LS = Record<Lang, string>;
export interface StoryData {
  tag: LS;
  name: string;
  caption: LS;
  situationTitle: LS;
  situation: LS;
  actionTitle: LS;
  action: LS;
  resultTitle: LS;
  result: LS;
}

interface Props extends SlideProps {
  data: StoryData;
  photoId: string;
  accent: string;
  tagGrad: string;
  variant?: "success" | "failure";
}

export default function StorySlide({
  n, total, active, data, photoId, accent, tagGrad, variant = "success",
}: Props) {
  const { lang } = useApp();
  const fail = variant === "failure";
  const titleColor = fail ? "#FCA5A5" : "#34D399";
  const midCard = fail ? "linear-gradient(135deg, #B45309, #92400E)" : "linear-gradient(135deg, #065F46, #0D9488)";
  const lastCard = fail ? "linear-gradient(135deg, #475569, #334155)" : "linear-gradient(135deg, #10B981, #34D399)";

  return (
    <SlideShell n={n} total={total} className="story">
      <div className="story__grid">
        <Reveal active={active} className="story__left">
          <RItem>
            <span className="tag" style={{ background: tagGrad }}>
              {data.tag[lang]}
            </span>
          </RItem>
          <RItem>
            <h2 className="story__name">{data.name}</h2>
          </RItem>
          <RItem>
            <div className="story__photo">
              <PhotoUpload id={photoId} shape="circle" ring={accent} />
            </div>
          </RItem>
          <RItem>
            <p className="story__caption">{data.caption[lang]}</p>
          </RItem>
        </Reveal>

        <Reveal active={active} className="story__cards">
          <RItem className="story__card story__card--dark">
            <h4 style={{ color: titleColor }}>{data.situationTitle[lang]}</h4>
            <span className="story__divider" />
            <p>{data.situation[lang]}</p>
          </RItem>
          <RItem className="story__card" style={{ background: midCard }}>
            <h4>{data.actionTitle[lang]}</h4>
            <span className="story__divider story__divider--light" />
            <p>{data.action[lang]}</p>
          </RItem>
          <RItem className="story__card story__card--result" style={{ background: lastCard }}>
            {fail ? (
              <AlertTriangle className="story__check" size={24} />
            ) : (
              <CheckCircle2 className="story__check" size={24} />
            )}
            <h4>{data.resultTitle[lang]}</h4>
            <span className="story__divider story__divider--light" />
            <p>{data.result[lang]}</p>
          </RItem>
        </Reveal>
      </div>
    </SlideShell>
  );
}
