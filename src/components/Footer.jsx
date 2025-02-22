import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Add social media icons

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-12">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 flex flex-col items-center">
        {/* Copyright and Created by */}
        <div className="text-center mb-6">
          <p className="text-lg">© {new Date().getFullYear()} | Created by Krishanu Kabir Sparsha</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-2xl mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-600 transition-all duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400 transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition-all duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-500 transition-all duration-300" />
          </a>
        </div>

        {/* Stunning Visual Design */}
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>Stunning Visual Design. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
