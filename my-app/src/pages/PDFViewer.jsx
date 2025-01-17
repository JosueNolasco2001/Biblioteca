import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../component/header.jsx';
function PDFViewer() {
  const { url } = useParams(); // Obtener la URL del PDF desde los parámetros
  const [zoom, setZoom] = useState(1); // Estado para el nivel de zoom

  // Manejar el zoom
  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Zoom máximo de 300%
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.2, 0.5)); // Zoom mínimo de 50%
  const resetZoom = () => setZoom(1); // Restablecer zoom al valor inicial

  return (
   <div>
     <Header activeLink={2}></Header>
    <div className="flex items-center justify-center min-h-screen mt-36">
      <div className="relative w-full max-w-6xl h-[90vh] rounded-lg shadow-lg overflow-hidden">
        {/* Controles de zoom */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button
            onClick={handleZoomOut}
            className="px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
          >
            -
          </button>
          <button
            onClick={resetZoom}
            className="px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
          >
            Restablecer
          </button>
          <button
            onClick={handleZoomIn}
            className="px-3 py-1 bg-gray-200 rounded shadow hover:bg-gray-300"
          >
            +
          </button>
        </div>

        {/* Marco del PDF */}
        <div
          className="w-full h-full border-t-4 border-blue-500"
          style={{
            transform: `scale(${zoom})`, // Aplicar el zoom
            transformOrigin: 'top center', // Hacer zoom desde el centro superior
            overflow: 'hidden',
          }}
        >
          <iframe
            src={decodeURIComponent(url)}
            title="PDF Viewer"
            className="w-full h-full"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
            }}
          />
        </div>
      </div>
    </div>
   </div>
  );
}

export default PDFViewer;
