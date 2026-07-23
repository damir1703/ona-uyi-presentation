import StorySlide from "./StorySlide";
import { content } from "../data/content";
import type { SlideProps } from "./types";

const PHOTO_IDS = ["s_natalya", "s_aruzhan", "s_bashorat"];

interface Props extends SlideProps {
  index: number;
}

export default function FailureSlide({ index, ...props }: Props) {
  return (
    <StorySlide
      {...props}
      data={content.failCases[index]}
      photoId={PHOTO_IDS[index]}
      accent="#94A3B8"
      tagGrad="linear-gradient(135deg, #64748B, #475569)"
      variant="failure"
    />
  );
}
