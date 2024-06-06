import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeFive/Slider";
import About from "../components/HomeFive/About";
import HowItWorks from "../components/HomeFive/HowItWorks";
import Features from "../components/HomeFive/Features";
import Counter from "../components/HomeFive/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeFive/Testimonial";
import Pricing from "../components/HomeFive/Pricing";
import Faq from "../components/Common/Faq";
import Team from "../components/HomeFive/Team";
import AppDownload from "../components/HomeFive/AppDownload";
import Blog from "../components/HomeFive/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";

const HomeFive = () => {
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

export default HomeFive;
