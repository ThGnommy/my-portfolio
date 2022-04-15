import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { initial, inView, outView } from "./animations";

interface FabProps {
  show: boolean;
}

export const Fab = ({ show }: FabProps) => {
  useEffect(() => {
    (async () => {
      if (!("scrollBehavior" in document.documentElement.style)) {
        await import("scroll-behavior-polyfill");
      }
    })();
  }, []);

  return (
    <motion.div
      initial={initial}
      animate={!show ? inView : outView}
      className="fixed z-50 flex md:hidden bg-custom-dark dark:bg-primary justify-center items-center text-custom-dark bottom-4 right-4 rounded-full drop-shadow-2xl w-16 h-16 cursor-pointer"
      onClick={() =>
        window.scroll({
          behavior: "smooth",
          top: 0,
          left: 0,
        })
      }
    >
      <p className="text-xl">☝️</p>
    </motion.div>
  );
};
