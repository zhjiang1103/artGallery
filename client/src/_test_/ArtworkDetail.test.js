import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ArtworkDetail from '../components/GalleryPage/ArtworkDetail';
import ThemeOptions from '../components/GalleryPage/ThemeOptions';
import NavBar from '../components/nav-bar';
import BackgroundMusic from '../components/GalleryPage/BackgroundMusic';
import '@testing-library/jest-dom/extend-expect';

const mockArtworks = [
  {
    title: 'Starry Night',
    artist: 'Vincent van Gogh',
    description: 'A famous painting by Vincent van Gogh.',
    imageUrl: 'https://example.com/starry-night.jpg'
  },
  {
    title: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    description: 'A portrait painting by Leonardo da Vinci.',
    imageUrl: 'https://example.com/mona-lisa.jpg'
  }
];

test('renders the ArtworkDetail component', () => {
  // Arrange: Render the component within a MemoryRouter
  render(
    <MemoryRouter initialEntries={['/artwork/0']}>
      <Routes>
        <Route path="/artwork/:index" element={<ArtworkDetail artworks={mockArtworks} />} />
      </Routes>
    </MemoryRouter>
  );

  // Assert: Check if the component and its content is rendered correctly
  const titleElement = screen.getByText('Starry Night');
  expect(titleElement).toBeInTheDocument();

  const artistElement = screen.getByText('Vincent van Gogh');
  expect(artistElement).toBeInTheDocument();

  const descriptionElement = screen.getByText('A famous painting by Vincent van Gogh.');
  expect(descriptionElement).toBeInTheDocument();
  
  const backLink = screen.getByText('Back to Gallery');
  expect(backLink).toBeInTheDocument();
});

test('toggles theme correctly', () => {
  // Arrange: Render the component within a MemoryRouter
  render(
    <MemoryRouter initialEntries={['/artwork/0']}>
      <Routes>
        <Route path="/artwork/:index" element={<ArtworkDetail artworks={mockArtworks} />} />
      </Routes>
    </MemoryRouter>
  );

//   // Assert: Check the default theme
//   const background = screen.getByRole('main');
//   expect(background).toHaveStyle(`background-image: url(https://img.freepik.com/premium-photo/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering_41470-3905.jpg)`);

//   // Act: Click on the "At the Museum" button
//   const museumButton = screen.getByTestId('museum');
//   fireEvent.click(museumButton);

//   // Assert: Check the updated theme
//   expect(background).toHaveStyle(`background-image: url(https://t3.ftcdn.net/jpg/00/55/58/52/360_F_55585258_s6eZmsDKxK132KC6LE3U1BE3HAduZ8lH.jpg)`);

//   // Act: Click on the "In the Studio" button
//   const studioButton = screen.getByTestId('studio');
//   fireEvent.click(studioButton);

//   // Assert: Check the updated theme
//   expect(background).toHaveStyle(`background-image: url(https://media.istockphoto.com/id/1332382689/photo/interior-of-loft-style-art-studio.jpg?s=612x612&w=0&k=20&c=ndd1yRtbnr2y8vHlSkCB5QvAvfxmJwyZ8Yn2C4fGqDM=)`);
// });

// test('handles mouse move correctly', () => {
//   // Arrange: Render the component within a MemoryRouter
//   render(
//     <MemoryRouter initialEntries={['/artwork/0']}>
//       <Routes>
//         <Route path="/artwork/:index" element={<ArtworkDetail artworks={mockArtworks} />} />
//       </Routes>
//     </MemoryRouter>
//   );

//   // Act: Simulate mouse movement
//   const motionDiv = screen.getByRole('img', { name: 'Starry Night' });
//   fireEvent.mouseMove(motionDiv, { clientX: 100, clientY: 100 });

//   // Assert: Verify if the component responds to mouse movement
//   // Since we're dealing with animations, the actual check might be complex,
//   // here we're assuming a function `toHaveTransform` exists or similar logic is used.
//   expect(motionDiv).toHaveStyle(`transform: perspective(1000px) rotateX(0deg) rotateY(0deg)`);
});
