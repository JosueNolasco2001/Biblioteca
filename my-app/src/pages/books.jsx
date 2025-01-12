import { useState, useEffect } from 'react';

function Books() {
    const [informacionLibros, setInformacionLibros] = useState([]);

    useEffect(() => {
        // Cargar el archivo JSON desde la carpeta public
        fetch('/informacion_libros.json')
            .then((response) => response.json())
            .then((data) => setInformacionLibros(data))
            .catch((error) => console.error('Error al cargar el archivo JSON:', error));
    }, []); // El array vacío asegura que solo se cargue una vez al montar el componente

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                            Space The Final Frontier
                        </h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                            Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {informacionLibros.length > 0 ? (
                        informacionLibros.map((libro, index) => (
                            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden">
                                    {/* Usamos el campo 'portada' para mostrar la imagen del libro */}
                                    <img
                                        alt="content"
                                        className="object-cover object-center h-full w-full"
                                        src={libro.portada ? libro.portada : "https://dummyimage.com/1203x503"}
                                    />
                                </div>
                                <div className="bg-slate-500 p-4">
                                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                                        {/* Usamos el título del libro */}
                                        {libro.titulo}
                                    </h2>
                                    <p className="text-base leading-relaxed mt-2">
                                        {/* Usamos la descripción del libro */}
                                        {libro.descripcion.length > 150
                                            ? `${libro.descripcion.substring(0, 150)}...`
                                            : libro.descripcion}
                                    </p>
                                    <a
                                        href={libro.ruta} // Enlace al archivo PDF del libro
                                        className="text-indigo-500 inline-flex items-center mt-3"
                                    >
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Cargando libros...</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Books;
