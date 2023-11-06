import styled from "styled-components";

export const Wrapper = styled.div`
  max-inline-size: 415px;
  inline-size: 100%;
  background: linear-gradient(102.73deg, #ffd004 5.27%, #f4de14 100%);
  box-shadow: 3px 0px 30px rgba(44, 102, 184, 0.2);
  border-radius: 5px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  padding: 28px 0;
`;

export const Title = styled.h1`
  margin-block-end: 20px;
`;

export const Percent = styled.p`
  margin-block-end: 20px;
`;

export const CommisionText = styled.p``;
