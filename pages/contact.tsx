import { NextPage } from "next";
import Head from "next/head";
import useTitle from "../hooks/useTitle";
import { motion } from "framer-motion";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";

export const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>{useTitle()}</title>
        <Meta />
        <Favicon />
      </Head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <h2 className="text-4xl font-medium pb-8">Contact Me</h2>
        <ContactForm />
      </motion.section>
    </>
  );
};

export default Contact;
