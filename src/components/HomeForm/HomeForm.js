import React from 'react';

function HomeForm() {
  return (
    <div className="home-form-container" id="kontakt">
      <div className="home-form-left"></div>
      <div className="home-form-right">
        <p className="home-header-text">Skontaktuj się z nami</p>
        <div className="decoration"></div>
        <form className="home-form">
          <div className="home-form-names">
            <div className="home-form-item">
              <label for="name">Wpisz swoje imię</label>
              <br></br>
              <input id="name" type="text" placeholder="Krzysztof"></input>
            </div>
            <div className="home-form-item">
              <label for="mail">Wpisz swój e-mail</label>
              <br></br>
              <input id="mail" type="email" placeholder="krzysztof@email.pl"></input>
            </div>
          </div>

          <div className="home-form-textarea">
            <label for="text">Twoja wiadomość</label>
            <textarea id="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."></textarea>
          </div>
          <button className="form-btn">Wyślij</button>
        </form>
      </div>
    </div>
  )
}

export default HomeForm;