import { useState, useEffect } from 'react';
import Header from '../component/header.jsx';
import { Link } from 'react-router-dom';

function Books() {
  const [informacionLibros, setInformacionLibros] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const booksPerPage = 9; // Libros por página probando algo

  useEffect(() => {
    const loadBooks = async () => {
      try {
        let data;

        if (window.electron) {
          data = await window.electron.loadBooksFile('../dist/informacion_libros.json');
        } else {
          const response = await fetch('/informacion_libros.json');
          data = await response.json();
        }

        setInformacionLibros(data);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    loadBooks();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = informacionLibros.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(informacionLibros.length / booksPerPage);

  // Lógica para mostrar un rango dinámico de páginas
  const maxPageButtons = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
 <center>

<section className="text-gray-600 body-font">
  <Header activeLink={2} />
  <div className="container ">
    <div className="flex flex-wrap justify-center items-center">
      {informacionLibros.length > 0 ? (
        currentBooks.map((libro, index) => (

       
          <div key={index} className="p-1 md:w-1/3 sm:mb-0 mb-6">
            <Link to={`/pdf-viewer/${encodeURIComponent(libro.ruta)}`}>
              <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-5">
                <img
                  src={libro.portada}
                  alt={libro.titulo}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

                {/* Título recortado por defecto, visible al hacer hover */}
                <h3 className="z-10 mt-3 text-3xl font-bold text-white truncate hover:opacity-100 opacity-80 transition-opacity duration-300">
                  {libro.titulo}
                </h3>

                {/* Información adicional que solo será visible al hacer hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gray-900 text-white text-xl font-bold p-4 rounded-lg">
                    {libro.titulo}
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))
      ) : (
        <p>Cargando libros...</p>
      )}
    </div>

    {/* Paginación mejorada */}
    <div className="flex justify-center mt-8">
      <nav className="flex items-center space-x-2">
        <button
          onClick={() => paginate(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Primera
        </button>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          &lt;
        </button>

        {visiblePages.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-1 rounded ${
              currentPage === number
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          &gt;
        </button>
        <button
          onClick={() => paginate(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Última
        </button>
      </nav>
    </div>
  </div>
</section>
 </center>




  );
}

export default Books;
