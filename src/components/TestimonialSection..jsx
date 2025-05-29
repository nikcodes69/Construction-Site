import { useState, useEffect } from 'react';
import Avatar1 from '../assets/avatar1.jpg';
import Avatar2 from '../assets/avatar2.jpg';
import Avatar3 from '../assets/avatar3.jpg';
import Avatar4 from '../assets/avatar4.jpg';
import Avatar5 from '../assets/avatar5.jpg';
import Avatar6 from '../assets/avatar6.jpg';
import Avatar7 from '../assets/avatar7.jpg';
import Avatar8 from '../assets/avatar8.jpg';
import Avatar9 from '../assets/avatar9.jpg';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Suman Shrestha",
      username: "@sumans",
      avatar: Avatar1,
      content: "Professional, on-time, and budget-friendly. Our dream home came to life just as we imagined!"
    },
    {
      id: 2,
      name: "Bikash Thapa",
      username: "@bthapa",
      avatar: Avatar2,
      content: "The construction quality exceeded our expectations. They delivered everything before the deadline."
    },
    {
      id: 3,
      name: "Anita Koirala",
      username: "@anitak",
      avatar: Avatar3,
      content: "Highly professional team. They handled our residential project with great care and attention to detail."
    },
    {
      id: 4,
      name: "Rajiv Adhikari",
      username: "@rajivadh",
      avatar: Avatar4,
      content: "Clear communication and transparent pricing. We always knew what was happening on-site."
    },
    {
      id: 5,
      name: "Sita Lama",
      username: "@sitalama",
      avatar: Avatar5,
      content: "Very responsive and supportive throughout the project. I’d definitely hire them again."
    },
    {
      id: 6,
      name: "Prakash Gurung",
      username: "@pgurung",
      avatar: Avatar6,
      content: "The whole process—from design to handover—was smooth and efficient. Truly satisfied!"
    },
    {
      id: 7,
      name: "Ramesh Khadka",
      username: "@rkhadka",
      avatar: Avatar7,
      content: "They built our commercial space exactly to our specs. No hidden costs, no delays."
    },
    {
      id: 8,
      name: "Meena Maharjan",
      username: "@meenam",
      avatar: Avatar8,
      content: "They listened to our needs and offered practical solutions. Great experience overall."
    },
    {
      id: 9,
      name: "Deepak Bista",
      username: "@deepakb",
      avatar: Avatar9,
      content: "One of the best construction teams I’ve worked with. Quality work and great coordination."
    }
  ];
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [viewAll, setViewAll] = useState(false);

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      if (window.innerWidth < 768) {
        // Mobile: Show 1 testimonial
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        // Tablet: Show 2 testimonials
        setItemsPerPage(2);
      } else {
        // Desktop: Show 3 testimonials
        setItemsPerPage(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle view all testimonials
  const toggleViewAll = () => {
    setViewAll(!viewAll);
    // Reset to page 1 when toggling view
    setCurrentPage(1);
  };

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Get current testimonials based on pagination or view all
  const displayedTestimonials = viewAll 
    ? testimonials 
    : testimonials.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Change page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    // Removed min-h-screen here to prevent extra vertical space
    <div className="bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Public Cheers For Us!</h2>
            <p className="text-gray-400 max-w-lg">
              Switching to The Little Lux's management solutions has revolutionized our center. The ease of use and the support provided are outstanding!
            </p>
          </div>
          <div className="w-full md:w-auto">
            <button 
              onClick={toggleViewAll}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded inline-flex items-center transition-all duration-300"
            >
              {viewAll ? 'SHOW LESS' : 'VIEW ALL TESTIMONIALS'}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.username}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Controls - Only show when not in "View All" mode */}
        {!viewAll && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className={`p-2 rounded ${currentPage === 1 ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Page Number Indicators - Show only on larger screens */}
            <div className="hidden md:flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToPage(i + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    currentPage === i + 1 ? 'bg-yellow-500 text-black' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            {/* Page indicator for mobile */}
            <div className="flex md:hidden items-center">
              <span className="text-gray-400 text-sm">
                {currentPage} / {totalPages}
              </span>
            </div>
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className={`p-2 rounded ${currentPage === totalPages ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
