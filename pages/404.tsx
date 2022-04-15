import Head from "next/head";
import { IconSadFace } from "../components/Utils/Icons/IconSadFace";
import useTitle from "../hooks/useTitle";
import classes from "../styles/404.module.css";
import { motion } from "framer-motion";
import { Meta } from "../components/Utils/Meta";
import { Favicon } from "../components/Favicon/Favicon";
export default function Custom404() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className={classes.notFound + " text-custom-dark dark:text-primary"}
    >
      <Head>
        <title>{useTitle()}</title>
        <Meta />
        <Favicon />
      </Head>
      <IconSadFace />
      <h1 className={classes.n}>404</h1>
      <h2>The page you’re looking for does not exist.</h2>
    </motion.div>
  );
}
