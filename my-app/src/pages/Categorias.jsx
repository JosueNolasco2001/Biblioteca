import Header from '../component/header.jsx'
function Categorias() {
    return (

      <>
        <Header activeLink={4} ></Header> 
    
    <div className='w-full flex flex-cols-2 mt-10'>

      <div className=''>
      <aside id="default-sidebar" class=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          
               <span class="ms-3"><strong>Programacion</strong> <span class="bg-">55</span></span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          
               <span class="ms-3"><strong>Ciencia de datos</strong> <span class="bg-">55</span></span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          
               <span class="ms-3"><strong>Cocina</strong> <span class="bg-">55</span></span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          
               <span class="ms-3"><strong>Arte y cultura </strong><span class="bg-">55</span></span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          
               <span class="ms-3"><strong>Tecnologia</strong> <span class="bg-">55</span></span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          
               <span class="ms-3"><strong>Salud</strong> <span class="bg-">55</span></span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          
               <span class="ms-3 stroke-slate-700"><strong>Tecnologia</strong> <span class="bg-slate-300 p-1 rounded-lg">55</span></span>
            </a>
         </li>
         
      </ul>
   </div>
</aside>
      </div>







      <div className='w-[80%]'>
      <div class=" grid grid-cols-5 justify-items-center gap-5  ">
   <div className=''><img className='object-cover w-64 rounded-xl ' src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" alt="" /></div>
   <div className=''><img className='object-cover w-64 rounded-xl ' src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" alt="" /></div>
   <div className=''><img className='object-cover w-64 rounded-xl ' src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" alt="" /></div>
   <div className=''><img className='object-cover w-64 rounded-xl ' src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" alt="" /></div>
   <div className=''><img className='object-cover w-64 rounded-xl ' src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" alt="" /></div>
   <div className=''><img className='object-cover w-64 rounded-xl ' src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" alt="" /></div>
   <div className=''><img className='object-cover w-64 rounded-xl ' src="https://edit.org/images/cat/portadas-libros-big-2019101610.jpg" alt="" /></div>


</div>

      </div>
    </div>


      
      </>

    )
}
export default Categorias