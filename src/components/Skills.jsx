import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      category: "Frontend",
      color: "bg-orange-100 text-orange-800",
    },
    { name: "CSS3", category: "Frontend", color: "bg-blue-100 text-blue-800" },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "React.js",
      category: "Frontend",
      color: "bg-cyan-100 text-cyan-800",
    },
    {
      name: "Redux",
      category: "Frontend",
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Context API",
      category: "Frontend",
      color: "bg-indigo-100 text-indigo-800",
    },
    { name: "TailwindCSS", category: "UI", color: "bg-teal-100 text-teal-800" },
    {
      name: "Bootstrap",
      category: "UI",
      color: "bg-violet-100 text-violet-800",
    },
    {
      name: "Styled Components",
      category: "UI",
      color: "bg-pink-100 text-pink-800",
    },
    {
      name: "React Router",
      category: "React",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      name: "React Hooks",
      category: "React",
      color: "bg-lime-100 text-lime-800",
    },
    { name: "Axios", category: "React", color: "bg-sky-100 text-sky-800" },
    {
      name: "State Management",
      category: "React",
      color: "bg-rose-100 text-rose-800",
    },
    {
      name: "Node.js",
      category: "Backend",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Express.js",
      category: "Backend",
      color: "bg-gray-100 text-gray-800",
    },
    {
      name: "RESTful APIs",
      category: "Backend",
      color: "bg-amber-100 text-amber-800",
    },
    { name: "SQL", category: "Backend", color: "bg-blue-100 text-blue-800" },
    { name: "Git", category: "Tools", color: "bg-red-100 text-red-800" },
    { name: "GitHub", category: "Tools", color: "bg-slate-100 text-slate-800" },
    { name: "NPM", category: "Tools", color: "bg-red-100 text-red-800" },
    { name: "Webpack", category: "Tools", color: "bg-blue-100 text-blue-800" },
    {
      name: "Babel",
      category: "Tools",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "Figma",
      category: "Tools",
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Responsive Design",
      category: "Additional",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Web Performance",
      category: "Additional",
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "UI/UX Best Practices",
      category: "Additional",
      color: "bg-indigo-100 text-indigo-800",
    },
  ];

  return (
    <section
      id="skills"
      className="lg:h-full pt-20 flex items-center bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.color} px-3 py-2 rounded-lg text-center text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default`}
            >
              <div className="font-semibold">{skill.name}</div>
              <div className="text-xs opacity-75 mt-1">{skill.category}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Hover over skills to see them in action</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
