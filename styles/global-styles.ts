import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  html,
  body,
  #__next {
    min-height: 100vh;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-size: 16px;
    line-height: 24px;
    font-family: "Gilroy", sans-serif;
    font-weight: 400;

    @media ${({ theme }) => theme.device.laptopL} {
      font-size: 14px;
    }
  }

  svg {
    display: block;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
 

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }  
`;
