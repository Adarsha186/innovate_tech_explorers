import React from "react";

function WhoWeAre() {
  return (
    <section className="text-center p-12 bg-white mt-8 mx-auto rounded-lg shadow-2xl max-w-5xl">
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Innovative Tech Explorers is a company that serves as a combination of knowledge, planning, and execution at its best. 
        We are working towards the aim of forming a group of experts that are capable of providing a complete solution to our clients. 
        At Innovative Tech Explorers, we believe that the foundation for success is building a good relationship with our clients. By 
        taking the time to understand the goals of each project while delivering results on time and within budget, we bridge gaps 
        in the IT industry. As a premier staffing and IT consulting service, we offer knowledge of cutting-edge technology and 
        workforce solutions, delivering only the best results to our clients.
      </p>

      {/* Subheading */}
      <h2 className="text-2xl text-blue-600 font-bold mb-4">The Innovative Tech Explorers Advantages</h2>

      {/* Advantages List */}
      <ul className="list-none pl-8 mb-8">
        <li className="mb-2">Honesty and integrity are the key to building lasting relationships with our clients and are reflected in everything we do.</li>
        <li className="mb-2">Dedication to client satisfaction and exceeding expectations.</li>
        <li className="mb-2">Insight into the latest developments in technology, business dynamics, and workforce talent.</li>
        <li className="mb-2">Commitment to leadership and excellence in the industry.</li>
        <li className="mb-2">Constantly evolving and keeping ahead of the curve, using creative and innovative solutions.</li>
        <li>Headquartered in New York, NY, we understand local markets while delivering global solutions.</li>
      </ul>

      {/* Additional Information Section */}
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

      {/* Benefits Section */}
      <h2 className="text-2xl text-blue-600 font-bold mb-4">Our Benefits include:</h2>

      {/* Benefits List */}
      <ul className="list-none pl-8 mb-8">
        <li className="mb-2">Generous salaried and hourly compensation plans</li>
        <li className="mb-2">Referral and Incentive Bonus</li>
        <li className="mb-2">Tax filing assistance</li>
        <li className="mb-2">Holiday and/or vacation pay</li>
        <li className="mb-2">Payroll assistance</li>
        <li className="mb-2">401(K) eligibility</li>
      </ul>

      {/* Contact Information */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        If you want to be a part of this ever-expanding organization, email your resume to: 
        <a href="mailto:hr@innovativetechexplorers.com" className="text-blue-600">hr@innovativetechexplorers.com</a>
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Looking for Job Openings? 
        <a href="/job-opportunities" className="text-blue-600 font-bold"> Click Here</a>
      </p>
    </section>
  );
}

export default WhoWeAre;
