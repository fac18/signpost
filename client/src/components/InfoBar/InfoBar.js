import React from 'react'
import './InfoBar.css'
import { calcOpeningClosing } from '../../utils/calcOpeningClosing'

const InfoBar = ({ name, description, address, timings }) => {
  const openingInfo = calcOpeningClosing(timings)

  return (
    <>
      <aside>
        <h3 className="service-name">{name}</h3>
        <p className="service-text">{description}</p>
        <p className="service-text">{address}</p>
        <p className="service-text">{openingInfo}</p>
        <p className="service-text">See more</p>
      </aside>
    </>
  )
}

export default InfoBar
