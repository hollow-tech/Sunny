import { Container } from "../../components";
import {
  WithdrawalStyled,
  WithdrawalInner,
  WithdrawalPaper,
  WithdrawalWrapper,
  WithdrawalTitle,
  WithdrawalCard,
  WithdrawalAvailable,
  WithdrawalCommission,
  WithdrawalBlock,
  WithdrawalCounter,
  WithdrawalCheckbox,
  WithdrawalDevided,
  WithdrawalTotle,
  WithdrawalInpit,
  ButtonsWrapper,
  ButtonBack,
  ButtonNext,
} from "./Withdrawal.styles";
import { WithdrawalProps } from "./Withdrawal.types";

import { Checkbox } from "../../components";
import { useTranslation } from "next-i18next";
export const Withdrawal: React.FC<WithdrawalProps> = () => {
  const { t } = useTranslation("Withdrawal");
  return (
    <WithdrawalStyled>
      <Container variants="auth">
        <WithdrawalInner>
          <WithdrawalPaper>
            <WithdrawalWrapper>
              <WithdrawalTitle color="#fff" variants="headline2">
                {t("WithdrawalTitle")} USDT
              </WithdrawalTitle>
              <WithdrawalCard>
                <WithdrawalAvailable color="#fff" variants="headline3">
                {t("WithdrawalAvailable")} 230 USDT
                </WithdrawalAvailable>
                <WithdrawalCommission color="#fff" variants="headline3">
                  <span>{t("WithdrawalCommissionWithout")}</span> 10 USDT
                </WithdrawalCommission>
                <WithdrawalBlock as="div" color="#fff" variants="headline3">
                {t("WithdrawalBlock")} <WithdrawalCounter /> USDT
                </WithdrawalBlock>
                <Checkbox type="checkbox">
                  <WithdrawalCheckbox color="#fff" variants="body1">
                  {t("WithdrawalCheckbox")}
                  </WithdrawalCheckbox>
                </Checkbox>

                <WithdrawalCommission color="#fff" variants="headline3">
                  <span>{t("WithdrawalCommission")}</span> 2 USDT
                </WithdrawalCommission>
                <WithdrawalDevided />

                <WithdrawalTotle color="#fff" variants="headline3">
                {t("WithdrawalTotle")} 9 USDT
                </WithdrawalTotle>
              </WithdrawalCard>
              <WithdrawalInpit placeholder={t("WithdrawalInpitPlaceholder")} />
              <ButtonsWrapper>
                <ButtonBack color="#313131" variants="text">
                {t("ButtonBack")}
                </ButtonBack>
                <ButtonNext color="#00439F" variants="contained">
                {t("ButtonNext")}
                </ButtonNext>
              </ButtonsWrapper>
            </WithdrawalWrapper>
          </WithdrawalPaper>
        </WithdrawalInner>
      </Container>
    </WithdrawalStyled>
  );
};
