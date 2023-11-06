import Head from "next/head";

import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { LayoutAuthorization } from "../layouts";
import { SignUp } from "../pageComponents";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SignUpPage({}: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
      </Head>
      <SignUp />
    </>
  );
}

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthorization>{page}</LayoutAuthorization>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["SingUp"])),
    },
  };
}
