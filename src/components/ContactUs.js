import React from "react";

function ContactUs() {
  return (
    <div className="text-center p-12 bg-white mt-8 mx-auto rounded-lg shadow-2xl max-w-5xl">
      {/* Contact Information */}
      <div className="text-center mb-8">
        <h1 className="text-4xl text-blue-600 font-bold mb-8">Innovative Tech Explorers</h1>
        <p className="text-lg font-bold text-gray-800">1477 Trimingham Dr</p>
        <p className="text-lg font-bold text-gray-800">Pleasanton, CA 94566</p>
        <p className="text-lg font-bold text-gray-800">(631) 636-8085</p>
        <p className="text-lg font-bold text-gray-800">(888) 777-0807</p>
        <a href="mailto:hr@innovativetechexplorers.com" className="text-blue-600 text-lg">
          hr@innovativetechexplorers.com
        </a>
      </div>

      {/* Embedded Google Map */}
      <div className="flex justify-center">
      <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.8563717271487!2d-121.87150098441736!3d37.64884757977939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808feaba0e5147bb%3A0x8d5c1570294382d5!2s1477%20Trimingham%20Dr%2C%20Pleasanton%2C%20CA%2094566!5e0!3m2!1sen!2sus!4v1695391447278!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="border-2 border-gray-300 rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
