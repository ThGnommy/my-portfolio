import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
<<<<<<< HEAD
=======

const tagManagerArgs = {
  id: "GTM-K5R3KPC",
};
>>>>>>> development

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence>
        <LazyMotion features={domAnimation}>
          <Component {...pageProps} key={router.pathname} />
        </LazyMotion>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
