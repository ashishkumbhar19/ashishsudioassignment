import React from "react";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
    {/* Logo */}
    <h1 className="text-2xl font-semibold">MyLogo</h1>

    {/* Login & Signup Buttons */}
    <div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2 transition duration-300">
        Login
      </button>
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300">
        Signup
      </button>
    </div>
  </nav>
);

export default Navbar;
