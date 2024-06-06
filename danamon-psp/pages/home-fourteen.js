import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Banner from "../components/HomeFourteen/Banner";
import About from "../components/HomeTwo/About";
import HowItWorks from "../components/HomeTwo/HowItWorks";
import Features from "../components/HomeTwo/Features";
import Counter from "../components/HomeTwo/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeTwo/Testimonial";
import Pricing from "../components/HomeTwo/Pricing";
import Faq from "../components/HomeFourteen/Faq";
import Team from "../components/HomeTwo/Team";
import AppDownload from "../components/HomeTwo/AppDownload";
import Blog from "../components/HomeFourteen/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";
import AppUsers from "../components/HomeTwo/AppUsers";

const HomeFourteen = () => {
  return (
    <>
      <Navigation />

      <Banner />

      <AppUsers />

      <About />

      <HowItWorks />

      <Features />

      <Counter />

      <Screenshots />

      <Testimonial />

      <Pricing />

      <Faq />

      <Team />

      <AppDownload />

      <Blog />

      <ContactForm />

      <Footer />
    </>
  );
};

export default HomeFourteen;
