import Layout from "../components/Layout";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "../shared/Globalstyles";
import "../public/fonts/fonts.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Planets Fact Site</title>
        <meta name="description" content="facts about planets" />
      </Head>
      <GlobalStyle />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
