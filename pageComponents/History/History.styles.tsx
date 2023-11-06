import styled from "styled-components";
import { Tab, TabList, TabPanel, Tabs } from "../../components";

export const HistoryStyled = styled.div`
  padding: 60px 0;
`;
export const HistoryInner = styled.div``;
export const HistoryTab = styled(Tab)``;
export const HistoryTabs = styled(Tabs)``;
export const HistoryTabList = styled(TabList)`
  margin-block-end: 50px;
  @media ${({ theme }) => theme.device.laptopL} {
    margin-block-end: 20px;
  }
`;
export const HistoryTabPanel = styled(TabPanel)``;
