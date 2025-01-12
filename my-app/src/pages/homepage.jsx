
import imgXiomara from '../img/xiomaraSenacit.jpg'
import imgSenacit from '../img/logosenacit.png'
import { Link } from 'react-router-dom'
import './styles.scss'
function homepage() {
    return (

        <main class="relative h-screen w-sc bg-transparent ">
            <header class="z-30 flex items-center w-full h-24 sm:h-32">
                <div class="container min-w-full flex items-center justify-between ">
                    <div class="text-3xl font-black text-gray-800 uppercase dark:text-white">
                        <img class="w-[300px] h-" alt="hero" src={imgSenacit} />

                    </div>
                    <div class="flex items-center">
                        <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                        <a href="#" className="flex px-6 p-110 text-[#00d9d5] underline " style={{ textDecoration: 'underline', textDecorationColor: '#00d9d5', textUnderlineOffset: '10px' }}>
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
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 p-11  ">
                        <img class="object-cover object-center shadow-xl rounded-2xl  " alt="hero" src={imgXiomara} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="text-6xl sm:text-8xl font-extrabold text-gray-900 uppercase tracking-wide mb-6">
                            Biblioteca
                        </h1>
                        <h1 class="text-6xl sm:text-8xl font-extrabold text-[#00d9d5] uppercase tracking-wide mb-6">
                            Virtual
                        </h1>



                        <div className="flex-shrink-0  relative overflow-hidden bg-[#00d9d5f7] rounded-lg  shadow-lg w-full">
                            <svg
                                className="absolute bottom-0 left-0 mb-8"
                                viewBox="0 0 375 283"
                                fill="none"
                                style={{ transform: 'scale(1.5)', opacity: 0.1 }}
                            >
                                <rect
                                    x="159.52"
                                    y="175"
                                    width="152"
                                    height="152"
                                    rx="8"
                                    transform="rotate(-45 159.52 175)"
                                    fill="white"
                                />
                                <rect
                                    y="107.48"
                                    width="152"
                                    height="152"
                                    rx="8"
                                    transform="rotate(-45 0 107.48)"
                                    fill="white"
                                />
                            </svg>
                            <div className="relative  px-10 flex items-center justify-center">
                                <div
                                    className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                    style={{
                                        background: 'radial-gradient(black, transparent 60%)',
                                        transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                                        opacity: 0.2,
                                    }}
                                ></div>

                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">

                                <div className="flex justify-between">

                                    En el marco del compromiso de la administración de la Presidenta Xiomara Castro con la educación y el desarrollo, hemos creado la Biblioteca Virtual de SENACIT, una plataforma que pone al alcance de todos los hondureños una amplia colección de recursos educativos, científicos y culturales.

                                    Nuestra misión es democratizar el acceso al conocimiento, fortaleciendo la investigación, la innovación y el aprendizaje a lo largo de la vida. Aquí podrás encontrar libros, revistas científicas, artículos académicos, contenido multimedia y mucho más, todo organizado para facilitar el aprendizaje y la exploración.
                                </div>
                            </div>
                        </div>

                        <div className='min-w-full mt-9'>

                            <center>

                            <div class="container ">
  <button class="btn" href="#"><Link to="/books">Continuar</Link> </button>
</div>


                            </center>
                        </div>


                    </div>
                </div>
            </section>

        </main>

    )
}


export default homepage