import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import VisibilitySensor from "react-visibility-sensor";

const sliderData = [
  {
    heading: "Manage all of your Stuff Using a Jibo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/app-mockup-1.png",
  },
  {
    heading: "Awesome Jibo Mobile App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/app-mockup-2.png",
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        id="home"
        navigation={true}
        modules={[Navigation]}
        className="homepage-slides"
      >
        {sliderData &&
          sliderData.map((value, i) => (
            <SwiperSlide key={i}>
              <div 
                className="single-slider-item item-img-bg"
                style={{ backgroundImage: `url("/images/slider-item-bg.jpg")` }}
              >
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
                                    href="https://play.google.com/store/apps"
                                    target="_blank"
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
                            <img src={value.image} alt="App Mockup image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
