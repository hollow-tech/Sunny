import styled from "styled-components";
import Wafe from "./icons/wafe.svg";

import { Button } from "../../components";

export const WafeSVG = styled(Wafe)`
  position: fixed;
  z-index: 0;
`;

export const OrderStyled = styled.div`
  padding: 50px 0;
`;
export const OrderInner = styled.div`
  position: relative;
  z-index: 1;
`;
export const Panel = styled.div`
  margin: 10px 0 40px;
  display: flex;
  justify-content: flex-end;
`;
export const ButtonCreate = styled(Button)`
  color: ${({ theme }) => theme.primary};
  max-width: 200px;
  background-color: ${({ theme }) => theme.white};
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 15px;
    max-width: 160px;
  }
`;
