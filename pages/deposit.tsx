import Head from "next/head";

import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { LayoutAside } from "../layouts";
import { Deposit } from "../pageComponents";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function DepositPage({}: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
      </Head>
      <Deposit />
    </>
  );
}

DepositPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAside>{page}</LayoutAside>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Deposit"])),
    },
  };
}