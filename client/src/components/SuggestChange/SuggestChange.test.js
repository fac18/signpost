import React from 'react'
import ReactDOM from 'react-dom'
import SuggestChange from './SuggestChange'
import { render, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <SuggestChange />
    </Router>,
    div
  )
})

test('enter value to title', () => {
  const history = createMemoryHistory()
  const { getByTestId } = render(
    <Router history={history}>
      <SuggestChange />
    </Router>
  )
  const box = getByTestId(/input-box/i)
  fireEvent.change(box, { target: { value: 'typing an update' } })
})

test('add button fires handler', () => {
  const history = createMemoryHistory()
  const { getByText } = render(
    <Router history={history}>
      <SuggestChange />
    </Router>
  )
  const buttonNode = getByText(/post/i)
  fireEvent.click(buttonNode)
  //how to check that the handler ran when it's in the component file??
})
