import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import useTitle from "../hooks/useTitle";
import { motion } from "framer-motion";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";

export const MyPens: NextPage = () => {
  const DynamicCodePens = dynamic(() => import("../components/CodePens"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>{useTitle()}</title>
        <Meta />
        <Favicon />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.5,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <DynamicCodePens />
      </motion.div>
    </>
  );
};

export default MyPens;
