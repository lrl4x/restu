import React,{useState} from 'react';

export default function Selectcondiments({ id,type,value,name, img,checked,onChange }) {
  const [isChecked, setChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
      // Toggle the checkbox value when it's clicked
      setChecked(!isChecked);
  };
  return (
    <div className='shadow-2xl p-1'>
      <div className='flex justify-between p-1'>
        <div className='flex'>
          <img src={img} className='w-9' alt={name} />
          <h1>{name}</h1>
        </div>

        <div className="inline-flex items-center justify-center">
          <input
            id={id}
            type="checkbox"
            value={value}
            name={name}
            checked={isChecked}
            onChange={handleCheckboxChange} // Toggle the checkbox value
            className="w-4 h-4 text-blue-600 bg-gray-400 border-gray-300 rounded focus:ring-blue-900 dark:focus:ring-blue-900 ring-offset-gray-300"
          />
          <label htmlFor={name} className="ml-2">{/* Use label to associate with the checkbox */}
            
          </label>
        </div>
      </div>
    </div>
  );
}