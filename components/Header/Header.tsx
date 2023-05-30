import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Line } from "./Line";
import avatarPic from "../../public/images/me.jpg";
import { DropdownFun } from "./Dropdown/DropdownFun";
import { DropdownProjects } from "./Dropdown/DropdownProjects";
import { GithubIcon, ItchIOIcon, LinkedinIcon } from "./HeaderIcons";
export const Header = () => {
  const router = useRouter();

  const [anim, setAnim] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setAnim(false));
    router.events.on("routeChangeComplete", () => setAnim(true));
    router.events.on("routeChangeError", () => setAnim(false));
    return () => {
      router.events.off("routeChangeStart", () => setAnim(false));
      router.events.off("routeChangeComplete", () => setAnim(true));
      router.events.off("routeChangeError", () => setAnim(false));
    };
  }, [router]);

  return (
    <header className={styles.header}>
      <Image
        className={styles.me}
        src={avatarPic}
        width={100}
        height={100}
        quality={50}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg=="
        alt="avatar"
      />
      <div className={styles.navSection}>
        <section className="flex justify-start items-center gap-4">
          <div className="flex flex-col">
            <h1>THOMAS BRANDOLI</h1>
            <Line
              className={`bg-secondary ${
                anim && "animate-line-animation"
              } w-10`}
            />
          </div>
          <div className="flex -mt-3 justify-center items-end gap-3">
            <GithubIcon />
            <LinkedinIcon />
            <ItchIOIcon />
          </div>
        </section>
        <nav>
          <Link legacyBehavior href="/">
            <a
              className={
                router.pathname === "/"
                  ? "text-secondary"
                  : "text-custom-dark dark:text-primary"
              }
            >
              HOME
            </a>
          </Link>
          <DropdownProjects />
          <DropdownFun />
          <Link legacyBehavior href="/contact">
            <a
              className={
                router.pathname === "/contact"
                  ? "text-secondary"
                  : "text-custom-dark dark:text-primary"
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

export default Header;
