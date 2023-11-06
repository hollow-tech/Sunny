import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  secondary: "#2D62EA",
  lightPrimary: "#32A5F9",
  primary: "#00439F",
  success: "#FFE816",
  subtitle: "#646464",
  text: "#313131",
  grass: "#52A90D",
  error: "#F44336",
  placeholderColor: "#FFD004",
  surface: "linear-gradient(102.98deg, #01055E 17.46%, #1C52BA 96.36%)",
  focused: "#000",
  white: "#fff",

  device: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1024px)`,
    laptopL: `(max-width: 1800px)`,
    desktop: `(max-width: 2560px)`,
  },
};
