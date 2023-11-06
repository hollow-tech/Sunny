import styled from "styled-components";
import { Paper } from "../";

export const ChartStyled = styled(Paper)`
  height: 400px;
  @media ${({ theme }) => theme.device.laptopL} {
    height: 300px;
    padding: 40px;
  }
`;
