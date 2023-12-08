
import React from 'react'
import burgar from '../assets/Burger.png'
import img from '../assets/blackimg.jpg'
import Cards from '../component/Cards'
const ThirdSection = () => {
  return (
    <div className=' bg-no-repeat bg-cover '  style={{ backgroundImage: `url(${img})`}}>
    

  
      <div className='flex justify-around items-center text-white pr-17 p-10'>
        <h1>FEATURED MENU</h1>
        <a href="/menu"><button className='bg-yellow-200 py-2 px-2 rounded-full text-white font-bold flex self-start'>VIEW FULL MENU</button></a>
      </div>

      <div className='flex flex-col items-center gap-1 md:flex-row justify-start md:space-x-2 p-12'>
        <Cards img={burgar} text1="Noteworthy technology acquisitions 2021" text2="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
        <Cards img={burgar} text1="Noteworthy technology acquisitions 2021" text2="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
      </div>
    
    </div>
  )
}

export default ThirdSection