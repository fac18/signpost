import React from 'react'
import ReactDOM from 'react-dom'
import BufferPage from './BufferPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BufferPage />, div)
})

test('message renders', () => {
  const { getByText } = render(<BufferPage />)
  const title = getByText(/Finding community contributions.../i)
  expect(title).toBeInTheDocument()
})

test('svg renders', () => {
  const { getByTitle } = render(<BufferPage />)
  const svg = getByTitle(/magnifying-glass/i)
  expect(svg).toBeInTheDocument()
})
