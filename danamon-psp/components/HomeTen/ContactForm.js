import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="contact-section gray-bg angle-contact-section"
      >
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-6">
              <div
                className="single-contact-info"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <i className="icofont-location-pin"></i>
                <h3>Office Address:</h3>
                <p>2750 Quadra Street Victoria, Canada.</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6">
              <div
                className="single-contact-info"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <i className="icofont-envelope"></i>
                <h3>E-mail Address:</h3>
                <p>jibo@gmail.com</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6">
              <div
                className="single-contact-info"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <i className="icofont icofont-phone"></i>
                <h3>Phone Number:</h3>
                <p>+324-9442-515</p>
              </div>
            </div>
          </div>

          <div
            className="contact-form"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      placeholder="Write your message..."
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12 text-center">
                  <button type="submit" className="default-button">
                    Send Message
                    <i className="icofont-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
