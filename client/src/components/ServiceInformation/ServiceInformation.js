import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Close } from '../../assets/close.svg'
import { ReactComponent as Add } from '../../assets/add.svg'

import './ServiceInformation.css'

const ServiceInfo = ({ selectedMarkerData }) => {
  console.log(selectedMarkerData)
  return (
    <>
      <section className="navbar">
        <Link to="/icons-page">
          <button className="close-button">
            <Close />
          </button>
        </Link>
        <Link to="/add-service">
          <button className="add-button">
            <Add />
          </button>
        </Link>
      </section>
      <fieldset className="service-info">
        <legend>{selectedMarkerData.fields.Name}</legend>
        <a href={'tel:' + selectedMarkerData.fields.Phone}>
          {selectedMarkerData.fields.Phone}
        </a>
        <br />
        <a href={'mailto:' + selectedMarkerData.fields.Email}>
          {selectedMarkerData.fields.Email}
        </a>
        <br />
        <a href={selectedMarkerData.fields.Website} target="_blank">
          {selectedMarkerData.fields.Website}
        </a>
        <p>{selectedMarkerData.fields.Opening}</p>
        <p>{selectedMarkerData.fields.Description}</p>
        <p>{selectedMarkerData.fields.Address}</p>
      </fieldset>
      <Link to="/suggest-change">
        <button className="edit-button">Suggest edit</button>
      </Link>
    </>
  )
}

export default ServiceInfo
