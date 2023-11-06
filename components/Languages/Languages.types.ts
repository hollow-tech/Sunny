import { ReactNode } from "react";

export interface Language {
  icon: ReactNode;
  locale: string;
  label: string;
  id: number;
}

export interface LanguagesProps {
  languages: Language[];
  color?: string;
}

export interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  isOpen: boolean;
}
