import "../styles/globals.css";
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  id: "GTM-K5R3KPC",
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs as any);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
