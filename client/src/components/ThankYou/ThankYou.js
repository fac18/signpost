import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

// Need to add icons to this page

const ThankYou = () => {
  return (
    <>
      <h2>Thank you for your contribution!</h2>
      <img className='heart' src={require(`./Heart.svg`)} alt={"Heart shape"} />
      <p>Our team will review your information and update the service soon.</p>
      <Link to='/icons-page'>
        <button className='next-button'>Next</button>
      </Link>
    </>
  );
};

export default ThankYou;
