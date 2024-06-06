import React from "react";

const Sekolah = [
  {
    icon: "icofont-sun",
    title: "Sekolah",
    duration: "800",
    delay: "100",
  },
];
const Universitas = [
  {
    icon: "icofont-sun",
    title: "Universitas",
    duration: "800",
    delay: "100",
  },
];
const Company = [
  {
    icon: "icofont-sun",
    title: "Perusahaan / Company",
    duration: "800",
    delay: "100",
  },
];
const Koperasi = [
  {
    icon: "icofont-sun",
    title: "Koperasi",
    duration: "800",
    delay: "100",
  },
];
const General = [
  {
    icon: "icofont-sun",
    title: "General",
    duration: "800",
    delay: "100",
  },
];
const Features = () => {
  return (
    <>
      <div id="features" className="awsome-features pt-100 pb-70">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "#ef5a26" }}>PRODUCT & SOLUTION</h2>
            <h3 className="text-muted">Produk dan Kolaborasi</h3>
          </div>

          <div className="row justify-content-center">
            {Sekolah &&
              Sekolah.map((value, i) => (
                <div className="col-md-6 col-lg-4 rounded-5" key={i}>
                  <div
                    className="single-feature mb-30"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="feature-icon">
                      <i className={value.icon}></i>
                    </div>
                    <h4>Platform Sekolah Pintar</h4>
                    <ul>
                      <li className="text-muted">
                        Telah Digunakan Lebih Dari 1200 Sekolah.{" "}
                      </li>
                    </ul>
                    <h4>Flyer Platform Sekolah Pintar</h4>
                    <ul>
                      <li>
                        <div
                          className="
                                      "
                        >
                          <a href="https://platformsekolahpintar.framer.website">
                            Flyer Platform Sekolah Pintar
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Materi Platform Sekolah Pintar</h4>
                    <ul>
                      <li>
                        <div
                          className="
                          
                                      "
                        >
                          <a
                            href="https://www.canva.com/design/DAF6Gx0mMfo/aUoIsjAgYjtdgSkcouWoJw/view?utm_content=DAF6Gx0mMfo&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
                            target="_blank"
                          >
                            Materi Platform Sekolah Pintar{" "}
                          </a>
                        </div>
                      </li>
                      <br></br>
                      <li>
                        <div
                          className="
                          
                                      "
                        >
                          <a
                            href="https://www.canva.com/design/DAF9OUsD3po/w5X6zrSPAz5bPJPpwklf2A/view"
                            target="_blank"
                          >
                            Materi Platform Sekolah Pintar NEGERI
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Video Pembeljaran</h4>
                    <ul>
                      <li>
                        <div
                          className="
                                       
                                      "
                        >
                          <a
                            href="https://www.youtube.com/watch?v=N9WKBr5couA&t=33s"
                            target="_blank"
                          >
                            Video Pembelajaran
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            {Universitas &&
              Universitas.map((value, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div
                    className="single-feature mb-30"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="feature-icon">
                      <i className={value.icon}></i>
                    </div>
                    <h4>{value.title}</h4>
                    <ul>
                      <li className="text-muted">
                        Universitas Menggunakan Closepay : IPB, ITS, Untirta,
                        UNS
                      </li>
                    </ul>
                    <h4>Flyer Universitas</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a href="#">Flyer Universitas (on progress)</a>
                        </div>
                      </li>
                    </ul>
                    <h4>Materi Universitas</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a
                            href="https://www.canva.com/design/DAF8XHnY7HE/arsNcAvPbDYiY-bk6qJs8Q/view"
                            target="_blank"
                          >
                            Materi Universitas
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Video Pembelajaran</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a
                            href="https://www.youtube.com/watch?v=N9WKBr5couA&t=33s"
                            target="_blank"
                          >
                            Digitalisasi Universitas
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            {General &&
              General.map((value, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div
                    className="single-feature mb-30"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="feature-icon">
                      <i className={value.icon}></i>
                    </div>
                    <h4>{value.title}</h4>
                    <ul>
                      <li className="text-muted">
                        Beberapa Komunitas Telah Menggunakan Closepay
                      </li>
                    </ul>
                    <h4>Flyer General</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a href="#">Flyer General</a>
                        </div>
                      </li>
                    </ul>
                    <h4>Materi Materi General</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a
                            href="https://www.canva.com/design/DAF8jYUIO2o/-hDzMavRWRL95mlOqUrcpg/view?utm_content=DAF8jYUIO2o&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                            target="_blank"
                          >
                            Mmebership General{" "}
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="">
                          <a
                            href="https://www.canva.com/design/DAF8jbeOO8U/T1gppchBJY9Q5EqtrkcSdg/view"
                            target="_blank"
                          >
                            Parkir{" "}
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="">
                          <a
                            href="https://www.canva.com/design/DAF8jTANB28/BoBk12zFmua3iekZ7x7YAg/view"
                            target="_blank"
                          >
                            Wisata{" "}
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="">
                          <a href="#">Mmebership Khusus </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Video Pembelajaran</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a
                            href="https://www.instagram.com/reel/C3mbIYfrZ2h/?igsh=azJ2b3ZiNXFscHI4"
                            target="_blank"
                          >
                            Digitalisasi Membership
                          </a>
                        </div>
                        <br></br>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}

            {Koperasi &&
              Koperasi.map((value, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div
                    className="single-feature mb-30"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="feature-icon">
                      <i className={value.icon}></i>
                    </div>
                    <h4>{value.title}</h4>
                    <ul>
                      <li className="text-muted">
                        Beberapa Koperasi Telah Menggunakan Closepay
                      </li>
                    </ul>
                    <h4>Flyer Lembaga Keuangan / Koperasi</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a href="#">
                            Flyer Lembaga Keuangan / Koperasi (on progress)
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Materi Lembaga Keuangan / Koperasi</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a
                            href="https://www.canva.com/design/DAF8jexqomo/FsrGxtE4FG_AiIX95mEOvg/view?utm_content=DAF8jexqomo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                            target="_blank"
                          >
                            Materi Koperasi
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Video Koperasi</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a href="https://platformsekolahpintar.framer.website">
                            Digitalisasi Koperasi (on progress)
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            {Company &&
              Company.map((value, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div
                    className="single-feature mb-30"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="feature-icon">
                      <i className={value.icon}></i>
                    </div>
                    <h4>{value.title}</h4>
                    <ul>
                      <li className="text-muted">
                        Perusahaan Besar & BUMN Sudah Menggunakan Closepay
                      </li>
                    </ul>
                    <h4>Flyer Perusahaan / Company</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a href="#">
                            Flyer Perusahaan / Company (on progress)
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Materi Perusahaan / Company</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a
                            href="https://www.canva.com/design/DAF8jYqoL48/ZXDvnbUh18i437fQkQfglw/view"
                            target="_blank"
                          >
                            Materi Perusahaan
                          </a>
                        </div>
                      </li>
                    </ul>
                    <h4>Video Pembelajaran</h4>
                    <ul>
                      <li>
                        <div className="">
                          <a
                            href="https://www.youtube.com/watch?v=FRDp832GChs&t=1s"
                            target="_blank"
                          >
                            Digitalisasi Perusahaan
                          </a>
                        </div>
                      </li>
                    </ul>
                    <br></br>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
