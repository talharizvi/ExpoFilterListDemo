import React from 'react';
import { fireEvent, render, screen, waitFor,  } from '@testing-library/react-native';
import CustomRadioButton from '../CustomRadioButton';
import colors from '../../../constants/colors';

describe('CustomRadioButton', () => {
  const handleSelectedUserType = jest.fn();

  it('renders the CustomRadioButton', () => {
    render(<CustomRadioButton handleSelectedUserType={handleSelectedUserType} />);
    expect(screen.getByText('Admin')).toBeDefined();
    expect(screen.queryByText('Manager')).toBeDefined();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('calls handleSelectedUserType with "admin" when default option is selected', () => {
    render(<CustomRadioButton handleSelectedUserType={handleSelectedUserType} />);
    expect(screen.getByTestId('admin-button').props.style.backgroundColor).toBe(colors.background);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('calls handleSelectedUserType with "manager" when "Manager" option is selected', () => {
    render(<CustomRadioButton handleSelectedUserType={handleSelectedUserType} />);
    fireEvent.press(screen.getByText('Manager'));
    expect(handleSelectedUserType).toHaveBeenCalledWith('manager');
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('calls handleSelectedUserType with "admin" when "admin" option is selected', () => {
    render(<CustomRadioButton handleSelectedUserType={handleSelectedUserType} />);
    fireEvent.press(screen.getByTestId('admin-button'));
    expect(screen.getByTestId('admin-button').props.style.backgroundColor).toBe(colors.background);
    expect(screen.toJSON()).toMatchSnapshot();
  });

});