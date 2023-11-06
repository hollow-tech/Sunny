import { HTMLAttributes } from "react";

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isError?: boolean;
}
