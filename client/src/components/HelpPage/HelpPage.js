import React from "react";
import { Link } from "react-router-dom";

// Need to add icons to this page

const Help = () => {
  return (
    <>
      <Link to='/map'>
        <button>X</button>
      </Link>
      <h1>NEED HELP?</h1>
      <p>Zoom in</p>
      <p>Zoom out</p>
      <p>Click pin to see more information</p>
      <p>Search location by postcode, area, street, etc</p>
      <p>Read more about this service</p>
      <p>You are here</p>
    </>
  );
};

export default Help;
