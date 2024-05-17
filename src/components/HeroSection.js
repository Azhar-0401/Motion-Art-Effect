import React from 'react';
import heroImage from '../assets/images/MotionArtEffect-logo.png';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-8 font-sora">
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4 w-full">
        <img src={heroImage} alt="Hero" className="h-12 w-auto ml-4 mt-4" />
        <button
  type="button"
  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-transparent hover:text-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mt-4"
>
  Purchase Now
</button>

      </div>
      <div className="absolute top-1/4 left-4 text-left p-4">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600">
          Transform
        </p>
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600">
          Your Website
        </p>
        <p className="text-lg">With Motion Art Effect</p>
      </div>
      <div className="mt-40 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
          Attract Your Visitors Attention With Colorful
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600">
            {' '}
            Motion Art Effect
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-outfit">
          Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
