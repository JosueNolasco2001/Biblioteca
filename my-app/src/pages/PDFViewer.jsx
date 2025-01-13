import { useParams } from 'react-router-dom';
import Header from '../component/header.jsx';
function PDFViewer() {
  const { url } = useParams(); // Obtener la URL del PDF desde los parámetros

  return (
    <>
   <Header activeLink={2} ></Header> 
      {/* <iframe
        src={decodeURIComponent(url)}
        title="PDF Viewer"
        className="w-full h-full"
      /> */}
      <div className="flex items-center justify-center min-h-screen ">
  <div className="relative w-full max-w-6xl h-[90vh] rounded-lg shadow-lg overflow-hidden">
    {/* Controles en la parte superior */}
    <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white flex items-center justify-between px-4 py-2">
      <h1 className="text-lg font-semibold">Visor de PDF</h1>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-1 bg-blue-700 rounded hover:bg-blue-800"
      >
        Volver
      </button>
    </div>

    {/* Marco del PDF */}
    <iframe
      src={decodeURIComponent(url)}
      title="PDF Viewer"
      className="w-full h-full border-t-4 border-blue-500"
    />
  </div>
</div>

    </>
  
  );
}

export default PDFViewer;
