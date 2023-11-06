import styled from "styled-components";

import { Paper, Typography, Button, Counter } from "../../components";

export const WithdrawalStyled = styled.div`
  padding: 60px 0;
`;
export const WithdrawalInner = styled.div``;
export const WithdrawalPaper = styled(Paper)`
  padding: 70px;
`;

export const WithdrawalWrapper = styled.div`
  max-width: 850px;
`;
export const WithdrawalTitle = styled(Typography)`
  margin-bottom: 22px;
`;
export const WithdrawalCard = styled.div`
  padding: 60px;
  border-radius: 10px;
  background: ${({ theme }) => theme.surface};
  margin-bottom: 40px;
`;
export const WithdrawalAvailable = styled(Typography)`
  margin-bottom: 20px;
  span {
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    margin-right: 8px;
  }
`;
export const WithdrawalCommission = styled(Typography)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    margin-right: 8px;
  }
`;
export const WithdrawalBlock = styled(Typography)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const WithdrawalCounter = styled(Counter)`
  margin: 0 18px;
`;
export const WithdrawalCheckbox = styled(Typography)`
  margin-left: 10px;
  margin-bottom: 20px;
`;
export const WithdrawalDevided = styled.div`
  height: 1px;
  background-color: #32a5f9;
  width: 100%;
  margin-bottom: 25px;
`;
export const WithdrawalTotle = styled(Typography)``;

export const WithdrawalInpit = styled.input`
  font-family: "Gilroy", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  padding: 3px 10px;
  border: none;
  border-bottom: 1px solid #646464;
  width: 100%;
  margin-bottom: 40px;
  &::placeholder {
    color: #313131;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ButtonBack = styled(Button)`
  max-width: 120px;
  margin-right: 20px;
`;
export const ButtonNext = styled(Button)`
  max-width: 120px;
`;