import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,Link, Switch, useParams } from 'react-router-dom';
import BackgroundMusic from './BackgroundMusic';
import NavBar from '../nav-bar';

const artworks = [
  {
    title: 'Starry Night',
    artist: 'Vincent van Gogh',
    imageUrl: 'https://sanctuarymentalhealth.org/wp-content/uploads/2021/03/The-Starry-Night-1200x630-1.jpg',
    description: 'A famous painting by Vincent van Gogh.'
  },
  {
    title: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    description: 'A portrait painting by Leonardo da Vinci.'
  },
  {
    title: 'The Persistence of Memory',
    artist: 'Salvador Dalí',
    imageUrl: 'https://www.phaidon.com/resource/persistenceofmemory1931.jpg',
    description: 'A surreal painting by Salvador Dalí.'
  },
  {
    title: 'The Scream',
    artist: 'Edvard Munch',
    imageUrl: 'https://static.wixstatic.com/media/1071a8_cf1930f883e043e28d03d5a26a5960ef~mv2.jpg/v1/fill/w_980,h_1238,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1071a8_cf1930f883e043e28d03d5a26a5960ef~mv2.jpg',
    description: 'An iconic painting by Edvard Munch.'
  },
  {
    title: 'Girl with a Pearl Earring',
    artist: 'Johannes Vermeer',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg',
    description: 'A famous painting by Johannes Vermeer.'
  },
  {
    title: 'The Birth of Venus',
    artist: 'Sandro Botticelli',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
    description: 'A painting by Sandro Botticelli.'
  },
  {
    title: 'The Last Supper',
    artist: 'Leonardo da Vinci',
    imageUrl: 'https://www.singulart.com/blog/wp-content/uploads/2019/08/tour_img-312981-148.jpg',
    description: 'A mural painting by Leonardo da Vinci.'
  },
  {
    title: 'Guernica',
    artist: 'Pablo Picasso',
    imageUrl: 'https://cdn.britannica.com/79/91479-050-24F98E12/Guernica-canvas-Pablo-Picasso-Madrid-Museo-Nacional-1937.jpg?w=300&h=169&c=crop',
    description: 'A painting by Pablo Picasso.'
  }
];


const getRandomSpan = () => {
  const spans = [ '2', '3', '4'];
  return spans[Math.floor(Math.random() * spans.length)];
};

const ArtCard = ({ title, artist, imageUrl, index }) => {
  const gridColumn = getRandomSpan();
  const gridRow = getRandomSpan();
  return (
    <Link to={`/artwork/${index}`} className={`relative overflow-hidden rounded-lg shadow-lg group transform transition-transform duration-300 hover:scale-105 col-span-${gridColumn} row-span-${gridRow}`}>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-white text-sm">{artist}</p>
      </div>
    </Link>
  );
};

const Header = () => (
  <header className="text-center mb-8">
    <h1 className="text-4xl font-semibold text-gray-200 mb-4">Art Gallery</h1>
    <p className="text-lg text-gray-400">Explore the finest pieces of art from around the world</p>
  </header>
);

const MosaicLayout = ({ artworks }) => (
  <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 xl:grid-cols-16 gap-6">
    {artworks.map((artwork, index) => (
      <ArtCard
        key={index}
        title={artwork.title}
        artist={artwork.artist}
        imageUrl={artwork.imageUrl}
        index={index}
      />
    ))}
  </div>
);


const Gallery = () => {
  const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
      }
  return (
 
      <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4">
        <NavBar isOpen={menuOpen} toggleMenu={toggleMenu} />
        <Header />
        <p className="text-center text-lg text-gray-400 mb-4">Want to enjoy art with music? Click the play button on the left corner</p>
        <BackgroundMusic />
        <main className="w-full">
        {<MosaicLayout artworks={artworks} />}
        </main>
        
      </div>
 
  );
  }

  export default Gallery;