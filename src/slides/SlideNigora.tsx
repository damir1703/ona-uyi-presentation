import StorySlide from "./StorySlide";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function SlideNigora(props: SlideProps) {
  return (
    <StorySlide
      {...props}
      data={content.storyNigora}
      photoId="s_nigora"
      accent="#0D9488"
      tagGrad="linear-gradient(135deg, #14B8A6, #0D9488)"
    />
  );
}
