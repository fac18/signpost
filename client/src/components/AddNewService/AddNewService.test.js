import React from 'react'
import ReactDOM from 'react-dom'
import AddNewService from './AddNewService'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

afterEach(cleanup)

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <AddNewService />
    </Router>,
    div
  )
})

test('', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <AddNewService />{' '}
    </Router>
  )
  const title = getByText(/Add a new service/i)
  expect(title).toBeInTheDocument()
})

test('form fields load', () => {
  const history = createMemoryHistory()
  const { getByPlaceholderText, getByDisplayValue } = render(
    <Router history={history}>
      <AddNewService />
    </Router>
  )
  const title = getByPlaceholderText(/title/i)
  const location = getByPlaceholderText(/location/i)
  const openingTimes = getByPlaceholderText(/opening times/i)
  const selectService = getByDisplayValue(/select a service/i)
  const contactName = getByPlaceholderText(/contact name/i)
  const contactDetails = getByPlaceholderText(/contact details/i)
  expect(title).toBeInTheDocument()
  expect(location).toBeInTheDocument()
  expect(openingTimes).toBeInTheDocument()
  expect(selectService).toBeInTheDocument()
  expect(contactName).toBeInTheDocument()
  expect(contactDetails).toBeInTheDocument()
})

//if we add validation to form, add test to test that it's working

//revisit this in context of post request

// test('add button works', () => {
//   const history = createMemoryHistory()
//   const { getByText, getByTestId } = render(
//     <Router history={history}>
//       <AddNewService />
//     </Router>
//   )
//   const buttonNode = getByTestId(/add-button/i)
//   fireEvent.click(buttonNode)
//   getByText(/Thank you for your contribution!/i)
// })
