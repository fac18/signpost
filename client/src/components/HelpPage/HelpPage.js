import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";
// import { ReactComponent as ZoomIn } from "../../assets/zoom-in.svg";
// import { ReactComponent as ZoomOut } from "../../assets/zoom-out.svg";
// import { ReactComponent as MapPin } from "../../assets/map-pin.svg";
// import { ReactComponent as Search } from "../../assets/search.svg";
// import { ReactComponent as SeeMore} from "../../assets/see-more.svg";
// import { ReactComponent as YouAreHere } from "../../assets/you-are-here.svg";
import "./HelpPage.css"

const instructions = [
  "zoom-in",
  "zoom-out",
  "map-pin",
  "search",
  "see-more",
  "you-are-here"
];

// Need to add icons to this page
// Need to work out how to make the endpoint go back to map population of specific category
const Help = () => {
  const [instruction, setInstruction] = React.useState(null);
  return (
    <>
    <Link to='/map'>
      <button className="close-button">
      <Close />
      </button>
    </Link>
    <section>
      <h1 className="headline"> Need help? </h1>
      <article className="help-panel">
        {instructions.map(instruction => (
          <a
          className="help-panel-icon"
            value={instruction}
            onClick={() => setInstruction({ instruction })}>
            <figure>
            <img
              src={require(`../../assets/${instruction}.svg`)}
              alt={instruction}/>
              <figcaption className="icon-text">{instruction}</figcaption>
              </figure>
          </a>
        ))}
      </article>
    </section>
    </>
  );
};

export default Help;


// <ZoomIn /> <p>Zoom in</p>
// <ZoomOut /><p>Zoom out</p>
// <MapPin /><p>Click pin to see more information</p>
// <Search /><p>Search location by postcode, area, street, etc</p>
// <SeeMore /><p>Read more about this service</p>
// <YouAreHere /><p>You are here</p>
