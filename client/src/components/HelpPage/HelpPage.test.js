import React from 'react'
import ReactDOM from 'react-dom'
import HelpPage from './HelpPage'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <HelpPage />
    </Router>,
    div
  )
})

test('title renders', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <HelpPage />
    </Router>
  )
  const title = getByText(/Need help/i)
  expect(title).toBeInTheDocument()
})
