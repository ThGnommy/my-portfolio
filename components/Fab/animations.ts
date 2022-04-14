const variants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.7, ease: "easeInOut" },
  },
  outView: {
    opacity: 0,
    y: 200,
    transition: { type: "spring", duration: 0.7, ease: "easeInOut" },
  },
};

export const { inView, outView, initial } = variants;
