import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the Header component with logo and menu icon', () => {
    const { getByAltText, getByTestId } = render(<Header />);

    // Check if the Nestaway logo is rendered
    const logo = getByAltText('Nestaway Logo');
    expect(logo).toBeInTheDocument();
    expect(logo.src).toBe('https://www.nestaway.com/_flash_app/immutable/assets/nestawayIcon.ad7b1cdf.svg');

    // Check if the menu icon is rendered
    const menuIcon = getByTestId('menu-icon');
    expect(menuIcon).toBeInTheDocument();
  });
});
