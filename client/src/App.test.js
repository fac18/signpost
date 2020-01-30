import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('app initially renders landing page and shows title', () => {
  const { getByText } = render(<App />)
  const title = getByText(/Signpost/)
  expect(title).toBeInTheDocument()
})
