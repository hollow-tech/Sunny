import styled from "styled-components";
import { Typography } from "../../components";

export const Title = styled(Typography)`
  text-align: center;
  margin-block-end: 55px;
`;
export const Text = styled(Typography)`
  margin-block-end: 20px;
`;
export const CommisionWrapper = styled.div`
  justify-content: space-between;
  margin-block-start: 48px;
  display: flex;
  margin-inline-start: -20px;
  margin-block-end: 56px;
`;
export const CommisionItem = styled.div`
  flex-basis: calc(20% - 20px);
  margin-inline-start: 20px;
`;
