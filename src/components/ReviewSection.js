import React from 'react';
import envatoLogo from '../assets/images/motionarteffect-img2.png';
import g2Logo from '../assets/images/motionarteffect-img1.png';
import wordpressLogo from '../assets/images/motionarteffect-img3.png';
import wandImage from '../assets/images/motionarteffect-img5.png';
import star from '../assets/images/motionarteffect-img4.png';

const ReviewsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-4xl font-weight: 800 mb-40 ">Trusted by thousands of users around the world</p>
        </div>
        <div className="flex justify-center items-center space-x-40 mb-12 ">
          <div className="flex items-center">        
            <img src={envatoLogo} alt="Envato" className="h-20 mb-2" />
            <div className='flex flex-col'>
              <img src={star} alt="star" className='h-12 mb-2 w-40' />
              <p className="text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className="flex items-center">        
            <img src={g2Logo} alt="G2" className="h-20 mb-2" />
            <div className='flex flex-col'>
              <img src={star} alt="star" className='h-12 mb-2 w-40' />
              <p className="text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className="flex items-center">        
            <img src={wordpressLogo} alt="WordPress" className="h-20 mb-2" />
            <div className='flex flex-col'>
              <img src={star} alt="star" className='h-12 mb-2 w-40' />
              <p className="text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start text-left mb-12"> 
  <div className=" "> {/* Left div */}
    <div className='mr-20' >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mr-4">
        Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-8">
        Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
      </p>
      <button
        type="button"
        className="bg-gradient-to-r from-purple-500 to-orange-500 text-white font-medium rounded-lg text-lg px-8 py-3"
      >
        Purchase From Envato &rarr;
      </button>
    </div>
  </div>
  <div className="ml-8 "> {/* Right div */}
    <img src={wandImage} alt="Magic Wand" className="mx-auto h-32" />
  </div>
</div>

      </div>
    </div>
  );
};

export default ReviewsSection;
