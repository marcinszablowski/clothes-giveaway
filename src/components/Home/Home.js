import React from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeNav from '../HomeNav/HomeNav';
import HomeThreeColumns from '../HomeThreeColumns/HomeThreeColumns';
import HomeSteps from '../HomeSteps/HomeSteps';
import HomeAboutUs from '../HomeAboutUs/HomeAboutUs';
import HomeHelp from '../HomeHelp/HomeHelp';

function Home() {
  return (
    <div className="container">
      <HomeNav />
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSteps />
      <HomeAboutUs />
      <HomeHelp />
    </div>
  );
}

export default Home;