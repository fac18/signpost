import React from 'react'
import ReactDOM from 'react-dom'
import InfoBar from './InfoBar'
import { render } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
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
  const serviceTitle = getByText(/MyService/i)
  expect(serviceTitle).toBeInTheDocument()
})

test('another example for utils function', () => {
  const { getByText } = render(
    <InfoBar
      name="MyService"
      description="Info about Service"
      address="123 Service St"
      timings={{
        Mon: {
          opening: 'closed',
          closing: 'closed',
        },
        Tue: {
          opening: 'closed',
          closing: 'closed',
        },
        Wed: {
          opening: 'closed',
          closing: 'closed',
        },
        Thu: {
          opening: 'closed',
          closing: 'closed',
        },
        Fri: {
          opening: 'closed',
          closing: 'closed',
        },
        Sat: {
          opening: 'closed',
          closing: 'closed',
        },
        Sun: {
          opening: '16:00',
          closing: '17:00',
        },
      }}
    />
  )
  const serviceTitle = getByText(/MyService/i)
  expect(serviceTitle).toBeInTheDocument()
})

test('example for utils function: will open later today', () => {
  const { getByText } = render(
    <InfoBar
      name="MyService"
      description="Info about Service"
      address="123 Service St"
      timings={{
        Mon: {
          opening: '23:30',
          closing: '23:40',
        },
        Tue: {
          opening: '23:30',
          closing: '23:40',
        },
        Wed: {
          opening: '23:30',
          closing: '23:40',
        },
        Thu: {
          opening: '23:30',
          closing: '23:40',
        },
        Fri: {
          opening: '23:30',
          closing: '23:40',
        },
        Sat: {
          opening: '23:30',
          closing: '23:40',
        },
        Sun: {
          opening: '23:30',
          closing: '23:40',
        },
      }}
    />
  )
  const serviceTitle = getByText(/MyService/i)
  expect(serviceTitle).toBeInTheDocument()
})

test('example for utils function: was open earlier, now closed', () => {
  const { getByText } = render(
    <InfoBar
      name="MyService"
      description="Info about Service"
      address="123 Service St"
      timings={{
        Mon: {
          opening: '00:01',
          closing: '00:02',
        },
        Tue: {
          opening: '00:01',
          closing: '00:02',
        },
        Wed: {
          opening: '00:01',
          closing: '00:02',
        },
        Thu: {
          opening: '00:01',
          closing: '00:02',
        },
        Fri: {
          opening: '00:01',
          closing: '00:02',
        },
        Sat: {
          opening: '00:01',
          closing: '00:02',
        },
        Sun: {
          opening: '00:01',
          closing: '00:02',
        },
      }}
    />
  )
  const serviceTitle = getByText(/MyService/i)
  expect(serviceTitle).toBeInTheDocument()
})

test('example for utils function: open now', () => {
  const { getByText } = render(
    <InfoBar
      name="MyService"
      description="Info about Service"
      address="123 Service St"
      timings={{
        Mon: {
          opening: '00:01',
          closing: '23:59',
        },
        Tue: {
          opening: '00:01',
          closing: '23:59',
        },
        Wed: {
          opening: '00:01',
          closing: '23:59',
        },
        Thu: {
          opening: '00:01',
          closing: '23:59',
        },
        Fri: {
          opening: '00:01',
          closing: '23:59',
        },
        Sat: {
          opening: '00:01',
          closing: '23:59',
        },
        Sun: {
          opening: '00:01',
          closing: '23:59',
        },
      }}
    />
  )
  const serviceTitle = getByText(/MyService/i)
  expect(serviceTitle).toBeInTheDocument()
})
