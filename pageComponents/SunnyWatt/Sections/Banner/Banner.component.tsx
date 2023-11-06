import Image from "next/image";
import { Container } from "../../../../components";
import { BannerContent, BannerImage, BannerInner, BannerStyled, BannerText, BannerTitle } from "./Banner.styles";
import { useTranslation } from "next-i18next";
import { FAQProps } from "./Banner.types";

const Banner: React.FC<FAQProps> = () => {
  const { t } = useTranslation("Home");
  return (
    <BannerStyled>
      <Image src="/content/banner/banner-bg.jpg" layout="fill" objectFit="cover" />
      <Container variants="main">
        <BannerInner>
          <BannerImage>
            <Image src="/content/banner/banner-image.jpg" width={708} height={480} />
          </BannerImage>
          <BannerContent>
            <BannerTitle variants="headline1">{t("BannerTitle")}</BannerTitle>
            <BannerText variants="body1" as="div">
              <p>{t("BannerTextOne")}</p>
              <p>{t("BannerTextTwo")}</p>
            </BannerText>
          </BannerContent>
        </BannerInner>
      </Container>
    </BannerStyled>
  );
};

export default Banner;
