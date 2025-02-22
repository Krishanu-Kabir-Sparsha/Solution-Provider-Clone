import React from 'react';
import { motion } from 'framer-motion';
import projectImage1 from "../assets/1.avif";
import projectImage2 from "../assets/2.avif";
import projectImage3 from "../assets/3.avif";
import projectImage4 from "../assets/4.avif";
import projectImage5 from "../assets/5.avif";
import projectImage6 from "../assets/6.avif";
import projectImage7 from "../assets/7.avif";
import projectImage8 from "../assets/8.avif";
import projectImage9 from "../assets/9.avif";
import projectImage10 from "../assets/10.avif";
import projectImage11 from "../assets/11.avif";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={projectImage1} alt="Project 1" className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">Client: Mr. Tanvir</h3>
              <p className="text-lg text-gray-700 mt-2">Project Location: Kalabagan, Dhaka</p>
              <p className="text-md text-gray-600 mt-4">
                The glossy surface of these cabinets is like a mirror, effortlessly capturing the beauty of your surroundings. It reflects the gleam of your stainless steel appliances, the warmth of your wooden countertops, and the softness of your plush rugs. Each glance at their immaculate facade reveals a new facet of your kitchen's charm.
              </p>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={projectImage2} alt="Project 2" className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">Client: Dr. Azim</h3>
              <p className="text-lg text-gray-700 mt-2">Project Location: Adabor, Dhaka</p>
              <p className="text-md text-gray-600 mt-4">
                Marble-coloured kitchen cabinets are a testament to the marriage of opulence and functionality, a symphony of timeless beauty and modern design. Imagine stepping into a kitchen where the elegance of marble surfaces seamlessly merges with the practicality of cabinetry.
              </p>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex">
              <img src={projectImage3} alt="Project 3" className="w-1/3 h-72 object-cover" />
              <img src={projectImage4} alt="Project 3" className="w-1/3 h-72 object-cover" />
              <img src={projectImage5} alt="Project 3" className="w-1/3 h-72 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">Client: Major Khalid</h3>
              <p className="text-lg text-gray-700 mt-2">Project Location: Khilkhet, Dhaka</p>
              <p className="text-md text-gray-600 mt-4">
                The marble-inspired colour choice is versatile, offering a harmonious backdrop that effortlessly complements various design styles. Whether your kitchen is modern, traditional, or somewhere in between, these cabinets serve as a neutral canvas upon which you can create your culinary masterpiece.
              </p>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex">
              <img src={projectImage6} alt="Project 4" className="w-1/3 h-72 object-cover" />
              <img src={projectImage7} alt="Project 4" className="w-1/3 h-72 object-cover" />
              <img src={projectImage8} alt="Project 4" className="w-1/3 h-72 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">Client: Mr. Hasan</h3>
              <p className="text-lg text-gray-700 mt-2">Project Location: Vhanga, Faridpur</p>
              <p className="text-md text-gray-600 mt-4">
                The cabinet doors, finished in glossy oak, instantly draw the eye with their exquisite wood grain patterns. Each streak and knot tells a story, reminiscent of the grandeur of ancient forests. The glossy surface enhances the wood's natural beauty, allowing it to shine with a luxurious sheen. It's as if the very essence of nature has been brought into your kitchen, creating a unique and inviting atmosphere.
              </p>
            </div>
          </motion.div>

          {/* Project 5 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex">
              <img src={projectImage9} alt="Project 5" className="w-1/3 h-72 object-cover" />
              <img src={projectImage10} alt="Project 5" className="w-1/3 h-72 object-cover" />
              <img src={projectImage11} alt="Project 5" className="w-1/3 h-72 object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">Client: Mr. Tanvir Khaled</h3>
              <p className="text-lg text-gray-700 mt-2">Project Location: Rajabazar, Dhaka</p>
              <p className="text-md text-gray-600 mt-4">
                The cabinet doors, finished in glossy oak, instantly draw the eye with their exquisite wood grain patterns. Each streak and knot tells a story, reminiscent of the grandeur of ancient forests. The glossy surface enhances the wood's natural beauty, allowing it to shine with a luxurious sheen. It's as if the very essence of nature has been brought into your kitchen, creating a unique and inviting atmosphere.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
