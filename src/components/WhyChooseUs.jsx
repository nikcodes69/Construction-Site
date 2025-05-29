import React from "react";
import ChooseUsImage from "../assets/whychooseus.jpeg";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
      <div className="md:w-1/2 w-full bg-black text-white flex items-center justify-center px-6 py-8">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose us?</h2>
          <p className="mb-6 border-l-4 border-yellow-500 pl-4 text-sm md:text-lg leading-relaxed">
            We have a team of experienced professionals who have been in the
            industry for over 25 years. Our contractors have a wealth of
            knowledge and skills that they have acquired over the years, making
            them experts in their field.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded text-sm">
            VIEW MORE
          </button>
        </div>
      </div>

      <div className="md:w-1/2 w-full h-[300px] md:h-auto">
        <img
          src={ChooseUsImage}
          alt="Worker"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
