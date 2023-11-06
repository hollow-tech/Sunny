import styled from "styled-components";
import RECAPTCHA from "react-google-recaptcha";
import { Button, Paper, Typography } from "../../../components";

export const Wrapper = styled(Paper)`
  max-width: 760px;
  padding: 50px 72px 50px 60px;
`;
export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 30px;
`;
export const Text = styled(Typography)`
  margin-bottom: 40px;
`;
export const CreateOrderTitel = styled(Typography)`
  margin-bottom: 12px;
`;
export const CreateOrderText = styled(Typography)`
  margin-bottom: 44px;
`;
export const Total = styled(Typography)`
  margin-bottom: 40px;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Btn1 = styled(Button)`
    max-width: 195px;
`;
export const Btn2 = styled(Button)`
    margin-left: 20px;
    max-width: 108px;
`;
export const ReCaptcha = styled.div`
    align-items: center;
    margin: 0px 25% 40px; 
`;
export const ReCAPTCHA = styled(RECAPTCHA)`
`;