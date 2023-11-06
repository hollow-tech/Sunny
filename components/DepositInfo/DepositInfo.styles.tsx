import styled from "styled-components";
import { Paper, Typography } from "../";
export const DepositinfoStyled = styled(Paper)`
  padding: 60px 40px;
`;
export const DepositinfoTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 32px;
`;
export const DepositinfoInner = styled.div`
  column-count: 2;
  column-gap: 45px;
`;
export const DepositCard = styled.div`
  max-width: 645px;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;
export const DepositCardNumber = styled(Typography)`
  color: ${({ theme }) => theme.primary};
  margin-right: 30px;
`;
export const DepositCardText = styled(Typography)`
  span {
    color: ${({ theme }) => theme.placeholderColor};
  }
`;
export const SWH = styled.span``;
