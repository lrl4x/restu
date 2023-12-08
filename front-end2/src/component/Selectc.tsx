import React, { useState } from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineRight } from 'react-icons/ai';
import Selectcard from './Selectcard';
import Selectcondiments from './Selectcondiments';
import img1 from '../assets/Burger.png';
import LECCUCE from '../assets/LECCUCE.png';
import TOMATO from '../assets/TOMATO.png';
import CHEESE from '../assets/CHEESE.png';
import Pepsi from '../assets/Pepsi.png';
import dietPepsi from '../assets/diet Pepsi.jpeg';
import Us from '../assets/7Up.png';
import Mirinda from '../assets/mirinda.jpeg';
import { BiLeftArrowAlt } from 'react-icons/bi'
const Selectc = () => {
  const navigate = useNavigate();
  const {itemId} = useParams();
  const {id} = useParams();
  const userId = localStorage.getItem('UserID');
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedBox, setSelectedBox] = useState('');
  const [selectedSide, setSelectedSide] = useState('');
  const [selectedBeverage, setSelectedBeverage] = useState('');
  const [selectedCondiments, setSelectedCondiments] = useState([]);
  const [isCheckedCondiment1, setCheckedCondiment1] = useState(false);
  const [isCheckedCondiment2, setCheckedCondiment2] = useState(false);
  const [isCheckedCondiment3, setCheckedCondiment3] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const handleSizeChange = (value) => {
    setSelectedSize(value);
  };

  const handleBoxChange = (value) => {
    setSelectedBox(value);
  };

  // const handleCondimentChange = (condimentName) => {
  //   setSelectedCondiments((prevCondiments) => {
  //     const isCondimentSelected = prevCondiments.includes(condimentName);

  //     if (isCondimentSelected) {
  //       return prevCondiments.filter((condiment) => condiment !== condimentName);
  //     } else {
  //       return [...prevCondiments, condimentName];
  //     }
  //   });
  // };

  const handleSideChange = (value) => {
    setSelectedSide(value);
  };

  const handleBeverageChange = (value) => {
    setSelectedBeverage(value);
  };

  const handleAddToCart = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3001/account/${userId}/AddToCart/${itemId}`, {
        quantity: 1, // You may adjust this based on your requirements
        selectedSize,
        selectedBox,
        selectedSide,
        selectedBeverage,
      });
      console.log('Item added to cart successfully');
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };



  console.log('Selected Size:', selectedSize);
  console.log('Selected Box:', selectedBox);
  console.log('Selected Side:', selectedSide);
  console.log('Selected Beverage:', selectedBeverage);
  console.log('Selected Condiments:', selectedCondiments);
  return (

    <form onSubmit={handleAddToCart}>
        <div className='flex items-center p-2'>
        <a href="/" ><BiLeftArrowAlt size={20} /></a>
        <a href="/"><h1 className='underline'>Back to Home</h1></a>

      </div>
      <div>
        <div className='flex justify-center'>
          <img src={img1} className='w-60' alt="" />
        </div>

        <section>
          <div>
            <h1>Choose your size</h1>
          </div>

          <div className='p-1 shadow-2xl mt-2'>
            <Selectcard
              id={'1'}
              name={"Medium 22 SAR"}
              img={img1}
              checked={selectedSize === 'Medium'}
              value={"Medium"}
              onChange={() => handleSizeChange('Medium')}
            />
            <Selectcard
              id={'2'}
              name={"Large 22 SAR"}
              img={img1}
              checked={selectedSize === 'Large'}
              value={"Large"}
              onChange={() => handleSizeChange('Large')}
            />
          </div>
        </section>

        <section>
          <div className='mt-2'>
            <h1>Box</h1>
          </div>

          <div className='p-1 shadow-2xl mt-2'>
            <Selectcard
              id={'3'}
              name={"Box"}
              img={img1}
              checked={selectedBox === 'Box'}
              value={"Box"}
              onChange={() => handleBoxChange('Box')}
            />
          </div>
        </section>

        <section>
          <div className='mt-2'>
            <h1>Add On</h1>
          </div>

          <div className='mt-2'>
            <div className='shadow-2xl p-1'>
              <Selectcondiments
                id={"disabled-checkbox1"}
                name={'Lettuce'}
                type={"checkbox"}
                value={'checkbox1'}
                img={LECCUCE}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className='shadow-2xl p-1'>
              <Selectcondiments
                id={"disabled-checkbox2"}
                name={'Tomato'}
                type={"checkbox"}
                value={'checkbox2'}
                img={TOMATO}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className='shadow-2xl p-1'>
              <Selectcondiments
                id={"disabled-checkbox3"}
                name={'Cheese'}
                type={"checkbox"}
                value={'checkbox3z'}
                checked={isChecked}
                onChange={handleCheckboxChange}
                img={CHEESE}
              />
            </div>
          </div>
        </section>

        <section>
          <div className='mt-2'>
            <h1>Select Your Favourite Side Item</h1>
          </div>

          <div className='p-1 shadow-2xl mt-2'>
            <Selectcard id={'4'} name={"Medium Fries"} img={img1} checked={selectedSide === 'Medium Fries'} value={"Medium Fries"} onChange={() => handleSideChange('Medium Fries')} />
            <Selectcard id={'5'} name={"Spicy Medium Fries (2 SAR)"} img={img1} checked={selectedSide === 'Spicy Medium Fries'} value={"Spicy Medium Fries"} onChange={() => handleSideChange('Spicy Medium Fries')} />
            <Selectcard id={'6'} name={"Large Fries 2 SAR"} img={img1} checked={selectedSide === 'Large Fries'} value={"Large Fries"} onChange={() => handleSideChange('Large Fries')} />
          </div>
        </section>

        <section>
          <div className='mt-2'>
            <h1>Select Your Favourite Beverages</h1>
          </div>

          <div className='p-1 shadow-2xl mt-2'>
            <Selectcard id={'7'} name={"Pepsi"} img={Pepsi} checked={selectedBeverage === 'Pepsi'} value={"Pepsi"} onChange={() => handleBeverageChange('Pepsi')} />
            <Selectcard id={'8'} name={"Diet Pepsi"} img={dietPepsi} checked={selectedBeverage === 'Diet Pepsi'} value={"Diet Pepsi"} onChange={() => handleBeverageChange('Diet Pepsi')} />
            <Selectcard id={'9'} name={"7Up"} img={Us} checked={selectedBeverage === '7Up'} value={"7Up"} onChange={() => handleBeverageChange('7Up')} />
            <Selectcard id={'10'} name={"Mirinda"} img={Mirinda} checked={selectedBeverage === 'Mirinda'} value={"Mirinda"} onChange={() => handleBeverageChange('Mirinda')} />
          </div>
        </section>

        
          <div className='p-1 shadow-2xl mt-2 flex justify-between '>
            <div className='flex items-center'>
              <img src={img1} className='w-9' alt="" />
              <h1 className='text-slate-900 font-bold'>1 ITEM</h1>
            </div>

            <div className='bg-red-800 flex rounded-xl p-1 text-white space-x-2'>
              <div>
                <h1 className='font-bold'>19 SAR</h1>
                <h6 className='text-sm'>All prices are VAT inclusive</h6>
              </div>


              {/* Add to Cart button */}
              <button type='submit' className='font-bold inline-flex items-center' disabled={loading}>
                {loading ? 'Adding to cart...' : 'Add to cart'} <AiOutlineRight />
              </button>
              <Link to={`/`}>    </Link>
            </div>

          </div>
    
      </div>

    </form>

  );
};

export default Selectc;