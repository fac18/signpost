import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";
import "./AddNewService.css";


// Needs adding handle submit event onto the form
// Send the data access from the form -> somewhere?


const AddNewService = props => {
  return (
    <>
    <Link to='/icons-page'>
      <button className="close-button">
      <Close />
      </button>
    </Link>
      <fieldset className="add-form">
      <legend className="title">Add a new service</legend>
      <form className="form__style" method="POST">
        <label htmlFor="title-input">
          <input id="title-input" className="form__input" placeholder="Title" />
        </label>
        <br />
        <label htmlFor="location-input">
          <br />
          <input
            id="location-input"
            className="form__input"
            placeholder="Location"
          />
        </label>
        <br />
        <label htmlFor="times-input">
          <br />
          <input
            id="times-input"
            className="form__input"
            placeholder="Opening times"
          />
        </label>
        <br />
        <label htmlFor="service-input">
          <br />
          <select aria-label="select services dropdown" id="services" className="dropdown" required>
            <option value="" disabled selected>
              Select a service
            </option>
            <option value="advice">Advice</option>
            <option value="food">Animals</option>
            <option value="food">Children</option>
            <option value="food">Clothing</option>
            <option value="food">Food</option>
            <option value="food">Learning</option>
            <option value="food">Medical</option>
            <option value="shower">Shower</option>
            <option value="shelter">Shelter</option>
            <option value="food">Wellbeing</option>
            <option value="food">Women</option>
          </select>
        </label>
        <br />
        <label htmlFor="contact-name-input">
          <br />
          <input
            id="contact-name-input"
            className="form__input"
            placeholder="Contact name"
          />
        </label>
        <br />
        <label htmlFor="contact-details-input">
          <br />
          <input
            id="contact-details-input"
            className="form__input"
            placeholder="Contact details"
          />
        </label>
        <br />
      </form>
      <Link to="/thank-you">
        <button type="submit" className="submit-button">Add</button>
      </Link>
      </fieldset>
    </>
  );
};

export default AddNewService;
