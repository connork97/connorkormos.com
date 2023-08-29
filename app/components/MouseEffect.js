import React, { useEffect } from 'react';

import useMediaQuery from '../utils/useMediaQuery';

const MouseEffect = () => {

  const isMobile = useMediaQuery('(max-width: 768px)')
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