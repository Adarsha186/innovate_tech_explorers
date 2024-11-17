import React from "react";

function WhatWeDo() {
  return (
    <section className="text-center p-12 bg-white mt-8 mx-auto rounded-lg shadow-2xl max-w-5xl">
      {/* Main heading */}
      <h1 className="text-4xl text-center font-bold text-blue-600 mb-8">Innovative Tech Explorers</h1>

      {/* Paragraph Section */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Innovative Tech Explorers offers a full range of services including Contractual Staffing, Contract-to-Hire, and Direct Hiring. 
        We believe in long-term strategic partnerships with our clients. Our expert team is dedicated to providing services such as IT 
        recruiting and placements, end-to-end IT solutions, maintenance and support for your IT projects, IT infrastructure development 
        & maintenance, application/software development or installation, creative and UI design solutions, and more. With the agile and 
        competitive nature of business today, and the need to deliver technology solutions on time within budget constraints, we deliver 
        services that meet these demands.
        <br /><br />
        If you have a new initiative or don't have the time or resources to manage it, Innovative Tech Explorers is here to help. We've 
        built a reputation for doing the job right and delivering the solutions you need.
      </p>

      {/* Subheading */}
      <h2 className="text-2xl text-blue-600 font-bold mb-4">Following are our services</h2>

      {/* Service Sections */}
      <div className="mb-8">
        <h3 className="text-xl text-blue-600 font-bold mb-2">Training Process</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Data Analytics
          <br />
          Throughout this course, you will learn the key aspects of data analysis. You will begin to explore the fundamentals of gathering data, 
          learning how to identify your data sources. You'll then learn how to clean, analyze, and share your data using visualizations and 
          dashboard tools. This course culminates with a real-world data analysis scenario that tests your knowledge of the material.
          <br /><br />
          <strong>Tools:</strong> Tableau Desktop, Tableau Prep, SAP-BI, Alteryx, SQL.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-blue-600 font-bold mb-2">Screening Process</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our placement process begins by understanding the client requirements thoroughly. We identify the right candidate in a timely 
          manner. Technical Testing Reports are available at your request. We also contact prior employers to verify employment and obtain 
          detailed information on the consultant's past work performance. For direct-hire placements, we conduct background checks, and 
          additional screenings, such as drug testing and credit checks, can be coordinated upon request.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-blue-600 font-bold mb-2">Hiring Options</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We provide our clients with a variety of hiring options, including contract, contract-to-hire, and direct-hire placements. 
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-blue-600 font-bold mb-2">Our Guarantee</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We are dedicated to making sure that our services meet and exceed your expectations. Our team will follow up regularly to ensure 
          that the performance of our consultants is in line with your needs. We also maintain ongoing contact with our consultants to 
          address any questions or concerns they may have regarding their assignments.
        </p>
      </div>

      {/* Contact Information */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        If you want to be a part of this ever-expanding organization, email your resume to: 
        <a href="mailto:hr@innovativetechexplorers.com" className="text-blue-600"> hr@innovativetechexplorers.com</a>
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Looking for Job Openings? 
        <a href="/job-opportunities" className="text-blue-600 font-bold"> Click Here</a>
      </p>
    </section>
  );
}

export default WhatWeDo;
