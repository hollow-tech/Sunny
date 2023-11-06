import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "styled-components";
import {
  CreateDepositButton,
  CreateDepositCounter,
  CreateDepositTitle,
  CreateDepositStyled,
  CreateDepositInner,
  WalletSvg,
  CreateDepositLabel,
  CreateDepositValue,
  CreateDepositWrapper,
  FlexWrapper,
  SWH,
} from "./CreateDeposit.styles";

import { CreateDepositProps } from "./CreateDeposit.types";
export const CreateDeposit: React.FC<CreateDepositProps> = ({ handleClick, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <CreateDepositStyled {...props}>
      <Image quality={100} src="/content/create-deposit/background.jpg" layout="fill" objectFit="cover" />
      <CreateDepositInner>
        <WalletSvg />
        <CreateDepositTitle color={theme.white} as="div" variants="headline3">
          Доступно
        </CreateDepositTitle>
        <CreateDepositWrapper variants="headline2">
          <CreateDepositLabel>SWH</CreateDepositLabel>
          <CreateDepositValue>14568,78</CreateDepositValue>
        </CreateDepositWrapper>
        <FlexWrapper color={theme.white} variants="headline2">
          Положить в депозит <CreateDepositCounter /> <SWH>SWH</SWH>
        </FlexWrapper>
        <CreateDepositButton onClick={handleClick} variants="contained" color={theme.placeholderColor}>
          Создать депозит
        </CreateDepositButton>
      </CreateDepositInner>
    </CreateDepositStyled>
  );
};
