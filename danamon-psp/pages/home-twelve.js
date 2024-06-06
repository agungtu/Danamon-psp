import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeTwelve/Slider";
import About from "../components/HomeTwelve/About";
import HowItWorks from "../components/HomeTwelve/HowItWorks";
import Features from "../components/HomeTwelve/Features";
import Counter from "../components/HomeTwelve/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeTwelve/Testimonial";
import Pricing from "../components/HomeTwelve/Pricing";
import Faq from "../components/Common/Faq";
import Team from "../components/HomeTwelve/Team";
import AppDownload from "../components/HomeTwelve/AppDownload";
import Blog from "../components/HomeTwelve/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";

const HomeTwelve = () => {
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

export default HomeTwelve;
