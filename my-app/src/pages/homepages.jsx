
import imgXiomara from '../img/xiomara2.jpeg'
import imgSenacit from '../img/logosenacit.png'
function homepages() {
    return (<div class="flex flex-wrap">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <nav class="flex px-4 justify-between items-center">
              <div class="text-4xl font-bold">
                Senacit<span class="text-green-700">.</span>
              </div>
              <div>
                <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8"/>
              </div>
            </nav>
            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold">Biblioteca <span class="text-[#22d2f5]">Virtual</span> </h1>
                <div class="w-20 h-2 bg-[#22d2f5] my-4"></div>
                <p class="text-xl mb-10 text-white">                                 En el marco del compromiso de la administración de la Presidenta Xiomara Castro con la educación y el desarrollo, hemos creado la Biblioteca Virtual de SENACIT, una plataforma que pone al alcance de todos los hondureños una amplia colección de recursos educativos, científicos y culturales.

Aquí podrás encontrar libros, revistas científicas, artículos académicos, contenido multimedia y mucho más, todo organizado para facilitar el aprendizaje y la exploración.</p>
                <div class="container ">
  <button class="btn" href="#"><a href="/index2">Continuar</a></button>
</div>              </div>
            </header>
          </div>
        </div>
        <img src={imgXiomara} alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
      </div>)
}

export default homepages