import Head from "next/head";
import Link from "next/link";
import { IconSadFace } from "../components/Utils/Icons/IconSadFace";
import useTitle from "../hooks/useTitle";
import classes from "../styles/404.module.css";

export default function ThankYou() {
  return (
    <div>
      <Head>
        <title>{useTitle()}</title>
      </Head>

      <h1 className="text-primary text-6xl">Thank you for contacting me!</h1>
    </div>
  );
}
