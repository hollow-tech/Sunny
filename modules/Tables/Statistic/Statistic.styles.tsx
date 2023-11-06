import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Talbe, TalbeBody, TalbeHead, TalbeRow, Typography } from "../../../components";
import Sort from "../icons/sort.svg";

const sharedSorting = css`
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  display: flex;
  padding: 0px;
`;

export const StatisticTable = styled(Talbe)`
  width: 1440px;
`;
export const StatisticTalbeHead = styled(TalbeHead)`
  padding-left: 20px;
  padding-right: 20px;
`;
export const StatisticTalbeRow = styled(TalbeRow)`
  padding-left: 20px;
  padding-right: 20px;
  min-height: 120px;

  @media ${({ theme }) => theme.device.laptopL} {
    min-height: 70px;
  }
`;
export const StatisticTalbeBody = styled(TalbeBody)``;

export const DateEnd = styled(Typography)`
  ${sharedSorting};
  margin-right: 70px;
  width: 100%;
  max-width: 140px;
`;

export const ID = styled(Typography)`
  ${sharedSorting};
  margin-right: 69px;
  width: 100%;
  max-width: 68px;
`;

export const TXID = styled(Typography)`
  margin-right: 70px;
  width: 100%;
  max-width: 237px;
  word-wrap: break-word;
`;

export const Balance = styled(Typography)<{ bgColor?: string }>`
  ${sharedSorting};
  margin-right: 70px;
  width: 100%;
  max-width: 130px;
  ${({ bgColor }) =>
    bgColor &&
    `
    background-color: ${rgba(bgColor, 0.1)};
    border-radius: 10px;
    padding: 10px 20px;
  `}
`;

export const TransactionFee = styled(Typography)`
  ${sharedSorting};
  margin-right: 70px;
  width: 100%;
  max-width: 101px;
`;

export const CommissionType = styled(Typography)`
  margin-right: 70px;
  width: 100%;
  max-width: 102px;
`;

export const TransactionType = styled(Typography)`
  width: 100%;
  max-width: 110px;
`;

export const SortIcon = styled(Sort)`
  flex-shrink: 0;
  margin-left: 5px;
  margin-top: 2px;
  width: 11px;
  height: 13px;
`;

export const CurrencyColor = styled.span`
  color: ${({ color }) => color};
`;
