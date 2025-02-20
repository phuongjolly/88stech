import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const ServicesSlider = () => {
  return (
    <>
      <section id="services" className="services-area bg-gray ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h3>We provide best service for you customers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper services-slides"
          >
            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-ruler-pencil"></i>
                <h3>Software Consultant</h3>
                <p>
                With experience in large-scale global projects, we help you understand your potential and achieve it faster and stronger with expert guidance.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-laptop-alt"></i>
                <h3>Web Design</h3>
                <p>
                We keep our designs modern and innovative. Our creative design team collaborates closely with you to understand your vision,
                crafting robust architectures, optimizing performance, and delivering seamless user experiences with precision and innovation.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-letterbox"></i>
                <h3>Build Website/Application</h3>
                <p>
                Tell us what you need—we handle everything from concept to final product, delivering high-quality websites and applications tailored to your vision.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-support"></i>
                <h3>Helping Support</h3>
                <p>
                Beyond supporting our own products, we also help troubleshoot and optimize your existing solutions, ensuring seamless performance and reliability.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ServicesSlider;
