import Logo from './logo';
import { IoIosArrowDown, IoMdSearch } from 'react-icons/io';
import React,{useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';


const Navbar2 = () => {
  const [open , setOpen] = useState(false);
  return (
    <nav className='bg-custom-purple fixed z-50 top-0 w-full h-18'>
      <div className='mx-auto px-7 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo and Navlinks */}
          <div className='flex items-center text-white'>
            <Logo />
            <div className='hidden ml-10 md:flex space-x-4'>
              {Navlinks.map((link, index) => (
                <ul key={index} className='relative group'>
                  <a href={link.link} className='flex items-center space-x-1 group'>
                    {link.title}  
                    {link.subMenu && <IoIosArrowDown className='ml-1 text-xl transition-transform duration-300 transform group-hover:rotate-0 rotate-180' />}
                  </a>
                  {link.subMenu && (
                    <ul className='absolute left-1/2 hidden w-72 text-sm text-black transform -translate-x-1/2 bg-white rounded-lg group-hover:block transition-all'>
                      {link.subMenu.map((subLink, subIndex) => (
                        <li key={subIndex} className='px-4 py-2 hover:bg-violet-200'>
                          <a href={subLink.link}>{subLink.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </ul>
              ))}
            </div>
          </div>
          <div className='flex'>
            <Seconnecter />
            <BarreDeRecherche />
          </div>
          <div className="-mr-2 flex md:hidden">
        <button>
          <span className='sr-only'> Ouvrir le menu</span>
          {open ? <FaTimes /> : <FaBars />}
          </button>
      </div>
        </div>
      </div>
    </nav>
  );
};

const Navlinks = [
  {
    title: "Nos services",
    link: "/",
    subMenu: [
      { title: "Réserver un bien", link: "/book-property" },
      { title: "Location Courte Durée", link: "/short-term-rental" },
      { title: "Location Moyenne Durée", link: "/medium-term-rental" },
      { title: "Sous Location Professionnelle", link: "/professional-sublet" },
    ],
  },
  {
    title: "À propos",
    link: "/",
    
  },
  {
    title: "Actualités",
    link: "/",
  },
  {
    title: "Devenir City Manager",
    link: "/",
  },
];

const Seconnecter = () => {
  return (


    <div>
      <button className=" text-base cursor-pointer hidden md:flex  bg-custom-pink rounded-full p-2 font-medium text-white mr-4">
      Se connecter
      </button>

    </div>
    
  );
};

const BarreDeRecherche = () => {
  return (
    <div className="hidden md:flex relative items-center">
      <IoMdSearch className="absolute ml-3 text-2xl text-gray-400" />
      <input type="text" className="h-10 pl-10 w-55 rounded-full" placeholder="Rechercher" />
    </div>
  );
};

export default Navbar2;
