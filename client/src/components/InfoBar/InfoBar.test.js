import React from 'react'
import ReactDOM from 'react-dom'
import InfoBar from './InfoBar'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <InfoBar
      name="Service"
      description="Info about Service"
      address="123 Service St"
      timings={{
        Mon: {
          opening: '10:00',
          closing: '16:00',
        },
        Tue: {
          opening: '10:00',
          closing: '16:00',
        },
        Wed: {
          opening: '10:00',
          closing: '16:00',
        },
        Thu: {
          opening: '10:00',
          closing: '16:00',
        },
        Fri: {
          opening: '10:00',
          closing: '16:00',
        },
        Sat: {
          opening: '10:00',
          closing: '16:00',
        },
        Sun: {
          opening: '10:00',
          closing: '16:00',
        },
      }}
    />,
    div
  )
})

test('see more text renders', () => {
  const { getByText } = render(
    <InfoBar
      name="MyService"
      description="Info about Service"
      address="123 Service St"
      timings={{
        Mon: {
          opening: '10:00',
          closing: '16:00',
        },
        Tue: {
          opening: '10:00',
          closing: '16:00',
        },
        Wed: {
          opening: '10:00',
          closing: '16:00',
        },
        Thu: {
          opening: '10:00',
          closing: '16:00',
        },
        Fri: {
          opening: '10:00',
          closing: '16:00',
        },
        Sat: {
          opening: '10:00',
          closing: '16:00',
        },
        Sun: {
          opening: '10:00',
          closing: '16:00',
        },
      }}
    />
  )
  const fixedText = getByText(/see more/i)
  expect(fixedText).toBeInTheDocument()
})

test('service title renders', () => {
  const { getByText } = render(
    <InfoBar
      name="Service"
      description="Info about Service"
      address="123 Service St"
      timings={{
        Mon: {
          opening: '10:00',
          closing: '16:00',
        },
        Tue: {
          opening: '10:00',
          closing: '16:00',
        },
        Wed: {
          opening: '10:00',
          closing: '16:00',
        },
        Thu: {
          opening: '10:00',
          closing: '16:00',
        },
        Fri: {
          opening: '10:00',
          closing: '16:00',
        },
        Sat: {
          opening: '10:00',
          closing: '16:00',
        },
        Sun: {
          opening: '10:00',
          closing: '16:00',
        },
      }}
    />
  )
  const serviceTitle = getByText(/MyService/i)
  expect(serviceTitle).toBeInTheDocument()
})
