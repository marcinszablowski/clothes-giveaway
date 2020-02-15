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
          <li className="nav-menu-start">Start</li>
          <li><LinkScroll to="oCoChodzi" smooth={true}>O co chodzi?</LinkScroll></li>
          <li><LinkScroll to="oNas" smooth={true}>O nas</LinkScroll></li>
          <li>Fundacja i organizacje</li>
          <li>Kontakt</li>

        </ul>
      </div>
    </div>
  );
}

export default Nav;