import { StatisticChart, StatisticUSDTStyled } from "./StatisticUsdt.styles";
import { StatisticUsdtProps } from "./StatisticUsdt.types";
import { Statistic as TableStatistic } from "../../../../modules";
export const StatisticUsdt: React.FC<StatisticUsdtProps> = () => {
  return (
    <StatisticUSDTStyled>
      <StatisticChart />
      <TableStatistic />
    </StatisticUSDTStyled>
  );
};
