import React from 'react'
import './InfoBar.css'

const InfoBar = ({ name, description, address, timings }) => {
  //set up for time/date calculations
  const today = new Date()
  const daysLookup = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  }
  const todayName = Object.keys(daysLookup).find(
    key => daysLookup[key] === today.getDay()
  )
  const currentTime = today.getTime()

  //date object for today's closing times
  const [todayOpeningHour, todayOpeningMinutes] = timings[
    todayName
  ].opening.split(':')
  const todayOpeningTimeStamp = new Date()
  todayOpeningTimeStamp.setHours(todayOpeningHour, todayOpeningMinutes)

  //for services that are closed now - when will they reopen?
  //NB hardcoded day!!
  const nextOpeningTimeStamp = new Date()
  const [nextOpeningHour, nextOpeningMinutes] = timings.wednesday.opening.split(
    ':'
  )
  nextOpeningTimeStamp.setHours(nextOpeningHour, nextOpeningMinutes)

  //for services that are open now - when will they close?
  const todayClosingTimeStamp = new Date()
  const [todayClosingHour, todayClosingMinutes] = timings[
    todayName
  ].closing.split(':')
  todayClosingTimeStamp.setHours(todayClosingHour, todayClosingMinutes)

  let displayValue

  if (timings[todayName].opening === 'closed') {
    displayValue = `Closed | Opens ???`
  } else if (todayOpeningTimeStamp > currentTime) {
    //in this case the service has not yet opened today (but will)
    displayValue = `Closed | Opens ${timings[todayName].opening}`
  } else if (currentTime > todayClosingTimeStamp) {
    //in this case it was open today but has closed: when will it next be open?
    displayValue = `Closed | Opens ???`
  } else {
    //in this case the service should be open now
    displayValue = `Open | Closes ${timings[todayName].closing}`
  }

  return (
    <>
      <aside>
        <h3 className="service-name">{name}</h3>
        <p className="service-text">{description}</p>
        <p className="service-text">{address}</p>
        <p className="service-text">{displayValue}</p>
        <p className="service-text">See more</p>
      </aside>
    </>
  )
}

export default InfoBar
