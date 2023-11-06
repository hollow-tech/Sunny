import styled from "styled-components";
import RECAPTCHA from "react-google-recaptcha";
import { Paper, Button, TextField, Typography } from "../../components";

export const PasswordRecoveryStyled = styled(Paper)`
  position: relative;
  z-index: 10;

  inline-size: 100%;
  max-inline-size: 703px;

  padding-block-start: 110px;
  padding-block-end: 60px;

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 500px;
    padding: 60px;
    margin: 0 auto 40px;
  }
`;

export const PasswordRecoveryTitle = styled(Typography)`
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

export const PasswordRecoveryInput = styled(TextField)`
  margin-bottom: 30px;
`;

export const ReCAPTCHA = styled(RECAPTCHA)`
  margin-bottom: 30px;
`;

export const ButtonPasswordRecovery = styled(Button)`
  margin-bottom: 5px;
`;

export const ButtonSignUp = styled(Button)`
  margin-bottom: 5px;
`;

export const ButtonSignIn = styled(Button)`
  margin-bottom: 5px;
`;
