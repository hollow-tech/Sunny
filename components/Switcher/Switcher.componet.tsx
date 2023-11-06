import React, { ChangeEvent, useCallback, useState, memo } from "react";
import { Input, Label, Mark, Wrapper, MarkActive, animation } from "./Switcher.styles";
import { SwitcherProps, SwitcherWrapperProps } from "./Switcher.types";
import { AnimatePresence } from "framer-motion";
import { useIsMounted } from "../../hooks/useIsMounted";

export const Switcher: React.FC<SwitcherProps> = memo(({ children, className, checked, ...props }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }
  return (
    <Label className={className}>
      <Wrapper>
        <Input type="radio" checked={checked} {...props} />
        <Mark>
          <AnimatePresence>
            {checked && <MarkActive initial="hidden" animate="visible" exit="hidden" variants={animation} />}
          </AnimatePresence>
        </Mark>
      </Wrapper>
      {children}
    </Label>
  );
});

export const SwitcherWrapper: React.FC<SwitcherWrapperProps> = ({ children, defaultValue, name, onChange }) => {
  const [selected, setSelected] = useState<string>(defaultValue || "");

  const isRadioSelected = (value: string): boolean => {
    return value === selected;
  };

  const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelected(e.target.value);
    onChange && onChange(e);
  };

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      name,
      checked: isRadioSelected(child.props.value),
      onChange: handleRadioClick,
    });
  });
};

Switcher.displayName = "Switcher";
SwitcherWrapper.displayName = "SwitcherWrapper";
