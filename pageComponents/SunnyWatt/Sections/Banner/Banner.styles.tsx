import styled from "styled-components";

import { Typography } from "../../../../components";

export const BannerStyled = styled.div`
  padding: 50px 0 60px;
  position: relative;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 40px 0;
  }
`;

export const BannerInner = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BannerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  margin-inline-end: 30px;
`;

export const BannerContent = styled.div`
  max-inline-size: 846px;
  inline-size: 100%;
`;

export const BannerTitle = styled(Typography)`
  margin-block-end: 20px;
  color: ${({ theme }) => theme.white};
`;
export const BannerText = styled(Typography)`
  color: ${({ theme }) => theme.white};
  p {
    margin-block-end: 36px;
    &:last-child {
      margin-block-end: 0;
    }
  }
`;
