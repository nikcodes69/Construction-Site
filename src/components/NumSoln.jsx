import React from 'react'

const ServiceOverview = () => {
  return (
        <div className="bg-cream-400 py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left side - Phone number */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-700 text-sm mb-1">need any construction solution support?</p>
              <a className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
                (+977) 9841234567
              </a>
            </div>
            
            {/* Right side - Description text */}
            <div className="max-w-md text-md text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris fermentum, viverra elit at, facilisis ante.Sed lacinia vulputate cursus. Morbi suscipit sapien ut blandit sagittis. Phasellus pretium nulla sodales velit dictum congue.
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