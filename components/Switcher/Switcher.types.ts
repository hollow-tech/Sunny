import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import { Switcher } from "./Switcher.componet";
export interface SwitcherProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {}

export interface SwitcherWrapperProps {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  children: any;
}
