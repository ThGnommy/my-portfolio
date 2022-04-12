import React, { useState } from "react";
import { ColorThemeSwitch } from "../ColorThemeSwitch/ColorThemeSwitch";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactChild | React.ReactChildren;
}

export const Layout = ({ children }: LayoutProps) => {
  // Dark is True - Light is False
  const [theme, setTheme] = useState(false);

  const handleDarkMode = () => {
    const doc = document.documentElement;
    if (localStorage.theme === undefined) {
      localStorage.setItem("theme", "dark");
      doc.classList.add("dark");
      setTheme(true);
    } else if (localStorage.theme === "dark") {
      doc.classList.remove("dark");
      setTheme(false);
      localStorage.clear();
    }
  };

  const useLayoutEffect =
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
      ? React.useLayoutEffect
      : React.useEffect;

  useLayoutEffect(() => {
    const doc = document.documentElement;
    // Create localstorage
    if (localStorage.theme === "dark") {
      doc.classList.add("dark");
      setTheme(true);
    }
  }, []);

  return (
    <main className="max-w-[1024px] mx-auto px-6 sm:px-24 text-custom-dark dark:text-primary pb-4">
      <ColorThemeSwitch isDark={theme} handleThemeFunc={handleDarkMode} />
      <Header />
      {children}
    </main>
  );
};
