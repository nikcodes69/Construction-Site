import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Axel Towers",
    category: "Building & Interior",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Glass Hotel",
    category: "Renovation & Architecture",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bridge River",
    category: "Renovation & Architecture",
    image:
      "https://images.unsplash.com/photo-1500021804520-5b8f56a4d7af?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Atlas Museum",
    category: "Construction & Interior",
    image:
      "https://images.unsplash.com/photo-1529429611270-2038aabb7cf4?auto=format&fit=crop&w=800&q=80",
  },
 
];

export default function FeaturedProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjects = 3;

  const next = () => {
    if (currentIndex + visibleProjects < projects.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Our Featured Projects</h2>
        <p className="text-gray-400 mb-6 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 p-2 rounded-full hover:bg-yellow-600"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-300 gap-4"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[90vw] sm:min-w-[300px] flex-shrink-0 bg-white text-black rounded-xl overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 p-2 rounded-full hover:bg-yellow-600"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
