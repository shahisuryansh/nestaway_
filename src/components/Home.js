import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import SmallCard from "./SmallCard";
import Card from './Card'
import BookingForm from './BookingForm'
import { useSelector } from 'react-redux'; 
import SearchFilter from "./SearchFilter";
import Loader from "./Loader";


function Home() {
  const [selectedTenantTypes, setSelectedTenantTypes] = useState([]);
  const [selectedBudgets, setSelectedBudgets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Your properties state
  const properties = useSelector(state => state.properties.properties);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  // Filter properties based on selected filter items
  const filteredProperties = properties.filter(property => {
    if (selectedTenantTypes.length > 0 && !selectedTenantTypes?.includes(property.gender)) {
      return false;
    }

    if (selectedBudgets.length > 0 && !selectedBudgets?.includes(property.budget)) {
      return false;
    }

    return true;
  });
  console.log(filteredProperties)
  console.log(selectedTenantTypes)

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex-1/4 hidden md:flex">
          <SearchFilter
            selectedTenantTypes={selectedTenantTypes}
            setSelectedTenantType={setSelectedTenantTypes}
            selectedBudgets={selectedBudgets}
            setSelectedBudgets={setSelectedBudgets}
          />
        </div>
        

        <div className="  flex flex-col px-10  bg-white flex-3/4">
          {filteredProperties ? (<div className="overflow-y-scroll" style={{ maxHeight: '85vh' , scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
              {filteredProperties.map((property) => (
                <SmallCard property={property} key={property.id} />
              ))}
            </div>) : <Loader/>}
        
          <button
        onClick={openModal}
        className="fixed bottom-4  bg-green-400 text-white px-10 py-2 rounded-full cursor-pointer md:hidden"
      >Filters</button>
      <button
        onClick={openModal}
        className="fixed bottom-4 right-8  bg-green-400 text-white px-10 py-2 rounded-full cursor-pointer md:hidden"
      >Sort</button>
        </div>
        
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 w-96 rounded-lg">
            <SearchFilter
              selectedTenantTypes={selectedTenantTypes}
              setSelectedTenantTypes={setSelectedTenantTypes}
              selectedBudgets={selectedBudgets}
              setSelectedBudgets={setSelectedBudgets}
            />
            <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer">
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Home;