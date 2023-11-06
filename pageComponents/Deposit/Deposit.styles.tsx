import styled from "styled-components";
import Wafe from "./icons/wafe.svg";
import WalletMoney from "./icons/wallet-money.svg";

import {
  CreateDeposit,
  CardInfo,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  DepositInfo,
  Typography,
} from "../../components";

export const WafeSVG = styled(Wafe)`
  position: fixed;
  z-index: 0;
`;

export const DepositTab = styled(Tab)``;
export const DepositTabs = styled(Tabs)`
  margin-bottom: 130px;
  @media ${({ theme }) => theme.device.laptopL} {
    margin-bottom: 60px;
  }
`;
export const DepositTabList = styled(TabList)`
  margin-bottom: 60px;
  @media ${({ theme }) => theme.device.laptopL} {
    margin-bottom: 30px;
  }
`;
export const DepositTabPanel = styled(TabPanel)``;

export const DepositStyled = styled.div`
  padding: 60px 0;
`;
export const DepositInner = styled.div`
  position: relative;
  z-index: 1;
`;

export const WrapperFlex = styled.div`
  display: flex;
  margin-bottom: 200px;
  margin-left: -24px;
  @media ${({ theme }) => theme.device.laptopL} {
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
`;

export const DepositCardInfo = styled(CardInfo)`
  align-self: flex-start;
  margin-left: 24px;

  @media ${({ theme }) => theme.device.laptopL} {
    width: calc(33.33% - 24px);
  }
`;

export const DepositCreate = styled(CreateDeposit)`
  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 100%;
    margin-left: 24px;
    margin-bottom: 24px;
  }
`;
export const InfoDeposit = styled(DepositInfo)``;
export const Text = styled(Typography)`
  display: flex;
  margin-bottom: 30px;
`;
export const Icon = styled(WalletMoney)`
  margin-right: 20px;
  flex-shrink: 0;
`;
