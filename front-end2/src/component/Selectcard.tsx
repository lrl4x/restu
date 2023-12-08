// Selectcard.js
import React from 'react';

export default function Selectcard({ id,name,value, img, checked, onChange }) {
  return (
    <div className='flex justify-between p-1'>
      <div className='inline-flex items-center justify-center'>
        <img src={img} className='w-9' alt="" />
        <h1>{name}</h1>
      </div>

      <div className="inline-flex items-center justify-center">
        <div className="flex items-center mb-4">
          <input
            id={id}
            type="radio"
            value={value}
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={checked}
            onChange={() => onChange(name)}  // Pass the name (or other unique identifier) to the onChange handler
          />
          <label htmlFor={`1`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          </label>
        </div>
      </div>
    </div>
  );
}