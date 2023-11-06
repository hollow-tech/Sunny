import { HTMLAttributes, ReactNode } from "react";

export interface ModalConfirmProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string | ReactNode;
  text?: string | ReactNode;
  primaryButtonText?: string | ReactNode;
  primaryHandleClick?: () => void;

  seconderyButtonText?: string | ReactNode;
  seconderyHandleClick?: () => void;
}
