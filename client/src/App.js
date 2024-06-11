import "./App.css";

import { Route, Routes } from 'react-router-dom';

import HomePage from "./components/HomePage/HomePage";
import Gallery from "./components/GalleryPage/Gallery";
import ArtworkDetail from "./components/GalleryPage/ArtworkDetail";
import ContactPage from "./components/ContactPage/ContactPage";



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



function App() {
 
  

return (

   
          <>
    
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/artwork/:index" element={<ArtworkDetail artworks={artworks} />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </>
         
   
 
  );
}

export default App;
