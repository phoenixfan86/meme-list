import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Meme = {
  readonly id: number;
  title: string;
  imageUrl: string;
  likes: number;
};
