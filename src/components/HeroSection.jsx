import React from "react";
import HeroSectionImage from "../assets/newherosection.jpg"; 

const HeroSection = () => {
  return (
    <div className="relative w-full">
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HeroSectionImage})` }}
      />

      //Optional Dark Overlay
      <div className="absolute inset-0 bg-black opacity-75 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl">
            Building the Future with Strength and Precision
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl max-w-2xl">
            We specialize in residential, commercial, and industrial construction, delivering projects on time, within budget, and beyond expectations.
        </p>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold transition-all">
          OUR SERVICES
        </button>
        </div>
      
    </section>

    {/* Yellow Curve */}
    <div className="w-full overflow-hidden leading-[0]">
        <svg
        className="relative block w-full h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        >
        <path
            d="M1200 0L0 0 892.25 114.72C970.4 129.9 1050.53 118.63 1126.39 92.45L1200 66.66V0z"
            className="fill-yellow-500"
        ></path>
        </svg>
    </div>
    </div>

    );
};

export default HeroSection;
