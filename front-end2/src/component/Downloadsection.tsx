import React from 'react'
import download from '../assets/downloadg.png'
function Downloadsection() {
    return (
        <div className='bg-yellow-200 '>
            <div className='flex flex-col justify-center items-center md:flex-row'>
                <div className="flex justify-center p-2  w-1/2 mr-2">
                    <img src={download} className='w-1/2' alt="downdload" />
                </div>
                <div className=' ml-2 w-1/2'>
                    <h1 className='text-red-900 text-2xl font-bold md:text-5xl text-center'>REWARDS WITH EVERY BITE.</h1>
                </div>
            </div>
        </div>
    )
}

export default Downloadsection