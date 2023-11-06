import styled from "styled-components";
import { motion, Variants } from "framer-motion";

export const ModalStyled = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 30px;
  z-index: 999999;
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const ModalBody = styled(motion.div)`
  z-index: 2;
  position: relative;
  margin: 0 auto;
  border-radius: 3px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100%;
  align-self: flex-start;
  transform: translate3d(1px, -100px, -100px) rotateX(90deg);
`;

export const modalAnimation: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const bodyAnimation: Variants = {
  visible: {
    transform: "translate3d(0px, 0px, 0px) rotateX(0deg)",
  },
  hidden: {
    transform: "translate3d(0px, -100px, -600px) rotateX(70deg)",
  },
};
