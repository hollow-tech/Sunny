import styled from "styled-components";
import { Typography, Languages } from "../../../components";

export const HeaderAuth = styled.header`
  background: #e3f1fb;
  padding: 40px 0;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 20px 0;
  }
`;
export const HeaderAuthInner = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HeaderAuthWrapper = styled.div``;

export const HeaderAuthWelcome = styled(Typography)`
  margin-block-end: 8px;
`;
export const HeaderAuthName = styled(Typography)``;

export const HeaderAuthLang = styled(Languages)``;
