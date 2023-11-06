import styled from "styled-components";

export const MenuStyled = styled.nav``;
export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin-inline-end: 30px;
  @media ${({ theme }) => theme.device.laptopL} {
    margin-inline-end: 15px;
  }
  &:last-child {
    margin-inline-end: 0;
  }
`;

export const MenuLink = styled.a`
  position: relative;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.white};
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
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

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 16px;
  }
`;
