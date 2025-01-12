import { useState, useEffect } from 'react';
import Header from '../component/header.jsx'

function Books() {
  const [informacionLibros, setInformacionLibros] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const booksPerPage = 9; // Libros por página

  useEffect(() => {
    const loadBooks = async () => {
      try {
        let data;
        
        if (window.electron) {
          // Si estamos en un entorno Electron, usamos la API de Electron
          data = await window.electron.loadBooksFile('../dist/informacion_libros.json');
        } else {
          // Si estamos en la web, intentamos cargar el archivo desde una URL estática
          const response = await fetch('/informacion_libros.json');
          data = await response.json();
        }

        setInformacionLibros(data);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    loadBooks();
  }, []); // El array vacío asegura que solo se cargue una vez al montar el componente

  // Calcular los libros a mostrar en la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = informacionLibros.slice(indexOfFirstBook, indexOfLastBook);

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Moverse a la siguiente página
  const nextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, pageNumbers.length));

  // Moverse a la página anterior
  const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  // Calcular cuántas páginas existen
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(informacionLibros.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="text-gray-600 body-font">
      <Header activeLink={2}></Header>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {informacionLibros.length > 0 ? (
            currentBooks.map((libro, index) => (
              <div key={index} className="p-1 md:w-1/3 sm:mb-0 mb-6">
                <a href={libro.ruta}>
                  <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-5">
                    <img src={libro.portada} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">{libro.titulo}</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                  </article>
                </a>
              </div>
            ))
          ) : (
            <p>Cargando libros...</p>
          )}
        </div>

        {/* Paginación con flechas */}
        <div className="flex justify-center mt-8">
          <nav>
            <ul className="flex list-none items-center">
              {/* Flecha de "Anterior" */}
              <li className="px-2 py-1 mx-1 cursor-pointer hover:bg-gray-200 rounded">
                <button onClick={prevPage} disabled={currentPage === 1} className="text-lg">
                  &lt; {/* Flecha hacia la izquierda */}
                </button>
              </li>

              {/* Botones de página */}
              {pageNumbers.map((number) => (
                <li key={number} className="px-2 py-1 mx-1 cursor-pointer hover:bg-gray-200 rounded">
                  <button onClick={() => paginate(number)} className={`text-sm ${currentPage === number ? 'font-bold' : 'text-gray-700'}`}>
                    {number}
                  </button>
                </li>
              ))}

              {/* Flecha de "Siguiente" */}
              <li className="px-2 py-1 mx-1 cursor-pointer hover:bg-gray-200 rounded">
                <button onClick={nextPage} disabled={currentPage === pageNumbers.length} className="text-lg">
                  &gt; {/* Flecha hacia la derecha */}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Books;
