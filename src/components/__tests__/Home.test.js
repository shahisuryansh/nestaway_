import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './Home';

// Mock useSelector function
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Home Component', () => {
  // Define a mock state to be returned by useSelector
  const mockState = {
    properties: {
      properties: [
        {
          id: 1,
          gender: 'male',
          budget: 1000,
        },
        {
          id: 2,
          gender: 'female',
          budget: 1500,
        },
      ],
    },
  };

  beforeEach(() => {
    // Reset the useSelector mock implementation before each test
    jest.clearAllMocks();
  });

  it('renders Home component with filters and property cards', () => {
    // Mock useSelector to return the defined state
    jest.spyOn(require('react-redux'), 'useSelector').mockImplementation(() => mockState);

    const { getByText, getByTestId } = render(<Home />);

    // Check if the filters and property cards are rendered
    expect(getByText('Filters')).toBeInTheDocument();
    expect(getByText('Sort')).toBeInTheDocument();
    expect(getByTestId('property-card-1')).toBeInTheDocument();
    expect(getByTestId('property-card-2')).toBeInTheDocument();
  });

  it('opens and closes the modal when the filter button is clicked', () => {
    const { getByText, queryByText } = render(<Home />);

    // Modal should not be in the document initially
    expect(queryByText('Close')).not.toBeInTheDocument();

    // Click the "Filters" button to open the modal
    fireEvent.click(getByText('Filters'));

    // Modal should be in the document after clicking the button
    expect(getByText('Close')).toBeInTheDocument();

    // Click the "Close" button to close the modal
    fireEvent.click(getByText('Close'));

    // Modal should not be in the document after clicking the "Close" button
    expect(queryByText('Close')).not.toBeInTheDocument();
  });
});
