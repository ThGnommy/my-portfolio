import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import classes from "./Header.module.css";

export const Header = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
  }, []);

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
          <Link href="/">
            <a
              className={
                router.pathname === "/" ? "text-secondary" : "text-primary"
              }
            >
              HOME
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                router.pathname === "/projects"
                  ? "text-secondary"
                  : "text-primary"
              }
            >
              PROJECTS
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname === "/contact"
                  ? "text-secondary"
                  : "text-primary"
              }
            >
              CONTACT
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};
