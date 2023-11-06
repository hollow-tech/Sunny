import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const Mark = styled.span`
  position: relative;
  display: inline-block;
  inline-size: 20px;
  block-size: 20px;
  background-color: #f5f5f5;
  inset-inline-start: 0;
  border-radius: 4px;
  border: 2px solid transparent;
  flex-shrink: 0;
`;

export const MarkActive = styled(motion.span)`
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  display: block;
  border-radius: 50%;
  inline-size: 8px;
  block-size: 8px;
  background-color: ${({ theme }) => theme.primary};
  transform: translate3d(-50%, -50%, 0);
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  inline-size: 0;
  block-size: 0;
  z-index: -100;
  &:focus-visible + ${Mark} {
    border-color: ${({ theme }) => theme.focused};
  }
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
`;

export const Wrapper = styled.div`
  inline-size: 20px;
  block-size: 20px;
`;

export const animation: Variants = {
  visible: {
    inlineSize: "8px",
    blockSize: "8px",
  },
  hidden: {
    inlineSize: 0,
    blockSize: 0,
  },
};
