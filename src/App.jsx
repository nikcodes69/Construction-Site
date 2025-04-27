import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NumSoln from "./components/NumSoln";
import ServiceCardsCarousel from "./components/ServiceCardsCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProjects from "./components/FeaturedProject1";
import TestimonialSection from "./components/TestimonialSection.";
import Footer from "./components/Footer";
import Signup from "../authfrontend/SignUp";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../authfrontend/Login";

function App() {
  return (
    <>
      <div className="font-sans text-gray-800">

        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <NumSoln />
                  <ServiceCardsCarousel />
                  <WhyChooseUs />
                  <FeaturedProjects />
                  <TestimonialSection />
                </>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
