import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const howItWorksData = [
  {
    icon: "icofont-login",
    title: "Login First",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "100",
  },
  {
    icon: "icofont-test-tube-alt",
    title: "Face Testing",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "200",
  },
  {
    icon: "icofont-chart-histogram-alt",
    title: "Data Analysis",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "300",
  },
  {
    icon: "icofont-light-bulb",
    title: "Show Result",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "400",
  },
];

const HowItWorks = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <section
        id="how-it-works"
        className="how-it-works wave-one-how-it-works gray-bg"
      >
        <div className="wave-bg-section-tb-one"></div>
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>How it works?</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hiw-feature-content">
                {howItWorksData &&
                  howItWorksData.map((value, i) => (
                    <div
                      className="single-hiw-feature"
                      data-aos="fade-in"
                      data-aos-duration={value.duration}
                      data-aos-delay={value.delay}
                      key={i}
                    >
                      <i className={value.icon}></i>
                      <h4>{value.title}</h4>
                      <p>{value.text}</p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div
                className="video-demo-content"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <Image
                  src="/images/video-demo.jpg"
                  alt="Video Demo Image"
                  className="img-circle"
                  width={500}
                  height={500}
                />

                <div className="play-video-icon">
                  <div
                    className="popup-video"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="icofont-play"></i>
                    <div className="sonar-wrapper">
                      <div className="sonar-emitter">
                        <div className="sonar-wave"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/q5DsVVurRQ8"]}
      />
    </>
  );
};

export default HowItWorks;
