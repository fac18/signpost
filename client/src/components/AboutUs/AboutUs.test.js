import React from 'react'
import ReactDOM from 'react-dom'
import AboutUs from './AboutUs'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

afterEach(cleanup)

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <AboutUs />
    </Router>,
    div
  )
})

test('title renders', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <AboutUs />
    </Router>
  )
  const title = getByText(/Who are we/i)
  expect(title).toBeInTheDocument()
})

test('some text renders', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <AboutUs />
    </Router>
  )
  const text = getByText(
    /Signpost is here to empower people who are experiencing homelessness in Islington./i
  )
  expect(text).toBeInTheDocument()
})
