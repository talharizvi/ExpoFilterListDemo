import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CategoryHeader from '../CategoryHeader';

const category = 'Test Category';

describe('CategoryHeader component', () => {

  it('renders category text with category prop', () => {
    
    render(<CategoryHeader category={category} />);
    expect(screen.getByText(category)).toBeDefined();
  });

});