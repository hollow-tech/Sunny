import { HTMLAttributes } from "react";

export interface BuySwhProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  currency: string;
  quantity: string;
  info: string;
}
