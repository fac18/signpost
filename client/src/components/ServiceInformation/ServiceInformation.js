import React from "react";
import { Link } from "react-router-dom";

const ServiceInfo = ({ selectedMarkerData }) => {
  console.log(selectedMarkerData);
  return (
    <>
      <aside>
        <a>
          <h3>{selectedMarkerData.Name}</h3>
          <p>{selectedMarkerData.description}</p>
          <p>{selectedMarkerData.address}</p>
          <p>{selectedMarkerData.timings}</p>
        </a>
      </aside>
      <Link to='/suggest-change'>
        <button>Suggest edit</button>
      </Link>
    </>
  );
};

export default ServiceInfo;
