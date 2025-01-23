import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './stylec3.css';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        let randomBooks = [];

        if (window.electron) {
          const data = await window.electron.loadBooksFile(
            "../dist/informacion_libros.json"
          );
          randomBooks = getRandomBooks(data, 10);
        } else {
          const response = await fetch("/informacion_libros.json");
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let booksChunk = [];
          let done = false;

          while (!done) {
            const { value, done: chunkDone } = await reader.read();
            done = chunkDone;
            booksChunk += decoder.decode(value, { stream: !chunkDone });
          }

          const data = JSON.parse(booksChunk);
          randomBooks = getRandomBooks(data, 10);
        }

        setBooks(randomBooks);
      } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
      }
    };

    loadBooks();
  }, []);

  const getRandomBooks = (books, count) => {
    const shuffled = [...books].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <Swiper
      className="swiper3"
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {books.map((book, index) => (
        <SwiperSlide className="swiper-slide3" key={index}>
          <Link className='w-[100%]' to={`/pdf-viewer/${encodeURIComponent(book.ruta)}`}>
            <img
              className="swiper-slide3 w-[100%]"
              src={book.portada.replace(/\\/g, "/")}
              alt={`Portada de ${book.titulo}`}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
