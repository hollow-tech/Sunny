import { Container } from "../../components";
import {
  StatisticTab,
  StatisticTabList,
  StatisticTabPanel,
  StatisticTabs,
  StatisticsInner,
  StatisticsStyled,
  SWH,
  USDT,
} from "./Statistics.styles";
import { StatisticsProps } from "./Statistics.types";
import { useTranslation } from "next-i18next";
import { StatisticUsdt } from "./module";

export const Statistics: React.FC<StatisticsProps> = () => {
  const { t } = useTranslation("Statistics");
  return (
    <StatisticsStyled>
      <Container variants="auth">
        <StatisticsInner>
          <StatisticTabs>
            <StatisticTabList>
              <StatisticTab>
                {t("StatisticTab")} <USDT>USDT</USDT>
              </StatisticTab>
              <StatisticTab>
              {t("StatisticTab")} <SWH>SWH</SWH>
              </StatisticTab>
              <StatisticTab>{t("StatisticTab")} BTC</StatisticTab>
            </StatisticTabList>
            <StatisticTabPanel>
              <StatisticUsdt />
            </StatisticTabPanel>
            <StatisticTabPanel>
              <StatisticUsdt />
            </StatisticTabPanel>
            <StatisticTabPanel>
              <StatisticUsdt />
            </StatisticTabPanel>
          </StatisticTabs>
        </StatisticsInner>
      </Container>
    </StatisticsStyled>
  );
};
