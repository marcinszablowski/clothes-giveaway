import React from 'react';
import HomeNav from '../HomeNav/HomeNav';

function Register() {
  return (
    <div>
      <HomeNav />
      <div className="login-header-container">
        <h1 className="home-header-text">Załóż konto</h1>
        <div className="decoration"></div>
      </div>
      <form>
        <div className="form-container">
          <label htmlFor="email">Email</label>
          <input type="email"></input>
          <label htmlFor="password">Hasło</label>
          <input type="password"></input>
          <label htmlFor="password">Powtórz hasło</label>
          <input type="password"></input>
        </div>
        <div className="login-buttons">
          <button>Zaloguj się</button>
          <button type="submit" id="login-button">Załóż konto</button>
        </div>
      </form>
    </div>
  );
}

export default Register;