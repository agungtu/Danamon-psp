import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const testimonialData = [
  {
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.",
    image: "/images/client/1.png",
    name: "Wade",
    designation: "UI/UX Designer",
  },
  {
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.",
    image: "/images/client/2.png",
    name: "Dave",
    designation: "React Developer",
  },
  {
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.",
    image: "/images/client/3.png",
    name: "Brian",
    designation: "Angular Developer",
  },
  {
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.",
    image: "/images/client/4.png",
    name: "Miles",
    designation: "Vue.js Developer",
  },
];

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="testimonial-section">
        <div className="container">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="testimonial-slider"
          >
            {testimonialData &&
              testimonialData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-item">
                    <i className="icofont-quote-left"></i>
                    <p className="description">
                      <q>{value.feedbackText}</q>
                    </p>
                    <div className="testimonial-content">
                      <div className="pic">
                        <Image
                          src={value.image}
                          alt="client Image"
                          width={100}
                          height={100}
                        />
                      </div>
                      <h3 className="title">{value.name}</h3>
                      <span className="post">{value.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
