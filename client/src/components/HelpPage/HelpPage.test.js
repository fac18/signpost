import React from 'react'
import ReactDOM from 'react-dom'
import HelpPage from './HelpPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HelpPage />, div)
})

test('title renders', () => {
  const { getByText } = render(<HelpPage />)
  const title = getByText(/Need help/i)
  expect(title).toBeInTheDocument()
})

test('close button works', () => {
  const { getByLabelText, getByText } = render(<AddNewService />)
  const buttonNode = getByLabelText(/back to map/)
  //map will need props or it won't load
  // fireEvent.click(buttonNode)
  // getByText(/??/i)
})
