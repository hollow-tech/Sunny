import Link from "next/link";
import Image from "next/image";

import {
  NotFoundStyled,
  NotFoundButton,
  NotFoundContent,
  NotFoundInner,
  NotFoundNumber,
  NotFoundText,
  NotFoundTitle,
} from "./NotFound.styles";
import { useTranslation } from "next-i18next";
import { HeaderMain } from "../../modules";

import { Container } from "../../components";

export const NotFound = () => {
  const { t } = useTranslation("NotFound");
  return (
    <>
      <HeaderMain />
      <NotFoundStyled>
        <Image src="/content/not-found/not-found-bg.jpg" layout="fill" objectFit="fill" />
        <Container variants="main">
          <NotFoundInner>
            <NotFoundContent>
              <NotFoundTitle variants="headline2">{t("notFoundTitle")}</NotFoundTitle>
              <NotFoundText variants="body1">{t("notFoundText")}</NotFoundText>
              <Link href="/" passHref>
                <NotFoundButton as="a" variants="contained" color="#FFD004">
                  {t("notFoundButton")}
                </NotFoundButton>
              </Link>
            </NotFoundContent>
            <NotFoundNumber>404</NotFoundNumber>
          </NotFoundInner>
        </Container>
      </NotFoundStyled>
    </>
  );
};
