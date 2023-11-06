import Image from "next/image";
import { useTranslation } from "next-i18next";

import { Container } from "../../../../components";
import {
  AboutSection,
  Block1,
  Block2,
  InfoContainer,
  InfoBox,
  InfoNumber1,
  InfoNumber2,
  InfoNumber3,
  InfoText,
  Title,
  IconTreeBox,
  Text1,
  TextBlock,
  IconImageBox,
  Text2,
  Text3,
  TopTitle,
  AboutInner,
} from "./About.styles";

import { AboutProps } from "./About.types";
const About: React.VFC<AboutProps> = (props) => {
  const { t } = useTranslation("Home");
  return (
    <AboutSection {...props}>
      <Image src="/content/about/background.png" objectFit="cover" layout="fill" />
      <Container variants="main">
        <AboutInner>
          <TopTitle variants="headline1">{t("topTitle")}</TopTitle>
          <Block1>
            <TextBlock>
              <Text1 variants="body1">{t("text1")}</Text1>
              <InfoContainer>
                <InfoBox>
                  <InfoNumber1>#1</InfoNumber1>
                  <InfoText variants="body1">{t("infoTextOne")}</InfoText>
                </InfoBox>
                <InfoBox>
                  <InfoNumber2>
                    100<span>м+</span>
                  </InfoNumber2>
                  <InfoText variants="body1">{t("infoTextTwo")}</InfoText>
                </InfoBox>
                <InfoBox>
                  <InfoNumber3>
                    21<span>м+</span>
                  </InfoNumber3>
                  <InfoText variants="body1">{t("infoTextThree")}</InfoText>
                </InfoBox>
              </InfoContainer>
            </TextBlock>
            <IconTreeBox>
              <Image width={522} height={765} src="/content/about/tree.png" />
            </IconTreeBox>
          </Block1>
          <Block2>
            <IconImageBox>
              <Image width={608} height={590} src="/content/about/image.png" />
            </IconImageBox>
            <TextBlock>
              <Title>{t("titleInfoOne")}</Title>
              <Text2 variants="body1">{t("textInfoOne")}</Text2>
              <Title>{t("titleInfoTwo")}</Title>
              <Text3 variants="body1">{t("textInfoTwo")}</Text3>
            </TextBlock>
          </Block2>
        </AboutInner>
      </Container>
    </AboutSection>
  );
};

export default About;
