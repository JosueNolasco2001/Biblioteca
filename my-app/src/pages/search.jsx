import { useState, useEffect } from 'react';
import Header from '../component/header.jsx';

function search() {
  const [informacionLibros, setInformacionLibros] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // Estado para la búsqueda
  const [filteredBooks, setFilteredBooks] = useState([]);  // Libros filtrados

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

        setInformacionLibros(data);  // Guardamos todos los libros
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    loadBooks();
  }, []); // El array vacío asegura que solo se cargue una vez al montar el componente

  // Función para manejar el cambio en la barra de búsqueda
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

  return (
    <section className="text-gray-600 body-font">
      <Header activeLink={3}></Header>
      <div className="container  ">
        {/* Barra de búsqueda */}
        <div className="max-w-2xl mx-auto">
          <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
            <label for="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                value={searchTerm}
                onChange={handleSearch}  // Llamada a la función handleSearch cuando cambia el input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar por título"
              />
            </div>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Mostrar los libros filtrados solo cuando hay búsqueda */}
        {filteredBooks.length > 0 && (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {filteredBooks.map((libro, index) => (
              <div key={index} className="p-1 md:w-1/3 sm:mb-0 mb-6">
                <a href={libro.ruta}>
                  <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mt-5">
                    <img src={libro.portada} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">{libro.titulo}</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{libro.autor}</div>
                  </article>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Mostrar mensaje si no hay libros que coincidan */}
        {filteredBooks.length === 0 && searchTerm && (
          <p>No se encontraron libros que coincidan con "{searchTerm}"</p>
        )}
      </div>
    </section>
  );
}

export default search;
