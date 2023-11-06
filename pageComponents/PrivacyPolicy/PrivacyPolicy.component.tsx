import {
  PrivacyPolicyInner,
  PrivacyPolicyStyled,
  Text,
  Title,
} from "./PrivacyPolicy.styles";

import { content } from "./PrivacyPolicy.data";
import { Container } from "../../components";
import { useTranslation } from "next-i18next";

export const PrivacyPolicy = () => {
  const { t } = useTranslation("Privacy-policy");
  return (
    <PrivacyPolicyStyled>
      <Container variants="main">
        <PrivacyPolicyInner>
          <Title variants="headline1">{t("Политика конфиденциальности")}</Title>
          <Text as="div" variants="body1">
            {content.map((text, index) => (
              <p key={index}>{t(text)}</p>
            ))}
          </Text>
        </PrivacyPolicyInner>
      </Container>
    </PrivacyPolicyStyled>
  );
};
