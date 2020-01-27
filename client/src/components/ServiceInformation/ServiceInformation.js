import React from 'react';
import { Link } from 'react-router-dom';

const ServiceInfo = ({ selectedMarkerData }) => {
  console.log(selectedMarkerData);
  return (
    <>
      <aside>
        <a>
          <h3>{selectedMarkerData.Name}</h3>
          <p>{selectedMarkerData.Description}</p>
          <p>{selectedMarkerData.Address}</p>
          <p>{selectedMarkerData.Opening}</p>
        </a>
      </aside>
      <Link to='/suggest-change'>
        <button>Suggest edit</button>
      </Link>
    </>
  );
};

export default ServiceInfo;
