import styled, { css } from "styled-components";
import { ContainerProps } from "./Container.types";

const small = css`
  max-inline-size: 910px;
  inline-size: 100%;
  padding: 0 100px;
  margin: 0 auto;
`;

const main = css`
  max-inline-size: 1780px;
  inline-size: 100%;
  padding: 0 30px;
  margin: 0 auto;
`;

const auth = css`
  max-inline-size: 1620px;
  inline-size: 100%;
  padding: 0 90px;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 0 30px;
  }
`;

export const Container = styled.div<ContainerProps>`
  ${({ variants }) => {
    switch (variants) {
      case "main":
        return main;
      case "small":
        return small;
      case "auth":
        return auth;
    }
  }}
`;
