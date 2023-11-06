import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Image from "next/image";

import {
  WalletBalance,
  WalletButton,
  WalletIcon,
  WalletStyled,
  WalletTitle,
  WalletWrapper,
  WalletСurrency,
  WalletInner,
} from "./Wallet.styles";
import { WalletProps } from "./Wallet.types";

export const Wallet: React.VFC<WalletProps> = ({
  colorСurrency = "#32a5f9",
  buttonLabel,
  currency,
  title,
  balance,
  handleBtnClicl,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  return (
    <WalletStyled {...props}>
      <Image quality={99} src="/content/wallet/wallet-bg.jpg" layout="fill" objectFit="cover" />
      <WalletIcon />
      <WalletInner>
        <WalletTitle variants="headline3">{title}</WalletTitle>
        <WalletWrapper>
          <WalletСurrency color={colorСurrency} variants="headline2">
            {currency}
          </WalletСurrency>
          <WalletBalance variants="headline2">{balance}</WalletBalance>
        </WalletWrapper>
        <WalletButton onClick={handleBtnClicl} color={theme.white} variants="contained">
          {`+ ${buttonLabel}`}
        </WalletButton>
      </WalletInner>
    </WalletStyled>
  );
};
