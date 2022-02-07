import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconArrow } from "../Utils/Icons/IconArrow";
import classes from "./Header.module.css";

export const Header = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <Image
        className={classes.me}
        src="/images/me.jpg"
        width="100%"
        height="100%"
        objectFit="cover"
        quality={50}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=="
        alt="avatar"
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
          <Link href="/pens">
            <a
              className={
                router.pathname === "/pens" ? "text-secondary" : "text-primary"
              }
            >
              PENS
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
