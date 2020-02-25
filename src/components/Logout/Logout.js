import React from 'react';
import HomeNav from '../HomeNav/HomeNav';

function Logout() {
  return (
    <div>
      <HomeNav />
      <div className="login-header-container">
        <h1 className="home-header-text">Wylogowanie nastąpiło pomyślnie!</h1>
        <div className="decoration"></div>
      </div>

      <div className="login-buttons">
        <button type="submit" id="login-button">Strona główna</button>
      </div>
    </div >
  );
}

export default Logout;