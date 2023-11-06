import Link from "next/link";
import {
  ButtonSignIn,
  ButtonPasswordRecovery,
  ButtonSignUp,
  PasswordRecoveryInput,
  PasswordRecoveryStyled,
  PasswordRecoveryTitle,
  Wrapper,
  ReCAPTCHA,
} from "./PasswordRecovery.styles";

import { Container } from "../../components";

import { PasswordRecoveryProps } from "./PasswordRecovery.types";
import { useTranslation } from "next-i18next";
export const PasswordRecovery: React.FC<PasswordRecoveryProps> = () => {
  const { t } = useTranslation("Password-recovery");
 return (
    
    <Container variants="small">
      <PasswordRecoveryStyled>
        <PasswordRecoveryTitle variants="headline2">{t("PasswordRecoveryTitle")}</PasswordRecoveryTitle>
        <Wrapper>
          <PasswordRecoveryInput placeholder="E-mail" />
          <ReCAPTCHA sitekey="6LdQwHceAAAAADb_wJVa8g2XalJ9g3YqDDeU1Ztz" />
          <ButtonPasswordRecovery color="#00439F" variants="contained">
          {t("ButtonPasswordRecovery")}
          </ButtonPasswordRecovery>
          <Link href="/signin" passHref>
            <ButtonSignIn as="a" color="#00439F" variants="text">
            {t("ButtonSignIn")}
            </ButtonSignIn>
          </Link>
          <Link href="/signup" passHref>
            <ButtonSignUp as="a" color="#00439F" variants="text">
            {t("ButtonSignInRegistration")}
            </ButtonSignUp>
          </Link>
        </Wrapper>
      </PasswordRecoveryStyled>
    </Container>
  );
}
