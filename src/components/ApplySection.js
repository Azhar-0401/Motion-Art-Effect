import React from 'react';
import form1 from '../assets/images/motionarteffect-img11.png';
import form2 from '../assets/images/motionarteffect-img10.png';

const ApplySection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="text-center mb-16 text-4xl font-bold space-y-2 ">
        <h1> Apply On Any Section Or Enable </h1>
        <h1> For Whole Page</h1>
       
      </div>
      <div className="flex justify-center space-x-8">
        <div className="bg-gray-800 p-8 rounded-3xl shadow-lg w-1/2 mb-10">
          <div className="text-center text-xl font-semibold mb-4">
            Apply On Section
          </div>
          <p className="text-center mb-4">
            Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
          </p>
          <img src={form1} alt="form1" className="mx-auto h-50" />
        </div>
        <div className="bg-gray-800 p-8 rounded-3xl shadow-lg w-1/2 mt-10">
          <div className="text-center text-xl font-semibold mb-4">
            Apply On Page
          </div >
          <p className="text-center mb-4">
            Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
          </p>
         
          <img src={form2} alt="form2" className="mx-auto h-50 mb" />
        </div>
      </div>
    </div>
  );
}

export default ApplySection;
