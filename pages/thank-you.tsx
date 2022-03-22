import Link from "next/link";
import React from "react";
import styles from "../styles/Utils.module.css"

export const ThankYou = () => {
  return (
    <div className="absolute text-center bg-primary p-12 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="text-3xl">Thank you for contacting me 🧡</p>
      <p className="text-2xl pt-8">I'll reply as soon as possibile!</p>
      <p className="pt-8 inline-block">
        Return to <span className="relative block overflow-hidden">
        <Link href="/">
          <a className="underline-animation">
            www.thomasbrandoli.dev
          </a>
        </Link>
          </span>
      </p>
    </div>
  );
};

export default ThankYou;
