import React from 'react'
import './InfoBar.css'
import { calcOpeningClosing } from '../../utils/calcOpeningClosing'

const InfoBar = ({ name, description, address, timings }) => {
  const openingInfo = calcOpeningClosing(timings)

  return (
    <>
      <aside className="infobar-style">
        <h3 className="name">{name}</h3>
        <p>{description}</p>
        <p>{address}</p>
        <p>{openingInfo}</p>
        <p>See more</p>
      </aside>
    </>
  )
}

export default InfoBar
