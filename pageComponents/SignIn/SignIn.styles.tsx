import styled from "styled-components";
import RECAPTCHA from "react-google-recaptcha";
import { Paper, Button, TextField, Typography } from "../../components";

export const SignInStyled = styled(Paper)`
  position: relative;
  z-index: 10;

  max-inline-size: 703px;
  inline-size: 100%;

  padding-block-start: 110px;
  padding-block-end: 60px;

  @media ${({ theme }) => theme.device.laptopL} {
    max-inline-size: 500px;
    padding: 60px;
    margin: 0 auto;
  }
`;

export const WrapperInputs = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const SignInTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 346px;
  width: 100%;

  margin: 0 auto;
`;

export const SignInInput = styled(TextField)`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ReCAPTCHA = styled(RECAPTCHA)`
  margin-bottom: 30px;
`;

export const ButtonSignIn = styled(Button)`
  margin-bottom: 5px;
`;

export const ButtonSignUp = styled(Button)`
  margin-bottom: 5px;
`;

export const ButtonForgoted = styled(Button)`
  margin-bottom: 5px;
`;
