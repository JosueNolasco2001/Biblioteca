
import imgXiomara from '../img/xiomaraSenacit.jpg'
function homepage() {
    return(

<main class="relative h-screen bg-white dark:bg-gray-800">
    <header class="z-30 flex items-center w-full h-24 sm:h-32">
        <div class="container flex items-center justify-between px-6 mx-auto">
            <div class="text-3xl font-black text-gray-800 uppercase dark:text-white">
                Watch.ME
            </div>
            <div class="flex items-center">
                <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                    <a href="#" class="flex px-6 py-2">
                        Home
                    </a>
                    <a href="#" class="flex px-6 py-2">
                        Watch
                    </a>
                    <a href="#" class="flex px-6 py-2">
                        Product
                    </a>
                    <a href="#" class="flex px-6 py-2">
                        Contact
                    </a>
                    <a href="#" class="flex px-6 py-2">
                        Carrer
                    </a>
                </nav>
                <button class="flex flex-col ml-4 lg:hidden">
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                </button>
            </div>
        </div>
    </header>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={imgXiomara}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="text-6xl sm:text-8xl font-extrabold text-gray-900 uppercase tracking-wide mb-6">
    Biblioteca Virtual
</h1>

      <p class="mb-8 leading-relaxed">Transformando el acceso al conocimiento en Honduras

En el marco del compromiso de la administración de la Presidenta Xiomara Castro con la educación y el desarrollo, hemos creado la Biblioteca Virtual de SENACIT, una plataforma que pone al alcance de todos los hondureños una amplia colección de recursos educativos, científicos y culturales.

Nuestra misión es democratizar el acceso al conocimiento, fortaleciendo la investigación, la innovación y el aprendizaje a lo largo de la vida. Aquí podrás encontrar libros, revistas científicas, artículos académicos, contenido multimedia y mucho más, todo organizado para facilitar el aprendizaje y la exploración.</p>
  <div className='min-w-full'>

  <center>

<button class=" inline-flex text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">INICIAR</button>

</center>
  </div>
      
 
    </div>
  </div>
</section>

</main>

    )
}

export default homepage