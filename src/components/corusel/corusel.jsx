import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>‹</button>
      <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
      <button className="carousel-button next" onClick={goToNext}>›</button>
    </div>
  );
};

export default Carousel;
