import React from 'react'
import ReactDOM from 'react-dom'
import AddNewService from './AddNewService'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import postAddServiceData from '../../utils/postData'

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

test('enter values to inputs and send data', () => {
  jest.mock('../../utils/postData')

  const history = createMemoryHistory()
  const { getByPlaceholderText, getByTestId } = render(
    <Router history={history}>
      <AddNewService />
    </Router>
  )
  const title = getByPlaceholderText(/title/i)
  fireEvent.change(title, { target: { value: 'service title' } })
  const location = getByPlaceholderText(/location/i)
  fireEvent.change(location, { target: { value: 'service address' } })
  const buttonNode = getByTestId(/add-button/i)
  fireEvent.click(buttonNode)
})
