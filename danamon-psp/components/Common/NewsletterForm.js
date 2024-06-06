import React from "react"; 

const NewsletterForm = () => {
  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-text">
                <h3>Subscribe for our Newsletter</h3>
                <p>
                  Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor coli incididunt ut labore Lorem ipsum
                  madolor sit amet, consectetur adipisicing incididunt.
                </p>
              </div>

              <div className="subscribe-form">
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    name="EMAIL"
                    required
                  />

                  <button type="submit" className="btn subscribe-btn">
                    <i className="icofont-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
