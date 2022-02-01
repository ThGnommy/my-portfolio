import { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

export const MyPens: NextPage = () => {
  const DynamicCodePens = dynamic(() => import("../components/CodePens"), {
    ssr: false,
  });

  return (
    <Layout>
      <DynamicCodePens />
    </Layout>
  );
};

export default MyPens;
