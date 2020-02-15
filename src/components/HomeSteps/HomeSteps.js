import React from 'react';
import { Link } from 'react-router-dom';

function HomeSteps() {
  return (
    <div className="steps-container" id="oCoChodzi">
      <p className="steps-title">Wystarczą 4 proste kroki</p>
      <div className="decoration steps-decoration"></div>
      <div className="steps-items-container">
        <div className="steps-item">
          <div className="steps-img-shirt"></div>
          <p className="steps-subtitle">Wybierz rzeczy</p>
          <div className="steps-divider"></div>
          <p className="steps-text">ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="steps-item">
          <div className="steps-img-bag"></div>
          <p className="steps-subtitle">Spakuj je</p>
          <div className="steps-divider"></div>
          <p className="steps-text">skorzystaj z worków na śmieci</p>
        </div>
        <div className="steps-item">
          <div className="steps-img-glass"></div>
          <p className="steps-subtitle">Zdecyduj komu chcesz pomóc</p>
          <div className="steps-divider"></div>
          <p className="steps-text">wybierz zaufane miejsce</p>
        </div>
        <div className="steps-item">
          <div className="steps-img-recycle"></div>
          <p className="steps-subtitle">Zamów kuriera</p>
          <div className="steps-divider"></div>
          <p className="steps-text">kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <Link to="/login">
        <button className="steps-btn">oddaj rzeczy</button>
      </Link>
    </div>
  )
}

export default HomeSteps;