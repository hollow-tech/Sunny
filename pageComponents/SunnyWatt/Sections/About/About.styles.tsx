import styled from "styled-components";
import { Typography } from "../../../../components";

export const AboutSection = styled.section`
  position: relative;
  padding-block-start: 67px;
  padding-block-end: 137px;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 60px 0;
  }
`;
export const AboutInner = styled.div`
  position: relative;
  z-index: 10;
`;

export const TopTitle = styled(Typography)`
  color: ${({ theme }) => theme.white};
  margin-block-end: 80px;
  text-align: center;
`;
export const Block1 = styled.div`
  display: flex;
  justify-content: space-between;
  inline-size: 100%;
  margin-block-end: 180px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-bottom: 60px;
  }
`;
export const Block2 = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin-block-end: 20px;
  color: #00439f;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
`;
export const Text1 = styled(Typography)`
  margin-block-end: 36px;
`;
export const Text2 = styled(Typography)`
  margin-block-end: 52px;
`;
export const Text3 = styled(Typography)``;
export const InfoNumber1 = styled.h1`
  color: #673ab7;
  font-weight: 600;
  font-size: 60px;
  line-height: 127%;
  position: relative;
  span {
    position: absolute;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    inset-block-start: 6px;
  }
`;
export const InfoNumber2 = styled(InfoNumber1)`
  color: #52a90d;
`;
export const InfoNumber3 = styled(InfoNumber1)`
  color: #ff7a00;
`;

export const InfoText = styled(Typography)``;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-start: 68px;
`;
export const InfoBox = styled.div`
  background-color: #fff1b2;
  box-shadow: 0px 0px 30px rgba(96, 96, 96, 0.15);
  border-radius: 10px;
  text-align: center;
  max-inline-size: 270px;
  inline-size: 100%;
  padding: 26px 0px;
`;
export const TextBlock = styled.div`
  max-inline-size: 831px;
  inline-size: 100%;
`;
export const IconTreeBox = styled.div`
  margin-block-start: -200px;
`;
export const IconImageBox = styled.div`
  margin-block-start: -200px;
  margin-inline-end: 68px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-block-start: 0px;
  }
`;
