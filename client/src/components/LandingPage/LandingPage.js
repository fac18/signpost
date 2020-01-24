import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Link to='/about'>
        <button>?</button>
      </Link>
      <h1>Signpost</h1>
      <p>
        A community-driven service for those experiencing or at risk of
        homelessness in Islington
      </p>
      <Link to='/icons-page'>
        <button>Get started</button>
      </Link>
    </>
  );
};

export default LandingPage;
