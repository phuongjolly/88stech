import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner4 = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="main-banner bg-gray">
        <div className="pattern-2"></div>
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="main-banner-content">
                <h1>Make your business more profitable</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut.
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

            <div className="col-lg-5 col-md-6 offset-lg-1 offset-md-0">
              <div className="main-banner-form">
                <h3>Request a free quote</h3>

                <form>
                  <div className="form-group">
                    <input className="form-control" placeholder="Your Name" />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="form-group">
                    <select className="form-control">
                      <option> - Tell us what you need - </option>
                      <option>a website</option>
                      <option>a landing page</option>
                      <option>an iPhone app</option>
                      <option>an Android app</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <textarea
                      cols="30"
                      rows="4"
                      className="form-control"
                      placeholder="Details"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Get a Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="pattern"></div>
      </div>
    </>
  );
};

export default MainBanner4;
