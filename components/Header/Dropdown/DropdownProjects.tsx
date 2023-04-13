import Link from "next/link";
import classes from "./Dropdown.module.css";
import { useRouter } from "next/router";
import styles from "./Dropdown.module.css";
import { useState } from "react";

export const DropdownProjects = () => {
  const router = useRouter();

  const [dropdownState, setDropdownState] = useState<"flex" | "hidden">(
    "hidden"
  );

  return (
    <ul
      onMouseEnter={() => setDropdownState("flex")}
      onMouseLeave={() => setDropdownState("hidden")}
      className={styles.dropdownContainer}
    >
      <li className="">PROJECTS</li>
      <div
        className={
          styles.dropdown + ` dark:bg-primary bg-custom-dark ${dropdownState}`
        }
      >
        <Link
          className="text-base px-1 cursor-pointer dark:text-custom-dark text-primary transition-colors duration-150"
          href="/web-projects"
        >
          Web
        </Link>
        <Link
          className="text-base px-1 cursor-pointer dark:text-custom-dark text-primary transition-colors duration-150"
          href="/mobile-projects"
        >
          Mobile
        </Link>
      </div>
    </ul>
  );
};
