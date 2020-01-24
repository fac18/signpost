import React from "react";
import { Link } from "react-router-dom";

// Need to add icons to this page

const ThankYou = () => {
  return (
    <>
      <h3>Thank you for your contribution!</h3>
      <p>Our team will review your information and update the service soon.</p>
      <Link to='/iconspage'>
        <button>Next</button>
      </Link>
    </>
  );
};

export default ThankYou;
