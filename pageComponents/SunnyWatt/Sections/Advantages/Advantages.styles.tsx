import styled from "styled-components";

import { Typography } from "../../../../components";

export const AdvantagesStyled = styled.section`
  padding: 120px 0;
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 80px 0;
  }
`;

export const AdvantagesInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-inline-size: 1440px;
  margin: 0 auto;
`;

export const AdvantagesTitle = styled(Typography)`
  margin-block-end: 10px;
`;

export const AdvantagesText = styled(Typography)`
  margin-block-end: 90px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-block-end: 60px;
  }
`;

export const Advantage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-inline-size: 350px;
  inline-size: 100%;
`;

export const AdvantageIcon = styled.div`
  margin-block-end: 30px;
`;

export const AdvantageTitle = styled(Typography)`
  text-align: center;
  margin-block-end: 20px;
`;

export const AdvantageText = styled(Typography)`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-basis: 33.333%;
  padding: 0 10px;
  margin-block-end: 90px;

  @media ${({ theme }) => theme.device.laptopL} {
    margin-block-end: 60px;
  }
`;
