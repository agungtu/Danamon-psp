import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeThree/Slider";
import About from "../components/HomeThree/About";
import HowItWorks from "../components/HomeThree/HowItWorks";
import Features from "../components/HomeThree/Features";
import Counter from "../components/HomeThree/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeThree/Testimonial";
import Pricing from "../components/HomeThree/Pricing";
import Faq from "../components/Common/Faq";
import Team from "../components/HomeThree/Team";
import AppDownload from "../components/HomeThree/AppDownload";
import Blog from "../components/HomeThree/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";

const HomeThree = () => {
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

export default HomeThree;
