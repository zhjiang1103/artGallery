import React, { useEffect, useRef, useState } from 'react';
import {  FaPause, FaPlay } from 'react-icons/fa';

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'));
  
    useEffect(() => {
      audioRef.current.loop = true;
      return () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
      };
    }, []);
  
    const togglePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
            console.error('Error playing the audio:', error);
        })
      }
      setIsPlaying(!isPlaying);
    };
  
    return (
      <div className="fixed top-4 left-4">
        <button onClick={togglePlayPause} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-transform duration-300">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    );
};

export default BackgroundMusic