import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { ArrowProps } from "./Languages.types";
import Arrow from "./icons/arrow.svg";

export const LanguagesStyled = styled.div`
  position: relative;
  inline-size: 144px;

  @media ${({ theme }) => theme.device.laptopL} {
    inline-size: 120px;
  }
`;

export const LanguagesMain = styled.div`
  cursor: pointer;
  padding: 17px 25px;
  inline-size: 100%;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 10px;
  }
`;

export const Overlaid = styled.div`
  position: fixed;
  inset-block: 0;
  inset-inline: 0;
  z-index: 2;
`;

export const LanguagesList = styled(motion.ul)`
  position: absolute;
  z-index: 100;
  inline-size: 100%;
  box-shadow: 5px 5px 20px rgba(96, 96, 96, 0.15);
  border-radius: 5px;
  padding: 17px 25px;
  background-color: ${({ theme }) => theme.white};
  inset-block-start: 100%;
  inset-inline-start: 0;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 10px;
  }
`;

export const LanguagesItem = styled.li`
  position: relative;
  margin-block-end: 15px;
  &:last-child {
    margin-block-end: 0;
  }
`;

export const LanguagesLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LanguagesIcon = styled.div`
  display: flex;
  align-items: center;
  margin-inline-end: 14px;
`;

export const LanguagesLabel = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: ${({ active, color }) => (active ? color || "#000000" : "#737373")};

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 16px;
  }
`;

export const ArrowIcon = styled(({ isOpen, ...props }: ArrowProps) => <Arrow {...props} />)`
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 6px;
  transition: all 0.3s;
  fill: ${({ color }) => color || "#000000"};
  ${({ isOpen }) =>
    isOpen ? "transform: translateY(-50%) rotateX(180deg)" : "transform: translateY(-50%) rotateY(0deg)"};
`;

export const Animation: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
