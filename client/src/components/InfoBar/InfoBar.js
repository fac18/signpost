import React from 'react';
import "./InfoBar.css"


const InfoBar = ({ name, description, address, timings }) => {
  console.log(name);
  return (
    <>
      <aside>
          <h3 className="service-name">{name}</h3>
          <p className="service-text">{address}</p>
          <p className="service-text">{timings}</p>
          <p className="service-text">{description}</p>
          <p className="service-text">See more</p>
      </aside>
    </>
  );
};

export default InfoBar;
