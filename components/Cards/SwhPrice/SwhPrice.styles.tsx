import styled from "styled-components";
import Info from "./icons/info.svg";

import { Typography } from "../..";

export const SwhPriceStyled = styled.div`
  max-inline-size: 705px;
  inline-size: 100%;
  padding: 40px 30px;
  background: ${({ theme }) => theme.surface};
  box-shadow: 0px 4px 25px rgba(121, 180, 250, 0.25);
  border-radius: 10px;
`;

export const SwhPriceTitle = styled(Typography)`
  margin-block-end: 30px;
  color: ${({ theme }) => theme.white};
  span {
    color: ${({ theme }) => theme.placeholderColor};
  }
`;

export const SwhPriceTNumber = styled(Typography)`
  margin-block-end: 40px;
  color: ${({ theme }) => theme.white};
`;

export const SwhPriceTInfo = styled(Typography)`
  color: ${({ theme }) => theme.white};
`;

export const InfoIcon = styled(Info)`
  flex-shrink: 0;
  margin-inline-end: 20px;
`;

export const Wrapper = styled.div`
  max-inline-size: 390px;
  display: inline-flex;
`;
