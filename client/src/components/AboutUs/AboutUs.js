import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../Buttons/buttons.js'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <Link to="/">
        <Close />
      </Link>
      <fieldset className="about-text">
        <legend>Who are we?</legend>
        <p>
          Signpost is here to empower people who are experiencing homelessness
          in Islington.
        </p>
        <h2>COMMUNITY-DRIVEN?</h2>
        <p>
          We do our best to keep our information up to date. If you know of a
          service we've missed, or there is a problem with a service listed,
          please let us know. With more of us building the knowledge base, more
          support can be provided.
        </p>
        <h2>WORRIED ABOUT DATA?</h2>
        <p>
          We don't, and never will, collect your data or track your location.
        </p>
        <h2>NOT IN ISLINGTON?</h2>
        <p>
          At the moment Signpost only operates in Islington. We're looking to
          branch out into other boroughs. If you think your area should be
          prioritised, please get in touch to tell us why:
          contributors@signpost.com
        </p>
      </fieldset>
    </>
  )
}
export default AboutUs
