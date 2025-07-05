import React from "react";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-400">Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span className="text-gray-400">and</span>
            <Code size={16} className="text-blue-500" />
            <span className="text-gray-400">by</span>
            <span className="font-semibold text-white">Dulam Chandu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
