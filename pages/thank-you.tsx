import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
export const ThankYou = () => {
  return (
    <div className="text-primary dark:text-custom-dark text-center bg-custom-dark dark:bg-primary px-8 py-16 w-full rounded-lg shadow-lg">
      <p className="text-3xl">Thank you for contacting me 🧡</p>
      <p className="text-2xl pt-8">I'll reply as soon as possibile!</p>
      {/* <p className="pt-8 inline-block">
        Return to{" "}
        <span className="relative block overflow-hidden">
          <Link href="/">
            <a className="dark:underline-animation underline-animation-light">
              www.thomasbrandoli.dev
            </a>
          </Link>
        </span>
      </p> */}
    </div>
  );
};

export default ThankYou;
