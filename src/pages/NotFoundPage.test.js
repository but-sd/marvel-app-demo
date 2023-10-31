import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

test('renders 404 message', () => {
  render(<NotFoundPage />);

  const h2Element = screen.getByRole('heading', { level: 2, name: "404 - Not Found" });
  const pElement = screen.getByText('The page you are looking for does not exist.');

  expect(h2Element).toBeInTheDocument();
  expect(pElement).toBeInTheDocument();
});