import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useDragControls } from 'framer-motion';
import ThemeOptions from './ThemeOptions';
import NavBar from '../nav-bar';
import BackgroundMusic from './BackgroundMusic';


const ArtworkDetail = ({ artworks}) => {
    const [theme, setTheme] = useState('home');
    const { index } = useParams();
    const artwork = artworks[parseInt(index)];
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useDragControls();
    const themeImages = {
      home: 'https://img.freepik.com/premium-photo/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering_41470-3905.jpg',
      museum: 'https://t3.ftcdn.net/jpg/00/55/58/52/360_F_55585258_s6eZmsDKxK132KC6LE3U1BE3HAduZ8lH.jpg',
      studio: 'https://media.istockphoto.com/id/1332382689/photo/interior-of-loft-style-art-studio.jpg?s=612x612&w=0&k=20&c=ndd1yRtbnr2y8vHlSkCB5QvAvfxmJwyZ8Yn2C4fGqDM='
    };

    const handleMouseMove = (e) => {
        const { clientX: x, clientY: y } = e;
        setMousePosition({ x, y });
      };

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
      }
  
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4" style={{ backgroundImage: `url(${themeImages[theme]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onMouseMove={handleMouseMove}>
        <NavBar isOpen={menuOpen} toggleMenu={toggleMenu} />
        <BackgroundMusic />
        <Link to="/gallery" className="text-blue-500 mb-4 transition-colors duration-300 hover:text-blue-700">Back to Gallery</Link>
        <motion.div
            className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden relative" style={{perspective: '1000px',transformStyle: 'preserve-3d'}}
            animate={{
                rotateX: (mousePosition.y / window.innerHeight - 0.5) * 25,
                rotateY: (mousePosition.x / window.innerWidth - 0.5) * -25
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            drag
            dragControls={controls}
            >
          <img src={artwork.imageUrl} alt={artwork.title} className="w-full object-contain" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{artwork.title}</h2>
            <p className="text-gray-600 mb-4">{artwork.artist}</p>
            <p className="text-gray-700">{artwork.description}</p>
          </div>
        </motion.div>
        <div className="fixed bottom-4 right-4 flex flex-col gap-4">
        <ThemeOptions setTheme={setTheme} />
      </div>
      </div>
    );
  };

  export default ArtworkDetail
  