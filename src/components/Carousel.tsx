// Carousel.tsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface CarouselProps {
  slides: { caption: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => setCurrentIndex((currentIndex + 1) % slides.length);
  const handlePrev = () =>
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundColor: 'gray' }} // Fundo cinza para cada slide
        >
          <div className="carousel-caption">{slide.caption}</div>
        </div>
      ))}
      <button className="carousel-control prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

