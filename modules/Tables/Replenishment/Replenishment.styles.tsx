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

export const ReplenishmentTable = styled(Talbe)`
  width: 1440px;
`;
export const ReplenishmentTalbeHead = styled(TalbeHead)`
  padding-left: 20px;
  padding-right: 20px;
`;
export const ReplenishmentTalbeRow = styled(TalbeRow)`
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ReplenishmentTalbeBody = styled(TalbeBody)``;

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

export const Date = styled(Typography)`
  ${sharedSorting};
  margin-right: 70px;
  width: 100%;
  max-width: 73px;
`;

export const Currency = styled(Typography)`
  ${sharedSorting};
  margin-right: 70px;
  width: 100%;
  max-width: 73px;
`;

export const Sum = styled(Typography)`
  ${sharedSorting};
  margin-right: 70px;
  width: 100%;
  max-width: 65px;
`;

export const Commission = styled(Typography)`
  margin-right: 70px;
  width: 100%;
  max-width: 73px;
`;

export const CommissionCurrency = styled(Typography)`
  margin-right: 70px;
  width: 100%;
  max-width: 135px;
`;

export const CommissionType = styled(Typography)`
  margin-right: 70px;
  width: 100%;
  max-width: 102px;
`;

export const SortIcon = styled(Sort)`
  flex-shrink: 0;
  margin-left: 5px;
  margin-top: 2px;
  width: 11px;
  height: 13px;
`;
