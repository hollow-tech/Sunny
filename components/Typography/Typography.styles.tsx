import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.types";

const headline1 = css<TypographyProps>`
  font-weight: 600;
  font-size: 50px;
  line-height: 60px;
  ${({ color }) => color && `color: ${color}`};

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 40px;
    line-height: 50px;
  }
`;

const headline2 = css<TypographyProps>`
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  ${({ color }) => color && `color: ${color}`};

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 24px;
    line-height: 29px;
  }
`;

const headline3 = css<TypographyProps>`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  ${({ color }) => color && `color: ${color}`};

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 18px;
    line-height: 26px;
  }
`;

const body1 = css<TypographyProps>`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  ${({ color }) => color && `color: ${color}`};

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const subtitle2 = css<TypographyProps>`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  ${({ color }) => color && `color: ${color}`};

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 12px;
    line-height: 16px;
  }
`;

const subtitle1 = css<TypographyProps>`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  ${({ color }) => color && `color: ${color}`};

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Typography = styled.p<TypographyProps>`
  ${({ variants }) => {
    switch (variants) {
      case "headline1":
        return headline1;
      case "headline2":
        return headline2;
      case "headline3":
        return headline3;
      case "body1":
        return body1;
      case "subtitle1":
        return subtitle1;
      case "subtitle2":
        return subtitle2;
      default:
        return body1;
    }
  }}
`;
