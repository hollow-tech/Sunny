import styled from "styled-components";

import { Logo } from "../../components";

export const Logotype = styled(Logo)`
  display: flex;
  justify-content: center;
  margin-block-end: 60px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-block-end: 20px;
  }
`;

export const AsideStyled = styled.div`
  display: flex;
  background-color: #f8f8f8;
`;

export const Aside = styled.div`
  padding: 10px 0;
  background-color: #00439f;
  inline-size: 300px;
  flex-shrink: 0;

  @media ${({ theme }) => theme.device.laptopL} {
    inline-size: 220px;
  }
`;

export const Main = styled.div`
  inline-size: calc(100% - 300px);

  @media ${({ theme }) => theme.device.laptopL} {
    inline-size: calc(100% - 220px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-block-size: calc(100vh - 256px);

  @media ${({ theme }) => theme.device.laptopL} {
    min-block-size: calc(100vh - 177px);
  }
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;

export const FooterWrapper = styled.div`
  flex: 0 0 auto;
`;
