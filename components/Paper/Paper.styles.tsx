import styled from "styled-components";
import { PaperProps } from "./Paper.types";

export const Paper = styled.div<PaperProps>`
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  box-shadow: 5px 5px 20px rgba(96, 96, 96, 0.15);
  padding: ${(props) => props.size || "50px"};
`;
