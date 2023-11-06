import styled from "styled-components";
import {
  Wallet,
  CardInfo,
  BuySwh,
  SwhPrice,
  Typography,
  CreateOrder,
  Talbe,
  TalbeBody,
  TalbeHead,
  TalbeRow,
} from "../../components";

import Buy from "./icons/Buy.svg";
import Wafe from "./icons/wafe.svg";

export const BalanceStyled = styled.div`
  padding: 40px 0 150px;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 40px 0 60px;
  }
`;

export const BuySVG = styled(Buy)`
  margin-right: 20px;
`;

export const WafeSVG = styled(Wafe)`
  position: fixed;
  z-index: 0;
`;

export const BalanceInner = styled.div`
  position: relative;
  z-index: 1;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 120px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-bottom: 60px;
  }
`;

export const BalanceFlexWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 120px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-bottom: 60px;
  }
`;

export const BalanceWalletUSDT = styled(Wallet)`
  width: 100%;
`;

export const BalanceWalletSWH = styled(Wallet)`
  width: 100%;
`;

export const BalanceCardInfo = styled(CardInfo)`
  margin-left: 20px;
`;

export const BalanceBuySwh = styled(BuySwh)`
  width: calc(50% - 20px);
  margin-inline-end: 20px;
`;

export const BalanceSwhPrice = styled(SwhPrice)`
  width: 50%;
`;

export const BalanceWrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

export const BalanceBuyTitle = styled(Typography)``;

export const BalanceSWH = styled.span`
  color: ${({ theme }) => theme.placeholderColor};
`;

export const BalanceBuyText = styled(Typography)`
  max-width: 995px;
  width: 100%;
  margin: 30px 0;
`;

export const BalanceCreateOrder = styled(CreateOrder)`
  align-self: flex-start;

  width: calc(50% - 20px);
  margin-inline-end: 20px;
`;

export const TableWrapper = styled.div`
  width: 50%;
`;

export const Wrapper = styled.div``;

export const CreateOrderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const TableOrder = styled(Talbe)`
  max-width: 705px;
`;

export const TableOrderBody = styled(TalbeBody)`
  max-height: 257px;
  overflow: auto;
  overflow-x: hidden;
`;

export const TableOrderHead = styled(TalbeHead)`
  align-items: center;
`;

export const TableOrderRow = styled(TalbeRow)``;

export const TableOrderHeadNumberOrder = styled(Typography)`
  max-width: 198px;
  width: 100%;
  color: #fff;
  margin-right: 60px;
`;
export const TableOrderHeadSWHT = styled(Typography)`
  max-width: 230px;
  width: 100%;
  color: #fff;
`;

export const TableOrderBodyNumberOrder = styled(Typography)`
  max-width: 198px;
  width: 100%;
  margin-right: 60px;
  text-align: center;
`;

export const TableOrderBodySWHT = styled(Typography)`
  max-width: 230px;
  width: 100%;
  text-align: center;
`;

export const TableOrderTitle = styled(Typography)`
  text-align: right;
  margin-bottom: 20px;
`;
export const TableOrderDesc = styled(Typography)`
  margin-top: 20px;
  text-align: right;
  span {
    color: ${({ theme }) => theme.error};
  }
`;

export const USDT = styled.span`
  color: ${({ theme }) => theme.lightPrimary};
`;
export const SWH = styled.span`
  color: ${({ theme }) => theme.placeholderColor};
`;
