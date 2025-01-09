
import imgXiomara from '../img/xiomaraSenacit.jpg'
import imgSenacit from '../img/logosenacit.png'
import './styles.scss'
function homepage() {
    return (

        <main class="relative h-screen bg-transparent dark:bg-gray-800">
            <header class="z-30 flex items-center w-full h-24 sm:h-32">
                <div class="container flex items-center justify-between px-6 mx-auto">
                    <div class="text-3xl font-black text-gray-800 uppercase dark:text-white">
                    <img class="w-[300px] h-" alt="hero" src={imgSenacit} />

                    </div>
                    <div class="flex items-center">
                        <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                            <a href="#" class="flex px-6 py-2  text-white">
                                Home
                            </a>
                            <a href="#" class="flex px-6 py-2 text-white">
                                Watch
                            </a>
                            <a href="#" class="flex px-6 py-2 text-white">
                                Product
                            </a>
                            <a href="#" class="flex px-6 py-2 text-white">
                                Contact
                            </a>
                            <a href="#" class="flex px-6 py-2 text-white">
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
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  ">
                        <img class="object-cover object-center rounded-full" alt="hero" src={imgXiomara} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="text-6xl sm:text-8xl font-extrabold text-gray-900 uppercase tracking-wide mb-6">
                            Biblioteca 
                        </h1>
                        <h1 class="text-6xl sm:text-8xl font-extrabold text-[#00d9d5] uppercase tracking-wide mb-6">
                        Virtual
                        </h1>

                        <p class="mb-8 leading-relaxed font-sans text-[#191b1bbb] bg-[#00d9d5f3] p-6 rounded-md text-[15px]  ">

                            En el marco del compromiso de la administración de la Presidenta Xiomara Castro con la educación y el desarrollo, hemos creado la Biblioteca Virtual de SENACIT, una plataforma que pone al alcance de todos los hondureños una amplia colección de recursos educativos, científicos y culturales.

                            Nuestra misión es democratizar el acceso al conocimiento, fortaleciendo la investigación, la innovación y el aprendizaje a lo largo de la vida. Aquí podrás encontrar libros, revistas científicas, artículos académicos, contenido multimedia y mucho más, todo organizado para facilitar el aprendizaje y la exploración.</p>
                        <div className='min-w-full'>

                            <center>

                                <section className="portfolio-experiment 0">
                                    <a>
                                        <span class="text px-20 text-white">Iniciar</span>
                                        <span class="line -right"></span>
                                        <span class="line -top"></span>
                                        <span class="line -left"></span>
                                        <span class="line -bottom"></span>
                                    </a>
                                </section>

                            </center>
                        </div>


                    </div>
                </div>
            </section>

        </main>

    )
}


export default homepage