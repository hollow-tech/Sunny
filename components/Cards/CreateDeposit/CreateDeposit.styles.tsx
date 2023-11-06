import styled from "styled-components";
import { Counter } from "../../Counter";
import { Typography, Button } from "../..";

import Wallet from "./icons/wallet.svg";

export const CreateDepositStyled = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 40px 45px;
  max-inline-size: 560px;
  inline-size: 100%;
`;

export const CreateDepositInner = styled.div`
  position: relative;
  z-index: 10;
`;

export const CreateDepositTitle = styled(Typography)`
  margin-block-end: 30px;
`;

export const CreateDepositWrapper = styled(Typography)`
  margin-block-end: 30px;
`;
export const CreateDepositLabel = styled.span`
  margin-inline-end: 30px;
  color: ${({ theme }) => theme.placeholderColor};
`;
export const CreateDepositValue = styled.span`
  color: ${({ theme }) => theme.white};
`;

export const FlexWrapper = styled(Typography)`
  display: flex;
  align-items: center;
  margin-block-end: 35px;
`;
export const CreateDepositCounter = styled(Counter)`
  margin: 0 15px;
`;

export const SWH = styled.span`
  color: ${({ theme }) => theme.placeholderColor};
`;

export const CreateDepositButton = styled(Button)`
  max-inline-size: 211px;
  color: ${({ theme }) => theme.text};
  display: block;
  margin: 0 auto;
`;

export const WalletSvg = styled(Wallet)`
  position: absolute;
  inset-block-start: 0px;
  inset-inline-end: 0px;
`;
