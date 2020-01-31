import React from 'react'
import ReactDOM from 'react-dom'
import PopUp from './PopUp'
import { render, fireEvent } from '@testing-library/react'

const setShowPopUp = () => {
  console.log("i'm a fake function!")
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PopUp />, div)
})

test('title renders', () => {
  const { getByText } = render(<PopUp setShowPopUp={setShowPopUp} />)
  const closeButton = getByText(/close.svg/i)
  fireEvent.click(closeButton)
})
