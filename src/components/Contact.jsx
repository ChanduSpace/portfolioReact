import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "writetodulamchandu@gmail.com",
      href: "mailto:writetodulamchandu@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7337 417 147",
      href: "tel:+917337417147",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ChanduSpace",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chandudulam",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-300",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-[#00292f] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Poppins']">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 font-['Poppins']">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-6 font-['Poppins']">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 ${social.color} hover:bg-white/20 transform hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-4 font-['Poppins']">
                Why Choose Me?
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <ExternalLink size={16} className="text-green-400" />
                  <span>Fast turnaround time</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink size={16} className="text-green-400" />
                  <span>Clean, maintainable code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink size={16} className="text-green-400" />
                  <span>Responsive design focus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink size={16} className="text-green-400" />
                  <span>Ongoing support & maintenance</span>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins']">
                Send a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl font-['Poppins']"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
