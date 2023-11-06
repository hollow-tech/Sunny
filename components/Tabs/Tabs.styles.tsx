import styled from "styled-components";
import { Tab as TabStyled, Tabs as TabsStyled, TabList as TabListStyled, TabPanel as TabPanelStyled } from "react-tabs";

export const Tab = styled(TabStyled)`
  position: relative;
  display: inline-block;
  font-family: "Gilroy", sans-serif;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #646464;
  padding-inline-end: 93px;
  padding-block-end: 10px;
  cursor: pointer;
  border-bottom: 1px solid #e8e8e8;
  transition: color ease-in-out 0.3s;
  outline: none;
  &::before {
    content: "";
    position: absolute;
    inset-block-end: -1px;
    inset-inline-start: 0;
    inline-size: 90px;
    display: inline-block;
    block-size: 2px;
    background: #ffd004;
    opacity: 0;
    visibility: hidden;
    transition: opacity ease-in-out 0.3s;
  }
  &.react-tabs__tab--selected {
    color: #313131;
    &::before {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 1800px) {
    font-size: 28px;
    line-height: 30px;
    padding-inline-end: 70px;
    padding-block-end: 8px;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 24px;
    line-height: 30px;
    padding-inline-end: 50px;
    padding-block-end: 5px;
  }
`;
export const Tabs = styled(TabsStyled)``;
export const TabList = styled(TabListStyled)``;
export const TabPanel = styled(TabPanelStyled)``;
