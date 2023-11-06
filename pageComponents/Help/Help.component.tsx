import { Button, Container } from "../../components";
import {
  BlockEnd,
  BlockStart,
  IconInfo,
  IconList,
  Info,
  InfoBlock,
  InfoText,
  InfoTitle,
  Input,
  MainTitle,
  ReCaptcha,
  TextArea,
  Wrapper,
  Inner,
  HelpStyled,
  SelectChoose,
} from "./Help.styles";
import { useTranslation } from "next-i18next";
export const Help = () => {
  const { t } = useTranslation("Support");
  return (
    <HelpStyled>
      <Container variants="auth">
        <Wrapper>
          <MainTitle variants="headline2">{t("MainTitleOne")}</MainTitle>
          <MainTitle variants="headline2">{t("MainTitleTwo")}</MainTitle>
          <Inner>
            <BlockStart>
              <SelectChoose
                options={[
                  { label: t("SelectChooseOne"), value: "value1" },
                  { label:  t("SelectChooseTwo"), value: "value2" },
                  { label:  t("SelectChooseThree"), value: "value3" },
                ]}
                placeholder={t("SelectChoosePlaceholder")}
              />
              <Input placeholder={t("InputTitlePlaceholder")} />
              <TextArea as="textarea" placeholder={t("InputTextAreaPlaceholder")} />
              <ReCaptcha sitekey="6LdQwHceAAAAADb_wJVa8g2XalJ9g3YqDDeU1Ztz" />
              <Button variants="contained" color="#FFD004">
              {t("ButtonSendMessage")}
              </Button>
            </BlockStart>

            <BlockEnd>
              <InfoBlock>
                <IconInfo />
                <Info>
                  <InfoTitle variants="headline3">
                  {t("InfoTitleOne")}
                  </InfoTitle>
                  <InfoText variants="body1">
                  {t("InfoTextOne")}
                  </InfoText>
                </Info>
              </InfoBlock>
              <InfoBlock>
                <IconList />
                <Info>
                  <InfoTitle variants="headline3">{t("InfoTitleTwo")}</InfoTitle>
                  <InfoText variants="body1">
                  {t("InfoTextTwo")}
                  </InfoText>
                </Info>
              </InfoBlock>
            </BlockEnd>
          </Inner>
        </Wrapper>
      </Container>
    </HelpStyled>
  );
};
