import Head from "next/head";

import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { LayoutAuthorization } from "../layouts";
import { PasswordRecovery } from "../pageComponents";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function PasswordRecoveryPage({}: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
      </Head>
      <PasswordRecovery />
    </>
  );
}

PasswordRecoveryPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthorization>{page}</LayoutAuthorization>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["Password-recovery"])),
    },
  };
}
