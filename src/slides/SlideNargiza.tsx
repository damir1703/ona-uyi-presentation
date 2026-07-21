import StorySlide from "./StorySlide";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function SlideNargiza(props: SlideProps) {
  return (
    <StorySlide
      {...props}
      data={content.storyNargiza}
      photoId="s_nargiza"
      accent="#D97706"
      tagGrad="linear-gradient(135deg, #F59E0B, #D97706)"
    />
  );
}
