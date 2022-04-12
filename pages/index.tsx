import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { Favicon } from "../components/Favicon/Favicon";
import { Meta } from "../components/Utils/Meta";
import useTitle from "../hooks/useTitle";

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Head>
        <title>{useTitle()}</title>
        <Meta />
        <Favicon />
      </Head>

      <section className="pb-8">
        <h2 className="text-5xl font-light pb-8">
          👋 hello there, I&apos;m Thomas.
        </h2>
        <p className="text-lg font-thin">
          📍 I'm a Front End Developer from Modena, Italy.
        </p>
        <br />
        <p className="text-lg font-thin">
          🧑🏻‍💻 I'm focused on JavaScript and React.
        </p>
        <br />
        <p className="text-lg font-thin">
          👀 Aside from my job, I like to explore other technologies, and
          programming languages. Currently, I enjoy playing with the 🤖 Godot
          Game Engine.
        </p>
        <br />
        <p className="text-lg font-thin">
          ☀️ When I don't code, you can find me immersed in a book 📖, in a
          videogame 🕹️, at jumping rope, or outside walking 🚶‍♂️ and running 🏃‍♂️ in
          the nature 🌳.
        </p>
      </section>
    </motion.div>
  );
};

export default Home;
