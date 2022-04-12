import { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import useTitle from "../hooks/useTitle";
import { AnimatePresence, motion } from "framer-motion";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";

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
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <h2 className="text-4xl font-medium pb-8">Contact Me</h2>
        <ContactForm />
      </motion.section>
    </>
  );
};

export default Contact;
