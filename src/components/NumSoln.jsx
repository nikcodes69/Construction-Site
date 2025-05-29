import React from 'react'

const ServiceOverview = () => {
  return (
        <div className="bg-cream-400 py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left side - Phone number */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-700 text-md mb-1">need any construction solution support?</p>
              <a className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
                (+977) 9856044217
              </a>
            </div>
            
            {/* Right side - Description text */}
            <div className="max-w-md text-lg text-gray-600">
            We provide reliable construction solutions—from planning to execution. Contact us for residential, commercial, or industrial projects built to last.
            </div>
          </div>
          
          {/* Horizontal line */}
          <div className="container mx-auto mt-6">
            <hr className="border-t border-amber-400" />
          </div>
        </div>
      );
    }

export default ServiceOverview