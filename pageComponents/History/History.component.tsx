import {
  HistoryStyled,
  HistoryTab,
  HistoryTabList,
  HistoryTabPanel,
  HistoryTabs,
  HistoryInner,
} from "./History.styles";
import { Replenishment, Withdrawal } from "./module";
import { HistoryProps } from "./History.types";
import { Container } from "../../components";
import { ClosedOrders, Accruals } from "../../modules";
import { useTranslation } from "next-i18next";

export const History: React.FC<HistoryProps> = () => {
  const { t } = useTranslation("History");
  return (
    <HistoryStyled>
      <Container variants="auth">
        <HistoryInner>
          <HistoryTabs>
            <HistoryTabList>
              <HistoryTab>{t("HistoryTabOne")}</HistoryTab>
              <HistoryTab>{t("HistoryTabTwo")}</HistoryTab>
              <HistoryTab>{t("HistoryTabThree")}</HistoryTab>
              <HistoryTab>{t("HistoryTabFour")}</HistoryTab>
            </HistoryTabList>
            <HistoryTabPanel>
              <Replenishment />
            </HistoryTabPanel>
            <HistoryTabPanel>
              <Withdrawal />
            </HistoryTabPanel>
            <HistoryTabPanel>
              <ClosedOrders />
            </HistoryTabPanel>
            <HistoryTabPanel>
              <Accruals />
            </HistoryTabPanel>
          </HistoryTabs>
        </HistoryInner>
      </Container>
    </HistoryStyled>
  );
};
