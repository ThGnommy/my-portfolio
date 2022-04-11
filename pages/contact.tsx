import { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import useTitle from "../hooks/useTitle";
import { AnimatePresence, motion } from "framer-motion";

export const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>{useTitle()}</title>
      </Head>
      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <h2 className="text-4xl font-medium pb-8">Contact Me</h2>
          <ContactForm />
        </motion.section>
      </AnimatePresence>
    </>
  );
};

export default Contact;
