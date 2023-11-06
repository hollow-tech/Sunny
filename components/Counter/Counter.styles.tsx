import styled, { css } from "styled-components";

const sharedButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 5px;
  inline-size: 80px;
  block-size: 47px;
`;

export const Input = styled.input`
  inline-size: 80px;
  block-size: 47px;
  padding: 10px;
  font-weight: 400;
  padding-inline-end: 25px;
  font-size: 25px;
  line-height: 30px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.subtitle};
  border-radius: 5px;
`;

export const WrapperButtons = styled.div`
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  block-size: 100%;
`;

export const ButtonUp = styled.button`
  margin-block-end: 6px;
  ${sharedButton};
`;

export const ButtonDown = styled.button`
  ${sharedButton};
`;
