import React from 'react';
import { render, screen } from '@testing-library/react-native';
import UserListItem from '../UserListItem';

describe('UserListItem component', () => {
  let name:string;

  beforeEach(() => {
    name = 'John Mill';
  });

  it('renders user name and user type for Admin', () => {
    render(<UserListItem name={name} userType={0} />);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText('Admin')).toBeDefined();
  });

  it('renders user name and user type for Manager', () => {
    render(<UserListItem name={name} userType={1} />);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText('Manager')).toBeDefined();
  });

});