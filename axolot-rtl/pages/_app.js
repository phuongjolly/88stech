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
// RTL Styles
import "../styles/rtl.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          88's Technologies
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />

      <ScrollToTop />
    </>
  );
}

export default MyApp;
