import { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import useTitle from "../hooks/useTitle";

export const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>{useTitle()}</title>
      </Head>

      <section>
        <h2 className="text-4xl font-medium pb-8">Contact Me</h2>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
