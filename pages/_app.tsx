import "../styles/globals.css";
import type { AppProps } from "next/app";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  id: "G-SMPR3T9YNZ",
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs as any);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
