import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">THE FIVE LIONS</h1>
        <nav>
            {/* Centered Input Text Field */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <input 
      type="text" 
      placeholder="Search..." 
      className="p-1 rounded-md text-black w-80"

    />
  </div> 
  <div class ="icon">
    <i class="fas fa-search" id="search"></i>
    <i class="fas fa-bars" id="menu-bar"></i> 

  </div>
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
      </header>
  );
};

export default Header;