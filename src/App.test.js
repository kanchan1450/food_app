import { getByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // testing the app
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
