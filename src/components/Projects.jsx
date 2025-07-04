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

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery App",
      description:
        "Developed a Swiggy-inspired food delivery platform with restaurant listings and menu browsing. Implemented global state management with Redux for cart functionality and user preferences",
      image: foodApp,
      technologies: ["React", "Tailwind", "Redux", "Jest"],
      liveUrl: "https://gregarious-sawine-9ddd89.netlify.app/",
      githubUrl: "https://github.com/ChanduSpace/food-app-with-react",
      icon: Utensils,
      color: "from-[#2E6D75] to-[#155E63]",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce solution with product catalog, shopping cart, user accounts, and admin dashboard. Responsive design ensures great experience across all devices.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Redux", "Stripe API", "Firebase"],
      liveUrl: "https://ecommerce-dulam.netlify.app/",
      githubUrl: "https://github.com/ChanduSpace/ecommerce-assignment.git",
      icon: ShoppingCart,
      color: "from-[#2E6D75] to-[#155E63]",
    },
    {
      title: "Task Manager",
      description:
        "An intuitive task management application with drag-and-drop functionality, priority levels, deadlines, and team collaboration features. Perfect for project management.",
      image: taskApp,
      technologies: ["React", "TypeScript", "Local Storage", "CSS3"],
      liveUrl: "https://lucky-faun-5e7a47.netlify.app/",
      githubUrl: "https://github.com/ChanduSpace/taskManager",
      icon: CheckCircle,
      color: "from-[#2E6D75] to-[#155E63]",
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application providing detailed forecasts, current conditions, and weather maps. Features location-based weather data and interactive charts.",
      image: weatherApp,
      technologies: ["React", "Weather API", "Chart.js", "Geolocation"],
      liveUrl: "https://lambent-medovik-df0cb9.netlify.app/",
      githubUrl: "https://github.com/ChanduSpace/reactWeatherWebApp",
      icon: Cloud,
      color: "from-[#2E6D75] to-[#155E63]",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative web solutions.
          </p>
        </div>

        {/* Desktop: 4 cards in a row, Mobile: 1 card at a time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-1 bg-gradient-to-r ${project.color} text-white px-3 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <ExternalLink size={14} />
                    <span>Live</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1 border-2 border-gray-300 text-gray-700 px-3 py-2 rounded-full text-sm font-semibold hover:border-gray-500 hover:text-gray-900 transition-all duration-300"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/ChanduSpace?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
