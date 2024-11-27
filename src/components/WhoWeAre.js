import React from "react";
import HI from '../images/advantages/h_i.jpg';
import client from '../images/advantages/client.jpg';
import creative from '../images/advantages/creative.jpg';
import tech from '../images/advantages/tech.png';
import leader from '../images/advantages/leader.jpg';
import global from '../images/advantages/global presence.jpg';
import { FaDollarSign, FaGift, FaUmbrellaBeach, FaClipboardCheck, FaFileInvoiceDollar, FaHandsHelping } from "react-icons/fa";

function WhoWeAre() {
  const advantages = [
    { src: HI, title: "Honesty & Integrity" },
    { src: client, title: "Client Satisfaction" },
    { src: tech, title: "Technological Insight" },
    { src: leader, title: "Leadership Excellence" },
    { src: creative, title: "Creative Solutions" },
    { src: global, title: "Global Presence" },
  ];

  const benefits = [
    { icon: <FaDollarSign />, title: "Generous Compensation", description: "Competitive salaries and hourly rates tailored to industry standards." },
    { icon: <FaGift />, title: "Referral & Incentive Bonus", description: "Earn bonuses for referring top talent or achieving milestones." },
    { icon: <FaFileInvoiceDollar />, title: "Tax Filing Assistance", description: "Simplified tax filing assistance for stress-free financial planning." },
    { icon: <FaUmbrellaBeach />, title: "Holiday & Vacation Pay", description: "Enjoy paid holidays and vacation time to recharge and relax." },
    { icon: <FaClipboardCheck />, title: "Payroll Assistance", description: "Efficient and transparent payroll services to ensure timely payments." },
    { icon: <FaHandsHelping />, title: "401(K) Eligibility", description: "Plan for your future with our comprehensive 401(K) retirement plan." },
  ];

  return (
    <section className="text-center p-12 bg-white mt-8 mx-auto rounded-lg shadow-2xl max-w-7xl">
      {/* Introduction */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Innovative Tech Explorers is a company that serves as a combination of knowledge, planning, and execution at its best. 
        We are working towards the aim of forming a group of experts that are capable of providing a complete solution to our clients. 
        At Innovative Tech Explorers, we believe that the foundation for success is building a good relationship with our clients. By 
        taking the time to understand the goals of each project while delivering results on time and within budget, we bridge gaps 
        in the IT industry. As a premier staffing and IT consulting service, we offer knowledge of cutting-edge technology and 
        workforce solutions, delivering only the best results to our clients.
      </p>

      {/* Advantages Section */}
      <h2 className="text-2xl text-blue-600 font-bold mb-8">The Innovative Tech Explorers Advantages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={advantage.src}
              alt={advantage.title}
              className="w-full h-48 object-cover"
            />
            
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">
                {advantage.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Our Benefits Section */}
      <h2 className="text-2xl text-blue-600 font-bold mb-8">Our Benefits Include:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Icon */}
            <div className="text-blue-500 text-4xl mb-4">{benefit.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
            {/* Description */}
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        At Innovative Tech Explorers, we are committed to recruiting and retaining talented individuals. Our values start with a 
        commitment to excellence in everything that we do. Our consultants know that we have assignments with the best companies, 
        and there are many opportunities for challenging assignments and career growth. Many of our consultants were referred to us 
        by other consultants.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We work directly with many of the top companies in the USA in different areas of expertise and also through our network 
        of tier 1 vendors. Apart from that, we constantly need people to work on internal projects and project-based assignments 
        for clients whom we support. For capable undergraduates seeking hands-on work experience, we offer a limited number of 
        internships every year.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        As an intern at Innovative Tech Explorers, you will have the opportunity to experience working in a fast-paced, dynamic 
        organization and the chance to discover the career paths we offer along with the benefit of exposure to our direct clients. 
        Please find below the list of jobs currently available at Innovative Tech Explorers.
      </p>
    </section>
  );
}

export default WhoWeAre;
