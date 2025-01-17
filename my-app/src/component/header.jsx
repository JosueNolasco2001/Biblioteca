import React from 'react';
import imgSenacit from '../img/senacitlogov2.png';
import Guacamaya from '../img/guacamaya.png';
import { Link } from 'react-router-dom'
function Header({ activeLink }) {
  return (
<header
  className="z-30  fixed top-0  flex items-center w-[90%] h-24 sm:h-40 bg-cover bg-center rounded-3xl"
  style={{ backgroundImage: `url(${Guacamaya})` }}
>
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
        <Link
          to="/books"
          href="#"
          className={`flex px-6 py-2 ${activeLink === 2 ? 'text-[#00d9d5] underline' : 'text-white'}`}
          style={{
            textDecorationColor: activeLink === 2 ? '#00d9d5' : 'none',
            textUnderlineOffset: activeLink === 2 ? '10px' : '0',
          }}
        >
          Libros
        </Link>
        <Link
          to="/Search"
          href="#"
          className={`flex px-6 py-2 ${activeLink === 3 ? 'text-[#00d9d5] underline' : 'text-white'}`}
          style={{
            textDecorationColor: activeLink === 3 ? '#00d9d5' : 'none',
            textUnderlineOffset: activeLink === 3 ? '10px' : '0',
          }}
        >
          Buscar
        </Link>
        <Link
          to="/Categorias"
          href="#"
          className={`flex px-6 py-2 ${activeLink === 4 ? 'text-[#00d9d5] underline' : 'text-white'}`}
          style={{
            textDecorationColor: activeLink === 4 ? '#00d9d5' : 'none',
            textUnderlineOffset: activeLink === 4 ? '10px' : '0',
          }}
        >
          Categorias
        </Link>
       
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
