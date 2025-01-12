import React from 'react';
import imgSenacit from '../img/logosenacit.png';
import { Link } from 'react-router-dom'
function Header({ activeLink }) {
  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
      <div className="container min-w-full flex items-center justify-between">
        <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
          <img className="w-[300px]" alt="hero" src={imgSenacit} />
        </div>
        <div className="flex items-center">
          <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
            <a
              href="#"
              className={`flex px-6 p-110 ${activeLink === 1 ? 'text-[#00d9d5] underline' : 'text-white'}`}
              style={{
                textDecorationColor: activeLink === 1 ? '#00d9d5' : 'none',
                textUnderlineOffset: activeLink === 1 ? '10px' : '0',
              }}
            >
              Inicio
            </a>
            <a
              href="#"
              className={`flex px-6 py-2 ${activeLink === 2 ? 'text-[#00d9d5] underline' : 'text-white'}`}
              style={{
                textDecorationColor: activeLink === 2 ? '#00d9d5' : 'none',
                textUnderlineOffset: activeLink === 2 ? '10px' : '0',
              }}
            >
             <Link to="/books">Libros</Link>
            </a>
            <a href="#"  className={`flex px-6 py-2 ${activeLink === 3? 'text-[#00d9d5] underline' : 'text-white'}`}
              style={{
                textDecorationColor: activeLink === 3? '#00d9d5' : 'none',
                textUnderlineOffset: activeLink === 3? '10px' : '0',
              }}>
            <Link to="/Search">Buscar</Link>
              
            </a>
            <a href="#" className="flex px-6 py-2 text-white">
              Contact
            </a>
            <a href="#" className="flex px-6 py-2 text-white">
              Carrer
            </a>
          </nav>
          <button className="flex flex-col ml-4 lg:hidden">
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
