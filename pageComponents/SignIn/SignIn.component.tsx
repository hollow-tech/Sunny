import Link from "next/link";
import {
  ButtonForgoted,
  ButtonSignIn,
  ButtonSignUp,
  SignInInput,
  SignInStyled,
  SignInTitle,
  Wrapper,
  WrapperInputs,
  ReCAPTCHA,
} from "./SignIn.styles";

import { Container } from "../../components";
import { useTranslation } from "next-i18next";
import { SignInProps } from "./SignIn.types";

export const SignIn: React.FC<SignInProps> = () => {
  const { t } = useTranslation("SingIn");
  return (
    <Container variants="small">
      <SignInStyled>
        <Wrapper>
          <SignInTitle variants="headline2">{t("SignInTitle")}</SignInTitle>
          <WrapperInputs>
            <SignInInput placeholder="E-mail" />
            <SignInInput placeholder={t("SignInInputPasswordPlaceholder")} />
          </WrapperInputs>
          <ReCAPTCHA sitekey="6LdQwHceAAAAADb_wJVa8g2XalJ9g3YqDDeU1Ztz" />
          <Link href="/balance">
            <ButtonSignIn as="a" color="#00439F" variants="contained">
              {t("ButtonSignIn")}
            </ButtonSignIn>
          </Link>
          <Link href="/signup">
            <ButtonSignUp as="a" color="#00439F" variants="text">
              {t("ButtonSignUp")}
            </ButtonSignUp>
          </Link>
          <Link href="/password-recovery">
            <ButtonForgoted as="a" color="#00439F" variants="text">
              {t("ButtonForgoted")}
            </ButtonForgoted>
          </Link>
        </Wrapper>
      </SignInStyled>
    </Container>
  );
};
