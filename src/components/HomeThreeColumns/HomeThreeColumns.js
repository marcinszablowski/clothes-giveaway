import React from 'react';

function HomeThreeColumns() {
  return (
    <div className="home-column-container">
      <div className="column">
        <p className="column-number">10</p>
        <p className="column-subtitle">oddanych worków</p>
        <p className="column-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ducimus corrupti nobis quas quibusdam voluptas!</p>
      </div>
      <div className="column">
        <p className="column-number">5</p>
        <p className="column-subtitle">wspartych organizacji</p>
        <p className="column-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ducimus corrupti nobis quas quibusdam voluptas!</p>
      </div>
      <div className="column">
        <p className="column-number">7</p>
        <p className="column-subtitle">zorganizowanych zbiórek</p>
        <p className="column-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ducimus corrupti nobis quas quibusdam voluptas!</p>
      </div>
    </div>
  )
}

export default HomeThreeColumns;