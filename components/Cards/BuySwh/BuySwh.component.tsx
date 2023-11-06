import { BuySWHStyled, BuySWHTInfo, BuySWHTNumber, BuySWHTitle, InfoIcon } from "./BuySwh.styles";
import { BuySwhProps } from "./BuySwh.types";

export const BuySwh: React.VFC<BuySwhProps> = ({ currency, info, quantity, title, ...props }) => {
  return (
    <BuySWHStyled {...props}>
      <BuySWHTitle variants="headline3">
        {title} <span>{currency}</span>
      </BuySWHTitle>
      <BuySWHTNumber variants="headline2">{quantity}</BuySWHTNumber>
      <BuySWHTInfo variants="body1">
        <InfoIcon />
        <span>{info}</span>
      </BuySWHTInfo>
    </BuySWHStyled>
  );
};
