import React from 'react';
import "./InfoBar.css"


const InfoBar = ({ name, description, address, timings }) => {
  console.log(name);
  return (
    <>
      <aside className="infobar-style">
          <h3 className="name">{name}</h3>
          <p>{address}</p>
          <p>{timings}</p>
          <p>{description}</p>
          <p>See more</p>
      </aside>
    </>
  );
};

export default InfoBar;
