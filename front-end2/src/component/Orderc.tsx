import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/OIP.jpg'
import axios from 'axios'
export default function Orderc() {

    const [PickUp, setPickUp] = useState(true)
    const [Places, setPlaces] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/Places")
            .then((res) => {
                setPlaces(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handlebutton = () => {
        setPickUp(!PickUp)
    }
    return (
        <div className=''>


            <div className='flex flex-col items-center  mt-4'>
                <div>
                    <h1>START YOUR ORDER TO FEED YOUR HAPPY </h1>
                </div>
                <div className='flex space-x-3'>
                    <div className='flex space-x-4 bg-gray-300 rounded-full py-2 px-5' onClick={handlebutton}>
                        <h1 className={PickUp ? 'bg-yellow-200 rounded-full px-2' : ""}>PickUp</h1>
                        <h1 className={PickUp ? "" : "bg-yellow-200 rounded-full px-2"}>Delivery</h1>
                    </div>
                </div>
            </div>

            <div>

                {PickUp && (
                    <div>
                        <div>

                        </div>
                        <div className='flex justify-between p-2'>
                            <h5>Search Using City and Zip Code</h5>
                            <h5>Show map</h5>
                        </div>

                        <div className='p-2'>

                            <form>
                                <label id="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search" required />
                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                </div>
                            </form>

                            {/* Places Card */}
                            <div className='grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 p-1'>
                                {Places.map((Place) => (
                                    <div className='flex flex-col items-start space-x-3  max-w-sm rounded overflow-hidden shadow-lg pb-10 ' key={Place._id}>
                                        <div>
                                            <img src={img} className="w-full" alt="" />
                                        </div>
                                        <div className='p-2'>
                                            <h1 className='text-lg font-bold'>{Place.country}</h1>
                                            <h5 className='text-'>{Place.city}</h5>
                                            <h5>{Place.zipcode}</h5>
                                        </div>
                                        <button className='bg-yellow-200 text-sm font-bold rounded-full px-2 py-2 hover-bg-red-800 hover-text-white'>
                                            <Link to={`/customize/${Place._id}`}>SELECT</Link>
                                        </button>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                    // or Delivery
                ) || (
                        <div>
                            <div className='flex justify-between p-2'>
                                <h5>Search Using City and Zip Code</h5>
                                <h5>Show map</h5>
                            </div>

                            <div className='p-2'>

                                <form>
                                    <label id="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your address" required />
                                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    )}
            </div>

            <div>

            </div>


        </div>
    )
}
