import StorySlide from "./StorySlide";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function SlideMahliyo(props: SlideProps) {
  return (
    <StorySlide
      {...props}
      data={content.storyMahliyo}
      photoId="s_mahliyo"
      accent="#10B981"
      tagGrad="linear-gradient(135deg, #10B981, #065F46)"
    />
  );
}
