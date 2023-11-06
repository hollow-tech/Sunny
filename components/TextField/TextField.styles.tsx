import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  inline-size: 100%;
`;

export const Input = styled.input<{ isError?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  border-radius: 5px;
  padding: 22px 30px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ isError, theme }) => (isError ? theme.error : "#646464")};

  &::placeholder {
    color: ${({ theme }) => theme.subtitle};
  }

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 15px 20px;
  }
`;

export const Error = styled.span`
  margin-block-end: 8px;
  display: inline-block;
  font-size: 10px;
  line-height: 12px;
  color: #f44336;
`;
