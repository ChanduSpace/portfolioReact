import React from "react";
import {
  Code,
  Layers,
  Smartphone,
  Server,
  Database,
  Monitor,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      level: 90,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "UI Engineering",
      icon: Layers,
      level: 85,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Mobile Responsive Design",
      icon: Smartphone,
      level: 80,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Backend Basics",
      icon: Server,
      level: 70,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Database Integration",
      icon: Database,
      level: 75,
      color: "from-red-500 to-red-600",
    },
    {
      name: "Web Performance",
      icon: Monitor,
      level: 78,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const technologies = [
    "React.js",
    "Redux",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Context API",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Axios",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "Figma",
    "REST APIs",
  ];

  return (
    <section id="about" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 ">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m a frontend developer with a passion for clean UI, modern tools,
            and building real-world solutions through code.
          </p>
        </div>

        <div className="items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I transitioned into frontend development after completing my
              degree in Electrical and Electronics Engineering. During that
              time, I discovered my passion for creating user-friendly web
              applications using modern tools like React and Tailwind CSS.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Over the past few years, I’ve built and deployed several
              real-world projects, including a food delivery app, e-commerce
              platform, task manager, and weather dashboard. I enjoy solving
              challenges through code, creating seamless UIs, and collaborating
              with others to build intuitive digital experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let’s Build Together
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
              I’m open to exciting opportunities where I can contribute as a
              frontend engineer. Whether you're looking to enhance an existing
              application or build something from scratch — I’d love to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1+</div>
                <div className="text-sm text-gray-600">Year Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Learning Mindset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
