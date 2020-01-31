import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('app initially renders landing page and shows title', () => {
  const { getByText } = render(<App />)
  const title = getByText(/Signpost/)
  expect(title).toBeInTheDocument()
})

test('redirects to login page', () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  fireEvent.click(getByText(/get started/i))

  // check that the content changed to the new page
  expect(container.innerHTML).toMatch(/which service do you need/i)

  fireEvent.click(getByText(/shower/i))

  expect(container.innerHTML).toMatch(/contributions/i)
})
