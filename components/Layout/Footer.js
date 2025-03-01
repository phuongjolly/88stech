import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h4 className="logo">
                  <Link href="/">
                    88's<span>Technologies</span>
                  </Link>
                </h4>
               
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <Link href="/">
                      <i className="icofont-double-right"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <i className="icofont-double-right"></i> About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <i className="icofont-double-right"></i> Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" target="_blank">
                      <i className="icofont-double-right"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Support</h3>
                <ul>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="icofont-double-right"></i> Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Resource
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Strategy
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <i className="icofont-double-right"></i> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="icofont-double-right"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Contact Info</h3>
                <p>88's Technologies</p>
                <ul className="contact-info">
                  <li>
                    <i className="icofont-google-map"></i> 
                    Coquitlam, Canada.
                  </li>
                  <li>
                    <i className="icofont-phone"></i> +1(778) 2316571
                  </li>
                  <li>
                    <i className="icofont-envelope"></i> support@88stechnologies.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <p>
                  © 88's Technologies{" "}
                </p>
              </div>

              <div className="col-lg-5 col-md-5">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="icofont-facebook"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="icofont-twitter"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="icofont-instagram"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="icofont-linkedin"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.vimeo.com/"
                      className="icofont-vimeo"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
