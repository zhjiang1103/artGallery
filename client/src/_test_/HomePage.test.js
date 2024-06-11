import { render, screen, fireEvent } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import '@testing-library/jest-dom/extend-expect'; // Use extend-expect to include all Jest DOM matchers
import HomePage from '../components/HomePage/HomePage';// Adjust the path as needed

test('renders the HomePage component', () => {
  // Render the component
  render(<HomePage />);

  // Assert that the component and its content is rendered correctly
  const aboutSectionTitle = screen.getByText('About');
  expect(aboutSectionTitle).toBeInTheDocument();

  const missionText = screen.getByText(/Our mission is to provide a platform for emerging and established artists to share their work with a broader audience/i);
  expect(missionText).toBeInTheDocument();

});
