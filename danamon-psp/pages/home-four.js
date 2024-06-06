import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeFour/Slider";
import About from "../components/HomeFour/About";
import HowItWorks from "../components/HomeFour/HowItWorks";
import Features from "../components/HomeFour/Features";
import Counter from "../components/HomeFour/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeFour/Testimonial";
import Pricing from "../components/HomeFour/Pricing";
import Faq from "../components/Common/Faq";
import Team from "../components/HomeFour/Team";
import AppDownload from "../components/HomeFour/AppDownload";
import Blog from "../components/HomeFour/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";

const HomeFour = () => {
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

export default HomeFour;
