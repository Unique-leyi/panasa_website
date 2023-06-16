import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// import Swiper bundle with all modules installed
 import { Swiper, SwiperSlide } from 'swiper/react';

  // Import Swiper styles
  import 'swiper/css';

   // init Swiper:
  // const swiper = new Swiper(...);
import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import motion from 'framer-motion'
import Layout from "../src/components/Layout/Layout";
import Header from "../src/components/Header/Header";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return <Fragment>
          <Header/>
          <Layout>
            <Component {...pageProps} />
        </Layout>
        </Fragment>
  
}

export default MyApp
