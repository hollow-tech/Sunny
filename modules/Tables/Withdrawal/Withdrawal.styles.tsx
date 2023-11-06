import styled, { css } from "styled-components";
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

export const WithdrawalTable = styled(Talbe)`
  width: 1440px;
`;

export const WithdrawalTalbeHead = styled(TalbeHead)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const WithdrawalTalbeRow = styled(TalbeRow)`
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;

export const WithdrawalTalbeBody = styled(TalbeBody)``;

export const ID = styled(Typography)`
  ${sharedSorting};
  margin-right: 55px;
  width: 100%;
  max-width: 68px;
`;

export const TXID = styled(Typography)`
  margin-right: 34px;
  width: 100%;
  max-width: 156px;
  word-wrap: break-word;
`;

export const ApplicationDate = styled(Typography)`
  ${sharedSorting};
  margin-right: 63px;
  width: 100%;
  max-width: 65px;
`;

export const ClosingDate = styled(Typography)`
  ${sharedSorting};
  margin-right: 55px;
  width: 100%;
  max-width: 86px;
`;

export const Currency = styled(Typography)`
  ${sharedSorting};
  margin-right: 55px;
  width: 100%;
  max-width: 65px;
`;

export const Sum = styled(Typography)`
  ${sharedSorting};
  margin-right: 55px;
  width: 100%;
  max-width: 65px;
`;

export const Commission = styled(Typography)`
  margin-right: 55px;
  width: 100%;
  max-width: 73px;
`;

export const CommissionCurrency = styled(Typography)`
  margin-right: 55px;
  width: 100%;
  max-width: 73px;
`;

export const CommissionType = styled(Typography)`
  margin-right: 55px;
  width: 100%;
  max-width: 84px;
`;

export const Status = styled(Typography)`
  ${sharedSorting};
  width: 100%;
  max-width: 130px;
`;

export const SortIcon = styled(Sort)`
  flex-shrink: 0;
  margin-left: 5px;
  margin-top: 2px;
  width: 11px;
  height: 13px;
`;
