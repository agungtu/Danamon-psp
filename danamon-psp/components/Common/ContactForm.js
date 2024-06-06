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
      <section id="contact" className="contact-section" style={{backgroundColor : "#ef5a26" }}>
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">Contact</h2>
            {/* <p>
              Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
              amet, consectetur adipisicing incididunt.
            </p> */}
          </div>

          <div className="row justify-content-center rounded-4" style={{backgroundColor : "white"}}> 
            <div className="col-md-4 col-lg-4 col-sm-6 mt-5">
              <div className="single-contact-info">
                <i className="icofont-location-pin"></i>
                <h3>Office Address:</h3>
                <p>
                  Jl. Nakula Sadewa Raya No.17B, Dukuh,Kec. Sidomukti, Kota
                  Salatiga, Jawa Tengah 50722
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6 mt-5">
              <div className="single-contact-info">
                <i className="icofont-envelope"></i>
                <h3>E-mail Address:</h3>
                <p>info@katalis.info</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6 mt-5">
              <div className="single-contact-info">
                <i className="icofont icofont-phone"></i>
                <h3>Phone Number:</h3>
                <p>0815-4255-3779</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
