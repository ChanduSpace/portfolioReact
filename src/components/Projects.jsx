import React from "react";
import {
  ExternalLink,
  Github,
  ShoppingCart,
  CheckCircle,
  Cloud,
  Utensils,
} from "lucide-react";
import foodApp from "../assets/foodApp.jpg";
import taskApp from "../assets/taskApp.jpg";
import weatherApp from "../assets/weatherApp.jpg";
import pdfApp from "../assets/pdfApp.jpg";
import notesApp from "../assets/notesApp.jpg";
import recipeTreasure from "../assets/recipeTreasure.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Recipe Treasure App",
      description:
        "Built a full-stack recipe management app with user authentication and personalized dashboards",
      image: recipeTreasure,
      technologies: ["React", "express.ja", "RESTAPI", "Node.js", "MongoDB"],
      liveUrl: "https://recipetreasure.netlify.app/register",
      githubUrl: "https://github.com/ChanduSpace/recipeTreasure.git",
      icon: CheckCircle,
      color: "from-[#2E6D75] to-[#155E63]",
    },
    {
      title: "PDF Annotator App",
      description:
        "Built a full-stack application for uploading and managing PDF documents with highlighting capabilities...",
      image: pdfApp,
      technologies: ["React", "express.ja", "RESTAPI", "Node.js", "MongoDB"],
      liveUrl: "https://pdf-annotator-13.netlify.app/",
      githubUrl: "https://github.com/ChanduSpace/deeref-labs-assignment.git",
      icon: CheckCircle,
      color: "from-[#2E6D75] to-[#155E63]",
    },
    {
      title: "Multi-Tenant SaaS Notes App",
      description:
        "Designed and implemented a SaaS platform supporting multiple tenants with strict data isolation...",
      image: notesApp,
      technologies: ["React", "express.ja", "RESTAPI", "Node.js", "MongoDB"],
      liveUrl: "https://yardstick-assignment-vso8.vercel.app/",
      githubUrl: "https://github.com/ChanduSpace/Yardstick-Assignment.git",
      icon: CheckCircle,
      color: "from-[#2E6D75] to-[#155E63]",
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application providing detailed forecasts, current conditions, and weather maps.",
      image: weatherApp,
      technologies: ["React", "Weather API", "Chart.js", "Geolocation"],
      liveUrl: "https://lambent-medovik-df0cb9.netlify.app/",
      githubUrl: "https://github.com/ChanduSpace/reactWeatherWebApp",
      icon: Cloud,
      color: "from-[#2E6D75] to-[#155E63]",
    },
    {
      title: "Task Manager",
      description:
        "An intuitive task management application with drag-and-drop functionality, priority levels and deadlines.",
      image: taskApp,
      technologies: ["React", "TypeScript", "Local Storage", "CSS3"],
      liveUrl: "https://lucky-faun-5e7a47.netlify.app/",
      githubUrl: "https://github.com/ChanduSpace/taskManager",
      icon: CheckCircle,
      color: "from-[#2E6D75] to-[#155E63]",
    },
    {
      title: "Food Delivery App",
      description:
        "Developed a Swiggy-inspired food delivery platform with restaurant listings and menu browsing. ",
      image: foodApp,
      technologies: ["React", "Tailwind", "Redux", "Jest"],
      liveUrl: "https://gregarious-sawine-9ddd89.netlify.app/",
      githubUrl: "https://github.com/ChanduSpace/food-app-with-react",
      icon: Utensils,
      color: "from-[#2E6D75] to-[#155E63]",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 flex flex-col lg:h-full">
      <div className="flex-1 max-w-7xl mx-auto px-4 pt-24 sm:px-6 lg:px-8 py-8 flex flex-col">
        {/* Header Section - Compact */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative web solutions.
          </p>
        </div>

        {/* Projects Grid - Takes remaining space */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 h-[60vh] ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 sm:h-36 lg:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-3 left-3">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-3 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-1 bg-gradient-to-r ${project.color} text-white px-3 py-2 rounded-full text-xs font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex-1`}
                  >
                    <ExternalLink size={12} />
                    <span>Live</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1 border-2 border-gray-300 text-gray-700 px-3 py-2 rounded-full text-xs font-semibold hover:border-gray-500 hover:text-gray-900 transition-all duration-300 flex-1"
                  >
                    <Github size={12} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button - Compact */}
        {/* <div className="text-center">
          <a
            href="https://github.com/dulamchandu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={18} />
            <span>View All Projects on GitHub</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
