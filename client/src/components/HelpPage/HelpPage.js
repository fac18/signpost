import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as ZoomIn } from "../../assets/zoom-in.svg";
import { ReactComponent as ZoomOut } from "../../assets/zoom-out.svg";
import { ReactComponent as MapPin } from "../../assets/map-pin.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as SeeMore} from "../../assets/see-more.svg";
import { ReactComponent as YouAreHere } from "../../assets/you-are-here.svg";
import "./HelpPage.css"

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
      <legend className="help-title">Need help?</legend>
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
