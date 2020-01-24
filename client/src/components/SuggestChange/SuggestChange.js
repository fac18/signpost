import React from "react";
import { Link } from "react-router-dom";

// Do something with the text area inputed by the user -> send it somewhere?

const SuggestChange = () => {
  return (
    <>
      <Link to='/'>
        <button>X</button>
      </Link>
      <h1>Suggest a change</h1>
      <form>
        <textarea rows='10' cols='30'></textarea>
        <br />
        <Link to='/thank-you'>
          <button type='submit'>Post</button>
        </Link>
      </form>
    </>
  );
};

export default SuggestChange;
