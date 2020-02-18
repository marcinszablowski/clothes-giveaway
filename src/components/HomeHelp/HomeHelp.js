import React, { useState } from 'react';

function HomeHelp() {

  const [state, setState] = useState([]);
  const [page, setPage] = useState(1);

  function getData(e) {
    const url = "http://localhost:3005/";

    console.log(e.target.name)
    // console.log(e.target);

    fetch(url + e.target.name + `?_page=${page}&_limit=3`)
      .then(res => res.json())
      .then(data => { setState(data) })
  }

  function getPage(e) {
    // setPage(e.target.page);
    console.log(e.target.id);
    console.log(e.target.smile);
    console.log(e.target);

  }

  console.log(state);


  let list = state;
  const showList = list.map((item, index) => {
    return (
      <div className="home-help-item" id={index}>
        <div className="home-help-main">
          <p className="home-help-name">{item.name}</p>
          <p className="home-help-goal">{item.goal}</p>
        </div>
        <div className="home-help-items">
          <p>{item.items}</p>
        </div>
      </div>
    )
  })

  return (
    <div id="fundacja">
      <div className="home-help-header">
        <p className="home-header-text">Komu pomagamy?</p>
        <div className="decoration"></div>
      </div>
      <div className="home-help-buttons">
        <button className="help-btn" onClick={getData} name="foundations">Fundacjom</button>

        <button className="help-btn" onClick={getData} name="organizations">Organizacjom pozarządowym</button>

        <button className="help-btn" onClick={getData} name="collections">Lokalnym zbiórkom</button>
      </div>
      <p className="home-help-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

      <div className="home-help-list">
        {showList}
      </div>

      <div className="home-help-pagiante">
        <div className="home-help-page" onClick={getPage} id="1">1</div>
        <div className="home-help-page" onClick={getPage} id="2">2</div>
        <div className="home-help-page" onClick={getPage} id="3">3</div>
      </div>
    </div>
  )
}

export default HomeHelp;