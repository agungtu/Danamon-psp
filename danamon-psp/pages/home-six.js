import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeSix/Slider";
import About from "../components/HomeSix/About";
import HowItWorks from "../components/HomeSix/HowItWorks";
import Features from "../components/HomeSix/Features";
import Counter from "../components/HomeSix/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeSix/Testimonial";
import Pricing from "../components/HomeSix/Pricing";
import Faq from "../components/HomeSix/Faq";
import Team from "../components/HomeSix/Team";
import AppDownload from "../components/HomeSix/AppDownload";
import Blog from "../components/HomeSix/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";
import AppUsers from "../components/HomeSix/AppUsers";

const HomeSix = () => {
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

export default HomeSix;
