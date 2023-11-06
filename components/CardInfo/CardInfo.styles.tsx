import styled from "styled-components";
import { Typography, Button } from "../";

export const CardInfoStyled = styled.div`
  position: relative;
  inline-size: 270px;
  min-block-size: 261px;
  background: linear-gradient(111.1deg, #fdfdfd 3.66%, #ffffff 102.21%);
  box-shadow: 0px 4px 25px rgba(121, 180, 250, 0.25);
  border-radius: 10px;
  padding: 50px 30px 32px;
`;

export const CardInfoMark = styled.div<{ color: string }>`
  position: absolute;
  inset-block: 0;
  inset-inline: 0;
  block-size: 11px;
  background-color: ${({ color }) => color};
  border-radius: 10px 10px 0px 0px;
`;

export const CardInfoStatus = styled(Typography)`
  margin-block-end: 30px;
  color: ${({ theme }) => theme.subtitle};
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  margin-block-end: 35px;
`;

export const CardInfoСurrency = styled(Typography)`
  margin-inline-end: 12px;
`;

export const CardInfoBalance = styled(Typography)`
  color: ${({ theme }) => theme.text};
`;

export const CardInfoButton = styled(Button)`
  max-inline-size: 120px;
  font-size: 18px;
`;
