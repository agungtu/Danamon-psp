import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const testimonialData = [
  {
    feedbackText: "Area Barat ( Jabar, Jabodetabek, Sumatra)",
    image: "/images/berrly.png",
    name: "Galih Beryl",
    designation: "Sales",
  },
];
const kastoni = [
  {
    feedbackText: "Area Tengah ( Jateng, DIY, Kalimantan)",
    image: "/images/kastoni.png",
    name: "Kastoni",
    designation: "Sales",
  },
];
const irwan = [
  {
    feedbackText: "Area Timur (Jatim, Sulawesi, Balinusra)",
    image: "/images/client/1.png",
    name: "Irwan Sa'ban",
    designation: "Sales",
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
                  <div className="testimonial-item" >
                    {/* <i className="icofont-quote-left"></i> */}
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
                      <Link
                        className="text-white"
                        href="https://api.whatsapp.com/send/?phone=6288227337622&text&type=phone_number&app_absent=0"
                        target="_blank"
                      >
                        Hubungi Sales
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            {kastoni &&
              kastoni.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-item">
                    {/* <i className="icofont-quote-left"></i> */}
                    <p className="description">
                      <q>{value.feedbackText}</q>
                      <br></br>
                      <br></br>
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
                      <Link
                        className="text-white"
                        href="https://api.whatsapp.com/send/?phone=62895346018233&text&type=phone_number&app_absent=0"
                        target="_blank"
                      >
                        Hubungi Sales
                      </Link>{" "}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            {irwan &&
              irwan.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-item">
                    {/* <i className="icofont-quote-left"></i> */}
                    <p className="description">
                      <q>{value.feedbackText}</q>
                      <br></br>
                      <br></br>
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
                      <Link
                        className="text-white"
                        href="https://api.whatsapp.com/send/?phone=681313905192&text&type=phone_number&app_absent=0"
                        target="_blank"
                      >
                        Hubungi Sales
                      </Link>{" "}
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
