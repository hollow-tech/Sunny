import { HTMLAttributes } from "react";

export interface OutputCardProps extends HTMLAttributes<HTMLDivElement> {
  percent: string;
  outputTitle: string;
  commision: string;
}
