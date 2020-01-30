import React from 'react'
import ReactDOM from 'react-dom'
import IconsPage from './IconsPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<IconsPage />, div)
})

test('services h1 shows on page load', () => {
  const { getByText } = render(<IconsPage />)
  const linkElement = getByText(/Choose a service/i)
  expect(linkElement).toBeInTheDocument()
})

test('service button triggers the map', () => {
  const { findByText } = render(<IconsPage />)
  const buttonNode = getByText(/shower/i)
  fireEvent.click(buttonNode)
  //not sure if this will work: the div node the map goes into has this as textContent once it's loaded
  //not sure also if find accounts for timelag in loading
  //should test with it broken as well to check it doesn't falsely pass
  findByText(/Map DataMap data ©2020Map/i)
})
