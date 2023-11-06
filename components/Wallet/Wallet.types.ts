import { HTMLAttributes } from "react";

export interface WalletProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  currency?: string;
  buttonLabel?: string;
  colorСurrency?: string;
  balance?: string;
  handleBtnClicl: () => void;
}
