import React, { useState } from 'react'
import img from '../assets/Burger.png'
function LoginAndRegister() {
    const [change, setchange] = useState(false)
    return (
        <div className=' bg-slate-100'>
            <div className='flex justify-between p-2 md:justify-around '>
                <div className=''>
                <h1 className='w-8 border-b-2 border-red-800'>Bestsellers</h1>
                </div>
                <div className='font-bold text-blue-800'>
                    View All
                </div>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-5 md:overflow-x-hidden gap-3 p-12 md:pl-36 md:pr-36 '>
                <div className='bg-white flex flex-col md:h-28 p-2 items-center justify-between  shadow-2xl  md:hover:-translate-y-6  row-span-2 md:row-auto  md:flex-col-reverse md:items-center md:rounded-t-full md:rounded-bl-full ' >

                    <h1 className='flex self-end md:self-auto text-sm'>EXCLUSIVE OFFERS</h1>
                    <img src={img} alt="" className=' w-20 flex self-start md:self-auto md:-mt-6 h-auto max-w-full' />

                </div>
                <div className='bg-white flex flex-col md:h-28 p-2 items-center justify-between  shadow-2xl  md:hover:-translate-y-6   md:row-auto  md:flex-col-reverse md:items-center md:rounded-t-full md:rounded-bl-full ' >

                    <h1 className='flex self-end md:self-auto text-sm'>EXCLUSIVE OFFERS</h1>
                    <img src={img} alt="" className=' w-20 flex self-start md:self-auto md:-mt-6 h-auto max-w-full' />

                </div>
                <div className='bg-white flex flex-col md:h-28 p-2 items-center justify-between  shadow-2xl  md:hover:-translate-y-6   md:row-auto  md:flex-col-reverse md:items-center md:rounded-t-full md:rounded-bl-full ' >

                    <h1 className='flex self-end md:self-auto text-sm'>EXCLUSIVE OFFERS</h1>
                    <img src={img} alt="" className=' w-20 flex self-start md:self-auto md:-mt-6 h-auto max-w-full' />

                </div>
                <div className='bg-white flex flex-col md:h-28 p-2 items-center justify-between  shadow-2xl  md:hover:-translate-y-6   md:row-auto  md:flex-col-reverse md:items-center md:rounded-t-full md:rounded-bl-full ' >

                    <h1 className='flex self-end md:self-auto text-sm'>EXCLUSIVE OFFERS</h1>
                    <img src={img} alt="" className=' w-20 flex self-start md:self-auto md:-mt-6 h-auto max-w-full' />

                </div>
                <div className='bg-white flex flex-col md:h-28 p-2 items-center justify-between  shadow-2xl  md:hover:-translate-y-6   md:row-auto  md:flex-col-reverse md:items-center md:rounded-t-full md:rounded-bl-full ' >

                    <h1 className='flex self-end md:self-auto text-sm'>EXCLUSIVE OFFERS</h1>
                    <img src={img} alt="" className=' w-20 flex self-start md:self-auto md:-mt-6 h-auto max-w-full' />

                </div>

            </div>


            <div className='flex justify-between p-2 md:justify-around '>
    
                <div className=''>
                <h1 className='w-8 border-b-2 border-red-800'>Topdeals</h1>
                </div>
                <div className='font-bold text-blue-800'>
                    View All
                </div>
            </div>
        

            <div className='flex flex-row p-2 space-x-2 overflow-x-scroll '>
                <div className='bg-white flex justify-around items-center p-2 w-96 space-x-3 '>
                    <div className=' '>
                        <img src={img} className='w-16' alt="" />
                    </div>
                    <div className='w-full'>
                        <h5>Super</h5>
                        <p>12 pcs chicken</p>
                        <hr className="border-slate-900 w-full" />
                        <div className='flex justify-between p-2'>
                            <p>65</p>
                            <button>VIEW</button>
                        </div>

                    </div>

                </div>

                <div className='bg-white flex justify-around items-center p-2 w-96 space-x-3 '>
                    <div className=' '>
                        <img src={img} className='w-16' alt="" />
                    </div>
                    <div className='w-full'>
                        <h5>Super</h5>
                        <p>12 pcs chicken</p>
                        <hr className="border-slate-900 w-full" />
                        <div className='flex justify-between p-2'>
                            <p>65</p>
                            <button>VIEW</button>
                        </div>

                    </div>

                </div>
                <div className='bg-white flex justify-around items-center p-2 w-96 space-x-3 '>
                    <div className=' '>
                        <img src={img} className='w-16' alt="" />
                    </div>
                    <div className='w-full'>
                        <h5>Super</h5>
                        <p>12 pcs chicken</p>
                        <hr className="border-slate-900 w-full" />
                        <div className='flex justify-between p-2'>
                            <p>65</p>
                            <button>VIEW</button>
                        </div>

                    </div>

                </div>
                <div className='bg-white flex justify-around items-center p-2 w-96 space-x-3 '>
                    <div className=' '>
                        <img src={img} className='w-16' alt="" />
                    </div>
                    <div className='w-full'>
                        <h5>Super</h5>
                        <p>12 pcs chicken</p>
                        <hr className="border-slate-900 w-full" />
                        <div className='flex justify-between p-2'>
                            <p>65</p>
                            <button>VIEW</button>
                        </div>

                    </div>

                </div>
                <div className='bg-white flex justify-around items-center p-2 w-96 space-x-3 '>
                    <div className=' '>
                        <img src={img} className='w-16' alt="" />
                    </div>
                    <div className='w-full'>
                        <h5>Super</h5>
                        <p>12 pcs chicken</p>
                        <hr className="border-slate-900 w-full" />
                        <div className='flex justify-between p-2'>
                            <p>65</p>
                            <button>VIEW</button>
                        </div>

                    </div>

                </div>

            </div>


            
            <div className='p-2  '>
            <h1 className='w-8 border-b-2 border-red-800'>Bestsellers</h1>
            </div>
            <div className='flex justify-center p-2'>
                
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
                    <img className="w-full" src={img} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href="" className='rounded-full border border-red-800 py-2 px-3 text-red-800 font-bold hover:bg-red-900 hover:text-white'>+ ADD TO CART </a>
               
                        </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
                    <img className="w-full" src={img} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href="" className='rounded-full border border-red-800 py-2 px-3 text-red-800 font-bold hover:bg-red-900 hover:text-white'>+ ADD TO CART </a>
               
                        </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
                    <img className="w-full" src={img} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href="" className='rounded-full border border-red-800 py-2 px-3 text-red-800 font-bold hover:bg-red-900 hover:text-white'>+ ADD TO CART </a>
               
                        </div>
                </div>

                
            </div>

        </div>
    )
}

export default LoginAndRegister