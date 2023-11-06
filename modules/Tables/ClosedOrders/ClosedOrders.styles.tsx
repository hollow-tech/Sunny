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

export const ClosedOrdersTable = styled(Talbe)`
  width: 1440px;
`;
export const ClosedOrdersTalbeHead = styled(TalbeHead)`
  padding-left: 20px;
  padding-right: 20px;
`;
export const ClosedOrdersTalbeRow = styled(TalbeRow)`
  padding-left: 20px;
  padding-right: 20px;
  min-height: 80px;

  @media ${({ theme }) => theme.device.laptopL} {
    min-height: 50px;
  }
`;
export const ClosedOrdersTalbeBody = styled(TalbeBody)``;

export const ID = styled(Typography)`
  ${sharedSorting};
  margin-right: 36px;
  width: 100%;
  max-width: 68px;
`;

export const Createat = styled(Typography)`
  ${sharedSorting};
  margin-right: 36px;
  width: 100%;
  max-width: 87px;
  word-wrap: break-word;
`;

export const CompletionDate = styled(Typography)`
  ${sharedSorting};
  margin-right: 37px;
  width: 100%;
  max-width: 152px;
`;

export const Price = styled(Typography)`
  margin-right: 46px;
  width: 100%;
  max-width: 110px;
`;

export const Purchased = styled(Typography)`
  ${sharedSorting};
  margin-right: 37px;
  width: 100%;
  max-width: 117px;
`;

export const NotPurchased = styled(Typography)`
  ${sharedSorting};
  margin-right: 37px;
  width: 100%;
  max-width: 142px;
`;

export const Spent = styled(Typography)`
  ${sharedSorting};
  margin-right: 37px;
  width: 100%;
  max-width: 100px;
`;

export const Returned = styled(Typography)`
  ${sharedSorting};
  margin-right: 37px;
  width: 100%;
  max-width: 97px;
`;

export const Status = styled(Typography)`
  ${sharedSorting};
  width: 100%;
  max-width: 209px;
`;

export const SortIcon = styled(Sort)`
  flex-shrink: 0;
  margin-left: 5px;
  margin-top: 2px;
  width: 11px;
  height: 13px;
`;
