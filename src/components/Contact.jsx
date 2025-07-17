import React from 'react';

const Contact = () => {

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-2xl rounded-2xl p-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          placeholder="Your Name"
        />
        <textarea
          className="border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;