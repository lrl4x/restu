import React from 'react'
import Burgar from '../assets/Burger.png'
const Hero = () => {
  return (
    <div className='bg-white '>
    
      <div className='flex flex-col p-10 space-y-4 text-black bg-slate-50 text-center w-full'>
        
        <div className=''>
          <h1 className='text-red-900 font-bold text-2xl md:text-5xl'>NEW! NASHVILLE HOT</h1>
          <p className='mt-3  md:text-2xl'>HAND-BREADED GOODNESS WITH A SOUTHERN KICK ORDER YOURS</p>
          <a href="/order"><button className='bg-black hover:bg-white dark:text-white text-black  py-2 px-1 rounded-full mt-3'>ORDER YOURS</button></a>
        </div>
        
        <div className='flex justify-center'>
          <img src={Burgar} alt="" className='w-2/4'/>
        </div>
      </div>
      
     
    </div>
  )
}

export default Hero