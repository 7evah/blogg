import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center relative">
        <h1 className="text-2xl font-bold">THE FIVE LIONS</h1>

        {/* Centered Input Text Field */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="p-1 rounded-md text-black w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <i className="fas fa-search" id="search"></i>
          <i className="fas fa-bars" id="menu-bar"></i>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li className="transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-yellow-500">
              <a href="#hero" className="text-white">Home</a>
            </li>
            <li className="transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-yellow-500">
              <a href="#articles" className="text-white">Articles</a>
            </li>
            <li className="transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-yellow-500">
              <a href="#footer" className="text-white">Contact</a>
            </li>
            <li className="transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-yellow-500">
              <a href="#about" className="text-white">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
