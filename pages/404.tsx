import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NotFound } from "../pageComponents";

const NotFoundPage: NextPage = () => <NotFound />;

export async function getStaticProps({ locale }: any) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["NotFound"])),
      },
    };
  }
export default NotFoundPage;
