import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Booking = ({property}) => {
    const navigate = useNavigate();
    
    const navigateToForm= () => {
        // Use the state prop to pass the property object
        navigate('/bookingForm', { state: { property } });
       
      };
  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-lg">
      <div className="header text-xl font-semibold mb-4">Visit the house and Book</div>
      <div className="body text-lg">
        <img src ="https://nestaway-assets.nestaway.com/refonte/precompiled-assets/src/assets/images/hdp/travellerImage-5d0d03239c75a147d1f8b24bac51ec62.png" alt='logo'/>
        Pay token & book</div>
      <div className="footer mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={navigateToForm}>Book</button>
      </div>
    </div>
  );
};

export default Booking;
