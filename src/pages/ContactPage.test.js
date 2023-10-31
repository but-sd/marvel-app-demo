import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

test('renders contact information', () => {
  // when

  // then
  render(<ContactPage />);

  // expect the document title to be "Contact Us | Marvel App"
  expect(document.title).toBe('Contact | Marvel App');

  // expect the heading and the paragraph to be in the document
  const h2Element = screen.getByRole('heading', { level: 2, name: "Contact Us" });
  const pElement = screen.getByText('Feel free to contact us at');

  expect(h2Element).toBeInTheDocument();
  expect(pElement).toBeInTheDocument();

  // expect the email link to be in the document
  const emailLink = screen.getByRole('link', { name: "marvelApp@gmail.com" });

  expect(emailLink).toBeInTheDocument();
  expect(emailLink).toHaveAttribute('href', 'mailto:marvelApp@gmail.com');
});