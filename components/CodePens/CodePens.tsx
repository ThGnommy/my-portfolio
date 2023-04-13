import { motion } from "framer-motion";
import { SinglePenComponent } from "./SinglePenComponent";
import { InView } from "react-intersection-observer";
import { Fab } from "../Fab/Fab";

export const CodePens = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className="relative"
    >
      <motion.h2 className="text-4xl font-medium pb-4">Codepens</motion.h2>
      <InView>
        {({ ref, inView }) => (
          <>
            <motion.p ref={ref} className="text-xl pb-8 font-light">
              Having fun in my free time
            </motion.p>
            <Fab show={inView} />
          </>
        )}
      </InView>

      <motion.div className="flex flex-wrap justify-center items-center w-full mb-8">
        <SinglePenComponent penTitle="Less is More" id="gORgBXz" />
        <SinglePenComponent penTitle="Anxiety" id="powRYmw" />
        <SinglePenComponent penTitle="Insanity" id="rNGKjKN" />
        <SinglePenComponent penTitle="Success - Experience" id="wveoEMe" />
        <SinglePenComponent penTitle="Truth - Perspective" id="xxrEJZa" />
        <SinglePenComponent penTitle="Talk doesn't cook rise" id="JjJbbZO" />
        <SinglePenComponent penTitle="Change" id="oNwzONg" />
        <SinglePenComponent
          penTitle="Less fear, more understanding"
          id="VwWjROj"
        />
      </motion.div>
    </motion.section>
  );
};
