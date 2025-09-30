import { render, screen } from '@testing-library/react';
import App from './App';

test('renders company name', () => {
  render(<App />);
  const companyName = screen.getByText(/STANHOLE TRADING & PROJECTS/i);
  expect(companyName).toBeInTheDocument();
});