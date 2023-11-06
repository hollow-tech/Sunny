import Head from "next/head";

import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { LayoutMain } from "../layouts";
import { Commision } from "../pageComponents";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CommissionPage({}: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
      </Head>
      <Commision />
    </>
  );
}

CommissionPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Commision"])),
    },
  };
}
