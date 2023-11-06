import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { HeaderMain, Footer } from "../modules";
import { SunnyWatt } from "../pageComponents";

const Home: NextPage = () => {
  const { t } = useTranslation("SingIn");

  return (
    <div>
      <HeaderMain />
      <SunnyWatt />
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Home"])),
    },
  };
}

export default Home;
