import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import burgar from '../assets/Burger.png';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


const customizec = () => {
  const userId = localStorage.getItem('UserID');
  const { itemId } = useParams();
  const [foodItems, setFoodItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("CHICKEN"); // Default to BEEF category

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    try {
      const response = await axios.get(`http://localhost:3001/Food/category/${category}`);
      setFoodItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("userId:", userId);
  console.log("itemId:", itemId);

  return (
    <div className='bg-white'>
      <div className='conainer mx-auto flex flex-col items-center '>

        <div>
          <h1 className="">CHOOSE YOUR CATEGORY</h1>
        </div>
        <div>
          <div className='text-3xl font-bold text p-12 text-center'>
            <h1>{selectedCategory} MENU</h1>
          </div>

          <div className='flex justify-center py-3 px-2 h-12 space-x-2 '>
            <button onClick={() => handleCategoryClick("BEEF")}>BEEF</button>
            <button onClick={() => handleCategoryClick("KIDSMEALS")}>KIDS MEALS</button>
            <button onClick={() => handleCategoryClick("CHICKEN")}>CHICKEN</button>
            <button onClick={() => handleCategoryClick("BEVERAGES")}>BEVERAGES</button>
            <button onClick={() => handleCategoryClick("SWEETS")}>SIDE & SWEETS</button>
          </div>

          <div className="justify-center grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12 p-1">
            {foodItems.map((foodItem) => (
              <div className='flex overflow-x-visible' key={foodItem._id}>
                <div className="flex flex-col justify-center items-center space-x-2 shadow-xl rounded-xl w-60 p-1">
                  <img src={burgar} className='w-14' alt="" />
                  <div>
                    <h1>{foodItem.name}</h1>
                    <p>{foodItem.cals}</p>
                  </div>
                  <div>
                    <button className='bg-yellow-200 text-sm font-bold rounded-full px-2 py-2 hover-bg-red-800 hover-text-white'>
                    <Link to={`/Select/${userId}/AddToCart/${foodItem._id}`}>CUSTOMIZE</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="flex justify-center">
            <hr className="w-72 h-px my-8 bg-gray-200 border-1 dark:bg-gray-500" />
          </div>

          <div className="">

          </div>
        </div>
      </div>
    </div>
  )
}

export default customizec