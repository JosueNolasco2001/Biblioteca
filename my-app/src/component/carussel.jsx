import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function BookCarousel() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        let data;

        if (window.electron) {
          data = await window.electron.loadBooksFile(
            "../dist/informacion_libros.json"
          );
        } else {
          const response = await fetch("/informacion_libros.json");
          data = await response.json();
        }

        const randomBooks = getRandomBooks(data, 9);
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
    <div className="flex flex-col items-center mt-10">
     
      {books.length > 0 ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <Link to={`/pdf-viewer/${encodeURIComponent(book.ruta)}`}>
                  <img
                    className="object-cover w-64 h-80 rounded-xl shadow-lg cursor-pointer"
                    src={book.portada.replace(/\\/g, "/")}
                    alt={book.titulo}
                  />
                </Link>
              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Cargando libros...</p>
      )}
    </div>
  );
}
