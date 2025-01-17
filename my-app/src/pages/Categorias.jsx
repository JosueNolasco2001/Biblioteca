import { useState, useEffect } from "react";
import Header from "../component/header.jsx";
import { Link } from "react-router-dom";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [libros, setLibros] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9; // Libros por página

  useEffect(() => {
    const loadData = async () => {
      try {
        let data;

        // Cargar datos según el entorno (Electron o web)
        if (window.electron) {
          data = await window.electron.loadBooksFile(
            "../dist/libros_clasificados.json"
          );
        } else {
          const response = await fetch("/libros_clasificados.json");
          data = await response.json();
        }

        // Procesar categorías y libros desde el JSON
        const categoriasProcesadas = Object.keys(data).map((categoria) => ({
          nombre: categoria,
          cantidad: data[categoria].length,
        }));
        setCategorias(categoriasProcesadas);
        setCategoriaSeleccionada(categoriasProcesadas[0]?.nombre || null);
        setLibros(data);
      } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
      }
    };

    loadData();
  }, []);

  // Libros de la categoría seleccionada
  const librosCategoria =
    categoriaSeleccionada && libros[categoriaSeleccionada]
      ? libros[categoriaSeleccionada]
      : [];

  // Calcular el índice de los libros a mostrar en la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = librosCategoria.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  const totalPages = Math.ceil(librosCategoria.length / booksPerPage);

  // Ajustar la paginación dinámica
  const visiblePages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + 1 + Math.max(0, currentPage - Math.ceil(5 / 2))
  ).filter((page) => page >= 1 && page <= totalPages);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <center>
      <section className="text-gray-600 body-font mt-48">
        <Header activeLink={4} />
        <div className=" flex mt-11">
          {/* Sidebar dinámico */}
          <aside
            id="default-sidebar"
            className="w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto px-3 py-4"
          >
            <ul className="space-y-2 font-medium">
              {categorias.map((categoria) => (
                <li key={categoria.nombre}>
                  <button
                    onClick={() => {
                      setCategoriaSeleccionada(categoria.nombre);
                      setCurrentPage(1); // Reiniciar a la primera página
                    }}
                    className={`flex items-center p-2 w-full text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      categoriaSeleccionada === categoria.nombre
                        ? "bg-gray-200 dark:bg-gray-700"
                        : ""
                    }`}
                  >
                    <span className="ms-3">
                      <strong>{categoria.nombre}</strong>{" "}
                      <span className="bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded-lg">
                        {categoria.cantidad}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Contenido principal */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-5 p-5">
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

                {visiblePages.map((page) => (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {page}
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
        </div>
      </section>
    </center>
  );
}

export default Categorias;
