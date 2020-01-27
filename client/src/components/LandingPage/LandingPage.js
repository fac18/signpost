import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/signpost-logo.svg';
import { ReactComponent as About } from '../../assets/about.svg';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <>
      <Link to='/about'>
        <button className='about-button'>
          <About />
        </button>
      </Link>
      <section className='logo'>
        <Logo />
      </section>
      <h1 className='signpost'>Signpost</h1>
      <p className='subtext'>
        A community-driven service for those experiencing or at risk of
        homelessness in Islington
      </p>
      <Link to='/icons-page'>
        <button className='start-button'>Get started</button>
      </Link>
    </>
  );
};

export default LandingPage;
