import React, { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useIsMounted } from "../../hooks/useIsMounted";

import {
  AccrdionBody,
  AccrdionHead,
  AccrdionStyled,
  bodyAnimation,
  AccrdionTitle,
  Content,
  Icon,
} from "./Accordion.styles";

import { AccordionProps } from "./Accordion.types";

export const Accordion: React.FC<AccordionProps> = ({ title, children, open, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open || false);
  const isMounted = useIsMounted();

  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  if (!isMounted) {
    return null;
  }

  return (
    <AccrdionStyled {...props}>
      <AccrdionHead onClick={handleToggle}>
        <AccrdionTitle variants="headline2">{title}</AccrdionTitle>
        <Icon>{isOpen ? "-" : "+"}</Icon>
      </AccrdionHead>
      <AnimatePresence initial={false}>
        {isOpen && (
          <AccrdionBody
            exit="hidden"
            animate="visible"
            initial="hidden"
            variants={bodyAnimation}
            transition={{
              duration: 1,
            }}
          >
            <Content variants="body1">{children}</Content>
          </AccrdionBody>
        )}
      </AnimatePresence>
    </AccrdionStyled>
  );
};
