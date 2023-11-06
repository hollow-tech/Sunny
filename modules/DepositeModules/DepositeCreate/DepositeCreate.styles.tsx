import styled from "styled-components";
import { Button, Typography } from "../../../components";

export const Wrapper = styled.div`
  max-width: 760px;
  width: 100%;
  text-align: center;
  box-shadow: 5px 5px 20px rgba(96, 96, 96, 0.15);
  border-radius: 5px;
  background-color: #fff;
  color: #313131;
  padding: 50px 60px;
`;
export const Title = styled(Typography)`
  margin-bottom: 20px;
`;
export const Text = styled(Typography)`
  margin: 0px auto 28px;
  text-align: left;
`;
export const ButtonConteiner = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonOK = styled(Button)`
  max-width: 80px;
`;
