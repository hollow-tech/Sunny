import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 45px 0;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 20px 0;
  }
`;
export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterList = styled.ul`
  display: flex;
`;

export const FooterItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 24px;
  &:last-child {
    margin-inline-end: 0px;
  }
`;

export const FooterLink = styled.a<{ hover?: boolean }>`
  font-size: 14px;
  line-height: 20px;
  color: #a9a9a9;

  ${({ hover }) =>
    hover &&
    `
    position: relative;
    cursor: pointer;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      inline-size: 100%;
      block-size: 1px;
      background-color: #f3c30a;
      transition: 0.3s ease-in-out transform;
      transform: translateX(-120%);
    }
    &:hover {
      &::before {
        transform: translateX(0%);
      }
    }
  
  `}

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 12px;
  }
`;
