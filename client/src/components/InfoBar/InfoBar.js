import React from 'react'
import './InfoBar.css'
import { calcOpeningClosing } from '../../utils/calcOpeningClosing'

const InfoBar = ({ name, description, address, timings }) => {
  const openingInfo = calcOpeningClosing(timings)
  return (
    <>
      <article className="infobar-style">
        <h3 className="name">{name}</h3>
        <pre>{address}</pre>
        <pre>{openingInfo}</pre>
        <pre>{description}</pre>
        <pre>See more > </pre>
      </article>
    </>
  )
}

export default InfoBar
