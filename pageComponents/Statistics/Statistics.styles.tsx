import styled from "styled-components";

import { Tab, Tabs, TabList, TabPanel, Chart } from "../../components";

export const StatisticsStyled = styled.div`
  padding: 60px 0;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 40px 0;
  }
`;

export const StatisticsInner = styled.div``;

export const StatisticTabs = styled(Tabs)``;

export const StatisticTab = styled(Tab)`
  @media (max-width: 1880px) {
    font-size: 24px;
    padding-inline-end: 20px;
  }
`;

export const StatisticTabList = styled(TabList)`
  margin-block-end: 60px;
  @media ${({ theme }) => theme.device.laptopL} {
    margin-block-end: 30px;
  }
`;

export const StatisticTabPanel = styled(TabPanel)``;

export const USDT = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const SWH = styled.span`
  color: ${({ theme }) => theme.placeholderColor};
`;
