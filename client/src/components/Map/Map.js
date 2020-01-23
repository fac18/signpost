import React from "react";
import { Link } from "react-router-dom";
import Airtable from "../Airtable/Airtable.js";
import InfoBar from "../InfoBar/InfoBar";

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_TOKEN;

const myLocation = {
  lat: 51.5458,
  lng: -0.1043
};
// styles
const mapStyles = {
  width: "100%",
  height: "400px"
};

//fake airtable data
const data = [
  {
    Name: "The Margins Project",
    Lat: "51.5449449",
    Lng: "-0.1049151",
    description: "Enter description here",
    address: "123 here",
    timings: "12:00"
  },
  {
    Name: "Other Project",
    Lat: "51.555667",
    Lng: "-0.0991213",
    description: "szfasf",
    address: "asdgasdg",
    timings: "12"
  },
  {
    Name: "And Another Project",
    Lat: "51.543596",
    Lng: "-0.091032",
    description: "asdgdsg",
    address: "146",
    timings: "sdgasd"
  }
];

//fake state of current service
const service = "address";

const Map = ({ airTableData }) => {
  //fake state: selected marker
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [selectedMarkerData, setSelectedMarkerData] = React.useState(null);

  // refs
  const googleMapRef = React.createRef();
  const googleMap = React.useRef(null);
  const marker = React.useRef(null);

  // helper functions
  const createGoogleMap = () => {
    const map = new window.google.maps.Map(googleMapRef.current, {
      zoom: 14,
      center: {
        lat: myLocation.lat,
        lng: myLocation.lng
      }
    });
    map.addListener("click", () => {
      setSelectedMarker(null);
      setSelectedMarkerData(null);
    });
    createMarkers(map);
  };

  function createMarkers(map) {
    //change 'data' in here when we have the real data plumbing
    for (var i = 0; i < data.length; i++) {
      const marker = new window.google.maps.Marker({
        position: {
          lat: Number(data[i].Lat),
          lng: Number(data[i].Lng)
        },
        map: map,
        //change service when we have the real data plumbing
        icon: `./${service}.png`,
        animation: window.google.maps.Animation.DROP,
        title: data[i].Name
      });

      marker.addListener("click", function(e) {
        // console.log(e.tb.target.parentNode.title);
        setSelectedMarker(e.tb.target.parentNode.title);
      });
    }
  }

  React.useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
    });
  }, []);

  React.useEffect(() => {
    if (selectedMarker) {
      const filteredData = data.filter(
        record => record.Name === selectedMarker
      );
      setSelectedMarkerData(filteredData[0]);
    }
  }, [selectedMarker]);

  return (
    <div>
      <Airtable />
      <Link to='iconspage'>
        <a href='/iconspage'>Back to services</a>
      </Link>
      <Link to='/info'>
        <button>?</button>
      </Link>
      <h1>Map is working </h1>
      <div id='google-map' ref={googleMapRef} style={mapStyles} />
      {selectedMarkerData ? (
        <InfoBar
          name={selectedMarkerData.Name}
          description={selectedMarkerData.description}
          address={selectedMarkerData.address}
          timings={selectedMarkerData.timings}
        />
      ) : null}
    </div>
  );
};

export default Map;
