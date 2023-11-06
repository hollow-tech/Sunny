import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-block-size: 100vh;
  padding: 50px 0 100px;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 50px 0;
  }
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;

export const FooterWrapper = styled.div`
  flex: 0 0 auto;
`;
