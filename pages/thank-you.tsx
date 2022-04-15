import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";
export const ThankYou = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className="text-primary dark:text-custom-dark text-center bg-custom-dark dark:bg-primary px-8 py-16 w-full rounded-lg shadow-lg"
    >
      <Head>
        <Meta />
        <Favicon />
      </Head>
      <p className="text-3xl">Thank you for contacting me 🧡</p>
      <p className="text-2xl pt-8">I'll reply as soon as possibile!</p>
    </motion.div>
  );
};

export default ThankYou;
