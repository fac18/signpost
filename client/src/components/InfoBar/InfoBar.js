import React from 'react'
import './InfoBar.css'

const InfoBar = ({ name, description, address, timings }) => {
  console.log(name)
  return (
    <>
      <article className="infobar-style">
        <h3 className="name">{name}</h3>
        <pre>{address}</pre>
        <pre>{timings}</pre>
        <pre>{description}</pre>
        <pre>See more > </pre>
      </article>
    </>
  )
}

export default InfoBar
