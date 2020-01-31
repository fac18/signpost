import React from 'react'
import ReactDOM from 'react-dom'
import ServiceInformation from './ServiceInformation'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const props = {
  id: 'recjNHECtCfovqgLG',
  fields: {
    WednesdayClosing: 'closed',
    ThursdayOpening: 'closed',
    MondayOpening: '10:00',
    TuesdayOpening: 'closed',
    SaturdayClosing: 'closed',
    SundayClosing: 'closed',
    Name: 'Archway Drop-in Centre',
    Lat: '51.561483',
    'Days open': 'Monday',
    MondayClosing: '12:00',
    FridayOpening: 'closed',
    SaturdayOpening: 'closed',
    WednesdayOpening: 'closed',
    Address: 'Upper Holloway Baptist Church, 11 Tollington Way London, N7 6RG',
    ShortDescription: 'Drop-in offering food and clothes',
    Closing: 12,
    ThursdayClosing: 'closed',
    Lng: '-0.123345',
    FridayClosing: 'closed',
    SundayOpening: 'closed',
    Phone: '020 7272 2104',
    Type: ['Food', 'Clothing'],
    Opening: 10,
    Description:
      'Weekly drop-in for homeless people and those who are socially isolated or lonely, offering food (light snacks, tea, soup, sandwiches), a change of clothes and somewhere to spend time. Limited counselling, advice and information also available. Entrance costs 50 pence. Open Mondays 10am to 12pm.',
    TuesdayClosing: 'closed',
    Accessible: true,
  },
  createdTime: '2020-01-28T11:37:35.000Z',
}

it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <ServiceInformation selectedMarkerData={props} />{' '}
    </Router>,
    div
  )
})
