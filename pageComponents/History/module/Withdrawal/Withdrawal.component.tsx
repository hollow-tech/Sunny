import {
  WithdrawalStyled,
  WithdrawalSwitcher,
  WithdrawalSwitcherWrapper,
  SwticherLabel,
  WithdrawalText,
  ErrorWrapper,
  ErrorIcon,
  ErrorText,
} from "./Withdrawal.styles";
import { WithdrawalProps } from "./Withdrawal.types";
import { SwitcherWrapper } from "../../../../components";
import { Withdrawal as TableWithdrawal } from "../../../../modules";
import { useTranslation } from "next-i18next";

export const Withdrawal: React.FC<WithdrawalProps> = () => {
  const { t } = useTranslation("History");
  return (
    <WithdrawalStyled>
      <WithdrawalSwitcherWrapper>
        <SwitcherWrapper name="state">
          <WithdrawalSwitcher value="all">
            <SwticherLabel variants="body1">{t("RadioButtonAllOutputs")}</SwticherLabel>
          </WithdrawalSwitcher>
          <WithdrawalSwitcher value="usdt">
            <SwticherLabel variants="body1">{t("RadioButtonUSDT")}</SwticherLabel>
          </WithdrawalSwitcher>
          <WithdrawalSwitcher value="swh">
            <SwticherLabel variants="body1">{t("RadioButtonSWH")}</SwticherLabel>
          </WithdrawalSwitcher>
          <WithdrawalSwitcher value="btc">
            <SwticherLabel variants="body1">{t("RadioButtonBTC")}</SwticherLabel>
          </WithdrawalSwitcher>
        </SwitcherWrapper>
      </WithdrawalSwitcherWrapper>
      <TableWithdrawal />
      <ErrorWrapper>
        <ErrorIcon />
        <ErrorText variants="body1">{t("ErrorText")}</ErrorText>
      </ErrorWrapper>
      <WithdrawalText variants="body1">
      {t("WithdrawalText")}
      </WithdrawalText>
    </WithdrawalStyled>
  );
}
