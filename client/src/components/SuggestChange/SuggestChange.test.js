import React from 'react'
import ReactDOM from 'react-dom'
import SuggestChange from './SuggestChange'
import { render } from '@testing-library/react'
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
