import { Container, OutputCard } from "../../components";
import { Text, Title, CommisionWrapper, CommisionItem } from "./Commision.styles";
import { useTranslation } from "next-i18next";

import { data } from "./Commision.data";

export const Commision = () => {
  const { t } = useTranslation("Commision");
  return (
    <Container variants="main">
      <Title variants="headline1">{t("CommisionTitle")}</Title>

      {data.map((item) => {
        if (typeof item === "string") {
          return <Text variants="body1">{t(item)}</Text>;
        }

        if (Array.isArray(item)) {
          return (
            <CommisionWrapper>
              {item.map(({ commision, outputTitle, percent }) => (
                <CommisionItem>
                  <OutputCard percent={t(percent)} outputTitle={t(outputTitle)} commision={t(commision)} />
                </CommisionItem>
              ))}
            </CommisionWrapper>
          );
        }
      })}
    </Container>
  );
};
