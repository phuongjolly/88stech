import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const MainBanner2 = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.google.ca"]}
      />

      <div className="main-banner">
        <div className="creative-bg"></div>
        <div className="pattern"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="main-banner-content">
                <h1>Our highlighted in-house product</h1>
                <p>
                Portable Menu empowers restaurants to seamlessly connect with their customers.
                No more waiting to be served—customers can explore personalized recommendations and place orders instantly with just one click.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Get Started
                </Link>

                <div
                  className="btn btn-secondary"
                  onClick={() => setToggler(!toggler)}
                >
                  <i className="icofont-ui-play"></i> Watch Our Video
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="banner-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/img/main-banner.png"
                  alt="img"
                  width={560}
                  height={454}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bottom"></div>
      </div>
    </>
  );
};

export default MainBanner2;
