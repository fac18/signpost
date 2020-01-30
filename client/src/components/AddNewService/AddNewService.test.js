import React from 'react'
import ReactDOM from 'react-dom'
import AddNewService from './AddNewService'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddNewService />, div)
})

test('', () => {
  const { getByText } = render(<AddNewService />)
  const title = getByText(/Add a new service/i)
  expect(title).toBeInTheDocument()
})

test('form fields load', () => {
  const { getByPlaceholderText, getByDisplayValue } = render(<AddNewService />)
  const title = getByPlaceholderText(/title/i)
  const location = getByPlaceholderText(/location/i)
  const openingTimes = getByPlaceholderText(/opening times/i)
  const selectService = getByDisplayValue(/select-a-service/i)
  const contactName = getByPlaceholderText(/contact name/i)
  const contactDetails = getByPlaceholderText(/contact details/i)
  expect(
    title,
    location,
    openingTimes,
    contactName,
    contactDetails
  ).toBeInTheDocument()
})

//if we add validation to form, add test to test that it's working

test('add button works', () => {
  const { getByText } = render(<AddNewService />)
  const buttonNode = getByText(/add/i)
  fireEvent.click(buttonNode)
  getByText(/Thank you for your contribution!/i)
})

test('close button works', () => {
  const { getByLabelText, getByText } = render(<AddNewService />)
  const buttonNode = getByLabelText(/go back to menu/)
  fireEvent.click(buttonNode)
  getByText(/Which service do you need?/i)
})
