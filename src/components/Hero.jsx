import React from 'react'
import { IoMdSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
        <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'>Made for Home Chefs and Indian Recipe <span className='text-orange-400 '>Enthusiasts</span></h1>
        <form action="/search" className='bg-white p-4 rounded relative flex items-center'>
        <IoMdSearch className='w-5 h-5 mr-2 text-neutral-300'/>
        <input name='query' type="search" placeholder='Search for recipes...' className='outline-none w-full placeholder:text-[#1b2629]' id='search' required=""/>
        </form>
    </div>
    
  )
}

export default Hero
