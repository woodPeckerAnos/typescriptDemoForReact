import React from 'react';
import { render } from '@testing-library/react';
import Hello from './Hello';

test('renders learn react link', () => {
  const { getByText } = render(<Hello />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
