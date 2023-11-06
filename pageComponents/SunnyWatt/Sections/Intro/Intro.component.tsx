import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useTranslation } from "next-i18next";
import { IntroButton, IntroContent, IntroImage, IntroInner, IntroStyled, IntroText, IntroTitle } from "./Intro.styles";

import { Container } from "../../../../components";
import { IntroProps } from "./Intro.types";

const Intro: React.FC<IntroProps> = () => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation("Home");

  return (
    <IntroStyled>
      <Image quality={90} src="/content/intro/intro-bg.jpg" objectFit="cover" layout="fill" />
      <Container variants="main">
        <IntroInner>
          <IntroContent>
            <IntroTitle variants="headline1">{t("introTitle")}</IntroTitle>
            <IntroText variants="body1">{t("introText")}</IntroText>
            <IntroButton as="a" href="/#about" color={theme.placeholderColor} variants="contained">
              {t("introButton")}
            </IntroButton>
          </IntroContent>
          <IntroImage>
            <Image src="/content/intro/intro-image.png" width={808} height={782} />
          </IntroImage>
        </IntroInner>
      </Container>
    </IntroStyled>
  );
};

export default Intro;
