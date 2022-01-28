import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Image
        className={classes.me}
        src="/images/me.jpg"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <div className={classes.navSection}>
        <h1>
          THOMAS BRANDOLI<span></span>
        </h1>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="#">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};