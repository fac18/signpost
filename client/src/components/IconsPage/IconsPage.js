import React from "react";
import { ReactComponent as Add } from "../../assets/add.svg";
import { Link } from "react-router-dom";

import "./IconsPage.css";

const categories = [
  "Shelter",
  "Shower",
  "Medical",
  "Food",
  "Clothing",
  "Learning",
  "Women",
  "Wellbeing",
  "Advice",
  "Children",
  "Animals",
  "All"
];

const Icons = ({ selectedService, setSelectedService }) => {
  return (
    <>
      <Link to="/add-service">
        <button className="add-button">
          <Add />
        </button>
      </Link>
      <section>
        <h1 className="headline"> Which service do you need? </h1>
        <article className="icon-panel">
          {categories.map(category => (
            <Link key={category} to="/map">
              <a
                className="icon-panel__button"
                value={category}
                onClick={() => setSelectedService(category)}
              >
                <figure>
                  <img
                    className="icon-panel__button__image"
                    src={require(`./icons/${category}.svg`)}
                    alt={category}
                  />
                  <figcaption className="icon-text">{category}</figcaption>
                </figure>
              </a>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default Icons;
