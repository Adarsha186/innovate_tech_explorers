import React from "react";
import trainingImage from "../images/services/training.jpg"; // Replace with the actual path
import screeningImage from "../images/services/screening.jpg"; // Replace with the actual path
import hiringImage from "../images/services/hiring.jpg"; // Replace with the actual path
import guaranteeImage from "../images/services/guarantee.jpg"; // Replace with the actual path

function WhatWeDo() {
  const services = [
    {
      title: "Training Process",
      description: `
        Throughout this course, you will learn the key aspects of data analysis. You will begin to explore the fundamentals of gathering data, 
        learning how to identify your data sources. You'll then learn how to clean, analyze, and share your data using visualizations and 
        dashboard tools. This course culminates with a real-world data analysis scenario that tests your knowledge of the material.
        Tools: Tableau Desktop, Tableau Prep, SAP-BI, Alteryx, SQL.
      `,
      image: trainingImage,
    },
    {
      title: "Screening Process",
      description: `
        Our placement process begins by understanding the client requirements thoroughly. We identify the right candidate in a timely 
        manner. Technical Testing Reports are available at your request. We also contact prior employers to verify employment and obtain 
        detailed information on the consultant's past work performance. For direct-hire placements, we conduct background checks, and 
        additional screenings, such as drug testing and credit checks, can be coordinated upon request.
      `,
      image: screeningImage,
    },
    {
      title: "Hiring Options",
      description: `
        We provide our clients with a variety of hiring options, including contract, contract-to-hire, and direct-hire placements.
      `,
      image: hiringImage,
    },
    {
      title: "Our Guarantee",
      description: `
        We are dedicated to making sure that our services meet and exceed your expectations. Our team will follow up regularly to ensure 
        that the performance of our consultants is in line with your needs. We also maintain ongoing contact with our consultants to 
        address any questions or concerns they may have regarding their assignments.
      `,
      image: guaranteeImage,
    },
  ];

  return (
    <section className="text-center p-12 bg-white mt-8 mx-auto rounded-lg shadow-2xl max-w-screen-xl">
      {/* Main heading */}
      <h1 className="text-4xl text-center font-bold text-blue-600 mb-8">Innovative Tech Explorers</h1>

      {/* Paragraph Section */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Innovative Tech Explorers offers a full range of services including Contractual Staffing, Contract-to-Hire, and Direct Hiring. 
        We believe in long-term strategic partnerships with our clients. Our expert team is dedicated to providing services such as IT 
        recruiting and placements, end-to-end IT solutions, maintenance and support for your IT projects, IT infrastructure development 
        & maintenance, application/software development or installation, creative and UI design solutions, and more.
        <br />
        <br />
        If you have a new initiative or don't have the time or resources to manage it, Innovative Tech Explorers is here to help. We've 
        built a reputation for doing the job right and delivering the solutions you need.
      </p>

      {/* Subheading */}
      <hr className="border-t border-gray-300 my-8" />
      <h2 className="text-2xl text-blue-600 font-bold mb-8">Following are our services</h2>

      {/* Services Grid */}
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index}>
            <div
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 text-left p-6">
                <h3 className="text-xl text-blue-600 font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Horizontal Line */}
            {index < services.length && <hr className="border-t border-gray-300 my-8" />}
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <p className="text-lg text-gray-700 leading-relaxed mt-12">
        If you want to be a part of this ever-expanding organization, email your resume to:{" "}
        <a href="mailto:hr@innovativetechexplorers.com" className="text-blue-600">
          hr@innovativetechexplorers.com
        </a>
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Looking for Job Openings?{" "}
        <a href="/job-opportunities" className="text-blue-600 font-bold">
          Click Here
        </a>
      </p>
    </section>
  );
}

export default WhatWeDo;
