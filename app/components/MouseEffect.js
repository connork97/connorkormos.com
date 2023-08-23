import React, { useEffect } from 'react';

const MouseEffect = () => {
    const moveBlob = (event) => {
        const { clientX, clientY } = event;
        const blob = document.getElementById("blob");
    
        const scrollY = window.scrollY || window.pageYOffset;
        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY + scrollY}px`; // Adjust for scroll position
      };
    
      useEffect(() => {
        // Attach event listener for pointer movement
        window.addEventListener("pointermove", moveBlob);
    
        // Clean up event listener when the component unmounts
        return () => {
          window.removeEventListener("pointermove", moveBlob);
        };
      }, []);
  return (
    <div id="container">
      <div id="blob"></div>
      <div id="blur"></div>
    </div>
  );
};

export default MouseEffect;