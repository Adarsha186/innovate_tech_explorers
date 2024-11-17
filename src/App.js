import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import JobOpportunities from "./components/JobOpportunities";
import ContactUs from "./components/ContactUs";
import GetInTouch from "./components/GetInTouch";
import "./index.css";
import logo_s from './images/logo_small.jpeg'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = "bg-white text-blue-600 px-3 py-2 rounded";
  const inactiveLinkClass = "text-white hover:text-yellow-300";

  const getLinkClass = ({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "Who We Are" },
    { path: "services", label: "What We Do" },
    { path: "/job-opportunities", label: "Job Opportunities" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/get-in-touch", label: "Get In Touch" }
  ];  

  return (
    <Router>
      <div className="App">
        {/* Header with Logo */}
        <header className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <img src={logo_s} alt="Innovative Tech Explorers Logo" className="w-25 h-10" />

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
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={getLinkClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Search Bar for Large Screens */}
            <input
              type="search"
              className="hidden md:block ml-6 py-1 px-2 rounded border-none w-48"
              placeholder="Search..."
            />
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-blue-600">
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

        <footer className="bg-blue-600 text-white text-center p-4 mt-10">
          <p>© 2024 Innovative Tech Explorers</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
