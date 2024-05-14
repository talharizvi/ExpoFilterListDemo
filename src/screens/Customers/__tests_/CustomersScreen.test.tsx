import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react-native';
import CustomersScreen from '../CustomersScreen';
import { useFetchUserData } from '../../../hooks/useFetchUserData';
import colors from '../../../constants/colors';
jest.mock('../../../hooks/useFetchUserData');

describe('CustomersScreen', () => {
  it('displays loader when isLoading is true', () => {
    (useFetchUserData as jest.Mock).mockReturnValue({ listItems: [], isLoading: true });

    const { toJSON, getByTestId } = render(<CustomersScreen />);
    expect(getByTestId('loader')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});

it('does not display loader when isLoading is false', () => {
  (useFetchUserData as jest.Mock).mockReturnValue({ listItems: [], isLoading: false });

  const { toJSON, queryByTestId } = render(<CustomersScreen />);
  expect(toJSON()).toMatchSnapshot();
  expect(queryByTestId('loader')).toBeNull();
});

test('displays user list when data is loaded', async () => {
  // Mocking listItems with sample data
  const mockData = [
    {
      "name": "Karan Ahuja",
      "type": 1
    },
    {
      "name": "Suraj Singh",
      "type": 0
    }
  ];
  jest.spyOn(require('../../../hooks/useFetchUserData'), 'useFetchUserData').mockReturnValueOnce({ listItems: mockData, isLoading: false });

  const { toJSON, getByTestId, queryByTestId } = render(<CustomersScreen />);

  // Check if the loader is not present
  await waitFor(() => expect(queryByTestId('loader')).toBeNull());

  // Check if the user list is rendered
  const userList = getByTestId('customers-screen');
  expect(userList).toBeTruthy();

  const adminButton = getByTestId('admin-button');
  expect(adminButton.props.style.backgroundColor).toBe(colors.background);

  await waitFor(() => {
    // Check if the user list items are rendered correctly after filtering
    expect(queryByTestId('user-0')).toBeTruthy();
    expect(queryByTestId('user-1')).toBeNull();
  });

  expect(toJSON()).toMatchSnapshot(); 
});