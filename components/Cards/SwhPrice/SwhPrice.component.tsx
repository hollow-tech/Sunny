import { SwhPriceStyled, SwhPriceTInfo, SwhPriceTNumber, SwhPriceTitle, InfoIcon, Wrapper } from "./SwhPrice.styles";
import { SwhPriceProps } from "./SwhPrice.types";

export const SwhPrice: React.FC<SwhPriceProps> = ({ title, rate, info, ...props }) => {
  return (
    <SwhPriceStyled {...props}>
      <SwhPriceTitle variants="headline3">{title}</SwhPriceTitle>
      <SwhPriceTNumber variants="headline2">{rate}</SwhPriceTNumber>
      <Wrapper>
        <InfoIcon />
        <SwhPriceTInfo variants="body1">{info}</SwhPriceTInfo>
      </Wrapper>
    </SwhPriceStyled>
  );
};
