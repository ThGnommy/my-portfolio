import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { Favicon } from "../components/Favicon/Favicon";
import useTitle from "../hooks/useTitle";

const Home: NextPage = () => {
  const home = `&#x26F4;`;
  const hello = `&#x1F44B;`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Head>
          <title>{useTitle()}</title>
          <meta name="description" content="Thomas Brandoli Portfolio" />
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
            videogame 🕹️, at jumping rope, or outside walking 🚶‍♂️ and running 🏃‍♂️
            in the nature 🌳.
          </p>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
