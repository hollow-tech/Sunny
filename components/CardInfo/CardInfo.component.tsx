import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  CardInfoBalance,
  CardInfoStyled,
  CardInfoStatus,
  CardInfoWrapper,
  CardInfoСurrency,
  CardInfoButton,
  CardInfoMark,
} from "./CardInfo.styles";
import { CardInfoProps } from "./CardInfo.types";

export const CardInfo: React.VFC<CardInfoProps> = ({
  colorСurrency = "#FFD004",
  markColor = "#52A90D",
  title,
  currency,
  balance,
  btnLabel,
  href,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  return (
    <CardInfoStyled {...props}>
      <CardInfoMark color={markColor} />
      <CardInfoStatus variants="headline3">{title}</CardInfoStatus>
      <CardInfoWrapper>
        <CardInfoСurrency color={colorСurrency} variants="headline2">
          {currency}
        </CardInfoСurrency>
        <CardInfoBalance variants="headline2">{balance}</CardInfoBalance>
      </CardInfoWrapper>
      {href && (
        <Link href={href} passHref>
          <CardInfoButton as="a" variants="contained" color={theme.lightPrimary}>
            {btnLabel}
          </CardInfoButton>
        </Link>
      )}
    </CardInfoStyled>
  );
};
