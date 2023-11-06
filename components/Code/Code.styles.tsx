import styled from "styled-components";
import ReactCodeInput from "react-code-input";

export const CodeStyled = styled(ReactCodeInput)`
  input {
    border: none;
    border-bottom: 1px solid #313131;
    inline-size: 26px;
    block-size: 26px;
    outline: none;
    text-align: center;
  }
`;
