import { useTranslation } from "next-i18next";

import { SwitcherWrapper } from "../../../../components";
import { Replenishment as TableReplenishment } from "../../../../modules";

import {
  ReplenishmentStyled,
  ReplenishmentSwitcher,
  ReplenishmentSwitcherWrapper,
  SwticherLabel,
} from "./Replenishment.styles";

import { ReplenishmentProps } from "./Replenishment.types";

export const Replenishment: React.FC<ReplenishmentProps> = () => {
  const { t } = useTranslation("History");
  return (
    <ReplenishmentStyled>
      <ReplenishmentSwitcherWrapper>
        <SwitcherWrapper name="state">
          <ReplenishmentSwitcher value="all">
            <SwticherLabel variants="body1">{t("RadioButtonAll")}</SwticherLabel>
          </ReplenishmentSwitcher>
          <ReplenishmentSwitcher value="usdt">
            <SwticherLabel variants="body1">{t("RadioButtonUSDT")}</SwticherLabel>
          </ReplenishmentSwitcher>
          <ReplenishmentSwitcher value="swh">
            <SwticherLabel variants="body1">{t("RadioButtonSWH")}</SwticherLabel>
          </ReplenishmentSwitcher>
        </SwitcherWrapper>
      </ReplenishmentSwitcherWrapper>
      <TableReplenishment />
    </ReplenishmentStyled>
  );
};
