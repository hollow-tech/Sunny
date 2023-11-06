import styled from "styled-components";
import { Button, Typography } from "../../../components";

export const Block = styled.div`
  max-width: 600px;
  width: 100%;
`;
export const TextBlock = styled.div`
  padding: 0px 20px 38px;
`;
export const Title = styled(Typography)`
  text-align: center;
  color: #fff;
  background: linear-gradient(102.98deg, #01055e 17.46%, #1c52ba 96.36%);
  padding: 37px 0px 26px;
  margin-bottom: 32px;
`;
export const Text = styled(Typography)`
  margin-bottom: 10px;
  color: #313131;
`;
export const ButtonConfirm = styled(Button)`
  max-width: 310px;
  margin: 22px auto;
`;
export const Link = styled(Typography)`
  color: #2d62ea;
  margin-bottom: 30px;
`;
export const BottomText = styled(Typography)`
  margin-top: 32px;
  color: #757575;
`;
