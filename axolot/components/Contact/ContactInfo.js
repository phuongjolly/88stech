import React from "react"; 

const ContactInfo = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="contact-box mb-5">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content">
              <h4>Phone / Fax</h4>
              <p>
                <a href="tel:+17782316571">(+1) 7782316571</a>
              </p>
              <p>
                <a href="tel:+16136188302">(+1) 6136188302</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="contact-box mb-5">
            <div className="icon">
              <i className="icofont-envelope"></i>
            </div>

            <div className="content">
              <h4>E-mail</h4>
              <p>
                <a href="mailto:@gmail.com">info@88stechnologies.com </a>
              </p>
              <p>
                <a href="mailto:@gmail.com.com">support@Axolot.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="contact-box mb-5">
            <div className="icon">
              <i className="icofont-google-map"></i>
            </div>

            <div className="content">
              <h4>Location</h4>
              <p>
                1225 Oxbow way,<span>Coquitlam, Canada. &nbsp; &nbsp; &nbsp;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
