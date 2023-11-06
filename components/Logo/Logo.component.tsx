import { forwardRef } from "react";
import { LogoProps } from "./Logo.types";
import { LogotypeWrapper, AsideLogotypeIcon, LogotypeIcon } from "./Logo.styles";

export const Logo = forwardRef<HTMLDivElement, LogoProps>(({ tag = "div", variants = "main", ...props }, ref) => {
  switch (variants) {
    case "main":
      return (
        <LogotypeWrapper ref={ref} as={tag} {...props}>
          <LogotypeIcon />
        </LogotypeWrapper>
      );

    case "aside":
      return (
        <LogotypeWrapper ref={ref} as={tag} {...props}>
          <AsideLogotypeIcon />
        </LogotypeWrapper>
      );
  }
});

Logo.displayName = "Logo";
