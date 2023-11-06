import styled from "styled-components";

import { Typography, Button } from "../../../../components";

export const IntroStyled = styled.div`
  position: relative;
  padding-block-start: 40px;
  padding-block-end: 130px;

  @media ${({ theme }) => theme.device.laptopL} {
    padding-block-end: 80px;
  }
`;

export const IntroInner = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IntroContent = styled.div`
  max-inline-size: 655px;
  inline-size: 100%;
`;

export const IntroImage = styled.div``;

export const IntroTitle = styled(Typography)`
  color: ${({ theme }) => theme.white};
  margin-block-end: 40px;
`;

export const IntroText = styled(Typography)`
  max-inline-size: 536px;
  color: ${({ theme }) => theme.white};
  margin-block-end: 40px;
`;

export const IntroButton = styled(Button)`
  max-inline-size: 225px;
  color: #000000;
`;
