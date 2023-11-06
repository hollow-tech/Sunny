import {
  DepositCard,
  DepositCardNumber,
  DepositCardText,
  DepositinfoStyled,
  DepositinfoTitle,
  DepositinfoInner,
  SWH,
} from "./DepositInfo.styles";
import { DepositInfoProps } from "./DepositInfo.types";
import { useTranslation } from "next-i18next";

export const DepositInfo: React.FC<DepositInfoProps> = () => {
  const { t } = useTranslation("Deposit");
  return (
    <DepositinfoStyled>
      <DepositinfoTitle variants="headline2">
        {t("DepositCardTitle")}
      </DepositinfoTitle>
      <DepositinfoInner>
        <DepositCard>
          <DepositCardNumber variants="headline3">01</DepositCardNumber>
          <DepositCardText dangerouslySetInnerHTML={{ __html: t("DepositCardText1") }} color="#313131" variants="body1">
          </DepositCardText>
        </DepositCard>

        <DepositCard>
          <DepositCardNumber variants="headline3">03</DepositCardNumber>
          <DepositCardText color="#313131" variants="body1">
            {t("DepositCardText3")}
          </DepositCardText>
        </DepositCard>

        <DepositCard>
          <DepositCardNumber variants="headline3">05</DepositCardNumber>
          <DepositCardText color="#313131" variants="body1">
            {t("DepositCardText5")}
          </DepositCardText>
        </DepositCard>

        <DepositCard>
          <DepositCardNumber variants="headline3">02</DepositCardNumber>
          <DepositCardText color="#313131" variants="body1">
            {t("DepositCardText2")}
          </DepositCardText>
        </DepositCard>

        <DepositCard>
          <DepositCardNumber variants="headline3">04</DepositCardNumber>
          <DepositCardText color="#313131" variants="body1">
            {t("DepositCardText4")}
          </DepositCardText>
        </DepositCard>

        <DepositCard>
          <DepositCardNumber variants="headline3">06</DepositCardNumber>
          <DepositCardText dangerouslySetInnerHTML={{ __html: t("DepositCardText6") }} color="#313131" variants="body1"> 
          </DepositCardText>
        </DepositCard>
      </DepositinfoInner>
    </DepositinfoStyled>
  );
};
