import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/signpost-logo.svg'
import { About } from '../Buttons/buttons.js'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <>
      <Link to="/about">
        <About />
      </Link>
      <Logo className="logo" />
      <h1 className="signpost">Signpost</h1>
      <p className="tagline">
        A community-driven service for those experiencing or at risk of
        homelessness in Islington
      </p>
      <Link to="/icons-page">
        <button className="start-button">Get started</button>
      </Link>
    </>
  )
}

export default LandingPage
