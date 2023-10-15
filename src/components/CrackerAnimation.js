import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

const CrackerAnimation = () => {
  const [showCongrats, setShowCongrats] = useState(false);
  const location = useLocation();
  const property = location.state?.property;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <>
    <Header/>
    <div className="flex flex-col items-center mt-10 font-sans hover:font-serif">
       
      
      
        <div className="text-center relative mt-5">
          <p className="text-2xl text-blue font-bold mb-3">Congratulations! Your Booking is confirmed for {property.bhk_details} !</p>
          <div className="bg-no-repeat bg-center bg-cover w-32 h-32 mx-auto "> <img src = {property.image_url}/></div>
          
        </div>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Go Back
      </button>
    </div>
    </>
  );
};

export default CrackerAnimation;
