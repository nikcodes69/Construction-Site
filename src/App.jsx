import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NumSoln from "./components/NumSoln";
import ServiceCardsCarousel from "./components/ServiceCardsCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProjects from "./components/FeaturedProject1";
// import AboutSection from "./components/AboutSection";
// import ServicesGrid from "./components/ServicesGrid";
// import ProjectHighlights from "./components/ProjectHighlights";
// import StatsSection from "./components/StatsSection";
// import TeamSection from "./components/TeamSection";
// import Testimonials from "./components/Testimonials";
// import CallToAction from "./components/CallToAction";
// import BlogHighlights from "./components/BlogHighlights";
// import Footer from "./components/Footer";

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
       {/*
      <AboutSection />
      <ServicesGrid />
      <ProjectHighlights />
      <StatsSection />
      <TeamSection />
      <Testimonials />
      <CallToAction />
      <BlogHighlights />
      <Footer />  */}
    </div>
    </>
  )
}

export default App
