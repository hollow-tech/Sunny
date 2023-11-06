import styled, { css } from "styled-components";

import { Typography, TalbeHead, Talbe, TalbeRow, TalbeBody } from "../../../components";

import Sort from "../icons/sort.svg";

const sharedSorting = css`
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  display: flex;
  padding: 0px;
`;

export const AccrualsTable = styled(Talbe)`
  max-width: 850px;
`;
export const AccrualsTalbeHead = styled(TalbeHead)`
  padding-left: 40px;
  padding-right: 40px;
`;
export const AccrualsTalbeRow = styled(TalbeRow)`
  padding-left: 40px;
  padding-right: 40px;
  min-height: 80px;
  @media ${({ theme }) => theme.device.laptopL} {
    min-height: 50px;
  }
`;
export const AccrualsTalbeBody = styled(TalbeBody)``;

export const ID = styled(Typography)`
  ${sharedSorting};
  margin-right: 124px;
  width: 100%;
  max-width: 68px;
`;

export const Date = styled(Typography)`
  ${sharedSorting};
  margin-right: 124px;
  width: 100%;
  max-width: 73px;
`;

export const DepositID = styled(Typography)`
  ${sharedSorting};
  margin-right: 152px;
  width: 100%;
  max-width: 96px;
`;

export const Quantity = styled(Typography)`
  ${sharedSorting};
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
