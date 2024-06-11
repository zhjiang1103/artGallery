import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactPage from '../components/ContactPage/ContactPage';
import emailjs from 'emailjs-com';

jest.mock('emailjs-com', () => ({
  send: jest.fn(),
}));

describe('ContactPage Integration Test', () => {
  beforeEach(() => {
    emailjs.send.mockClear();
  });

  test('renders the ContactPage component', () => {
    render(<ContactPage />);

    // Check for presence of form elements
    const nameInput = screen.getByPlaceholderText('Your name');
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Your email');
    expect(emailInput).toBeInTheDocument();

    const messageTextarea = screen.getByPlaceholderText('Your message');
    expect(messageTextarea).toBeInTheDocument();

    const sendButton = screen.getByText('Send');
    expect(sendButton).toBeInTheDocument();

    // Check for presence of contact info
    const phoneInfo = screen.getByText('(123) 456-7890');
    expect(phoneInfo).toBeInTheDocument();

    const emailInfo = screen.getByText('info@janetsartgallery.com');
    expect(emailInfo).toBeInTheDocument();

    const addressInfo = screen.getByText('123 Art St, Art City, AC 12345');
    expect(addressInfo).toBeInTheDocument();
  });

  test('submits the form successfully', async () => {
    emailjs.send.mockResolvedValue({ text: 'OK' });

    render(<ContactPage />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your message'), { target: { value: 'Hello, this is a test message.' } });

    // Submit the form
    fireEvent.click(screen.getByText('Send'));

    // Verify the emailjs.send function was called
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1);
    });

    // Verify the form was reset
    expect(screen.getByPlaceholderText('Your name')).toHaveValue('');
    expect(screen.getByPlaceholderText('Your email')).toHaveValue('');
    expect(screen.getByPlaceholderText('Your message')).toHaveValue('');
  });

  
});
