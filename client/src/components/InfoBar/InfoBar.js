import React from 'react';

const InfoBar = ({ name, description, address, timings }) => {
  console.log(name);
  return (
    <>
      <fieldset>
          <legend>{name}</legend>
          <p>{description}</p>
          <p>{address}</p>
          <p>{timings}</p>
          <p>See more</p>

      </fieldset>
    </>
  );
};

export default InfoBar;
