import React from "react";

const AppDownload = () => {
  return (
    <>
      <section id="app-download" className="app-download-section wave-two-download-section">
        <div className="wave-bg-section-tb-two"></div>

        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h2>NOW AVAILABLE</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="app-download-content"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <a
                  href="https://www.apple.com/app-store/"
                  className="download-btn"
                  target="_blank"
                >
                  <i className="icofont-brand-apple"></i>
                  <span>
                    available on
                    <span className="large-text">App Store</span>
                  </span>
                </a>
                <a
                  href="https://play.google.com/store/apps"
                  className="download-btn"
                  target="_blank"
                >
                  <i className="icofont-brand-android-robot"></i>
                  <span>
                    available on
                    <span className="large-text">Play Store</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDownload;
