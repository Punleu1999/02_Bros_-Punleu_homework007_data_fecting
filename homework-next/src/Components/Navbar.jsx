
import React from 'react'
import img from '../../public/image/lendLogo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    
        
<nav class=" z-50 bg-transparent absolute w-full">
  <div class="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-2">
    <a href="#" class="flex items-center">
      <Image src={img}></Image>
    </a>
    <div class="flex md:order-2 pl-4">
      <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4
       focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
      <div class="relative hidden md:block">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm
         text-gray-900 border border-gray-300 rounded-lg bg-gray-50
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500
         dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
  
    </div>
    
    <div class="items-center  pl-[400px] justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <ul
        class="flex flex-col p-10 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900">
        <li>
        
          <a href="#"
            class="block py-2 pl-3 pr-4 text-white text-[25px] rounded
             hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700
              md:p-0 md:dark:hover:text-blue-500 dark:text-white
               dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
        </li>
        <li>
          <a href="#"
            class="block py-2 pl-3 pr-4 text-white text-[25px] rounded
             hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700
              md:p-0 md:dark:hover:text-blue-500 dark:text-white
               dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent dark:border-gray-700">Populer</a>
        </li>
        <li>
          <a href="#"
            class="block py-2 pl-3 pr-4 text-white text-[25px] rounded hover:bg-gray-100
             md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white
              md:dark:hover:text-blue-500 dark:hover:bg-gray-700
               dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700">Remance</a>
        </li>
        <li>
          <a href="#"
            class="block py-2 pl-3 pr-4 text-white text-[25px] rounded hover:bg-gray-100
             md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white
              md:dark:hover:text-blue-500 dark:hover:bg-gray-700
               dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700">Anime</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
  )
}

export default Navbar