import React from 'react';
import Header from '../components/Header';// Importe o Header
import Footer from '../components/Footer';// Importe o Footer
import AuctionItemsSection from '../components/AuctionItemsSection';// Importe o AuctionItemsSection
import Carousel from '../components/Carousel';// Importe o Carousel
import './Home.css';

const bannerSlides = [
  { caption: 'Descubra o melhor do leilão' },
  { caption: 'Novos itens em breve' },
  { caption: 'Seja bem-vindo ao VIP Leilões' },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header /> {/* Adicione o Header aqui */}
      <div className="parallax-banner">
        <Carousel slides={bannerSlides} />
      </div>
        <div className="home-content">
        <div className="parallax-image"></div>
        <div className="banner-content">
          <h1>Bem-vindo ao Leilão Online</h1>
          <p>Encontre os melhores itens disponíveis!</p>
        </div>
        <AuctionItemsSection /> {/* Adicione os cards aqui */}
        </div>
        <Footer /> {/* Adiciona o Footer no final da página */}
    </div>
  );
};

export default Home;

