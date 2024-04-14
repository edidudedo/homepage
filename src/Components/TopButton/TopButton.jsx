import React from 'react';
import './TopButton.css'; // Make sure to create this CSS file

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  };

  return (
    <button onClick={scrollToTop} className="scroll-to-top">
      ↑
    </button>
  );
};

export default ScrollToTopButton;
