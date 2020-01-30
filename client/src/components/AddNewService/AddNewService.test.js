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

test('enter value to title', () => {
  const history = createMemoryHistory()
  const { getByPlaceholderText } = render(
    <Router history={history}>
      <AddNewService />
    </Router>
  )
  const title = getByPlaceholderText(/title/i)
  fireEvent.change(title, { target: { value: 'service title' } })
})

test('add button fires handler', () => {
  const history = createMemoryHistory()
  const { getByText, getByTestId } = render(
    <Router history={history}>
      <AddNewService />
    </Router>
  )
  const buttonNode = getByTestId(/add-button/i)
  fireEvent.click(buttonNode)
  //how to check that the handler ran when it's in the component file??
})
