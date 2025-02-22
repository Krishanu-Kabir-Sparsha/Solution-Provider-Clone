import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.avif";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";
import p1 from "../assets/p1.avif";
import p2 from "../assets/p2.avif";
import p3 from "../assets/p3.avif";
import p4 from "../assets/p4.avif";
import p5 from "../assets/p5.avif";
import p6 from "../assets/p6.avif";
import p7 from "../assets/p7.avif";
import p8 from "../assets/p8.avif";
import s1 from "../assets/s1.avif";
import s2 from "../assets/s2.avif";
import s3 from "../assets/s3.avif";
import share from "../assets/share.webp"; // Add the new image here

const Home = () => {
  const [zoomedInImage, setZoomedInImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the screen width is less than or equal to 768px (mobile size)
    };

    handleResize(); // Initial check on load
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on component unmount
    };
  }, []);

  const handleImageClick = (imageSrc) => {
    if (!isMobile) {
      // Only trigger zoom on non-mobile devices
      setZoomedInImage(imageSrc);
    }
  };

  const closeZoom = () => {
    setZoomedInImage(null);
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[400px] md:h-[650px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-white max-w-6xl px-6 mt-20 mx-auto">
          <motion.h1
            className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed text-white drop-shadow-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Discover specialized services for your home needs and create
            customized solutions that fit your exact specifications.
          </motion.h1>
          <a
            href="https://www.facebook.com/solutionproviderbangladesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="btn btn-active btn-neutral px-6 py-3 text-lg rounded-md shadow-lg transition-all duration-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-300"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#FF7F50",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        className="w-full py-20 bg-white flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-6 md:space-y-0">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">
                Our Story
              </h2>
              <p className="text-lg text-center md:text-left text-gray-700 mb-6">
                We are a trustworthy and reliable partner for all your
                home-related needs, offering a wide range of specialized
                services.
              </p>
              <div className="text-center md:text-left">
                <a
                  href="#"
                  className="btn btn-neutral px-6 py-3 text-lg rounded-md shadow-lg transition-all duration-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="relative w-full md:w-[28%] sm:w-[45%]">
                <motion.img
                  src={img1}
                  alt="Home Service 1"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <div className="relative w-full md:w-[28%] sm:w-[45%]">
                <motion.img
                  src={img2}
                  alt="Home Service 2"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
              <div className="relative w-full md:w-[28%] sm:w-[45%]">
                <motion.img
                  src={img3}
                  alt="Home Service 3"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Photos Section */}
      <motion.div
        className="w-full py-20 bg-gray-200 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-6 md:space-y-0">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-semibold text-black mb-4">
                Our Project Photos
              </h2>
              <p className="text-lg text-center md:text-left text-gray-700 mb-6">
                We have made quality our habit. It’s not something that we just
                strive for – we live by this principle every day.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[p1, p2, p3, p4, p5, p6, p7, p8].map((src, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-40 cursor-pointer"
                  onClick={() => handleImageClick(src)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
                >
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Zoomed-In Image Modal */}
      {zoomedInImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={zoomedInImage}
              alt="Zoomed-In"
              className="max-w-[90%] max-h-[90vh] object-contain"
            />
            <button
              onClick={closeZoom}
              className="absolute top-0 right-0 bg-black text-white text-xl p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Our Services Section */}
      <div className="w-full py-20 bg-gray-900 flex justify-center">
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-400">
              Explore our diverse range of services designed to improve and
              enhance your living space.
            </p>
          </div>
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Card 1 */}
            <motion.div
              className="w-full md:w-[30%] bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={s1}
                alt="Consultancy"
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Consultancy
                </h3>
                <p className="text-gray-700">
                  Real estate support, interior decoration, and more — we have
                  the solutions to enhance your home.
                </p>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="w-full md:w-[30%] bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={s2}
                alt="Cabinet Creation"
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Cabinet Creation
                </h3>
                <p className="text-gray-700">
                  Create customized cabinets that fit your exact specifications
                  and maximize your space with our organized storage solutions.
                </p>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="w-full md:w-[30%] bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={s3}
                alt="Legal Assistance"
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Legal Assistance
                </h3>
                <p className="text-gray-700">
                  Get legal assistance and other home-related services to
                  simplify your life and improve your living space.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Special Offer Section */}
      <div
        className="relative w-full py-20"
        style={{
          backgroundImage: `url(${share})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            স্পেশাল অফার পেতে আপনার নাম ও নম্বর শেয়ার করুন
          </h2>
          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
              ></textarea>
            </div>
            <div>
              <button className="w-full py-3 px-6 bg-red-500 rounded-md text-white">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
