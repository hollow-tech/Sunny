import { HTMLAttributes } from "react";

export interface CreateOrderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  currency: string;
  totalText: string;
  totalCurrency: string;
  total: string;
  btnLabel: string;
  handleClick: () => void;
}
