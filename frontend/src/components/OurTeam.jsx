import { FaFacebook, FaTwitter, FaLinkedin , FaInstagram } from "react-icons/fa";
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg'
import member4 from '../assets/member4.jpg'

const OurTeam=()=> {
  const teamMembers = [
    {
      id: 1,
      name: "Pratikshya Basyal",
      role: "Chief Executive Officer",
      image: member1,
      socialLinks: [
        { icon: <FaFacebook size={16} />, url: "#" },
        { icon: <FaTwitter size={16} />, url: "#" },
        { icon: <FaLinkedin size={16} />, url: "#" },
        { icon: <FaInstagram size={16} />, url: "#" },
      ]
    },
    {
      id: 2,
      name: "Asmita Basyal",
      role: "Cheif Financial Officer",
      image: member2,
      socialLinks: [
        { icon: <FaFacebook size={16} />, url: "#" },
        { icon: <FaTwitter size={16} />, url: "#" },
        { icon: <FaLinkedin size={16} />, url: "#" },
        { icon: <FaInstagram size={16} />, url: "#" },
      ]
    },
    {
      id: 3,
      name: "Pradhumna Paudel",
      role: "Chief Technical Officer",
      image: member3,
      socialLinks: [
        { icon: <FaFacebook size={16} />, url: "#" },
        { icon: <FaTwitter size={16} />, url: "#" },
        { icon: <FaLinkedin size={16} />, url: "#" },
        { icon: <FaInstagram size={16} />, url: "#" },
      ]
    },
    {
      id: 4,
      name: "Chandramani Paudel",
      role: "Chief Legal Officer",
      image: member4,
      socialLinks: [
        { icon: <FaFacebook size={16} />, url: "#" },
        { icon: <FaTwitter size={16} />, url: "#" },
        { icon: <FaLinkedin size={16} />, url: "#" },
        { icon: <FaInstagram size={16} />, url: "#" },
      ]
    }
  ];

  return (
    <div className="w-full bg-black text-white py-16 px-4 relative">
      <div className="absolute top-0 left-0 w-full text-gray-800 opacity-10 font-bold text-[10rem] leading-none tracking-wider">
        OUR TEAM
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Building Team</h2>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-sm flex items-center">
              OUR LEADERSHIP
              <span className="ml-2">&#8594;</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-900 overflow-hidden group">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {member.socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      className="bg-yellow-500 hover:bg-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-black transition-all"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;


