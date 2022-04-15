import { NextPage } from "next";
import Head from "next/head";
import useTitle from "../hooks/useTitle";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";
import CodePens from "../components/CodePens";

export const MyPens: NextPage = () => {
  // const DynamicCodePens = dynamic(() => import("../components/CodePens"), {
  //   ssr: false,
  // });

  return (
    <>
      <Head>
        <title>{useTitle()}</title>
        <Meta />
        <Favicon />
      </Head>

      <CodePens />
    </>
  );
};

export default MyPens;
