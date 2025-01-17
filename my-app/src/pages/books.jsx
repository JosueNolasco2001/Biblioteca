import { useState, useEffect } from "react";
import Header from "../component/header.jsx";
import { Link } from "react-router-dom";

function Books() {
  const [informacionLibros, setInformacionLibros] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const booksPerPage = 12; // Libros por página

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

        setInformacionLibros(data);
      } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
      }
    };

    loadBooks();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = informacionLibros.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  const totalPages = Math.ceil(informacionLibros.length / booksPerPage);

  const maxPageButtons = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <center>
      <section className="text-gray-600 body-font mt-24">
        <Header activeLink={2} />
        <div className=" mt-40">
          {/* Grid de libros */}
          <div className="grid grid-cols-4 gap-5 p-5">
            {currentBooks.length > 0 ? (
              currentBooks.map((libro, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Link
                    to={`/pdf-viewer/${encodeURIComponent(libro.ruta)}`}
                    className="block relative"
                  >
                    <img
                      className="object-cover w-64 h-80 rounded-xl"
                      src={libro.portada}
                      alt={libro.titulo}
                    />
                  </Link>
                  <p className="mt-2 text-center text-sm font-medium">
                    {libro.titulo}
                  </p>
                </div>
              ))
            ) : (
              <p>Cargando libros...</p>
            )}
          </div>

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
                  className={`px-3 py-1 rounded ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
