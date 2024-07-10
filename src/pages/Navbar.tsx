import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="bg-custom-purple h-16 flex items-center px-4 font-montserrat">
      <a href="#" className="text-white text-lg font-bold">LOGO</a>

      <ul className="flex list-none text-white ml-10 gap-3 relative">
        <li className="px-2 py-2 hover:bg-gray-700 relative">
          <button className="flex items-center">
            Nos services <IoIosArrowDown className="ml-1"/>
          </button>
          <ul className="absolute bg-gray-800 mt-5 rounded-lg py-2 w-72 text-white left-1/2 transform -translate-x-1/2">
            <li className="px-4 py-2 hover:bg-gray-700">Réserver un bien</li>
            <li className="px-4 py-2 hover:bg-gray-700">Location Courte Durée</li>
            <li className="px-4 py-2 hover:bg-gray-700">Location Moyenne Durée</li>
            <li className="px-4 py-2 hover:bg-gray-700">Sous Location Professionelle</li>
          </ul>
        </li>
        <li className="px-2 py-2 hover:bg-gray-700">A propos</li>
        <li className="px-2 py-2 hover:bg-gray-700">Devenir City Manager</li>
        <li className="px-2 py-2 hover:bg-gray-700">Nous rejoindre</li>
      </ul>
    </nav>
  );
};

export default Navbar;
