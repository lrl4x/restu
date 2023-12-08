import React, { useEffect, useState } from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'
import img from '../assets/Burger.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export const Detailsc = () => {
  const [details, setdetails] = useState({})

  const { id } = useParams()

  console.log(details)

  useEffect(() => {
    axios.get('http://localhost:3001/Food/details/' + id)
      .then((res) => {
        setdetails(res.data); // Set the details state with the response data as an array
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>

      <div className='flex items-center p-2'>
        <a href="/menu" ><BiLeftArrowAlt size={20} /></a>
        <a href="/menu"><h1 className='underline'>Back to menu</h1></a>

      </div>



          <div className='h-screen flex flex-col-reverse justify-center md:flex-row md:items-center md:justify-center md:-mt-24' key={details._id}>
          <div className='flex flex-col p-2 space-y-4'>
            <div className='flex flex-col space-y-3'>
              <h1 className='text-4xl font-mono font-bold'>{details.name}</h1>
              <p className='text-ellipsis'>{details.details}</p>
              <p>{details.cals}</p>
              <button className='flex self-start bg-yellow-200 font-bold rounded-full px-2 py-2 hover:bg-red-800 hover:text-white'><a href="/order">ORDER NOW</a></button>
            </div>
            <div>
              <p className='text-ellipsis'>2,000 Calories are used for general nutrition advice, but calorie needs may vary</p>
            </div>
          </div>
          <div className=''>
            <img src={img} className='w-96 h-auto' alt="" />
          </div>
        </div>
       
        

     
    </div>
  )
}
