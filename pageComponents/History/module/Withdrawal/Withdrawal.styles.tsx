import styled from "styled-components";
import { Switcher, Typography } from "../../../../components";

import Error from "./icons/error.svg";

export const WithdrawalStyled = styled.div``;

export const WithdrawalSwitcherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 755px;
  width: 100%;
  margin-bottom: 35px;

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 600px;
    margin-bottom: 20px;
  }
`;

export const SwticherLabel = styled(Typography)`
  margin-left: 15px;
  color: #646464;
`;

export const WithdrawalSwitcher = styled(Switcher)``;
export const WithdrawalText = styled(Typography)`
  max-width: 777px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 28px 0 8px;
`;
export const ErrorIcon = styled(Error)`
  margin-right: 5px;
`;
export const ErrorText = styled(Typography)``;
