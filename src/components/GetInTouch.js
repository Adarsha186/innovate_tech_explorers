import React, { useState } from "react";
import emailjs from "emailjs-com";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    address: "",
    zip: "",
    resume: null,
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        e.target, // Form target
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message. Please try again later.");
        }
      );

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      city: "",
      address: "",
      zip: "",
      resume: null,
      message: "",
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Feel Free To Contact Us
      </h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* City Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your city"
            required
          />
        </div>

        {/* Address Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
            required
          />
        </div>

        {/* Zip Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="zip">Zip</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Zip Code"
            required
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Message
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;
