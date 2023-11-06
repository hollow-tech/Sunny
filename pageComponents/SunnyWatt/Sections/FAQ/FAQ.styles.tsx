import styled from "styled-components";

import { Typography, Accordion } from "../../../../components";

export const FAQstyled = styled.div`
  padding: 135px 0 100px;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 80px 0;
  }
`;

export const FAQInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-inline-size: 1440px;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 0 30px;
  }
`;

export const FAQTitle = styled(Typography)`
  margin-block-end: 40px;
`;

export const FAQAccordion = styled(Accordion)``;

export const FAQList = styled.ul`
  inline-size: 100%;
`;

export const FAQItem = styled.li`
  margin-block-end: 30px;
  &:last-child {
    margin-block-end: 0;
  }
`;
