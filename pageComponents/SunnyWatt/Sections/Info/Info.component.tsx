import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../../../../components";
import {
  ButtonSignIn,
  ButtonSignUp,
  ButtonWrapper,
  InfoContent,
  InfoImage,
  InfoInner,
  InfoStyled,
  InfoText,
  InfoTitle,
} from "./Info.styles";
import { useTranslation } from "next-i18next";
import { InfoProps } from "./Info.types";

const Info: React.FC<InfoProps> = () => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation("Home");

  return (
    <InfoStyled>
      <Container variants="main">
        <InfoInner>
          <InfoContent>
            <InfoTitle variants="headline1">{t("InfoTitle")}</InfoTitle>
            <InfoText dangerouslySetInnerHTML={{ __html: t("InfoText") }} variants="body1" />
            <ButtonWrapper>
              <Link href="/signin" passHref>
                <ButtonSignIn as="a" color={theme.primary} variants="contained">
                  {t("buttonSignIn")}
                </ButtonSignIn>
              </Link>
              <Link href="/signup" passHref>
                <ButtonSignUp as="a" color={theme.primary} variants="outlined">
                  {t("buttonSignUp")}
                </ButtonSignUp>
              </Link>
            </ButtonWrapper>
          </InfoContent>
          <InfoImage>
            <Image src="/content/info/info-image.jpg" width={850} height={585} />
          </InfoImage>
        </InfoInner>
      </Container>
    </InfoStyled>
  );
};

export default Info;
