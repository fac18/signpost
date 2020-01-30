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
