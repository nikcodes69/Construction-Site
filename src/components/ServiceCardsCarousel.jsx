import React, { useState } from "react";

const ServiceCard = ({ title, description, icon, image }) => {
  const [expanded, setExpanded] = useState(false);

  // Determine if we should show the image or icon
  const hasImage = image;

  return (
    <div className="bg-cream-50 border border-amber-200 rounded-lg p-6 h-full flex flex-col">
      <div className="mb-4">
        {hasImage ? (
          <div className="rounded-lg overflow-hidden h-48 mb-4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="text-amber-400 mb-2">{icon}</div>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className={`text-gray-600 ${expanded ? "" : "line-clamp-4"}`}>
          {description}
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-amber-600 hover:text-amber-800 transition-colors font-medium"
        >
          {expanded ? "View Less" : "View More"}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={expanded ? "M19 9l-7 7-7-7" : "M14 5l7 7-7 7"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ServiceCardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample service data
  const services = [
    {
      id: 1,
      title: "Engineering Techniques",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Project Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Financial Results",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Safety Standards",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Safety is our top priority on every project.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  // Calculate the indices for the visible cards
  const cardsToShow = 3; // Show 3 cards at a time
  const totalItems = services.length;

  // Function to calculate the indices of the 3 cards we want to show
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % totalItems;
      indices.push(index);
    }
    return indices;
  };

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          {/* <div className="flex space-x-4">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
              aria-label="Previous services"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
              aria-label="Next services"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div> */}
        </div>

        <div className="flex justify-between">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
              aria-label="Previous services"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
              aria-label="Next services"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         
          {visibleIndices.map((index) => (
            <ServiceCard
              key={services[index].id}
              title={services[index].title}
              description={services[index].description}
              icon={services[index].icon}
              image={services[index].image}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default ServiceCardsCarousel;
