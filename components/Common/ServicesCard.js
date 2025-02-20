import React from "react";

const ServicesCard = () => {
  return (
    <>
      <section id="services" className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h3>Software Consultant</h3>
            <p>
            With experience in large-scale global projects, we help you understand your potential and achieve it faster and stronger with expert guidance.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="single-services text-center">
                <i className="icofont-ruler-pencil"></i>
                <h3>Software Design</h3>
                <p>
                Our creative design team collaborates closely with you to understand your vision,
                crafting robust architectures, delivering seamless user experiences with precision and innovation.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <div className="single-services text-center">
                <i className="icofont-ssl-security"></i>
                <h3>Build Website/Application</h3>
                <p>
                Tell us what you need—we handle everything from concept to final product, delivering high-quality websites and applications tailored to your vision.
                </p>
              </div>
            </div>

            
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <div className="single-services text-center">
                <i className="icofont-support"></i>
                <h3>Service Maintenance</h3>
                <p>
                Beyond supporting our own products, we also help troubleshoot and optimize your existing solutions, ensuring seamless performance and reliability.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <div className="single-services text-center">
                <i className="icofont-support"></i>
                <h3>Online Marketing</h3>
                <p>
                We provide support for running online marketing campaigns across multiple platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
