import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const howItWorksData = [
  {
    icon: "icofont-light-bulb",
    text: "Dengan solusi GoDigital yang dimiliki, bisa sebagai tools untuk Akuisisi Nasabah.",
    duration: "800",
    delay: "100",
  },
  {
    icon: "icofont-light-bulb",
    text: "Membantu mempertahankan Loyalitas Nasabah karena Nasabah merasa terbantu oleh solusi Teknologi dari perbankan",
    duration: "800",
    delay: "200",
  },
  {
    icon: "icofont-light-bulb",
    text: "Mendapatkan Fee Based dari transaksi yang dilakukan, seperti fee VA dan fee API transaksi bank.",
    duration: "800",
    delay: "300",
  },
  {
    icon: "icofont-light-bulb",
    text: "Dana Pihak Ketiga, pooling dana perputaran uang.",
    duration: "800",
    delay: "400",
  },
  {
    icon: "icofont-light-bulb",
    text: "Dengan konsep B2B2C, bisa dioptimalkan cross selling kepada nasabah individu di dalam ekosistem.",
    duration: "800",
    delay: "400",
  },
];

const Benefit = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <section id="benefit" className="how-it-works gray-bg">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "#ef5a26" }}>Benefit</h2>
            <h3 className="text-muted">Keuntungan Kolaborasi Bank dan TKI</h3>
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
                      <i
                        className={value.icon}
                        style={{ backgroundColor: "#ef5a26" }}
                      ></i>
                      <br></br>
                      <h5 className="text-muted">{value.text}</h5>
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div>
                <Image
                  src="/images/kolab.png"
                  alt="client Image"
                  width={500}
                  height={100}
                />
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

export default Benefit;
