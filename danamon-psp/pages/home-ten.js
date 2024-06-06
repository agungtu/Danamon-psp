import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeTen/Slider";
import About from "../components/HomeTen/About";
import HowItWorks from "../components/HomeTen/HowItWorks";
import Features from "../components/HomeTen/Features";
import Counter from "../components/HomeTen/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeTen/Testimonial";
import Pricing from "../components/HomeTen/Pricing";
import Faq from "../components/HomeTen/Faq";
import Team from "../components/HomeTen/Team";
import AppDownload from "../components/HomeTen/AppDownload";
import Blog from "../components/HomeTen/Blog";
import ContactForm from "../components/HomeTen/ContactForm";
import Footer from "../components/Common/Footer";
import AppUsers from "../components/HomeTen/AppUsers";

const HomeTen = () => {
  return (
    <>
      <Navigation />

      <Slider />

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

export default HomeTen;
