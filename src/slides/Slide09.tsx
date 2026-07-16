import StorySlide from "./StorySlide";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide09(props: SlideProps) {
  return (
    <StorySlide
      {...props}
      data={content.slide09}
      photoId="s09_portrait"
      accent="#D97706"
      tagGrad="linear-gradient(135deg, #F59E0B, #D97706)"
    />
  );
}
