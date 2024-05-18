import React from 'react';

const FooterSection = () => {
  return (
    <footer className="py-4 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-orange-500 to-purple-700">
      <div className="text-white text-center md:text-left ml-0 md:ml-14 mb-4 md:mb-0">
        © 2023 Copywrite. All rights reserved by QodeMatrix
      </div>
      <div className="flex space-x-4 justify-center md:justify-end mr-0 md:mr-10">
        <a href="/documentation" className="text-white">Documentation</a>
        <a href="/support" className="text-white">Support</a>
      </div>
    </footer>
  );
}

export default FooterSection;
