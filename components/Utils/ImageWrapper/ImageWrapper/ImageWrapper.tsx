import classes from "./ImageWrapper.module.css";

interface ImageWrapperProps {
  children: React.ReactNode;
}

export const ImageWrapper = ({ children }: ImageWrapperProps) => {
  return <div className={classes.wrapper}>{children}</div>;
};
