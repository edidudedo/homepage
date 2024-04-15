import React from 'react';
import './TopButton.css'; 
import Home from '../../Assets/home.png'

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <>
      <button onClick={scrollToTop} className="scroll-to-top">
        <img src={Home} alt="Home icon" />
      </button>
    </>
    
  );
};

export default ScrollToTopButton;
