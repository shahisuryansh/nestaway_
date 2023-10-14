import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter to simulate routing
import Booking from '../Booking';

const sampleProperty = {
  id: 1,
  // Add property data as needed
};

describe('Booking Component', () => {
  it('Renders the Booking component', () => {
    render(
      <MemoryRouter>
        <Booking property={sampleProperty} />
      </MemoryRouter>
    );

    expect(screen.getByText('Visit the house and Book')).toBeInTheDocument();
    expect(screen.getByText('Pay token & book')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book' })).toBeInTheDocument();
    // Add more assertions for other elements in the Booking component
  });

  it('Navigates to the Booking Form page when "Book" button is clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <Booking property={sampleProperty} />
      </MemoryRouter>
    );

    const bookButton = screen.getByRole('button', { name: 'Book' });
    fireEvent.click(bookButton);

    // Verify that the navigation to the Booking Form page occurred.
    // You might check the URL or elements specific to the Booking Form page.
    // Example:
    expect(container.querySelector('.booking-form-page')).toBeInTheDocument();
  });
});
