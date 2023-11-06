import Head from "next/head";

import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { LayoutAside } from "../layouts";
import { Withdrawal } from "../pageComponents";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function WithdrawalPage({}: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
      </Head>
      <Withdrawal />
    </>
  );
}

WithdrawalPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAside>{page}</LayoutAside>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Withdrawal"])),
    },
  };
}
