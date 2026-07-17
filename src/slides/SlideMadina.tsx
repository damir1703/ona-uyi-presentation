import StorySlide from "./StorySlide";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function SlideMadina(props: SlideProps) {
  return (
    <StorySlide
      {...props}
      data={content.slideMadina}
      photoId="s_madina"
      accent="#0D9488"
      tagGrad="linear-gradient(135deg, #14B8A6, #0D9488)"
    />
  );
}
