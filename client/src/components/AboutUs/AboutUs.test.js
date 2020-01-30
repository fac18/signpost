import React from 'react'
import ReactDOM from 'react-dom'
import AboutUs from './AboutUs'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AboutUs />, div)
})

test('title renders', () => {
  const { getByText } = render(<AboutUs />)
  const title = getByText(/Who are we/i)
  expect(title).toBeInTheDocument()
})

test('some text renders', () => {
  const { getByText } = render(<AboutUs />)
  const text = getByText(
    /Signpost is here to empower people who are experiencing homelessness in Islington./i
  )
  expect(text).toBeInTheDocument()
})

test('close button works', () => {
  const { getByText } = render(<AboutUs />)
  const buttonNode = getByLabelText(/return to home/)
  fireEvent.click(buttonNode)
  getByText(
    /A community-driven service for those experiencing or at risk of homelessness in Islington/i
  )
})
