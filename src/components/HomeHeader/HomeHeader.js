import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <div className="home-container">
      <div className="home-left"></div>
      <div className="home-right">
        <p className="home-header-text">Zacznij pomagać!</p>
        <p className="home-header-text">Oddaj niechciane rzeczy w zaufane ręce</p>
        <div className="header-decoration"></div>
        <div className="header-buttons">

          <Link to="/login" style={{
            textDecoration: "none"
          }}>
            <button>Oddaj rzeczy</button>
          </Link>

          <Link to="/login" style={{
            textDecoration: "none"
          }}>
            <button>Zorganizuj zbiórkę</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default HomeHeader;