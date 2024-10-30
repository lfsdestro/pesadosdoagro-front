import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <div className="input-container">
            <label>Email:</label>
            <input type="email" className="login-input" placeholder="Digite seu email" />
          </div>
          <div className="input-container">
            <label>Senha:</label>
            <input type="password" className="login-input" placeholder="Digite sua senha" />
          </div>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

