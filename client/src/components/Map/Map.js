import React from 'react';
import { Link } from 'react-router-dom';
import Airtable from '../Airtable/Airtable.js';
import InfoBar from '../InfoBar/InfoBar';
import ServiceInfo from '../ServiceInformation/ServiceInformation';
import './Map.css';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_TOKEN;

// styles
const mapStyles = {
  width: '100%',
  height: '400px'
};

const Map = ({
  selectedService,
  selectedServiceData,
  selectedMarker,
  setSelectedMarker,
  selectedMarkerData,
  setSelectedMarkerData
}) => {
  // refs
  const googleMapRef = React.createRef();
  const googleMap = React.useRef(null);

  // helper functions
  const createGoogleMap = () => {
    const map = new window.google.maps.Map(googleMapRef.current, {
      zoom: 14,
      center: {
        lat: 51.5458,
        lng: -0.1043
      }
    });
    map.addListener('click', () => {
      setSelectedMarker(null);
      setSelectedMarkerData(null);
    });
    createMarkers(map);
  };

  //function to iterate over the list of services and create a marker for each
  function createMarkers(map) {
    for (var i = 0; i < selectedServiceData.length; i++) {
      const markerImage = {
        url: require(`./pin-icons/${selectedService}.svg`),
        scaledSize: new window.google.maps.Size(48, 48)
      };
      const marker = new window.google.maps.Marker({
        position: {
          lat: Number(selectedServiceData[i].Lat),
          lng: Number(selectedServiceData[i].Lng)
        },
        map: map,
        icon: markerImage,
        animation: window.google.maps.Animation.DROP,
        title: selectedServiceData[i].Name
      });

      marker.addListener('click', function(e) {
        setSelectedMarker(e.tb.target.parentNode.title);
      });
    }
  }

  React.useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      googleMap.current = createGoogleMap();
      console.log(selectedServiceData);
    });
  }, []);

  React.useEffect(() => {
    if (selectedMarker) {
      const filteredData = selectedServiceData.filter(
        record => record.Name === selectedMarker
      );
      setSelectedMarkerData(filteredData[0]);
    }
  }, [selectedMarker]);

  return (
    <>
      <Link to='icons-page'>
        <a href='/icons-page'>Back to services</a>
      </Link>
      <Link to='/help'>
        <button>?</button>
      </Link>
      <h1>Map is working </h1>
      <div className='wrapper'>
        <div id='google-map' ref={googleMapRef} style={mapStyles} />
        <div className='over-map'>
          {selectedMarkerData ? (
            <Link to='/service'>
              <InfoBar
                name={selectedMarkerData.Name}
                description={selectedMarkerData.description}
                address={selectedMarkerData.address}
                timings={selectedMarkerData.timings}
              />
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Map;
