import { Button } from "../../components";
import {
  BlockEnd,
  BlockStart,
  Image,
  Input,
  InputsText,
  InputsTitle,
  NicknameInput,
  NicknameText,
  NicknameTitle,
  SettingYourPropfileText,
  SettingYourPropfileTitle,
  Wrapper,
  SettingsStyled,
  WafeBottomSVG,
  WafeTopSVG,
} from "./Settings.styles";
import { Container } from "../../components";
import { SettingsProps } from "./Settings.types";
import { useTranslation } from "next-i18next";
export const Settings: React.FC<SettingsProps> = () => {
  const { t } = useTranslation("Settings");
  return (
    <SettingsStyled>
      <WafeBottomSVG />
      <WafeTopSVG />
      <Container variants="auth">
        <Wrapper>
          <BlockStart>
            <NicknameTitle variants="headline2">{t("nicknameTitle")}</NicknameTitle>
            <NicknameText variants="subtitle1">{t("nicknameText")}</NicknameText>
            <NicknameInput placeholder={t("nicknameInputPlaceholder")} />
            <InputsTitle variants="headline2">E-mail</InputsTitle>
            <InputsText variants="subtitle1">{t("inputsText")} E-mail</InputsText>
            <Input placeholder={t("inputPlaceholderInputEmail")} />
            <Input placeholder={t("inputPlaceholderRepeatEmail")} />
            <Input placeholder={t("inputPlaceholderControlWord")} />
            <Button variants="contained" color="#FFD004">
              {t("ButtonSaveOne")}
            </Button>
          </BlockStart>
          <BlockEnd>
            <Image />
            <SettingYourPropfileTitle variants="headline2">{t("settingYourPropfileTitle")}</SettingYourPropfileTitle>
            <SettingYourPropfileText variants="body1">{t("settingYourPropfileText")}</SettingYourPropfileText>
            <InputsTitle variants="headline2">{t("inputsTitlePassword")}</InputsTitle>
            <InputsText variants="subtitle1">{t("inputsTextPassword")}</InputsText>
            <Input placeholder={t("inputOldPasswordPleceholder")} />
            <Input placeholder={t("inputNewPasswordPleceholder")} />
            <Input placeholder={t("inputRepeatNewPasswordPleceholder")} />
            <Button variants="contained" color="#FFD004">
              {t("ButtonSaveOne")}
            </Button>
          </BlockEnd>
        </Wrapper>
      </Container>
    </SettingsStyled>
  );
};
