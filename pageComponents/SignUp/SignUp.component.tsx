import Link from "next/link";
import {
  ButtonForgoted,
  ButtonSignIn,
  SignUpInput,
  SignUpStyled,
  SignUpTitle,
  Wrapper,
  WrapperInputs,
  ReCAPTCHA,
  SignUpCheckbox,
  PrivacyPolicy,
  AgreeText,
  Information,
  InformationText,
} from "./SignUp.styles";

import { Container } from "../../components";

import { SignUpProps } from "./SignUp.types";
import { useTranslation } from "next-i18next";
export const SignUp: React.FC<SignUpProps> = () => {
  const { t } = useTranslation("SingUp");
  return(
    <Container variants="small">
      <SignUpStyled>
        <Wrapper>
          <SignUpTitle variants="headline2">{t("SignUpTitle")}</SignUpTitle>
          <WrapperInputs>
            <SignUpInput placeholder={t("SignUpNickNamePlaceholder")} />
            <SignUpInput placeholder="E-mail" />
            <SignUpInput placeholder={t("SignUpPasswordPlaceholder")} />
            <SignUpInput placeholder={t("SignUpConfirmPasswordPlaceholder")} />
            <SignUpInput placeholder={t("SignUpControlWordPlaceholder")} />
          </WrapperInputs>
          <ReCAPTCHA sitekey="6LdQwHceAAAAADb_wJVa8g2XalJ9g3YqDDeU1Ztz" />
          <ButtonSignIn color="#00439F" variants="contained">
          {t("ButtonSignInRegister")}
          </ButtonSignIn>
          <SignUpCheckbox type="checkbox">
            <AgreeText variants="subtitle1">
            {t("AgreeText")}{" "}
              <Link href="/privacy-policy" passHref>
                <PrivacyPolicy>{t("AgreeTextLink")}</PrivacyPolicy>
              </Link>
            </AgreeText>
          </SignUpCheckbox>
          <Link href="/signin" passHref>
            <ButtonSignIn as="a" color="#00439F" variants="text">
            {t("ButtonSignIn")}
            </ButtonSignIn>
          </Link>
          <Link href="/password-recovery" passHref>
            <ButtonForgoted color="#00439F" variants="text">
            {t("ButtonForgoted")}
            </ButtonForgoted>
          </Link>
        </Wrapper>
      </SignUpStyled>
      <Information>
        <InformationText variants="body1">
        {t("InformationText")}
        </InformationText>
      </Information>
    </Container>
  );
}
