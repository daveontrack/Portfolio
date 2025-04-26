// import React from "react";
// import employeeMSImage from "../assets/books store.png";
// import BloodMSImage from "../assets/blood.png";
// import bookMSImage from "../assets/admin-dashboard.png";

// const projects = [
//   {
//     id: 1,
//     name: "Book store",
//     technologies: "MERN Stack",
//     image: employeeMSImage,
//     github: "https://github.com/daveontrack/BOOK-STORE",
//   },
//   {
//     id: 2,
//     name: "TODO App",
//     technologies: "MERN Stack",
//     image: bookMSImage,
//     github: "https://github.com/daveontrack/Todo_list",
//   },
//   {
//     id: 3,
//     name: "Blood bank",
//     technologies: "MERN Stack",
//     image: BloodMSImage,
//     github: "https://github.com/daveontrack/Blood-Donation-Management-System",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="bg-black text-white py-20" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="rounded-lg mb-4 w-full h-48 object-cover"
//               />
//               <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
//               <p className="text-gray-400 mb-4">{project.technologies}</p>
//               <a
//                 href={project.github}
//                 className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import employeeMSImage from "../assets/books store.png";
import BloodMSImage from "../assets/blood.png";
import bookMSImage from "../assets/admin-dashboard.png";
import weatherAppImage from "../assets/weather-app.png"; // New
import portfolioImage from "../assets/personal.png"; // New
import chatAppImage from "../assets/chat.png"; // New
import currencyConverterImage from "../assets/birr.png"; // New
import textToSpeechImage from "../assets/text.png"; // New
import hotelBookingImage from "../assets/hotel.png"; // New

const projects = [
  {
    id: 1,
    name: "Book Store",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/daveontrack/BOOK-STORE",
  },
  {
    id: 2,
    name: "TODO-LIST App",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "https://github.com/daveontrack/Todo_list",
  },
  {
    id: 3,
    name: "Blood Bank",
    technologies: "MERN Stack",
    image: BloodMSImage,
    github: "https://github.com/daveontrack/Blood-Donation-Management-System",
  },
  {
    id: 4,
    name: "Weather App",
    technologies: "React JS + OpenWeather API",
    image: weatherAppImage,
    github: "https://github.com/daveontrack/Weather-website-app",
  },
  {
    id: 5,
    name: "Personal Portfolio",
    technologies: "MongoDB, Express.js, React.js, Node.js",
    image: portfolioImage,
    github: "https://github.com/daveontrack/portfolio-web",
  },
  {
    id: 6,
    name: "Chat Application",
    technologies: "MERN + Socket.io",
    image: chatAppImage,
    github: "https://github.com/daveontrack/Chat-App",
  },
  {
    id: 7,
    name: "Currency Converter",
    technologies: "React JS + Exchange Rate API",
    image: currencyConverterImage,
    github: "https://github.com/daveontrack/Currency-Converter",
  },
  {
    id: 8,
    name: "Text-to-Speech Converter",
    technologies: "JavaScript + Web Speech API",
    image: textToSpeechImage,
    github: "https://github.com/daveontrack/Text-to-Speech-Converter",
  },
  {
    id: 9,
    name: "Hotel Booking Website",
    technologies: "MERN Stack",
    image: hotelBookingImage,
    github: "https://github.com/daveontrack/Hotel-booking-frontend",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
