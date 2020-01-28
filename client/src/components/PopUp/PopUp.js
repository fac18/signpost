import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";

const PopUp = () => {
  return (
    <div>
      <Link to='/map'>
        <button className='close-button'>
          <Close />
        </button>
      </Link>
      <h2>Not sure what to do?</h2>
      <p>Click the question mark to learn how to use the map.</p>
    </div>
  );
};

export default PopUp;
