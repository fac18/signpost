import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../Buttons/buttons.js'
import './AddNewService.css'

const AddNewService = props => {
  const [titleInput, setTitleInput] = React.useState('')
  const [locationInput, setLocationInput] = React.useState('')
  const [timesInput, setTimesInput] = React.useState('')
  const [serviceInput, setServiceInput] = React.useState('select-a-service')
  const [contactNameInput, setContactNameInput] = React.useState('')
  const [contactDetailsInput, setContactDetailsInput] = React.useState('')

  const handleSubmit = event => {
    //write call to backend to insert data (from state)
    event.preventDefault()
  }
  return (
    <>
      <Link to="/icons-page">
        <Close />
      </Link>
      <fieldset className="add-form">
        <legend>Add a new service</legend>
        <form method="POST">
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
              className="dropdown"
              required
              value={serviceInput}
              onChange={event => setServiceInput(event.target.value)}
            >
              <option value="" disabled selected>
                Select a service
              </option>
              <option value="Advice">Advice</option>
              <option value="Animal">Animals</option>
              <option value="Children">Children</option>
              <option value="Clothing">Clothing</option>
              <option value="Food">Food</option>
              <option value="Learning">Learning</option>
              <option value="Medical">Medical</option>
              <option value="Shower">Shower</option>
              <option value="Shelter">Shelter</option>
              <option value="Wellbeing">Wellbeing</option>
              <option value="Women">Women</option>
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
          <button type="submit" className="submit-button">
            Add
          </button>
        </Link>
      </fieldset>
    </>
  )
}
export default AddNewService
