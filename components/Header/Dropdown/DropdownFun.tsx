import Link from "next/link";
import classes from "./Dropdown.module.css";
import { useRouter } from "next/router";
import styles from "./Dropdown.module.css";
import { useState } from "react";

export const DropdownFun = () => {
  const router = useRouter();

  const [dropdownState, setDropdownState] = useState<"flex" | "hidden">(
    "hidden"
  );

  const handleDarkMode =
    router.pathname === "/other-projects" || router.pathname === "/pens"
      ? "text-secondary"
      : "text-custom-dark dark:text-primary";

  return (
    <ul
      onMouseEnter={() => setDropdownState("flex")}
      onMouseLeave={() => setDropdownState("hidden")}
      className={styles.dropdownContainer}
    >
      <li className={handleDarkMode}>FUN</li>
      <div
        aria-label="dropdown-fun"
        className={
          styles.dropdown + ` dark:bg-primary bg-custom-dark ${dropdownState}`
        }
      >
        <Link
          className="text-base px-1 cursor-pointer dark:text-custom-dark text-primary transition-colors duration-150"
          href="/pens"
        >
          Pens
        </Link>
        <Link
          className="text-base px-1 cursor-pointer dark:text-custom-dark text-primary transition-colors duration-150"
          href="/other-projects"
        >
          Mini Projects
        </Link>
      </div>
    </ul>
  );
};
