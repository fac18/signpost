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

  //date object for today's opening times
  const [todayOpeningHour, todayOpeningMinutes] = timings[
    todayName
  ].opening.split(':')
  const todayOpeningTimeStamp = new Date()
  todayOpeningTimeStamp.setHours(todayOpeningHour, todayOpeningMinutes)

  //for services that are open now - when will they close?
  const todayClosingTimeStamp = new Date()
  const [todayClosingHour, todayClosingMinutes] = timings[
    todayName
  ].closing.split(':')
  todayClosingTimeStamp.setHours(todayClosingHour, todayClosingMinutes)

  //for services that are closed now - when will they reopen?
  //NB hardcoded day!!
  let todayPlusOne = today.getDay() + 1 > 6 ? 0 : today.getDay() + 1
  let todayPlusOneName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusOne
  )
  let todayPlusTwo = todayPlusOne + 1 > 6 ? 0 : todayPlusOne + 1
  let todayPlusTwoName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusTwo
  )
  let todayPlusThree = todayPlusTwo + 1 > 6 ? 0 : todayPlusTwo + 1
  let todayPlusThreeName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusThree
  )
  let todayPlusFour = todayPlusThree + 1 > 6 ? 0 : todayPlusThree + 1
  let todayPlusFourName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusFour
  )
  let todayPlusFive = todayPlusFour + 1 > 6 ? 0 : todayPlusFour + 1
  let todayPlusFiveName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusFive
  )
  let todayPlusSix = todayPlusFive + 1 > 6 ? 0 : todayPlusFive + 1
  let todayPlusSixName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusSix
  )

  console.log(todayPlusSixName)

  // if (today + 1)
  const nextOpeningTimeStamp = new Date()
  const [nextOpeningHour, nextOpeningMinutes] = timings.wednesday.opening.split(
    ':'
  )
  nextOpeningTimeStamp.setHours(nextOpeningHour, nextOpeningMinutes)

  let openingInfo

  if (timings[todayName].opening === 'closed') {
    openingInfo = `Closed | Opens ???`
  } else if (todayOpeningTimeStamp > currentTime) {
    //in this case the service has not yet opened today (but will)
    openingInfo = `Closed | Opens ${timings[todayName].opening}`
  } else if (currentTime > todayClosingTimeStamp) {
    //in this case it was open today but has closed: when will it next be open?
    openingInfo = `Closed | Opens ???`
  } else {
    //in this case the service should be open now
    openingInfo = `Open | Closes ${timings[todayName].closing}`
  }

  return (
    <>
      <aside>
        <h3 className="service-name">{name}</h3>
        <p className="service-text">{description}</p>
        <p className="service-text">{address}</p>
        <p className="service-text">{openingInfo}</p>
        <p className="service-text">See more</p>
      </aside>
    </>
  )
}

export default InfoBar
