import React from 'react';
import HomeNav from '../HomeNav/HomeNav';

function Login() {
  return (
    <div>
      <HomeNav />
      <div className="login-header-container">
        <h1 className="home-header-text">Zaloguj się</h1>
        <div className="decoration"></div>
      </div>
      <form>
        <div className="form-container">
          <label htmlFor="email">Email</label>
          <input type="email"></input>
          <label htmlFor="password">Hasło</label>
          <input type="password"></input>
        </div>
        <div className="login-buttons">
          <button>Załóż konto</button>
          <button type="submit" id="login-button">Zaloguj się</button>
        </div>
      </form>
    </div>
  );
}

export default Login;