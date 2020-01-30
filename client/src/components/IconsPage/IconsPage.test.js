import React from 'react'
import ReactDOM from 'react-dom'
import IconsPage from './IconsPage'
import { render, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <IconsPage />
    </Router>,
    div
  )
})

test('services h1 shows on page load', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <IconsPage />
    </Router>
  )
  const linkElement = getByText(/Which service do you need/i)
  expect(linkElement).toBeInTheDocument()
})

test('services h1 shows on page load', () => {
  const setSelectedService = () => {
    console.log('pretend to set selected service')
  }
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <IconsPage setSelectedService={setSelectedService} />
    </Router>
  )
  const button = getByText(/shower/i)
  fireEvent.click(button)
})
