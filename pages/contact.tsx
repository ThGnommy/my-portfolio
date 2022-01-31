import { NextPage } from "next";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

export const Contact: NextPage = () => {
  return (
    <Layout>
      <section>
        <h2 className="text-4xl font-medium pb-8">Contact Me</h2>
        <ContactForm />
      </section>
    </Layout>
  );
};

export default Contact;
