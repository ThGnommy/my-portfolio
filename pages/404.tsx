import Head from "next/head";
import { IconSadFace } from "../components/Utils/Icons/IconSadFace";
import useTitle from "../hooks/useTitle";
import classes from "../styles/404.module.css";

export default function Custom404() {
  return (
    <div className={classes.notFound + " text-custom-dark dark:text-primary"}>
      <Head>
        <title>{useTitle()}</title>
      </Head>
      <IconSadFace />
      <h1 className={classes.n}>404</h1>
      <h2>The page you’re looking for does not exist.</h2>
    </div>
  );
}
