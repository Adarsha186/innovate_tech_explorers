import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import JobOpportunities from "./components/JobOpportunities";
import ContactUs from "./components/ContactUs";
import GetInTouch from "./components/GetInTouch";
import "./index.css";
import logo_s from './images/logo_small.jpeg';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = "bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md transform transition duration-300";
  const inactiveLinkClass = "text-gray-400 hover:text-white px-4 py-2";

  const getLinkClass = ({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "Who We Are" },
    { path: "/services", label: "What We Do" },
    { path: "/job-opportunities", label: "Job Opportunities" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/get-in-touch", label: "Get In Touch" }
  ];

  return (
    <Router>
      <div className="App bg-gray-900 text-gray-100 min-h-screen">
        {/* Header with Logo */}
        <header className="bg-gray-800 p-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <img src={logo_s} alt="Innovative Tech Explorers Logo" className="w-24 h-12 rounded-full" />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>

            {/* Links for large screens */}
            <nav className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={getLinkClass}
                >
                  {item.label}
                </NavLink>
              ))}
              <input
                type="search"
                className="py-2 px-4 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-gray-800">
              <nav className="flex flex-col items-start space-y-4 p-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={getLinkClass}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<WhoWeAre />} />
          <Route path="/services" element={<WhatWeDo />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>

        <footer className="bg-gray-800 text-gray-400 text-center py-6">
          <p className="text-lg">© 2024 Innovative Tech Explorers</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
