import React from 'react';
import images from '../assets/images/images.png';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-600'>
      <img src={images} alt="Logo" className='h-12 w-40' />
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Buy Now
      </button>
    </div>
  );
}

export default Navbar;
