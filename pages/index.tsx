import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/";

const Home: NextPage = () => {
  const home = `&#x26F4;`;

  return (
    <div>
      <Head>
        <title>Thomas Brandoli</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <h2 className="text-5xl font-light pb-8">hello, I&apos;m Thomas.</h2>
          <p className="text-lg font-thin">
            I'm a web developer from Modena, Italy. I'm specializing in React
            Framework, but I like also to explore other technologies, and
            programming languages.
          </p>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
