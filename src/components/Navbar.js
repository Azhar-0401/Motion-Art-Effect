import React from 'react';
import images from '../assets/images/images.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 bg-gray-800 sticky top-0 z-10'>
      <img src={images} alt="Logo" className='ml-5 h-12 w-40' />
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-7" 
      >
        Buy Now
      </button>
    </div>
  );
}

export default Navbar;