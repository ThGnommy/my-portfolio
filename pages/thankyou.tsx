import { NextPage } from "next";
import Layout from "../components/Layout";

export const ThankYou: NextPage = () => {
  return (
    <Layout>
      <section>
        <h2 className="text-4xl font-medium pb-8">Thank you!</h2>
      </section>
    </Layout>
  );
};

export default ThankYou;
