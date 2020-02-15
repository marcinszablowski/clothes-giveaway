import React from 'react';

function HomeHelp() {

  function getData() {
    const url = "http://localhost:3005/";
  }

  return (
    <div>
      <div className="home-help-header">
        <p className="home-header-text">Komu pomagamy?</p>
        <div className="decoration"></div>
      </div>
      <div className="home-help-buttons">
        <button className="help-btn">Fundacjom</button>
        <button className="help-btn">Organizacjom pozarządowym</button>
        <button className="help-btn">Lokalnym zbiórkom</button>
      </div>
      <p className="home-help-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
    </div>
  )
}

export default HomeHelp;