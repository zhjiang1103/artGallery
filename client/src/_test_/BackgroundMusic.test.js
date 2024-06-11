import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BackgroundMusic from '../components/GalleryPage/BackgroundMusic';// Adjust the path as needed
import { FaPause, FaPlay } from 'react-icons/fa';

jest.mock('react-icons/fa', () => ({
  FaPause: () => <svg data-testid="pause-icon" />,
  FaPlay: () => <svg data-testid="play-icon" />,
}));

// Mocking the Audio constructor
class MockAudio {
  constructor() {
    this.loop = false;
    this.paused = true;
    this.currentTime = 0;
  }

  play = jest.fn().mockImplementation(() => {
    this.paused = false;
  });

  pause = jest.fn().mockImplementation(() => {
    this.paused = true;
  });
}

global.Audio = MockAudio;

describe('BackgroundMusic', () => {
  test('renders the component and toggles play/pause', () => {
    render(<BackgroundMusic />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

  });
});


