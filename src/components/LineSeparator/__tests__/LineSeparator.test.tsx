import React from 'react';
import { render, screen } from '@testing-library/react-native';
import LineSeparator from '../LineSeparator';

describe('LineSeparator component', () => {
    
  it('renders correctly', () => {
    render(<LineSeparator/>)
    expect(screen.getByTestId('line-separator')).toBeDefined()
  });

});