import "../styles/globals.css";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  id: "G-3K07S7K4GR",
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs as any);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
