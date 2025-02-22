import React from 'react';
import contactImage from '../assets/contact.avif';
import contactImage2 from '../assets/contact2.avif';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Contact Image */}
        <div>
          <img 
            src={contactImage} 
            alt="Get in Touch" 
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                rows="5" 
                placeholder="Your Message" 
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps and Additional Image Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.679399207961!2d90.39914297542012!3d23.763131484588888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf76a3961bcf%3A0xba19c32d60034eaf!2sSolution%20Provider!5e0!3m2!1sen!2sbd!4v1708594738827!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <img 
            src={contactImage2} 
            alt="Contact Us" 
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;


