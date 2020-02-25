import React, { useState, Component } from 'react';

class HomeHelp extends Component {

  state = {
    data: [],
    page: 1,
    name: "",
    card: ""
  }

  changeCard = e => {
    this.setState({ card: e.target.name });
    this.setState({
      page: 1
    }, () => {
      this.getData()
    });

  }

  changePage = e => {
    this.setState({
      page: e.target.getAttribute("data-page")
    }, () => {
      this.getData();
    });
  }

  getData = e => {
    const url = "http://localhost:3000/";

    if (this.state.card === "") {
      return
    }

    fetch(`${url}${this.state.card}?_page=${this.state.page}&_limit=3`)
      .then(res => res.json())
      .then(data => { this.setState({ data: data }) })
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }



  render() {

    let list = this.state.data;
    const showList = list.map((item, index) => {
      return (
        <div className="home-help-item" key={index}>
          <div className="home-help-main">
            <p className="home-help-name">{item.name}</p>
            <p className="home-help-goal">{item.goal}</p>
          </div>
          <div className="home-help-items">
            <p>{item.items}</p>
          </div>
        </div>
      )
    });

    return (
      <div id="fundacja">
        <div className="home-help-header">
          <p className="home-header-text">Komu pomagamy?</p>
          <div className="decoration"></div>
        </div>
        <div className="home-help-buttons">
          <button className="help-btn" onClick={this.changeCard} name="foundations" page="1">Fundacjom</button>

          <button className="help-btn" onClick={this.changeCard} name="organizations" page="1">Organizacjom pozarządowym</button>

          <button className="help-btn" onClick={this.changeCard} name="collections" page="1">Lokalnym zbiórkom</button>
        </div>
        <p className="home-help-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

        <div className="home-help-list">
          {showList}
        </div>

        <div className="home-help-pagiante">
          <div className="home-help-page" data-page={1} onClick={this.changePage}>1</div>
          <div className="home-help-page" data-page={2} onClick={this.changePage}>2</div>
          <div className="home-help-page" data-page={3} onClick={this.changePage}>3</div>
        </div>
      </div>
    )
  }
}

export default HomeHelp;