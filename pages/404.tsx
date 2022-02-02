import Link from "next/link";
import { IconSadFace } from "../components/Utils/Icons/IconSadFace";
import classes from "../styles/404.module.css";

export default function Custom404() {
  return (
    <div className={classes.notFound}>
      <IconSadFace />
      <h1 className={classes.n}>404</h1>
      <h2>The page you’re looking for does not exist.</h2>
      <p>
        Return to <Link href="/">www.thomasbrandoli.dev</Link>
      </p>
    </div>
  );
}
