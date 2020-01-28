import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";
import "./HelpPage.css";


const instructions = [
  "Zoom in",
  "Zoom out",
  "Location of service",
  "Search",
  "See more information",
  "You are here"
];

// Close needs to return to populated map
const Help = () => {
  const [instruction, setInstruction] = React.useState(null);
  return (
    <>
      <Link to="/map">
        <button className="close-button">
          <Close />
        </button>
      </Link>
      <section>
        <h1> Need help? </h1>
        <article className="help-panel">
          {instructions.map(instruction => (
            <a
              className="help-panel__icon"
              value={instruction}
              onClick={() => setInstruction({ instruction })}
            >
              <figure>
                <img
                  src={require(`../../assets/${instruction}.svg`)}
                  alt={instruction}
                />
                <figcaption className="help-text">{instruction}</figcaption>
              </figure>
            </a>
          ))}
        </article>
      </section>
    </>
  );
};

export default Help;
