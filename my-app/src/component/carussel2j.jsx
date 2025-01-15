import React, { useState } from 'react';

const CardSlider = () => {
  const [selected, setSelected] = useState(3);

  const data = [
    {
        "titulo": "Soka - Ignacy Karpowicz_BmS2kSQZGu",
        "descripcion": "Sin descripción",
        "categorias": [
            "Sin categoría"
        ],
        "portada": "img\\b4ff84b48cee35d2b3b1bce02914889f.jpg",
        "ruta": "libros\\Soka - Ignacy Karpowicz_BmS2kSQZGu.pdf"
    },
    {
        "titulo": "Solaris - Stanislaw Lem_FUjp611GUM",
        "descripcion": "Sin descripción",
        "categorias": [
            "Sin categoría"
        ],
        "portada": "img\\992bb916e2fe88532fc64fb92577fa12.jpg",
        "ruta": "libros\\Solaris - Stanislaw Lem_FUjp611GUM.pdf"
    },
    {
        "titulo": "Soledad - Anthony Storr_hMeDBszeh9",
        "descripcion": "Sin descripción",
        "categorias": [
            "Sin categoría"
        ],
        "portada": "img\\b1290017981b163b6cba3741a3a025ab.jpg",
        "ruta": "libros\\Soledad - Anthony Storr_hMeDBszeh9.pdf"
    },
    {
        "titulo": "Soledades - Luis de Gongora y Argote (1)_xoD7qeEtK4",
        "descripcion": "Sin descripción",
        "categorias": [
            "Sin categoría"
        ],
        "portada": "img\\433e81b52d7c9465e160a62cb9bdcb46.jpg",
        "ruta": "libros\\Soledades - Luis de Gongora y Argote (1)_xoD7qeEtK4.pdf"
    },
    {
        "titulo": "Soledades",
        "descripcion": "Sin descripción",
        "categorias": [
            "Sin categoría"
        ],
        "portada": "img\\68d022399fc70e1693f564c428f7da65.jpg",
        "ruta": "libros\\Soledades - Luis de Gongora y Argote_RB3foUBxMK.pdf"
    },
    {
        "titulo": "Solenoide - Mircea Cartarescu_LiTkV91ljg",
        "descripcion": "Sin descripción",
        "categorias": [
            "Sin categoría"
        ],
        "portada": "img\\f257b245a50cbb94cecece7ebeb6c115.jpg",
        "ruta": "libros\\Solenoide - Mircea Cartarescu_LiTkV91ljg.pdf"
    },
    {
        "titulo": "Solo - August Strindberg_EOuFZF6e5K",
        "descripcion": "Sin descripción",
        "categorias": [
            "Sin categoría"
        ],
        "portada": "img\\6109d5b0d645f5af0417eedec75d27d0.jpg",
        "ruta": "libros\\Solo - August Strindberg_EOuFZF6e5K.pdf"
    }
  ];

  return (
    <main className="relative flex flex-col justify-center bg-transparent overflow-hidden rounded-3xl">
      <div className="max-w-5xl px-4 md:px-6 ">
        <section>
          <div className="relative">
            <div className="flex ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out transform relative w-[200px] h-[300px] rounded-2xl shadow-xl cursor-pointer ${
                    selected === index + 1
                      ? 'scale-100 z-30 blur-none'
                      : 'scale-90 opacity-80 z-20 blur-sm'
                  }`}
                  style={{
                    transform: `translateX(${(index - (selected - 1)) * 100}%)`,
                  }}
                  onClick={() => setSelected(index + 1)}
                >
                  <article className="relative bg-white rounded-2xl shadow-2xl w-96 h-full">
                    <img
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      src={item.portada}
                      alt={item.titulo}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 rounded-2xl">
                      <header>
                        <h1 className="text-xl font-bold text-white">{item.titulo}</h1>
                      </header>
                      <div className="text-sm leading-relaxed text-white">
                        <p>{item.descripcion}</p>
                      </div>
                      <footer className="text-right mt-auto">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:underline"
                          href={item.ruta}
                        >
                          Read more →
                        </a>
                      </footer>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CardSlider;
