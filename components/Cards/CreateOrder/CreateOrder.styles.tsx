import styled from "styled-components";

import { Counter } from "../../Counter";

import { Typography, Button } from "../../";

export const CreateOrderStyled = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 40px 45px;
  max-inline-size: 705px;
  inline-size: 100%;
`;

export const CreateOrderInner = styled.div`
  position: relative;
  z-index: 10;
`;

export const CreateOrderHead = styled(Typography)`
  display: flex;
  align-items: center;
  margin-block-end: 50px;
`;

export const CreateOrderCounter = styled(Counter)`
  margin: 0 15px;
`;

export const CreateOrderBody = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 50px;
`;

export const CreateOrderLabel = styled(Typography)`
  margin-inline-end: 15px;
`;

export const CreateOrderValue = styled(Typography)``;

export const CreateOrderButton = styled(Button)`
  max-inline-size: 110px;
  display: block;
  margin: 0 auto;
`;

export const USDT = styled.span`
  color: ${({ theme }) => theme.primary};
`;
