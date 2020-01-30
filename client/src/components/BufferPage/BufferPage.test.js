import React from 'react'
import ReactDOM from 'react-dom'
import BufferPage from './BufferPage'
import { render, getByTestId } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BufferPage />, div)
})

test('message renders', () => {
  const { getByText } = render(<BufferPage />)
  const title = getByText(/Finding community contributions.../i)
  expect(title).toBeInTheDocument()
})

test('magnifying glass svg renders', () => {
  const { getByText } = render(<BufferPage />)
  const svg = getByText(/magnifying-glass/i)
  expect(svg).toBeInTheDocument()
})
