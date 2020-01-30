import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../Buttons/buttons.js'
import { Add } from '../Buttons/buttons.js'

import './ServiceInformation.css'

const ServiceInfo = ({ selectedMarkerData }) => {
  console.log(selectedMarkerData)
  return (
    <>
      <Link to="/icons-page">
        <Close />
      </Link>
      <Link to="/add-service">
        <Add />
      </Link>
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
