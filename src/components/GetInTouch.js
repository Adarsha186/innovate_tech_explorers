import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8" style={{ fontFamily: 'Lora, serif' }}>
        Get in Touch
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg grid grid-cols-2 gap-6"
      >
        {/* Input Fields */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="zip" className="block text-gray-700 font-semibold mb-2">
            Zip
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="resume" className="block text-gray-700 font-semibold mb-2">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GetInTouch;
