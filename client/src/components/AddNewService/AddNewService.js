import React from "react";
import { Link } from "react-router-dom";

// LOW PRIORITY COMPONENT

// Needs adding handle submit event onto the form
// Send the data access from the form -> somewhere?
// Lots of improvements to do here if we get to this point

const AddNewService = props => {
  return (
    <>
      <Link to='/iconspage'>
        <button>X</button>
      </Link>
      <h1>Add a new service</h1>
      <form className='form__style' method='POST'>
        <label htmlFor='title-input'>
          <input id='title-input' className='form__input' placeholder='Title' />
        </label>
        <br />
        <label htmlFor='location-input'>
          <br />
          <input
            id='location-input'
            className='form__input'
            placeholder='Location'
          />
        </label>
        <br />
        <label htmlFor='times-input'>
          <br />
          <input
            id='times-input'
            className='form__input'
            placeholder='Opening times'
          />
        </label>
        <br />
        <label htmlFor='service-input'>
          <br />
          <select aria-label='select services dropdown' id='services' required>
            <option value='' disabled selected>
              Select a service
            </option>
            <option value='shower'>shower</option>
            <option value='shelter'>shelter</option>
            <option value='advice'>advice</option>
            <option value='food'>food</option>
          </select>
        </label>
        <br />
        <label htmlFor='contact-name-input'>
          <br />
          <input
            id='contact-name-input'
            className='form__input'
            placeholder='Contact name'
          />
        </label>
        <br />
        <label htmlFor='contact-details-input'>
          <br />
          <input
            id='contact-details-input'
            className='form__input'
            placeholder='Contact details'
          />
        </label>
        <br />
      </form>
      <Link to='/thankyou'>
        <button type='submit'>Add</button>
      </Link>
    </>
  );
};

export default AddNewService;
