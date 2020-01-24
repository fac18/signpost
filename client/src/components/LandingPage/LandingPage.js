import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/signpost-logo.svg';

const LandingPage = () => {
  return (
    <>
      <Link to='/about' className="about-button">
        <button>?</button>
      </Link>
      <section className="logo">
      <Logo />
      </section>
      <h1 className="signpost">Signpost</h1>
      <p>
        A community-driven service for those experiencing or at risk of
        homelessness in Islington
      </p>
      <Link to='/iconspage'>
        <button>Get started</button>
      </Link>
    </>
  );
};

export default LandingPage;
