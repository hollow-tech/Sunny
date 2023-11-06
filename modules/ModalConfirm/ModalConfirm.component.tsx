import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  ModalConfirmDescription,
  ModalConfirmStyled,
  ModalConfirmTitle,
  ModalConfirmWrapperButtons,
  ModalConfirmPrimary,
  ModalConfirmSecondery,
} from "./ModalConfirm.styles";

import { ModalConfirmProps } from "./ModalConfirm.type";

export const ModalConfirm: React.FC<ModalConfirmProps> = ({
  title,
  text,
  primaryButtonText,
  seconderyButtonText,
  primaryHandleClick,
  seconderyHandleClick,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  return (
    <ModalConfirmStyled {...props}>
      <ModalConfirmTitle variants="headline2">{title}</ModalConfirmTitle>
      <ModalConfirmDescription variants="body1">{text}</ModalConfirmDescription>

      <ModalConfirmWrapperButtons>
        {primaryHandleClick && (
          <ModalConfirmPrimary onClick={primaryHandleClick} color={theme.primary} variants="contained">
            {primaryButtonText}
          </ModalConfirmPrimary>
        )}

        {seconderyHandleClick && (
          <ModalConfirmSecondery onClick={seconderyHandleClick} color={theme.primary} variants="outlined">
            {seconderyButtonText}
          </ModalConfirmSecondery>
        )}
      </ModalConfirmWrapperButtons>
    </ModalConfirmStyled>
  );
};
