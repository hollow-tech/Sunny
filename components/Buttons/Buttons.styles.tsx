import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { ButtonsProps } from "./Buttons.types";

const shared = css<ButtonsProps>`
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  display: block;
  text-align: center;
  inline-size: 100%;
  transition: 0.3s ease-in-out;
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  padding: 16px 24px;
  outline: none;
  border-radius: 5px;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 15px;
    font-size: 14px;
  }
`;

const contained = css<ButtonsProps>`
  ${shared};
  color: ${({ theme }) => theme.white};
  background-color: ${({ color }) => color};
  border: 2px solid transparent;
  &:hover {
    background-color: ${({ color }) => lighten(0.05, color)};
    border-color: ${({ color }) => lighten(0.05, color)};
  }
  &:active {
    background-color: ${({ color }) => darken(0.02, color)};
    border-color: ${({ color }) => darken(0.02, color)};
  }
  &:focus-visible {
    background-color: ${({ color }) => darken(0.02, color)};
    border-color: ${({ theme }) => theme.focused};
  }
`;

const outlined = css<ButtonsProps>`
  ${shared};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 2px solid ${({ color }) => color};
  &:hover {
    background-color: ${({ color }) => lighten(0.65, color)};
    border-color: ${({ color }) => darken(0.02, color)};
  }
  &:active {
    background-color: ${({ color }) => lighten(0.55, color)};
    border-color: ${({ color }) => lighten(0.55, color)};
  }
  &:focus-visible {
    background-color: ${({ color }) => lighten(0.55, color)};
    border-color: ${({ theme }) => theme.focused};
  }
`;

const text = css<ButtonsProps>`
  ${shared};
  border-color: transparent;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  &:hover {
    background-color: ${({ color }) => lighten(0.65, color)};
    border-color: ${({ color }) => darken(0.02, color)};
  }
  &:active {
    background-color: ${({ color }) => lighten(0.55, color)};
    border-color: ${({ color }) => lighten(0.55, color)};
  }
  &:focus-visible {
    background-color: ${({ color }) => lighten(0.55, color)};
    border-color: ${({ theme }) => theme.focused};
  }
`;

export const Button = styled.button<ButtonsProps>`
  ${({ variants }) => {
    switch (variants) {
      case "contained":
        return contained;
      case "outlined":
        return outlined;
      case "text":
        return text;
    }
  }}
`;
