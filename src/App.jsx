import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NumSoln from "./components/NumSoln";
import ServiceCardsCarousel from "./components/ServiceCardsCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProjects from "./components/FeaturedProject1";
import TestimonialSection from "./components/TestimonialSection.";
import Footer from "./components/Footer";

import './App.css'

function App() {
  
  return (
    <>
     <div className="font-sans text-gray-800">
      <Header />
      <HeroSection/>
      <NumSoln/>
      <ServiceCardsCarousel/>
      <WhyChooseUs/>
      <FeaturedProjects/>
      <TestimonialSection/>
      <Footer/>
    </div>
    </>
  )
}

export default App
