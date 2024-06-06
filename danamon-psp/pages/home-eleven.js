import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeEleven/Slider";
import About from "../components/HomeEleven/About";
import HowItWorks from "../components/HomeEleven/HowItWorks";
import Features from "../components/HomeEleven/Features";
import Counter from "../components/HomeEleven/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeEleven/Testimonial";
import Pricing from "../components/HomeEleven/Pricing";
import Faq from "../components/HomeEleven/Faq";
import Team from "../components/HomeEleven/Team";
import AppDownload from "../components/HomeEleven/AppDownload";
import Blog from "../components/HomeEleven/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";

const HomeEleven = () => {
  return (
    <>
      <Navigation />

      <Slider />

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

export default HomeEleven;
