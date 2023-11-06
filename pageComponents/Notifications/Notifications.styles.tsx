import styled from "styled-components";

import { Tab, Tabs, TabList, TabPanel } from "../../components";

export const NotificationsStyled = styled.div`
  padding: 60px 0;
`;
export const NotificationsInner = styled.div``;

export const NotificationsTab = styled(Tab)``;
export const NotificationsTabs = styled(Tabs)``;
export const NotificationsTabList = styled(TabList)`
  margin-bottom: 70px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-bottom: 30px;
  }
`;
export const NotificationsTabPanel = styled(TabPanel)``;
