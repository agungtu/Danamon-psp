import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeOne/Header";
import About from "../components/HomeOne/Benefit";
import Features from "../components/HomeOne/Productandsolution";
// import Counter from "../components/HomeOne/Counter";
import Screenshots from "../components/Common/Documentation";
import Testimonial from "../components/HomeOne/Footer";
// import Pricing from "../components/HomeOne/Pricing";
// import Faq from "../components/Common/Faq";
// import Team from "../components/HomeOne/Team";
// import AppDownload from "../components/HomeOne/AppDownload";
// import Blog from "../components/HomeOne/Blog";
import ContactForm from "../components/Common/ContactForm";
// import Footer from "../components/Common/Footer";

const Index = () => {
  return (
    <>
      <Navigation />

      <Slider />

      <About />


      <Features />

      {/* <Counter /> */}

      <Screenshots />

      {/* <Testimonial /> */}

      {/* <Pricing /> */}

      {/* <Faq /> */}

      {/* <Team /> */}

      {/* <AppDownload /> */}

      {/* <Blog /> */}

      <ContactForm />

      {/* <Footer /> */}
    </>
  )
}
  
export default Index;
