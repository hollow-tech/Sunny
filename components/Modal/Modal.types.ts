import { ReactNode } from "react";

export interface ModalProps {
  defaultOpened?: boolean;
  children: ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}
