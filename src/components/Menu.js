// Menu.js
import React from 'react';

const Menu = ({ isOpen, onClose }) => {
  const menuClasses = isOpen
    ? 'fixed top-0 left-0 h-full w-1/4 bg-white z-50 shadow-md transform translate-x-0 transition-transform duration-300'
    : 'fixed top-0 left-0 h-full w-1/4 bg-white z-50 shadow-md transform -translate-x-full transition-transform duration-300';

  return (
    <div className={menuClasses}>
      <ul className="mt-16 space-y-4 text-center">
        <li>
          <a href="/about-us" className="text-gray-700 hover:text-blue-600">About Us</a>
        </li>
        <li>
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
        </li>
        <li>
          <a href="/profile" className="text-gray-700 hover:text-blue-600">Profile</a>
        </li>
      </ul>
      <button className="absolute top-4 right-4" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Menu;
