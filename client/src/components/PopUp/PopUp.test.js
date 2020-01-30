import React from 'react'
import ReactDOM from 'react-dom'
import PopUp from './PopUp'
import { render } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PopUp />, div)
})
