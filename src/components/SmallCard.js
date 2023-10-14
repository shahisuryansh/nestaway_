import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/outline';

const SmallCard = ({property}) => {
    const navigate = useNavigate();
    const navigateToCard = () => {
        // Use the state prop to pass the property object
        navigate('/card', { state: { property } });
      };
  return (
    <div className='md:flex py-7  border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t    bg-gray-200 overflow-hidden border-black'>
        
       <div className=' md:w-80 flex-shrink-0 overflow-hidden'>
            <img src={property.image_url} alt='Image' className='rounded-t-lg' />
            </div>
       <div>
       <div >
        <div className='flex flex-col  pl-5'>
            <div className='flex justify-between'>
                <p>{property.locality}</p>
                
            </div>
            <h4 className='text-xl'>{property.bhk_details} {' '} {property.house_type} in {property.city}</h4>
            <div className='border-b w-10 pt-2'/>
            <p className='pt-2 text-sm text-gray-500 flex-grow'><span className='capitalize absolute top-3 left-1 bg-[#000A] text-white backdrop-blur whitespace-nowrap rounded-full px-3 py-1 text-xs'>{property.gender}</span>
            </p>
            <div className='flex justify-between items-end pt-5'>
                <div className='text-lg lg:2xl font-semibold pb-2 px-4'><span className='text-sm'>Rent :</span>{property.min_rent}</div>
                <div className='text-lg lg:2xl font-extralight pb-2 '><span className='text-sm'>Deposit:</span>{property.min_bed_advance / property.min_rent}{'  ' }Months{' '}</div>
                </div>
        </div>
        <div className='flex gap-4 justify-between items-center md:px-10'>
            
            
            
        </div>
       
       
       </div>
       <div className='flex justify-between items-center py-10 px-10'>
      {/* Other content of the SmallCard */}
      
      <HeartIcon className='h-7 cursor-pointer'/>
      
      
      <button onClick={navigateToCard} className='px-5'>
        View Details
      </button>
    </div>
       </div>
       </div>
  )
}

export default SmallCard