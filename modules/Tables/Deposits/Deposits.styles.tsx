import styled, { css } from "styled-components";

import { Talbe, TalbeBody, TalbeHead, TalbeRow, Typography, Button } from "../../../components";

import Arrow from "../icons/arrow.svg";

export const OrderTable = styled(Talbe)`
  width: 1440px;
`;
export const OrderTalbeHead = styled(TalbeHead)`
  padding-left: 20px;
  padding-right: 20px;
`;
export const OrderTalbeRow = styled(TalbeRow)`
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;

export const OrderTalbeBody = styled(TalbeBody)`
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ID = styled(Typography)`
  max-width: 38px;
  width: 100%;
  margin-right: 49px;
`;

export const Createat = styled(Typography)`
  max-width: 75px;
  width: 100%;
  margin-right: 50px;
`;

export const AccountedDay = styled(Typography)`
  max-width: 93px;
  width: 100%;
  margin-right: 50px;
`;
export const AccountedMonth = styled(Typography)`
  max-width: 108px;
  width: 100%;
  margin-right: 50px;
`;
export const AccruedUSDT = styled(Typography)`
  max-width: 104px;
  width: 100%;
  margin-right: 54px;
`;
export const DepositedSWHT = styled(Typography)`
  max-width: 137px;
  width: 100%;
  margin-right: 83px;
`;
export const Controll = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonDeposit = styled(Button)`
  max-width: 190px;
`;
export const ButtonCollapsible = styled(Button)`
  display: inline-flex;
  align-items: center;
  max-width: auto;
  width: auto;
  margin-inline-start: auto;
`;

export const AccrualID = styled(Typography)``;
export const DateAccrual = styled(Typography)``;
export const AmountUSDT = styled(Typography)``;

export const CollapsibleTitle = styled(Typography)`
  margin-bottom: 10px;
`;
export const CollapsibleBox = styled.div``;
export const Collapsible = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  max-width: 808px;
  width: 100%;
  padding: 30px 70px 14px 70px;
  border-top: 1px solid #ccdffb;
`;

export const ArrowIcon = styled(Arrow)`
  flex-shrink: 0;
  margin-left: 7px;
`;
