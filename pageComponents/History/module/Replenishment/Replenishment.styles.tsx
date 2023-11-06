import styled from "styled-components";
import { Switcher, Typography } from "../../../../components";

export const ReplenishmentStyled = styled.div``;

export const ReplenishmentSwitcherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-inline-size: 600px;
  inline-size: 100%;
  margin-block-end: 35px;

  @media ${({ theme }) => theme.device.laptopL} {
    max-inline-size: 500px;
    margin-block-end: 20px;
  }
`;

export const SwticherLabel = styled(Typography)`
  margin-inline-start: 15px;
  color: ${({ theme }) => theme.text};
`;

export const ReplenishmentSwitcher = styled(Switcher)``;
