import styled from "styled-components";
import { Button, Typography } from "../../components";

export const NotFoundStyled = styled.section`
  position: relative;
`;

export const NotFoundInner = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-block-size: calc(100vh - 116px);

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 30px;
    min-block-size: calc(100vh - 100px);
  }
`;

export const NotFoundContent = styled.div`
  max-inline-size: 725px;
  margin: 0 30px 0 0;
`;

export const NotFoundTitle = styled(Typography)`
  max-inline-size: 686px;
  font-size: 36px;
  line-height: 44px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 24px;
`;

export const NotFoundText = styled(Typography)`
  color: ${({ theme }) => theme.white};
  margin-bottom: 31px;
`;

export const NotFoundButton = styled(Button)`
  max-width: 263px;
  color: ${({ theme }) => theme.text};
`;

export const NotFoundNumber = styled.div`
  position: relative;
  font-weight: 700;
  font-size: 400px;
  line-height: 495px;
  color: #e0f0ff;
  &::after {
    content: "404";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    font-weight: 700;
    font-size: 400px;
    line-height: 495px;
    opacity: 0.8;
    color: #043a84;
    filter: blur(74px);
    @media ${({ theme }) => theme.device.laptopL} {
      font-size: 300px;
      line-height: 295px;
    }
  }

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 300px;
    line-height: 295px;
  }
`;
