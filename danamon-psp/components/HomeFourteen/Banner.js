import React, { useEffect, useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";

const bannerData = [
  {
    heading: "Manage all of your Stuff Using a Jibo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/app-mockup-1.png",
    video: "/video/presentation.mp4",
  },
];

const Banner = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      {bannerData &&
        bannerData.map((value, i) => (
          <div
            id="home"
            className="hompage-slides-wrapper video-bg angle-slides-wrapper-bg"
            key={i}
          >
            <div className="video-area">
              <video
                playsInline
                loop
                muted
                alt="App Promo"
                src={value.video}
                ref={videoEl}
              />
            </div>

            <div className="single-slider-item">
              <div className="slide-item-table">
                <div className="slide-item-tablecell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-lg-7">
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div className="slider-text">
                              <h1
                                className={
                                  isVisible
                                    ? "animated fadeInUp slow opacityOne"
                                    : ""
                                }
                              >
                                {value.heading}
                              </h1>
                              <p
                                className={
                                  isVisible
                                    ? "animated fadeInUp slow opacityOne"
                                    : ""
                                }
                              >
                                {value.text}
                              </p>

                              <div className="slide-button">
                                <a
                                  href="#"
                                  className={`
                                      slide-btn-white mr-10 ${
                                        isVisible
                                          ? "animated fadeInDown slow opacityOne"
                                          : ""
                                      }
                                  `}
                                >
                                  <i className="icofont-cloud-download"></i>
                                  Download
                                </a>
                                <a
                                  href="#"
                                  className={`
                                      slide-btn-bordered ${
                                        isVisible
                                          ? "animated fadeInDown slow opacityOne"
                                          : ""
                                      }
                                  `}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          )}
                        </VisibilitySensor>
                      </div>

                      <div className="col-md-12 col-lg-5">
                        <div className="welcome-phone">
                          <Image
                            src={value.image}
                            alt="App Mockup image"
                            width={400}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Banner;
