import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Image from "next/image";

import {
  CreateOrderButton,
  CreateOrderCounter,
  CreateOrderHead,
  CreateOrderStyled,
  CreateOrderValue,
  CreateOrderBody,
  CreateOrderLabel,
  CreateOrderInner,
  USDT,
} from "./CreateOrder.styles";

import { CreateOrderProps } from "./CreateOrder.types";

export const CreateOrder: React.VFC<CreateOrderProps> = ({
  currency,
  title,
  total,
  totalCurrency,
  totalText,
  btnLabel,
  handleClick,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  return (
    <CreateOrderStyled {...props}>
      <Image src="/content/create-order/background.jpg" layout="fill" objectFit="cover" />
      <CreateOrderInner>
        <CreateOrderHead as="div" variants="headline2">
          {title}
          <CreateOrderCounter />
          {currency}
        </CreateOrderHead>
        <CreateOrderBody>
          <CreateOrderLabel variants="headline3">{totalText}</CreateOrderLabel>
          <CreateOrderValue variants="headline2">
            {total} <USDT>{totalCurrency}</USDT>
          </CreateOrderValue>
        </CreateOrderBody>
        <CreateOrderButton onClick={handleClick} variants="contained" color={theme.primary}>
          {btnLabel}
        </CreateOrderButton>
      </CreateOrderInner>
    </CreateOrderStyled>
  );
};
