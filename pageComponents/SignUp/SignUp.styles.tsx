import styled from "styled-components";
import RECAPTCHA from "react-google-recaptcha";
import { Paper, Button, TextField, Typography, CheckCircle } from "../../components";

export const SignUpStyled = styled(Paper)`
  position: relative;
  z-index: 10;

  width: 100%;
  max-width: 703px;

  padding-block-start: 110px;
  padding-block-end: 60px;
  margin-block-end: 40px;

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 500px;
    padding: 60px;
    margin: 0 auto 40px;
  }
`;

export const WrapperInputs = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const SignUpTitle = styled(Typography)`
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

export const SignUpInput = styled(TextField)`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ReCAPTCHA = styled(RECAPTCHA)`
  margin-bottom: 30px;
`;

export const AgreeText = styled(Typography)`
  max-width: 230px;
  color: #494949;
  margin-left: 10px;
`;

export const PrivacyPolicy = styled.a`
  color: #494949;
  position: relative;
  &::before {
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: "";
    height: 1px;
    width: 100%;
    background-color: #494949;
  }
`;

export const SignUpCheckbox = styled(CheckCircle)`
  align-self: flex-start;
`;

export const ButtonSignIn = styled(Button)`
  margin-bottom: 5px;
`;

export const ButtonForgoted = styled(Button)`
  margin-bottom: 5px;
`;

export const Information = styled(Paper)`
  position: relative;
  z-index: 10;
  padding: 38px 40px 50px;

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 500px;
    padding: 30px;
    margin: 0 auto 40px;
  }
`;

export const InformationText = styled(Typography)``;
