import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="about" className="app-about-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>About Our App</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                className="app-about-text"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <h3>Best Mobile App</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <p>
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet tend
                  to repeat predefined chunks as necessary, making this the
                  first true generator on the Internet.
                </p>

                <ul>
                  <li>
                    <i className="icofont-verification-check"></i> Responsive
                    design
                  </li>
                  <li>
                    <i className="icofont-verification-check"></i> Easy to
                    customize
                  </li>
                  <li>
                    <i className="icofont-verification-check"></i> Modern design
                  </li>
                </ul>

                <a
                  href="https://play.google.com/store/apps"
                  className="default-button"
                  target="_blank"
                >
                  <i className="icofont-cloud-download"></i>
                  Download Now
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="text-center"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Image
                  src="/images/app-about.jpg"
                  alt="App About Image"
                  width={600}
                  height={525}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
