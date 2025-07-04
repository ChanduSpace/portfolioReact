import React from 'react';
import { Code, Palette, Smartphone, Server, Database, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'UI/UX Design', icon: Palette, level: 85, color: 'from-purple-500 to-purple-600' },
    { name: 'Mobile Development', icon: Smartphone, level: 80, color: 'from-green-500 to-green-600' },
    { name: 'Backend Development', icon: Server, level: 88, color: 'from-orange-500 to-orange-600' },
    { name: 'Database Management', icon: Database, level: 82, color: 'from-red-500 to-red-600' },
    { name: 'Web Technologies', icon: Globe, level: 92, color: 'from-indigo-500 to-indigo-600' },
  ];

  const technologies = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
    'MySQL', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'AWS'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating digital experiences 
            that make a difference. Here's what I bring to the table.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As a dedicated full-stack developer, I've spent years honing my craft in both 
              frontend and backend technologies. My passion lies in building scalable, 
              user-centric applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest industry trends. My experience spans across various domains, 
              from e-commerce platforms to task management systems.
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

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-6 h-6 text-gray-600 mr-3" />
                    <span className="font-semibold text-gray-900 flex-1">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform origin-left transition-all duration-1000 ease-out group-hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Something Amazing</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Whether you need a complete web application or want to enhance an existing one, 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;