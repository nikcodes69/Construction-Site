import { useState } from "react";

const ServiceCard = ({ title, description, icon }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
      <div className="mb-4 text-amber-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`text-gray-600 mb-4 ${!expanded ? "line-clamp-2" : ""}`}>
        {description}
      </p>
      <button
        onClick={toggleExpanded}
        className="text-amber-600 font-medium hover:underline"
      >
        {expanded ? "View Less" : "View More"}
      </button>
    </div>
  );
};

const ServiceCardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "Engineering Techniques",
      description:
        "We utilize modern engineering methods and tools to deliver efficient, high-quality construction solutions tailored to every project's unique demands. Our expert team ensures precision and innovation from start to finish.",
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
        "From planning to execution, we manage every aspect of construction projects with a focus on time, cost, and quality. Our streamlined processes and communication ensure seamless collaboration and successful outcomes.",
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
        "We deliver construction solutions that balance quality and budget. Our transparent costing and efficient execution help maximize return on investment while minimizing unnecessary expenses.",
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
        "Safety is our top priority. We strictly follow industry safety regulations and implement rigorous on-site protocols to ensure a secure environment for workers and clients at all times.",
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

  const cardsToShow = 3;
  const totalItems = services.length;

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % totalItems;
      indices.push(index);
    }
    return indices;
  };

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
        </div>

        <div className="flex justify-between mb-6">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsCarousel;
