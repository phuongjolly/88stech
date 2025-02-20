import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="about-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>About Us</span>
            <h3>We provide the best services for our customers</h3>
            <p>
            Our team specializes in building websites and applications, as well as providing ServiceNow resources. 
            Backed by highly experienced developers who have worked at prestigious companies like Amazon and Facebook, 
            we are dedicated to delivering exceptional services to our customers.
            </p>
          </div>

          <div className="style-border">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <h3>
                    From Concept To Deployment
                  </h3>
                  <p>
                  We never stop innovating and constantly explore ways to contribute to improving daily life. 
                  Our innovation department consistently generates creative ideas and brings them to reality. 
                  Alternatively, if you have an idea you'd like to bring to life, let us make it happen for you.
                  </p>

                  <ul className="pull-left">
                    <li>
                      <i className="icofont-ui-check"></i> Bring Your Idea to Life
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Solutions Consultant
                    </li>
                    
                  </ul>

                  <ul>
                    <li>
                      <i className="icofont-ui-check"></i> Delivering Creative Designs
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Ensure High-Scale Infrastructure
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Offer Permanent Maintenance
                    </li>
                  </ul>

                  <Link href="/about" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="about-img right-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image
                    src="/img/about.png"
                    alt="about"
                    width={605}
                    height={525}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*<div className="style-border">
            <div className="row mt-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div
                  className="img left-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image src="/img/1.png" alt="img" width={500} height={400} />
                </div>
              </div>
              
              <div className="col-lg-6 col-md-6">
                <div className="about-text mb-0">
                  <span>.01</span>
                  <h3>Get Started with our software</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <ul>
                    <li>
                      <i className="icofont-ui-check"></i> Creative Design
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Retina Ready
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Modern Design
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Digital Marketing &
                      Branding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="style-border">
            <div className="row mt-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-text mt-0">
                  <span>.02</span>
                  <h3>Solve your problem faster</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <ul>
                    <li>
                      <i className="icofont-ui-check"></i> Creative Design
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Retina Ready
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Modern Design
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Digital Marketing &
                      Branding
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="img right-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image src="/img/2.png" alt="img" width={500} height={400} />
                </div>
              </div>
            </div>
          </div>

          <div className="style-border">
            <div className="row mt-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div
                  className="img left-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image src="/img/3.png" alt="img" width={500} height={400} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-text mb-0">
                  <span>.03</span>
                  <h3>All In one for all products</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <blockquote className="blockquote">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="style-border">
            <div className="row mt-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-text mt-0">
                  <span>.04</span>
                  <h3>We provide proffesional staff</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <blockquote className="blockquote">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="img right-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image src="/img/4.png" alt="img" width={500} height={400} />
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
