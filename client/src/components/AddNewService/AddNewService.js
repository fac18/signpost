import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Close } from '../Buttons/buttons.js'
import postAddServiceData from '../../utils/postData';
import './AddNewService.css';

const initialState = {
  Title: '',
  Location: '',
  Opening_Times: '',
  Service: 'select-a-service',
  Contact_Name: '',
  Contact_Details: '',
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

const AddNewService = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const {
    Title,
    Location,
    Opening_Times,
    Service,
    Contact_Name,
    Contact_Details,
  } = state;


  const handleSubmit = event => {
    event.preventDefault();
    postAddServiceData(state);
    console.log({ state });
    console.log(event);
  };

  return (
    <>
      <Link to="/icons-page">
        <Close />
      </Link>
      <fieldset className="add-form">
        <legend>Add a new service</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Title">
            <input
              type="text"
              name="Title"
              id="Title"
              className="form__input"
              placeholder="Title"
              value={Title}
              onChange={onChange}
            />
          </label>
          <br />
          <label htmlFor="Location">
            <br />
            <input
              type="text"
              name="Location"
              id="Location"
              className="form__input"
              placeholder="Location"
              value={Location}
              onChange={onChange}
            />
          </label>
          <br />
          <label htmlFor="Opening_Times">
            <br />
            <input
              type="text"
              name="Opening_Times"
              id="Opening_Times"
              className="form__input"
              placeholder="Opening times"
              value={Opening_Times}
              onChange={onChange}
            />
          </label>
          <br />
          <label htmlFor="service-input">
            <br />
            <select
              selected={Service}
              aria-label="select services dropdown"
              type="dropdown"
              name="Service"
              id="Service"
              className="dropdown"
              required
              value={Service}
              onChange={onChange}
            >
              <option value="select-a-service" disabled>
                Select a service
              </option>
              <option name="Service" value="Advice">
                Advice
              </option>
              <option name="Service" value="Animals">
                Animals
              </option>
              <option name="Service" value="Children">
                Children
              </option>
              <option name="Service" value="Clothing">
                Clothing
              </option>
              <option name="Service" value="Food">
                Food
              </option>
              <option name="Service" value="Learning">
                Learning
              </option>
              <option name="Service" value="Medical">
                Medical
              </option>
              <option name="Service" value="Shower">
                Shower
              </option>
              <option name="Service" value="Shelter">
                Shelter
              </option>
              <option name="Service" value="Wellbeing">
                Wellbeing
              </option>
              <option name="Service" value="Women">
                Women
              </option>
            </select>
          </label>
          <br />
          <label htmlFor="Contact_Name">
            <br />
            <input
              type="text"
              name="Contact_Name"
              id="Contact_Name"
              className="form__input"
              placeholder="Contact name"
              value={Contact_Name}
              onChange={onChange}
            />
          </label>
          <br />
          <label htmlFor="Contact_Details">
            <br />
            <input
              type="text"
              name="Contact_Details"
              id="Contact_Details"
              className="form__input"
              placeholder="Contact details"
              value={Contact_Details}
              onChange={onChange}
            />
          </label>
          <br />
          <button type="submit" className="submit-button" data-testid="add-button">
            Add
          </button>
        </form>
      </fieldset>
    </>
  );
};
export default AddNewService;
