import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/icofont.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-accessible-accordion/dist/fancy-example.css";
// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/presentation.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>88's Technologies | Accelerating The Future</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
        <meta
          name="description"
          content="88's Technologies Inc. — independent software company in Coquitlam, BC, Canada, building mobile apps, games, and AI-driven experiences including QuestMandarin."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="88's Technologies" />
      </Head>

      <Component {...pageProps} />

      <ScrollToTop />
    </>
  );
}

export default MyApp;
