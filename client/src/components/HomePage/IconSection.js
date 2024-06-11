import React, { useState, useEffect } from 'react'
import { FaPaintBrush, FaPalette, FaImages } from 'react-icons/fa'
import anime from 'animejs'


const Icon = ({ className, IconComponent }) => {
    return <IconComponent className={`${className} text-4xl`} />
  }
  
  const IconSection = () => {
    useEffect(() => {
      function randomValues() {
        anime({
          targets: '.icon',
          translateX: function() {
            return anime.random(-500, 500);
          },
          translateY: function() {
            return anime.random(-300, 300);
          },
          rotate: function() {
            return anime.random(0, 360);
          },
          scale: function() {
            return anime.random(.2, 2);
          },
          duration: 1000,
          easing: 'easeInOutQuad',
          complete: randomValues,
        });
      }
      randomValues();
    }, []);
  
    return (
      <div className="flex flex-wrap space-x-6 mt-8">
        <Icon className="brush text-purple-600 icon" IconComponent={FaPaintBrush} />
        <Icon className="palette text-green-600 icon" IconComponent={FaPalette} />
        <Icon className="image text-blue-600 icon" IconComponent={FaImages} />
        <Icon className="brush text-red-600 icon" IconComponent={FaPaintBrush} />
        <Icon className="palette text-yellow-600 icon" IconComponent={FaPalette} />
        <Icon className="image text-pink-600 icon" IconComponent={FaImages} />
      </div>
    )
  }
  
  export default IconSection