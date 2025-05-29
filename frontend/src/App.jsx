import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NumSoln from "./components/NumSoln";
import ServiceCardsCarousel from "./components/ServiceCardsCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProjects1 from "./components/FeaturedProject1";
import TestimonialSection from "./components/TestimonialSection.";
import Footer from "./components/Footer";
import Signup from "../authfrontend/SignUp";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../authfrontend/Login";
import OurTeam from "./components/OurTeam";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const hash = location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100); // wait for DOM to render
        }
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <div className="font-sans text-gray-800">

        <Router>
        <ScrollToHashElement />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
              <>

              <div id="home"><HeroSection /></div>
              <div id="about"><NumSoln /></div>

              <div id="services"><ServiceCardsCarousel /></div>
              <WhyChooseUs />
              <div id="projects"><FeaturedProjects1 /></div>
              <div id="team"><OurTeam /></div>
              <div id="reviews"><TestimonialSection /></div>

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
