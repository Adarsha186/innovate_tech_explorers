import React from "react";
import logo_b from '../images/logo_big.jpeg'

function Home() {
  return (
    <section className="text-center p-12 bg-white mt-8 mx-auto rounded-lg shadow-2xl max-w-5xl">
      <h1 className="text-4xl text-center font-bold text-blue-600 mb-8">Innovative Tech Explorers</h1>
      <img src={logo_b} alt="Innovative Tech Explorers Logo" className="mx-auto w-100" />

      <h2 className="text-2xl text-center font-semibold text-blue-600 mt-4">
        <em>"Navigating Innovation, Shaping the Future."</em>
      </h2>

      <p className="text-black-700 mt-8 leading-relaxed text-left">
        Innovative Tech Explorers possesses a strong set of values that are embodied by a commitment to absolute customer satisfaction, which we achieve by delivering the finest human resources and most cost-effective solutions in a timely manner. We believe in forming long-term relationships with our customers which is ensured with regular off-loading of our client’s workforce concerns and is proven with our successful track record of supplying expert personnel addressing to our client’s requirements. The relationships that Innovative Tech Explorers develops depend on an understanding of client needs and requirements and a methodical approach to their technology and business process.<br /><br />
        
        Innovative Tech Explorers takes the initiative in reaching project goals. We know how to balance risk vs. rewards in achieving an objective, while maintaining moral, ethical and business standards.<br /><br />
        
        Innovative Tech Explorers has set its sight on growth and development. Innovative Tech Explorers has now developed comparable products and aims to provide software development, testing and support services to its clients. We expect to be one of the leading software development and solutions provider by the end of 2015.
      </p>
    </section>
  );
}

export default Home;
