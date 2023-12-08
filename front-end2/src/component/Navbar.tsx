import { useState } from 'react';
import burgar from '../assets/Burger.png'
import { Outlet, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import React from 'react';


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className=''>
            <div className='flex flex-row py-4 justify-around items-center md:flex-row shadow-lg bg-black '>
                <div>
                    <a href="/"><img src={burgar} className="w-20" alt="Logo" /></a>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="/" className='text-1xl  bg-white-5 dark:text-white font-bold hover:text-slate-500'>HOME</Link>
                    <Link to="/Menu" className='text-1xl  bg-white-5 dark:text-white font-bold hover:text-slate-500'>MENU</Link>
                    <Link to="/" className='text-1xl  bg-white-5 dark:text-white font-bold hover:text-slate-500'>OFFERS</Link>
                    <Link to="/" className='text-1xl  bg-white-5 dark:text-white font-bold hover:text-slate-500'>MY REWARDS</Link>
                    <Link to="/CART" className='text-1xl  bg-white-5 dark:text-white font-bold hover:text-slate-500'>CART</Link>
                </div>

                <div className='md:hidden text-white ' onClick={handleNav} >
                    {nav ? <AiOutlineClose size={20} /> : < AiOutlineMenu size={20} />}
                </div>
            </div>

            <div className={nav ? ' flex flex-col items-center space-y-3 border border-red-50 bg-slate-50 shadow-lg l-8 p-8 md:items-start ' : 'hidden shadow-xl'}>
                <Link to="/" className='text-1xl  bg-white-50 dark:text-slate-900 font-bold hover:text-slate-500'>HOME</Link>
                <hr className="border-slate-900 w-full"/>
                <Link to="/Menu" className='text-1xl  bg-white-50 dark:text-slate-900 font-bold hover:text-slate-500'>MENU </Link>
                <hr className="border-slate-900 w-full"/>
                <Link to="/" className='text-1xl  bg-white-50 dark:text-slate-900 font-bold hover:text-slate-500'>Contact</Link>
                <hr className="border-slate-900 w-full"/>
                <Link to="/" className='text-1xl  bg-white-50 dark:text-slate-900 font-bold hover:text-slate-500'>MY REWARDS</Link>
                <hr className="border-slate-900 w-full"/>
                <Link to="/CART" className='text-1xl  bg-white-50 dark:text-slate-900 font-bold hover:text-slate-500'>CART</Link>
            </div>

        </div>
    )
}

export default Navbar