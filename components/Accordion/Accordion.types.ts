import { HTMLAttributes } from "react";
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: string;
  open?: boolean;
}
