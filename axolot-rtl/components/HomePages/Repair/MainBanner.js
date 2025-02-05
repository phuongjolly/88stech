import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const MainBanner = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper repair-home-slides mt-75"
      >
        <SwiperSlide>
          <div className="repair-main-banner item-bg1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="repair-banner-content">
                    <h2>Your Local Computer Repair Experts</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="banner-video text-center">
                    <div onClick={() => setToggler(!toggler)}>
                      <i className="icofont-ui-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="repair-main-banner item-bg2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="repair-banner-content">
                    <h2>Computer Repairs Any Brand, Any Problem</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="banner-video text-center">
                    <div onClick={() => setToggler(!toggler)}>
                      <i className="icofont-ui-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="repair-main-banner item-bg3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="repair-banner-content">
                    <h2>Multi-Brand Onsite PC Support</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor dolore magna aliqua.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="banner-video text-center">
                    <div onClick={() => setToggler(!toggler)}>
                      <i className="icofont-ui-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
