import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import burgar from '../assets/Burger.png';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Menuc = () => {
  
    const [foodItems, setFoodItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("KIDSMEALS"); // Default to BEEF category

    const categories = [
        { name: "KIDSMEALS", slug: "KIDSMEALS" },
        { name: "CHICKEN", slug: "CHICKEN" },
        { name: "BEEF", slug: "BEEF" },
        { name: "BEVERAGES", slug: "BEVERAGES" },
        { name: "SIDE & SWEETS", slug: "SIDE & SWEETS" },
    ];

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        try {
            const response = await axios.get(`http://localhost:3001/Food/category/${category}`);
            setFoodItems(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className=''>
            <div className='flex flex-col items-center p-3'>
                <div className='text-3xl font-bold text p-12'>
                    <h1>{selectedCategory} MENU</h1>
                </div>

                <div className='flex items-center py-3 px-2 h-12 space-x-2 bg-yellow-200 rounded-xl'>
                    <button onClick={() => handleCategoryClick("KIDS MEALS")}>
                        <AiOutlineLeft />
                    </button>
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            to={`/Menu/${cat.slug}`}
                            className={selectedCategory === cat.name ? "selected" : ""}
                            onClick={() => handleCategoryClick(cat.slug)}
                        >
                            {cat.name}
                        </Link>
                    ))}
                    <button onClick={() => handleCategoryClick("SIDE & SWEETS")}>
                        <AiOutlineRight />
                    </button>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-12'>
                    {foodItems.map((foodItem) => (
                        <div className='flex flex-col items-center space-y-3 max-w-sm rounded overflow-hidden shadow-lg pb-10 p-11' key={foodItem._id}>
                            <img src={burgar} className='w-44' alt="" />
                            <div>
                                <h1>{foodItem.name}</h1>
                                <p>{foodItem.cals}</p>
                            </div>
                            <div>
                                <button className='bg-yellow-200 text-sm font-bold rounded-full px-2 py-2 hover-bg-red-800 hover-text-white'>
                                    <Link to={`/details/${foodItem._id}`}>VIEW DETAILS</Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menuc;