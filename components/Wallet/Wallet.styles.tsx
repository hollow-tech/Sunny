import styled from "styled-components";
import Wallet from "./icons/wallet.svg";
import { Typography, Button } from "../";

export const WalletStyled = styled.div`
  max-inline-size: 560px;
  position: relative;
  padding: 40px 30px;
  overflow: hidden;
  background: linear-gradient(111.1deg, #fdfdfd 3.66%, #ffffff 102.21%);
  box-shadow: 0px 4px 25px rgba(121, 180, 250, 0.25);
  border-radius: 10px;
  min-block-size: 261px;
`;

export const WalletInner = styled.div`
  position: relative;
  z-index: 10;
`;

export const WalletIcon = styled(Wallet)`
  position: absolute;
  inset-block-start: 40px;
  inset-inline-end: 40px;
`;

export const WalletTitle = styled(Typography)`
  margin-block-end: 35px;
  color: ${({ theme }) => theme.white};
`;

export const WalletWrapper = styled.div`
  display: flex;
  margin-block-end: 30px;
`;

export const WalletBalance = styled(Typography)`
  color: ${({ theme }) => theme.white};
`;

export const WalletСurrency = styled(Typography)`
  margin-inline-end: 20px;
`;

export const WalletButton = styled(Button)`
  display: block;
  margin: 0 auto;
  max-inline-size: 170px;
  color: #167a15;
`;
