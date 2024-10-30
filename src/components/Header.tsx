import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../assets/images';
import './Header.css';

const Header: React.FC = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navega para a página de login
  };
  return (
    <header className="header-container">
      <div className="header-left">
        <img alt="Logo VIP Leilões" className="logo" src={images.image3} />
        <nav className="nav-links">
          <a href="#quemsomos">Quem Somos</a>
          <a href="#agenda">Agenda</a>
          <a href="#comocomprar">Como Comprar</a>
          <a href="#servicos">Serviços</a>
          <a href="#querovender">Quero Vender</a>
          <a href="#faleconosco">Fale Conosco</a>
        </nav>
      </div>
      <div className="header-right">
        <button className="login-btn" onClick={handleLoginClick}>Entrar | Cadastrar</button>
      </div>
    </header>
  );
};

export default Header;
