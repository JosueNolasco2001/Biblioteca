import { useState, useEffect } from 'react';
import Header from '../component/header.jsx';
import { Link } from 'react-router-dom';
function Search() {
  const [informacionLibros, setInformacionLibros] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9; // Libros por página

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

  // Función para filtrar libros
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);  // Actualizar el término de búsqueda
    filterBooks(term);  // Filtrar libros
  };

  // Función para filtrar los libros
  const filterBooks = (searchTerm) => {
    if (!searchTerm) {
      setFilteredBooks([]);  // Si no hay búsqueda, no mostrar ningún libro
    } else {
      const filtered = informacionLibros.filter((libro) =>
        libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())  // Filtrar por título
      );
      setFilteredBooks(filtered);  // Actualizar los libros filtrados
    }
  };

  // Paginación: obtener libros para la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Lógica para mostrar un rango dinámico de páginas
  const maxPageButtons = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  // Funciones para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <section className="text-gray-600 body-font mt-24">
      <Header activeLink={3} />
      <div className="container px-5 py-24 mx-auto">
        {/* Barra de búsqueda */}
        <div className="max-w-2xl mx-auto mb-8">
          <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                value={searchTerm}
                onChange={handleSearch}  // Llamada a la función handleSearch cuando cambia el input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Buscar por título"
              />
            </div>
          </form>
        </div>

        {/* Mostrar los libros filtrados */}
        {filteredBooks.length > 0 && (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {currentBooks.map((libro, index) => (
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
                        {libro.titulo} - {libro.autor} {/* Aquí puedes agregar más información si lo deseas */}
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Mostrar mensaje si no hay libros que coincidan */}
        {filteredBooks.length === 0 && searchTerm && (
          <p>No se encontraron libros que coincidan con "{searchTerm}"</p>
        )}

        {/* Paginación */}
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
                className={`px-3 py-1 rounded ${currentPage === number
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
  );
}

export default Search;
