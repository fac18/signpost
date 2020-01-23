import React from "react";
import { Link } from "react-router-dom";

const Map = props => {
  let styles = {
    width: "600",
    height: "450",
    frameborder: "0",
    style: "border:0"
  };
  return (
    <div>
      <Link to='iconspage'>
        <a href='/iconspage' m>
          Back to services
        </a>
      </Link>
      <Link to='/info'>
        <button>?</button>
      </Link>
      <h1>Map is working </h1>
      <iframe
        style={styles}
        src={`https://www.google.com/maps/embed/v1/view?zoom=14&center=51.5386,-0.1028&key=${process.env.GOOGLE_MAPS_TOKEN}`}
      ></iframe>
    </div>
  );
};

export default Map;
