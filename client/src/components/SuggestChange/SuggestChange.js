import React, { useReducer } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Close } from '../Buttons/buttons.js'
import postEditData from '../../utils/postEditData'
import './SuggestChange.css'

const initialState = {
  textInput: '',
}

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  }
}

const SuggestChange = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [changePage, setChangePage] = React.useState(false)

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value })
  }

  const { textInput } = state

  const handleSubmit = event => {
    event.preventDefault()
    postEditData(state)
    setChangePage(!changePage)
    console.log({ state })
    console.log(event)
  }

  return (
    <>
      <Link to="/map">
        <Close />
      </Link>
      <fieldset className="change-text">
        <legend>Suggest a change</legend>
        <p>
          If you see something wrong about this service, please suggest a change
          and we'll update it for you!
        </p>
        {changePage ? (
          <Redirect to="thank-you"></Redirect>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              name="textInput"
              type="textarea"
              className="suggestion-box"
              rows="10"
              cols="30"
              value={textInput}
              onChange={onChange}
            ></textarea>
            <br />
            <button className="change-button" type="submit">
              Post
            </button>
          </form>
        )}
      </fieldset>
    </>
  )
}

export default SuggestChange
