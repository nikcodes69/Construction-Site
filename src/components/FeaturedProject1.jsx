import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatureProject1 from "../assets/featureproject1.jpg";
import FeatureProject2 from "../assets/featureproject2.jpg";
import FeatureProject3 from "../assets/featureproject3.jpg";
import FeatureProject4 from "../assets/featureproject4.jpg";
import { useState,useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Featured project data
const projects = [
  {
    id: 1,
    title: "Axel Towers",
    category: "Building & Interior",
    image: FeatureProject1,
  },
  {
    id: 2,
    title: "Glass Hotel",
    category: "Renovation & Architecture",
    image: FeatureProject2,
  },
  {
    id: 3,
    title: "Bridge River",
    category: "Renovation & Architecture",
    image: FeatureProject3,
  },
  {
    id: 4,
    title: "Atlas Museum",
    category: "Construction & Interior",
    image: FeatureProject4,
  },
  {
    id: 5,
    title: "Atlas Museum",
    category: "Construction & Interior",
    image: FeatureProject4,
  },
  {
    id: 6,
    title: "Atlas Museum",
    category: "Construction & Interior",
    image: FeatureProject4,
  }
  // You can add more projects as needed
];

export default function FeaturedProjects() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="featured-projects bg-black text-white py-6 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
          Our Featured Projects
        </h2>
        <p className="mb-6 md:mb-10 max-w-2xl text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation={!isMobile} // Disable navigation arrows on mobile
          pagination={{
            clickable: true,
            dynamicBullets: isMobile, // Dynamic bullets look better on mobile
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          loop={true}
          breakpoints={{
            // Mobile (default settings apply)
            // >= 480px - Small mobile devices in landscape
            480: {
              slidesPerView: 1.2,
              spaceBetween: 10,
              centeredSlides: true,
            },
            // >= 640px - Tablets
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            // >= 768px - Small tablets, large tablets in portrait
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            // >= 1024px - Laptops and desktops
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // >= 1280px - Large desktops
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mt-6 md:mt-8"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative rounded overflow-hidden h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/320";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
