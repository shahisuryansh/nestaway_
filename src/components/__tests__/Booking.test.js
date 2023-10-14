import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Booking from './Booking';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Booking Component', () => {
  it('renders the Booking component with a button to book', () => {
    const property = {
      // Mock property data here
    };

    const { getByText, getByAltText } = render(<Booking property={property} />);

    // Check if the "Book" button is rendered
    const bookButton = getByText('Book');
    expect(bookButton).toBeInTheDocument();

    // Check if the image is rendered
    const image = getByAltText('logo');
    expect(image).toBeInTheDocument();
  });

  it('navigates to the booking form when the "Book" button is clicked', () => {
    const property = {
      // Mock property data here
    };

    // Mock the useNavigate function
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);

    const { getByText } = render(<Booking property={property} />);

    // Click the "Book" button
    fireEvent.click(getByText('Book'));

    // Ensure that useNavigate was called with the expected route
    expect(mockNavigate).toHaveBeenCalledWith('/bookingForm', { state: { property } });
  });
});
