import React from 'react';
import { images } from '../assets/images';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="maintenance">
          <img 
            src={images.image1}
            alt="Engrenagem girando" 
            className="rotating-gear"
          />
          <img 
            src={images.image1} 
            alt="Engrenagem girando" 
            className="rotating-gear2"
          />
        </div>
        <div className="home-content">
          <h1>Em Construção...</h1>
        </div>
    </div>
  );
};

export default Home;

