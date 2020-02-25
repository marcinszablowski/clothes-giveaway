import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

function Nav() {
  return (
    <div className="nav">
      <div className="nav-account">
        <ul>
          <Link to="/login" style={{
            textDecoration: "none"
          }}>
            <li>Logowanie</li>
          </Link>

          <Link to="/register" style={{
            textDecoration: "none"
          }}>
            <li className="nav-account-new">Załóż konto</li>
          </Link>

        </ul>
      </div>

      <div className="nav-menu">
        <ul>
          <Link to="/" style={{
            textDecoration: "none"
          }}>
            <li className="nav-menu-start">Start</li>
          </Link>
          <li><LinkScroll to="oCoChodzi" smooth={true}>O co chodzi?</LinkScroll></li>
          <li><LinkScroll to="oNas" smooth={true}>O nas</LinkScroll></li>
          <li><LinkScroll to="fundacja" smooth={true}>Fundacja i organizacje</LinkScroll></li>
          <li><LinkScroll to="kontakt" smooth={true}>Kontakt</LinkScroll></li>

        </ul>
      </div>
    </div>
  );
}

export default Nav;