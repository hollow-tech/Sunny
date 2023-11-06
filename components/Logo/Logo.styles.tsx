import styled from "styled-components";

import Logotype from "./icons/logo.svg";
import AsideLogotype from "./icons/aside-logo.svg";

export const LogotypeWrapper = styled.div``;

export const LogotypeIcon = styled(Logotype)`
  max-inline-size: 262px;
  inline-size: 100%;

  @media ${({ theme }) => theme.device.laptopL} {
    max-inline-size: 200px;
  }
`;

export const AsideLogotypeIcon = styled(AsideLogotype)`
  max-inline-size: 164px;
  inline-size: 100%;

  @media ${({ theme }) => theme.device.laptopL} {
    max-inline-size: 120px;
  }
`;
