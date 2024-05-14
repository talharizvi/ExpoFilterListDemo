import React from 'react';
import HomeScreen from '../HomeScreen';
import { render, screen } from '@testing-library/react-native';

describe('HomeScreen', () => {
    it('renders correctly', () => {
      render(<HomeScreen/>)
      expect(screen.getByText('Empty Screen')).toBeDefined()
    });
  });