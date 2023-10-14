import React, { useState , useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BookinForm from './BookingForm'
import ImageSrollbar from './ImageScrollbar';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';

function NavItem({ text }) {
  return (
    <a href="#" className="text-gray-500 hover:text-white transition duration-300">
      {text}
    </a>
  );
}

const Cards = () => {
    const [activeSection, setActiveSection] = useState('section1');
    const location = useLocation();
  const property = location.state?.property;

    const handleSectionChange = (section) => {
      setActiveSection(section);
    };
  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById('section1');
      const section2 = document.getElementById('section2');
      const section3 = document.getElementById('section3');

      if (section1 && section2 && section3) {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= section1.offsetTop && scrollPosition < section2.offsetTop) {
          setActiveSection('section1');
        } else if (scrollPosition >= section2.offsetTop && scrollPosition < section3.offsetTop) {
          setActiveSection('section2');
        } else if (scrollPosition >= section3.offsetTop) {
          setActiveSection('section3');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="bg-red shadow-lg rounded-lg p-4 md:max-w-7xl md:m-auto ">
       <div className=" text-white py-4 px-6 flex items-center justify-between fixed sticky top-0 z-50 bg-white">
      
      <div className="flex space-x-6">
        <NavItem text="House Feature" />
        <NavItem text="House Amenities" />
        <NavItem text="Rent Details" />
      </div>
    </div>
     
      
      <div className="mb-4 flex bg-red">
        <div className='flex-1'>
          <div id="section1" className={`section ${activeSection === 'section1' ? 'active' : ''}`}>
          <div className="flex flex-wrap text-uppercase justify-between">
      <div className="w-48 border-b border-gray-100 p-3">
        <div>Type</div>
        <div className="font-bold">{property?.house_type}</div>
      </div>
      <div className="w-48 border-b border-gray-100 p-3">
        <div>Available Beds</div>
        <div className="font-bold">{property?.bed_available_count}</div>
      </div>
      
      <div className="w-48 border-b border-gray-100 p-3">
        <div>BHK Details</div>
        <div className="font-bold">{property?.bhk_details}</div>
      </div>
      <div className="w-48 border-b border-gray-100 p-3">
        <div>Available From</div>
        <div className="font-bold">{property?.bhk_details.available_from ? property?.bhk_details.available_from : "Not Found"}</div>
      </div>
      <div className="w-48 border-b border-gray-100 p-3">
        <div>Nestaway Id</div>
        <div className="font-bold">{property?.nestaway_id}</div>
      </div>
      
        <div className="w-48 border-b border-gray-100 p-3">
          <div>Furnishing Status</div>
          <div className="font-bold">{property?.furnishing_type}</div>
        </div>
     
    </div>
    <div className='m-auto p-10'>
    <ImageSrollbar data={property?.list_view_photos}/>
    </div>
           
           
            {/* Add more property features here */}
          </div>
       
        
          <div id="section2" className={`section ${activeSection === 'section2' ? 'active' : ''}`}>
            <div>
              <h2 className='font-bold  text-2xl font-black mt-5'>House Amenities</h2>
              <div className='flex overflow-wrap'>
                {property?.amenity_list.map((amenity)=>(
                  <div id ={amenity.amenity} className='m-2  text-center font-bold text-blue-400 text-lg p-2 bg-gray-200 m-1 rounded-2xl' >
                    <div className=''>
                    <img src={amenity.icon_url} alt='amenityIcon'/>
                    </div>
                    <div>
                    <span className='font-medium text-gray-600'>{amenity.amenity}</span>
                      </div>

                   
                    

                    </div>
                ))}
              </div>
            </div>
            <div className="mt-2">
      <div className="text-lg font-bold mb-2">About House</div>
      <div className="text-gray-600 leading-7">{property?.mdescription}</div>
    </div>
            
          </div>
        
        
          <div id="section3">
          <div className="font-bold text-xl">Rent</div>
          <div className="font-medium">Monthly Rent: ₹{property?.min_rent}</div>
           <div className="font-medium">Advance Amount: ₹{property?.min_bed_advance}</div>
           
            <div className="w-48 border-b border-gray-100 p-3">
        
      </div>
          
          </div>
          </div>
          <div className='flex-1 bg-red'>
          <Booking property={property}/>
          </div>
        
      </div>
      
    </div>
  );
};

export default Cards;
