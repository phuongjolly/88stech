import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="repair-about-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="repair-about-content">
                <div className="section-title">
                  <span>About Us</span>
                  <h3>We have 40 years of experience in repair services</h3>
                  <p>
                    We enjoy adapting our strategies to offer every client the
                    best solutions that are at the forefront of the industry.
                  </p>
                </div>
                <ul>
                  <li>
                    <i className="icofont-users"></i> Experienced Professionals
                  </li>
                  <li>
                    <i className="icofont-mouse"></i> Expert Technical Skills
                  </li>
                  <li>
                    <i className="icofont-badge"></i> Excellent Reputation
                  </li>
                  <li>
                    <i className="icofont-handshake-deal"></i> Friendly Service
                  </li>
                </ul>
                <p>
                  <i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </i>
                </p>
                <Link href="/about" className="read-more-btn">
                  Read More About Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="repair-about-image">
                <Image
                  src="/img/about1.jpg"
                  alt="image"
                  width={264}
                  height={166}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-once="true"
                />

                <Image
                  src="/img/about2.jpg"
                  alt="image"
                  width={505}
                  height={337}
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-once="true"
                />

                <Image
                  src="/img/about3.jpg"
                  alt="image"
                  width={264}
                  height={166}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-once="true"
                />

                <Image
                  src="/img/about-shape1.png"
                  alt="image"
                  width={304}
                  height={305}
                />

                <Image
                  src="/img/about-shape2.png"
                  alt="image"
                  width={304}
                  height={305}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
