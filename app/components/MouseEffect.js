import React, { useState, useEffect } from 'react';

const MouseEffect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define the media query
    const mediaQuery = window.matchMedia('(max-width: 768px)');
  
    // Initial check
    setIsMobile(mediaQuery.matches);
  
    // Add a listener for media query changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
  
    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleMove = (event) => {
    if (isMobile) {
      const { clientX, clientY } = event.touches[0]; // Use the first touch
      const blob = document.getElementById("blob");
      
      // Smoothly transition the blob's position changes
      blob.style.transition = "left 2.5s linear, top 2.5s linear";
      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY}px`;
    }
    if (!isMobile) {
      const { clientX, clientY } = event; // Use the first touch
      const blob = document.getElementById("blob");
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Smoothly transition the blob's position changes
      blob.style.transition = "left 0.5s linear, top 0.5s linear";
      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY}px`;
    }
  };

  useEffect(() => {
    // Attach event listener for pointer movement or touchmove
    if (!isMobile) {
      window.addEventListener("pointermove", handleMove);
    } else {
      window.addEventListener("touchmove", handleMove);
    }

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [isMobile]);

  return (
    <div id="container">
      <div id="blob"></div>
      <div id="blur"></div>
    </div>
  );
};

export default MouseEffect;