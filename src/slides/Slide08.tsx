import StorySlide from "./StorySlide";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide08(props: SlideProps) {
  return (
    <StorySlide
      {...props}
      data={content.slide08}
      photoId="s08_portrait"
      accent="#10B981"
      tagGrad="linear-gradient(135deg, #10B981, #065F46)"
    />
  );
}
