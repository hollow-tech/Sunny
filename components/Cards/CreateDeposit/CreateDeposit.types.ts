import { HTMLAttributes } from "react";
export interface CreateDepositProps extends HTMLAttributes<HTMLDivElement> {
  handleClick: () => void;
}
