const variants = {
  containerOpen: {
    width: "100%",
    height: "500px",
    transition: { duration: 0.5, type: "spring" },
  },
  closed: {
    width: "350px",
    height: "350px",
    transition: { type: "spring", duration: 0.5 },
  },
  iframeOpen: {
    opacity: 1,
    transition: { type: "spring", duration: 0.5, delay: 0.5 },
  },
};

export const { containerOpen, iframeOpen, closed } = variants;