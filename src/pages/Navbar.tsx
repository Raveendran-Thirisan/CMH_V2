import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full px-4 font-montserrat bg-custom-purple">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/blanc5000.svg" width={90} height={100} alt="logo blanc CommeMyHome" />
        </Link>
        <ul className="ml-10 text-white flex gap-3">
          <li className="relative group">
            <button className="flex items-center cursor-pointer">
              Nos services <IoIosArrowDown className="ml-1 transition-transform duration-300 transform group-hover:rotate-0 rotate-180" />
            </button>
            <ul className="absolute left-1/2 hidden w-72 text-sm text-black transform -translate-x-1/2 bg-white rounded-lg group-hover:block transition-all">
              <li className="px-4 py-2 hover:bg-violet-200">Réserver un bien</li>
              <li className="px-4 py-2 hover:bg-violet-200">Location Courte Durée</li>
              <li className="px-4 py-2 hover:bg-violet-200">Location Moyenne Durée</li>
              <li className="px-4 py-2 hover:bg-violet-200">Sous Location Professionnelle</li>
            </ul>
          </li>
          <li className="cursor-pointer">
            <button className="flex items-center cursor-pointer">
              À propos <IoIosArrowDown className="ml-1 transition-transform duration-300 transform group-hover:rotate-0 rotate-180" />
            </button>
          </li>
          <li className="px-4 cursor-pointer">Actualités</li>
          <li className="px-4 cursor-pointer">Devenir City Manager</li>
        </ul>
      </div>
      <div className="flex items-center">
        <button className="cursor-pointer bg-custom-pink rounded-full p-2 font-medium text-white mr-4">
          Se connecter
        </button>
        <div className="relative flex items-center">
          <IoMdSearch className="absolute ml-3 text-2xl text-gray-400" />
          <input type="text" className="h-10 pl-10  w-55 rounded-full" placeholder="Rechercher" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
