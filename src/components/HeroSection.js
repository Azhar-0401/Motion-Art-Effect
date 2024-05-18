import React from 'react';
import heroImage from '../assets/images/MotionArtEffect-logo.png';
const HeaderSection = () => {
  return (
    <div className="relative bg-gray-900 text-white py-16 px-8">
         <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4 w-full">
        <img src={heroImage} alt="Hero" className="ml-20 h-18 w-auto  mt-4" />
        <button
  type="button"
  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mr-20 my-20 h-15"
>
  Purchase Now
</button>

      </div>
      <div className="absolute top-1/4 left-0 p-4">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600 ml-14">
          Transform
        </p>
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600 ml-14">
          Your Website
        </p>
        <p className="text-lg ml-14">With Motion Art</p>
        <p className="text-lg ml-14"> Effect</p>
      </div>
      <div className="mt-40 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight">
          Attract Your<br />
          <span className='inline-block'>Visitors Attention<br /></span>
          With Colorful<br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600">
            Motion Art Effect
          </span>
        </h1>
        <p className="mt-14 text-lg sm:text-xl md:text-2xl font-outfit">
          Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
        </p>
      </div>
    </div>
  );
}

export default HeaderSection;