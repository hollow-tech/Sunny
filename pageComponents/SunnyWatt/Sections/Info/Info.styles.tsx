import styled from "styled-components";

import { Typography, Button } from "../../../../components";

export const InfoStyled = styled.div`
  padding: 160px 0 100px;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 80px 0 80px;
  }
`;
export const InfoInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InfoContent = styled.div`
  max-inline-size: 703px;
  inline-size: 100%;
`;
export const InfoTitle = styled(Typography)`
  margin-block-end: 20px;
  color: ${({ theme }) => theme.text};
`;
export const InfoText = styled(Typography)`
  color: ${({ theme }) => theme.text};
  margin-block-end: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const ButtonSignIn = styled(Button)`
  max-inline-size: 110px;
`;
export const ButtonSignUp = styled(Button)`
  color: ${({ theme }) => theme.text};
  max-inline-size: 260px;
  margin-inline-start: 20px;
`;

export const InfoImage = styled.div`
  margin-inline-start: 30px;
`;
