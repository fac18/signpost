import React from 'react'
import { Link } from 'react-router-dom'
import { Close } from '../Buttons/buttons.js'

// Do something with the text area inputed by the user -> send it somewhere?

const SuggestChange = () => {
  const [textInput, setTextInput] = React.useState('')

  const handleSubmit = event => {
    //write call to backend to insert data (from state)
    event.preventDefault()
  }

  return (
    <>
      <Link to="/map">
        <Close />
      </Link>
      <h1>Suggest a change</h1>
      <p>
        If you see something wrong about this service, please suggest a change
        and we'll update it for you!
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          cols="30"
          value={textInput}
          onChange={event => setTextInput(event.target.value)}
        ></textarea>
        <br />
        <Link to="/thank-you">
          <button type="submit">Post</button>
        </Link>
      </form>
    </>
  )
}

export default SuggestChange
