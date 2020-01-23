import React from "react";
import { Link } from "react-router-dom";

// Do something with the text area inputed by the user -> send it somewhere?

const Info = () => {
  return (
    <>
      <Link to='/map'>
        <button>X</button>
      </Link>
      <h1>NEED HELP?</h1>
    </>
  );
};

export default Info;
