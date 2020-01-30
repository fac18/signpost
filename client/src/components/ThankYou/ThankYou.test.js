import React from 'react'
import ReactDOM from 'react-dom'
import ThankYou from './ThankYou'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <ThankYou />
    </Router>,
    div
  )
})
