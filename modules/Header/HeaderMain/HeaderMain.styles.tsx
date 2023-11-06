import styled from "styled-components";
import { lighten, darken, rgba } from "polished";

import { Logo, Menu, Languages, Button } from "../../../components";

export const HeaderMainStyled = styled.header`
  display: flex;
  align-items: center;
  inline-size: 100%;
  block-size: 118px;
  padding: 15px 0;
  background: ${({ theme }) => theme.surface};

  @media ${({ theme }) => theme.device.laptopL} {
    block-size: 100px;
  }
`;

export const HeaderMainInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMainLogo = styled(Logo)``;

export const HeaderMainMenu = styled(Menu)`
  margin-inline-start: 60px;
  @media ${({ theme }) => theme.device.laptopL} {
    margin-inline-start: 30px;
  }
`;

export const HeaderMainLanguages = styled(Languages)`
  margin-inline-start: auto;
`;

export const HeaderMainButtons = styled.div`
  display: flex;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-inline-start: 15px;
  }
`;

export const HeaderMainSignIn = styled(Button)`
  color: #000000;
`;

export const HeaderMainSignUp = styled(Button)`
  color: ${({ theme }) => theme.white};
  margin-inline-start: 30px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-inline-start: 15px;
  }

  &:hover {
    background-color: ${({ color }) => rgba(color, 0.1)};
    border-color: ${({ color }) => darken(0.02, color)};
  }
  &:active {
    background-color: ${({ color }) => rgba(color, 0.5)};
    border-color: ${({ color }) => lighten(0.55, color)};
  }
  &:focus-visible {
    background-color: ${({ color }) => rgba(color, 0.1)};
    border-color: ${({ theme }) => theme.focused};
  }
`;
