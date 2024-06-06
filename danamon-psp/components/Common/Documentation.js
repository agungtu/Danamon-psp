import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const screenshotsData = [
  {
    image: "/images/screenshot/screenshots1.png",
  },
  {
    image: "/images/screenshot/screenshots2.png",
  },
  {
    image: "/images/screenshot/screenshots3.png",
  },
  {
    image: "/images/screenshot/screenshots4.png",
  },
  {
    image: "/images/screenshot/screenshots5.png",
  },
];
const Sekolah = [
  {
    icon: "icofont-sun",
    // title: "Sekolah",
    duration: "800",
    delay: "100",
  },
];
const Screenshots = () => {
  return (
    <>
      <section id="documentation" className="app-screenshots-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 className="text-green" style={{color: "#ef5a26"}}>DOCUMENTATION</h2>
            <h3 className="text-muted">Kelengkapan dokumen serta tim kami</h3>
          </div>

          {Sekolah &&
            Sekolah.map((value, i) => (
              <center>
                <div className="col-md-4 col-lg-6" key={i}>
                  <div
                    className="single-feature mb-30"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <h4>&nbsp;Penawaran</h4>
                    <ul>
                      <li>
                        <div
                          className="
                                      "
                        >
                          <a href="https://docs.google.com/document/d/19QapvWhm21Vm7vY200WbEBfOqrFYGHez6N1dh0QlmP0/edit" target="_blank">
                            Lihat Detail
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>PKS</h4>
                    <ul>
                      <li>
                        <div
                          className="
                                      "
                        >
                          <a href="https://docs.google.com/document/d/1Tbo1OTFrmpNHq0vI0ZJnSBl9VF-bH5K0hAyDDeTduFs/edit" target="_blank">
                            Lihat Detail
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Tabel Kesepakatan Harga</h4>
                    <ul>
                      <li>
                        <div
                          className="
                          
                                      "
                        >
                          <a href="https://docs.google.com/document/d/1EqcAVAEt1mQ2FL2At7_jA_SHUnZMb7APX6MD3_J_hAc/edit" target="_blank">
                            Lihat Detail
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Form EStimasi Implementasi</h4>
                    <ul>
                      <li>
                        <div
                          className="
                          
                                      "
                        >
                          <a href="https://docs.google.com/document/d/1-7rRpUfh_HceVFLYADXacvvHwowc0QhVydKnPdKFh64/edit" target="_blank">
                            Lihat Detail
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </center>
            ))}
        </div>
      </section>
    </>
  );
};

export default Screenshots;
