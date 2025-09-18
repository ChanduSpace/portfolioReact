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
      className="lg:h-full pt-20 bg-[#00292f] relative overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-['Poppins']">
            Let's Work Together
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-['Poppins']">
              Get In Touch
            </h3>

            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center space-x-4 p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition"
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center`}
                >
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">{info.label}</p>
                  <p className="text-white text-sm font-semibold">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div>
              <h4 className="text-base font-semibold text-white mb-2 font-['Poppins']">
                Follow Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 hover:bg-white/20 transform hover:scale-105 transition"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 space-y-4 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-2 font-['Poppins']">
              Send a Message
            </h3>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Your message"
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition"
            >
              <div className="flex items-center justify-center space-x-2">
                <Send size={18} />
                <span>Send Message</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
