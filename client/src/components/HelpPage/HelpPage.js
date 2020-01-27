import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";

// Need to add icons to this page
// Need to work out how to make the endpoint go back to map population of specific category
const Help = () => {
  return (
    <>
    <Link to='/map'>
      <button className="close-button">
      <Close />
      </button>
    </Link>
    <fieldset className="help-text">
      <legend>NEED HELP?</legend>
      <p>Zoom in</p>
      <p>Zoom out</p>
      <p>Click pin to see more information</p>
      <p>Search location by postcode, area, street, etc</p>
      <p>Read more about this service</p>
      <p>You are here</p>
      </fieldset>
    </>
  );
};

export default Help;
