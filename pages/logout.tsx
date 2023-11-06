import Head from "next/head";

import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { LayoutAside } from "../layouts";

export default function LogoutPage({}: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="description" />
      </Head>
      <div>Support</div>
    </>
  );
}

LogoutPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAside>{page}</LayoutAside>;
};

export const getServerSideProps: GetServerSideProps<any> = async () => {
  try {
    return {
      props: {},
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
