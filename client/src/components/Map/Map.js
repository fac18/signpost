import React from "react";
import { Link } from "react-router-dom";

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_TOKEN;
// const GOOGLE_MAP_API_KEY = "AIzaSyAcnwNgW-XQp7AhqI2kUM_MPhlVGFe4t5E";

const myLocation = {
  lat: 51.5458,
  lng: -0.1043
};
// styles
const mapStyles = {
  width: "100%",
  height: "400px"
};

const Map = () => {
  // refs
  const googleMapRef = React.createRef();
  const googleMap = React.useRef(null);
  const marker = React.useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 14,
      center: {
        lat: myLocation.lat,
        lng: myLocation.lng
      }
    });

  const createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: myLocation.lat, lng: myLocation.lng },
      map: googleMap.current
    });

  React.useEffect(() => {
    const googleMapScript = document.createElement("script");
    console.log("HELLO!", process.env.REACT_APP_GOOGLE_MAPS_TOKEN);
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  }, []);

  return (
    <div>
      <Link to="iconspage">
        <a href="/iconspage" m>
          Back to services
        </a>
      </Link>
      <Link to="/info">
        <button>?</button>
      </Link>
      <h1>Map is working </h1>
      <div id="google-map" ref={googleMapRef} style={mapStyles} />
    </div>
  );
};

export default Map;
