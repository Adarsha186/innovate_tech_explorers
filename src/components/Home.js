import React from "react";
import logo_b from '../images/logo_big.jpeg'; // Replace with your logo path
import introImage from '../images/intro.jpg'; // Add your introductory image here
import missionImage from '../images/mission.jpg'; // Add a mission-related image

function Home() {
  return (
    <section className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 max-w-screen-xl mx-auto">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h1 className="text-5xl font-bold text-gray-800 leading-snug">
            Empowering Connections to Deliver <span className="text-blue-600">Meaningful Impact.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            As providers of digital talent solutions, we positively impact businesses and communities worldwide. 
            Partner with us to redefine innovation and success on a global scale.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src={introImage} 
            alt="Human Connections" 
            className="rounded-lg shadow-lg object-cover w-full h-80 md:h-96"
          />
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="bg-white py-16 px-8 md:px-16 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2">
          <img 
            src={missionImage} 
            alt="Our Mission" 
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-96"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 text-left space-y-6">
          <h2 className="text-4xl font-bold text-blue-600">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Innovative Tech Explorers, our mission is to empower organizations through tailored digital solutions and strategic 
            partnerships. We’re committed to excellence, innovation, and impactful collaborations that drive success for our clients and communities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join us in transforming ideas into reality, where cutting-edge technology meets unwavering dedication to your growth.
          </p>
        </div>
      </div>

      {/* Logo and Motto */}
      <div className="bg-gray-100 py-16 text-center">
        <img 
          src={logo_b} 
          alt="Innovative Tech Explorers Logo" 
          className="mx-auto w-40 h-auto mb-8" 
        />
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600">
          "Navigating Innovation, Shaping the Future."
        </h2>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-4xl text-white font-bold mb-6">Ready to Work With Us?</h2>
        <p className="text-lg text-white leading-relaxed mb-8">
          Partner with Innovative Tech Explorers to bring your ideas to life with cutting-edge solutions and unwavering expertise.
        </p>
        <a 
          href="/services" 
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
}

export default Home;
