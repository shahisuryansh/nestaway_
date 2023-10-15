import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SmallCard from "./components/SmallCard";
import Card from "./components/Card";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import BookingForm from "./components/BookingForm"
import { useSelector, useDispatch } from 'react-redux';
import { setProperties, removeProperty } from './action';
import CrackerAnimation from "./components/CrackerAnimation";
import Error from "./components/Error";


function App() {
  const properties = useSelector(state => state.properties.properties);
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch data from the mock API
    axios.get("https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17")
      .then((response) => {
        dispatch(setProperties(response.data.houses));

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      console.log(properties)
  }, []);
    
  return (
    <div className="App">
     
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/bookingForm" element={<BookingForm/>}/>
        <Route path="/formsubmission" element={<CrackerAnimation/>}/>
        <Route element={<Error />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
