import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { setProperties, removeProperty } from '../action';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  contactNumber: Yup.string()
    .required('Contact number is required')
    .matches(/^\d{10}$/, 'Contact number must be 10 digits'),
  bookingDate: Yup.date()
    .required('Booking date is required')
    .min(new Date(), 'Booking date should be in the future'),
  radioType: Yup.string().required('Please select a radio type'),
  applyCoupon: Yup.string(),
});

const BookinForm = () => {
    const properties = useSelector(state => state.properties.properties);
    const location = useLocation();
    const property = location.state?.property;
    const navigate = useNavigate();
    
  const initialValues = {
    name: '',
    email: '',
    contactNumber: '',
    bookingDate: '',
    radioType: '',
    applyCoupon: '',
  };
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    console.log(property)
    if (property.id) {
        dispatch(removeProperty(property.id));
      }
      navigate('/formsubmission', { state: { property } });
  };
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    console.log(property)
    if (property.id) {
        dispatch(removeProperty(property.id));
      }
      
      navigate('/formsubmission', { state: { property } });
  };
  return (
    <>
    <Header/>
    <div className='max-w-7xl mx-auto overflow-scoll'>
        <div className='text-lg font-bold text-center'>Booking Form </div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      
    >
        
      {({ isSubmitting }) => (
        <Form className="bg-white p-4 rounded shadow">
          

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <Field type="email" name="email" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-600">Contact Number:</label>
            <Field type="text" name="contactNumber" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-600">Desired Booking Date:</label>
            <Field type="date" name="bookingDate" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            <ErrorMessage name="bookingDate" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Gender:</label>
            <div className="mt-1">
              <Field type="radio" name="radioType" value="Boys" /> Boys
              
            </div>
            <ErrorMessage name="radioType" component="div" className="text-red-500 text-sm" />
          </div>
          <p className="mb-4 text-sm text-gray-600">
            <span className='font-bold'>Instructions:</span> Regular/General cleaning is complimentary and is included in the move-in process. Deep cleaning, however, is chargeable. Details and steps to avail deep cleaning are provided here.
            The token amount of (₹4500) is not refundable if the booking is canceled.
          </p>
          <div className="mb-4">
            <label htmlFor="applyCoupon" className="block text-sm font-medium text-gray-600">Apply Coupon:</label>
            <Field type="text" name="applyCoupon" className="mt-1 p-2 border border-gray-300 rounded w-full" />
          </div>

          
          <button type="submit"   className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    </div>
    </>
  );
};

export default BookinForm;
