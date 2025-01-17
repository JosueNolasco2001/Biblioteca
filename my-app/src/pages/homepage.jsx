import imgXiomara from '../img/xiomaraSenacit.jpg';
import imgXiomara2 from '../img/Biblioteca-Virtual6.png';
import imgSenacit from '../img/logosenacit.png';
import Header from '../component/header.jsx';
import { Link } from 'react-router-dom';
import './styles.scss';
import Carusel from '../component/carussel.jsx';
import Carusel2 from '../component/carussel2j.jsx';
import React, { useEffect, useState } from 'react';

function Homepage() {
  const [inView, setInView] = useState(false);

  // Detecta cuando el componente está en la vista
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('featured-books');
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative h-screen w-sc bg-transparent mt-40">
      <Header activeLink={1} />
      
      <center>
        <div className="bg-[url('../img/Biblioteca-Virtual6.png')] bg-cover bg-center  w-[90%] text-white">
          <img src={imgXiomara2} alt="" />
        </div>
      </center>

      <Carusel2 />

      {/* Bloque de texto animado de "Libros más destacados" */}
      <div
        id="featured-books"
        className={`mt-4 mb-6 inline-block bg-opacity-20 bg-cyan-300 rounded-[40px] p-4 transition-all duration-700 ease-in-out ${
          inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-12 opacity-0'
        }`}
        style={{
          backdropFilter: 'blur(23px)',
          WebkitBackdropFilter: 'blur(23px)',
        }}
      >
        <h2 className="font-sans font-semibold leading-relaxed text-black text-2xl">
          ¡NUESTROS LIBROS MÁS DESTACADOS!
        </h2>
        <p className="text-black text-lg">
          Te presentamos los libros que generan mayor interés entre nuestros lectores
        </p>
      </div>
 <Carusel />

      {/* Sección de novedades */}
      <div className="flex justify-center w-full">
        <div className="lg:w-7/12 mt-4 mb-5">
          <div className="text-center">
            <h3 className="mb-3 font-sans font-semibold leading-relaxed text-black text-[1.7em]">
              ¡NUESTRAS NOVEDADES!
            </h3>
            <p className="text-black text-lg">
              En esta sección, te presentamos los archivos más recientes que se han cargado en nuestro sistema. Sumérgete en ellos y descubre las últimas incorporaciones a nuestra colección.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
