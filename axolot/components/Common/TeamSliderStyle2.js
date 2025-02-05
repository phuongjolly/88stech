import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const TeamSliderStyle2 = () => {
  return (
    <>
      <section id="team" className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Team</span>
            <h3>Our Team Members</h3>
            <p>
            Our team is a diverse group of professionals from Vietnam, the US, and Canada, bringing together a rich blend of cultures, expertise, and perspectives.
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
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper team-slides"
          >
            <SwiperSlide>
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/dev3.jpg"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Phuong Le</h3>
                  <span className="post">Web Developer/ServiceNow Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/dev2.jpg"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Daniel Tran</h3>
                  <span className="post">Software Architecture</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/dev2.png"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Mike Nguyen</h3>
                  <span className="post">Web Developer / Designer</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/dev2.png"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Beck Nguyen</h3>
                  <span className="post">Web Developer / ServiceNow Developer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          
        </div>
      </section>
    </>
  );
};

export default TeamSliderStyle2;
