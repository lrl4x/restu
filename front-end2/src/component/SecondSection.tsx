import React from 'react'
import burgar from '../assets/Burger.png'
const SecondHero = () => {
    return (
        <div>
            <div className='flex flex-col items-center py-20 px-2 md:flex-row'>
                <div className='flex flex-col space-y-2 p-10'>
                    <h1 className='font-bold overflow-hidden overflow-ellipsis'>FREE SANDWICH FOR NEW MEMBERS</h1>
                    <p>
                    NEW MY REWARDS™ MEMBERS WILL SEE BENEFITS AS SOON AS THEY SIGN UP! CHOOSE FROM OUR FAN FAVORITES: ONE FREE FAMOUS STAR, FRISCO BURGER, BACON EGG & CHEESE BISCUIT, FRISCO BREAKFAST SANDWICH, OR HAND-BREADED CHICKEN SANDWICH W/ MIN. $1 PURCHASE. TERMS APPLY. 
                    </p>
                    <button className='bg-yellow-200 py-2 px-2 rounded-full text-white font-bold flex self-start'>JOIN NOW</button>
                </div>
                
                    <div className="p-2">
                       <img src={burgar}  alt="" />
                    </div>
            </div>
        </div>
    )
}

export default SecondHero