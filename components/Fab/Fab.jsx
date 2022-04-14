import React from "react";
import { motion } from "framer-motion";
import { initial, inView, outView } from "./animations";

export const Fab = ({ show }) => {
  return (
    <motion.div
      initial={initial}
      animate={!show ? inView : outView}
      className="fixed z-50 flex md:hidden bg-custom-dark dark:bg-primary justify-center items-center text-custom-dark bottom-4 right-4 rounded-full drop-shadow-2xl w-16 h-16 cursor-pointer"
      onClick={() => window.scrollTo(0, 0)}
    >
      <p className="text-xl">☝️</p>
    </motion.div>
  );
};
