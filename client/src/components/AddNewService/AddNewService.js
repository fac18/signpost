import React from "react";
import { Link } from "react-router-dom";

const AddNewService = props => {
  const [titleInput, setTitleInput] = React.useState("");
  const [locationInput, setLocationInput] = React.useState("");
  const [timesInput, setTimesInput] = React.useState("");
  const [serviceInput, setServiceInput] = React.useState("select-a-service");
  const [contactNameInput, setContactNameInput] = React.useState("");
  const [contactDetailsInput, setContactDetailsInput] = React.useState("");

  const handleSubmit = event => {
    //write call to backend to insert data (from state)
    event.preventDefault();
  };

  return (
    <>
      <Link to="/icons-page">
        <button>X</button>
      </Link>
      <h1>Add a new service</h1>
      <form className="form__style" onSubmit={handleSubmit}>
        <label htmlFor="title-input">
          <input
            id="title-input"
            className="form__input"
            placeholder="Title"
            value={titleInput}
            onChange={event => setTitleInput(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="location-input">
          <br />
          <input
            id="location-input"
            className="form__input"
            placeholder="Location"
            value={locationInput}
            onChange={event => setLocationInput(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="times-input">
          <br />
          <input
            id="times-input"
            className="form__input"
            placeholder="Opening times"
            value={timesInput}
            onChange={event => setTimesInput(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="service-input">
          <br />
          <select
            aria-label="select services dropdown"
            id="services"
            required
            value={serviceInput}
            onChange={event => setServiceInput(event.target.value)}
          >
            <option value="select-a-service" disabled>
              Select a service
            </option>
            <option value="shower">shower</option>
            <option value="shelter">shelter</option>
            <option value="advice">advice</option>
            <option value="food">food</option>
          </select>
        </label>
        <br />
        <label htmlFor="contact-name-input">
          <br />
          <input
            id="contact-name-input"
            className="form__input"
            placeholder="Contact name"
            value={contactNameInput}
            onChange={event => setContactNameInput(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="contact-details-input">
          <br />
          <input
            id="contact-details-input"
            className="form__input"
            placeholder="Contact details"
            value={contactDetailsInput}
            onChange={event => setContactDetailsInput(event.target.value)}
          />
        </label>
        <br />
      </form>
      <Link to="/thank-you">
        <button type="submit">Add</button>
      </Link>
    </>
  );
};

export default AddNewService;
