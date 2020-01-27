import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";

import "./ServiceInformation.css";


const ServiceInfo = ({ selectedMarkerData }) => {
  console.log(selectedMarkerData);
  return (
    <>
      <Link to='/map'>
      <button className="close-button">
      <Close />
      </button>
      </Link>
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
