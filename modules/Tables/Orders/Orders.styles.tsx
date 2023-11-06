import styled, { css } from "styled-components";

import { Talbe, TalbeBody, TalbeHead, TalbeRow, Typography, Button } from "../../../components";

import Sort from "../icons/sort.svg";

const sharedID = css`
  display: flex;
  margin-right: 50px;
  width: 100%;
  max-width: 68px;
`;
const sharedQueues = css`
  margin-right: 50px;
  width: 100%;
  max-width: 83px;
`;
const sharedCreateat = css`
  display: flex;
  margin-right: 50px;
  width: 100%;
  max-width: 87px;
`;
const sharedPrice = css`
  margin-right: 50px;
  width: 100%;
  max-width: 84px;
`;
const sharedAcquired = css`
  margin-right: 50px;
  width: 100%;
  max-width: 107px;
`;
const sharedRemaining = css`
  margin-right: 50px;
  width: 100%;
  max-width: 99px;
`;
const sharedSpent = css`
  margin-right: 50px;
  width: 100%;
  max-width: 88px;
`;
const sharedRemainder = css`
  margin-right: 50px;
  width: 100%;
  max-width: 63px;
`;
const sharedStatus = css`
  margin-right: 40px;
  width: 100%;
  max-width: 150px;
`;
const sharedControll = css``;

export const OrderTable = styled(Talbe)`
  width: 1440px;
`;
export const OrderTalbeHead = styled(TalbeHead)`
  padding-left: 20px;
  padding-right: 20px;
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 15px;
  }
`;
export const OrderTalbeRow = styled(TalbeRow)`
  padding-left: 20px;
  padding-right: 20px;
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 15px;
  }
`;
export const OrderTalbeBody = styled(TalbeBody)``;

export const ID = styled(Typography)`
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  ${sharedID};
`;
export const Queues = styled(Typography)`
  ${sharedQueues}
`;
export const Createat = styled(Typography)`
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  ${sharedCreateat}
`;
export const Price = styled(Typography)`
  ${sharedPrice}
`;
export const Acquired = styled(Typography)`
  ${sharedAcquired}
`;
export const Remaining = styled(Typography)`
  ${sharedRemaining}
`;
export const Spent = styled(Typography)`
  ${sharedSpent}
`;
export const Remainder = styled(Typography)`
  ${sharedRemainder}
`;
export const Status = styled(Typography)`
  ${sharedStatus}
`;
export const Controll = styled(Typography)`
  ${sharedControll}
`;
export const ButtonCancel = styled(Button)`
  padding: 8px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 12px;
  }
`;
export const SortIcon = styled(Sort)`
  flex-shrink: 0;
  margin-left: 5px;
  margin-top: 2px;
  width: 11px;
  height: 13px;
`;
