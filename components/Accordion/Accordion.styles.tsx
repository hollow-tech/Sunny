import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { Typography } from "../Typography";

export const AccrdionStyled = styled.div``;

export const AccrdionHead = styled.div`
  position: relative;
  background: ${({ theme }) => theme.surface};
  padding: 26px 68px;
  padding-inline-end: 100px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gilroy", sans-serif;
  inline-size: 30px;
  block-size: 30px;
  flex-shrink: 0;
  font-weight: 400;
  font-size: 40px;
  color: ${({ theme }) => theme.white};
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 68px;
  transform: translateY(-50%);
`;

export const AccrdionTitle = styled(Typography)`
  color: ${({ theme }) => theme.white};
`;

export const AccrdionBody = styled(motion.div)`
  overflow: hidden;
`;

export const Content = styled(Typography)`
  padding: 30px 68px;
`;

export const bodyAnimation: Variants = {
  visible: {
    opacity: 1,
    height: "auto",
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
};
