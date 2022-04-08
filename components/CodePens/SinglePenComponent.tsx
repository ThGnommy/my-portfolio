import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { containerOpen, iframeOpen, closed } from "./animations";

interface PenProps {
  penTitle: string;
  id: string;
}

export const SinglePenComponent: React.FC<PenProps> = ({ penTitle, id }) => {
  const [selected, setSelected] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className={`flex relative justify-center items-center w-80 h-80 m-4 bg-custom-dark 
        ${selected ? "dark:bg-custom-dark" : "dark:bg-primary"}
         rounded-lg text-center transition-all ease-out`}
        onClick={() => setSelected((prev) => !prev)}
        initial={false}
        animate={selected ? containerOpen : closed}
      >
        {!selected ? (
          <motion.h3 className="dark:text-custom-dark text-primary text-2xl italic ml-2 py-1">
            ✍️ {penTitle}
          </motion.h3>
        ) : (
          <motion.iframe
            initial={{ opacity: 0 }}
            animate={iframeOpen}
            className="z-50 rounded-lg"
            height="100%"
            width="100%"
            onClick={() => setSelected((prev) => !prev)}
            scrolling="no"
            title={penTitle}
            src={`https://codepen.io/thgnommy/embed/preview/${id}?default-tab=&theme-id=dark`}
            frameBorder="no"
            loading="eager"
            allowFullScreen={true}
          >
            See the Pen{" "}
            <a href={`https://codepen.io/thgnommy/pen/${id}`}>
              Success - Experience
            </a>{" "}
            by Thomas Brandoli (
            <a href="https://codepen.io/thgnommy">@thgnommy</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </motion.iframe>
        )}
        {selected && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={
              selected
                ? { opacity: 1, transition: { delay: 0.7 } }
                : { opacity: 0 }
            }
            className="absolute text-[#eeeeee] rotate-90 px-8 py-2 -right-14 top-1/2 -translate-y-1/2 rounded-[2px] shadow-[inset_0px_3px_#797979] bg-[#555555] z-50"
          >
            Close
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
