import React, { useState, useEffect } from 'react'
import img from '../assets/Burger.png'
import axios from 'axios';
export const Cartc = () => {
  const [quantity, setquantity] = useState(1);
  const [details, setdetails] = useState(true)
  const handleplus=()=>{
    setquantity(quantity+1)
  }

  const handleminus=()=>{
    setquantity(quantity-1)
  }

  const handledetails = () => {
    setdetails(!details);
  };
  useEffect(()=>{
    // axios.get()
  },[])




  return (
    <div className='p-12 rounded-2xl bg-slate-100'>
      <div className='grid sm:md:grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white p-4 rounded-xl'>
          <h1>items from your Cart</h1>
          <div className='bg-slate-100 p-2 rounded-xl'>
            <div className='flex justify-between items-center rounded-lg m-2 shadow-2xl bg-white p-1'>
              <div className='flex flex-col space-y-3  w-fit'>
                <h1 className='font-serif font-bold text-2xl text-slate-800'>Pepper Mayo Cruncher Combo</h1>
                <p className='text-slate-800 font-bold'>26</p>
                <button onClick={handledetails} className='flex self-start bg-yellow-200 font-bold  px-2 py-2 hover:bg-red-800 hover:text-white'>DETAILS</button>
                <p className={details ? 'text-sm' : 'hidden'}>
                  {details
                    ? "CUSTOMIZED Pepper Mayo Cruncher Combo, Box, Spicy Pepper Mayo Cruncher, Large Fries, Large Pepsi, Tomato, Spicy Mayonnaise, Double American Cheese"
                    : ""}
                </p>
              </div>

              <div className='flex flex-col items-center justify-center m '>
                <div>
                  <img src={img} className='w-16' alt="" />
                </div>

                <div className='flex flex-row '>
                  <button className='bg-white shadow-2xl border-2 border-slate-300  rounded-lg px-2 font-bold' onClick={handleminus}>-</button>
                  {quantity}
                  <button className='bg-red-500 text-white rounded-lg px-2 font-bold' onClick={handleplus}>+</button>
                </div>
              </div>
            </div>


            {/* <div>
              <div className='flex justify-between items-center rounded-lg m-2 shadow-2xl bg-white p-1'>
                <div className='flex flex-col space-y-3  w-fit'>
                  <h1 className='font-serif font-bold text-2xl text-slate-800'>Pepper Mayo Cruncher Combo</h1>
                  <p className='text-slate-800 font-bold'>26</p>
                  <button onClick={handledetails} className='flex self-start bg-yellow-200 font-bold  px-2 py-2 hover:bg-red-800 hover:text-white'>DETAILS</button>
                  <p className={details ? 'text-sm' : 'hidden'}>
                    {details
                      ? "CUSTOMIZED Pepper Mayo Cruncher Combo, Box, Spicy Pepper Mayo Cruncher, Large Fries, Large Pepsi, Tomato, Spicy Mayonnaise, Double American Cheese"
                      : ""}
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center m-3  '>

                  <div>
                    <img src={img} className='w-16' alt="" />
                  </div>

                  <div className='flex flex-row '>
                    <button>-</button>
                    {quantity}
                    <button>+</button>
                  </div>


                </div>

              </div>
            </div> */}
          </div>
        </div>

        <div className='bg-white h-fit rounded-xl'>
          <div className='flex justify-between items-center p-2 shadow-2xl m-8 rounded-xl'>
            <div className='flex'>
              <img src={img} className='w-12' alt="" />
              <h1>Apply Coupon</h1>
            </div>

            <div>
              <img src={img} className='w-12' alt="" />
            </div>
          </div>

          <div className=' m-2 shadow-2xl'>
            <div className='p-4'>
              <div className='flex justify-between'>
                <h1>Sub Total</h1>
                <h1>{45} SAR</h1>
              </div>

              <div className='flex justify-between'>
                <h1>Delivery</h1>
                <h1>{12} SAR</h1>
              </div>

              <div className='mt-12'>
                <hr className="w-full h-px my-2 bg-gray-200 border-0 dark:bg-gray-500" />
                <div className='flex justify-between'>
                  <h1>Total</h1>
                  <h1>{57} SAR</h1>
                </div>
              </div>

            </div>
          </div>


          <div className='bg-white m-2'>
            <button className='inline-flex justify-center bg-yellow-200 font-bold  w-full py-2 hover:bg-red-800 hover:text-white rounded-lg'>Place Order</button>
          </div>
        </div>





      </div>


    </div>
  )
}
