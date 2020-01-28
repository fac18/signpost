const calcOpeningClosing = timings => {
  //set up for time/date calculations
  const today = new Date()
  //getDay() returns a number
  const daysLookup = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  }

  const todayName = Object.keys(daysLookup).find(
    key => daysLookup[key] === today.getDay()
  )

  const currentTime = today.getTime()

  //date object for today's opening times
  let todayOpeningTimeStamp = new Date()
  if (timings[todayName].opening === 'closed') {
    todayOpeningTimeStamp = 0
  } else {
    const [todayOpeningHour, todayOpeningMinutes] = timings[
      todayName
    ].opening.split(':')
    todayOpeningTimeStamp.setHours(todayOpeningHour, todayOpeningMinutes)
  }

  //for services that are open now - when will they close?
  const todayClosingTimeStamp = new Date()
  const [todayClosingHour, todayClosingMinutes] = timings[
    todayName
  ].closing.split(':')
  todayClosingTimeStamp.setHours(todayClosingHour, todayClosingMinutes)

  //for services that are closed now - when will they reopen?
  let todayPlusOne = today.getDay() + 1 > 6 ? 0 : today.getDay() + 1
  let todayPlusOneName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusOne
  )
  let todayPlusOneTimeStamp = new Date()
  if (timings[todayPlusOneName].opening === 'closed') {
    todayPlusOneTimeStamp = 0
  } else {
    const [todayPlusOneOpeningHour, todayPlusOneOpeningMinutes] = timings[
      todayPlusOneName
    ].opening.split(':')
    todayPlusOneTimeStamp.setHours(
      todayPlusOneOpeningHour,
      todayPlusOneOpeningMinutes
    )
    todayPlusOneTimeStamp.setDate(todayPlusOneTimeStamp.getDate() + 1)
  }

  let todayPlusTwo = todayPlusOne + 1 > 6 ? 0 : todayPlusOne + 1
  let todayPlusTwoName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusTwo
  )
  let todayPlusTwoTimeStamp = new Date()
  if (timings[todayPlusTwoName].opening === 'closed') {
    todayPlusTwoTimeStamp = 0
  } else {
    const [todayPlusTwoOpeningHour, todayPlusTwoOpeningMinutes] = timings[
      todayPlusTwoName
    ].opening.split(':')
    todayPlusTwoTimeStamp.setHours(
      todayPlusTwoOpeningHour,
      todayPlusTwoOpeningMinutes
    )
    todayPlusTwoTimeStamp.setDate(todayPlusTwoTimeStamp.getDate() + 2)
  }

  let todayPlusThree = todayPlusTwo + 1 > 6 ? 0 : todayPlusTwo + 1
  let todayPlusThreeName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusThree
  )
  let todayPlusThreeTimeStamp = new Date()
  if (timings[todayPlusThreeName].opening === 'closed') {
    todayPlusThreeTimeStamp = 0
  } else {
    const [todayPlusThreeOpeningHour, todayPlusThreeOpeningMinutes] = timings[
      todayPlusThreeName
    ].opening.split(':')
    todayPlusThreeTimeStamp.setHours(
      todayPlusThreeOpeningHour,
      todayPlusThreeOpeningMinutes
    )
    todayPlusThreeTimeStamp.setDate(todayPlusThreeTimeStamp.getDate() + 3)
  }

  let todayPlusFour = todayPlusThree + 1 > 6 ? 0 : todayPlusThree + 1
  let todayPlusFourName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusFour
  )
  let todayPlusFourTimeStamp = new Date()
  if (timings[todayPlusFourName].opening === 'closed') {
    todayPlusFourTimeStamp = 0
  } else {
    const [todayPlusFourOpeningHour, todayPlusFourOpeningMinutes] = timings[
      todayPlusFourName
    ].opening.split(':')
    todayPlusFourTimeStamp.setHours(
      todayPlusFourOpeningHour,
      todayPlusFourOpeningMinutes
    )
    todayPlusFourTimeStamp.setDate(todayPlusFourTimeStamp.getDate() + 4)
  }

  let todayPlusFive = todayPlusFour + 1 > 6 ? 0 : todayPlusFour + 1
  let todayPlusFiveName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusFive
  )
  let todayPlusFiveTimeStamp = new Date()
  if (timings[todayPlusFiveName].opening === 'closed') {
    todayPlusFiveTimeStamp = 0
  } else {
    const [todayPlusFiveOpeningHour, todayPlusFiveOpeningMinutes] = timings[
      todayPlusFiveName
    ].opening.split(':')
    todayPlusFiveTimeStamp.setHours(
      todayPlusFiveOpeningHour,
      todayPlusFiveOpeningMinutes
    )
    todayPlusFiveTimeStamp.setDate(todayPlusFiveTimeStamp.getDate() + 5)
  }

  let todayPlusSix = todayPlusFive + 1 > 6 ? 0 : todayPlusFive + 1
  let todayPlusSixName = Object.keys(daysLookup).find(
    key => daysLookup[key] === todayPlusSix
  )
  let todayPlusSixTimeStamp = new Date()
  if (timings[todayPlusSixName].opening === 'closed') {
    todayPlusSixTimeStamp = 0
  } else {
    const [todayPlusSixOpeningHour, todayPlusSixOpeningMinutes] = timings[
      todayPlusSixName
    ].opening.split(':')
    todayPlusSixTimeStamp.setHours(
      todayPlusSixOpeningHour,
      todayPlusSixOpeningMinutes
    )
    todayPlusSixTimeStamp.setDate(todayPlusSixTimeStamp.getDate() + 6)
  }

  //day 0 is today, day 1 is tomorrow etc (NOT the JS getDay numbering)
  const timeStampsfromToday = [
    {
      openingTimestamp: todayOpeningTimeStamp,
      jsDayRef: today,
      todayName: todayName,
    },
    {
      openingTimestamp: todayPlusOneTimeStamp,
      jsDayRef: todayPlusOne,
      todayName: todayPlusOneName,
    },
    {
      openingTimestamp: todayPlusTwoTimeStamp,
      jsDayRef: todayPlusTwo,
      todayName: todayPlusTwoName,
    },
    {
      openingTimestamp: todayPlusThreeTimeStamp,
      jsDayRef: todayPlusThree,
      todayName: todayPlusThreeName,
    },
    {
      openingTimestamp: todayPlusFourTimeStamp,
      jsDayRef: todayPlusFour,
      todayName: todayPlusFourName,
    },
    {
      openingTimestamp: todayPlusFiveTimeStamp,
      jsDayRef: todayPlusFive,
      todayName: todayPlusFiveName,
    },
    {
      openingTimestamp: todayPlusSixTimeStamp,
      jsDayRef: todayPlusSix,
      todayName: todayPlusSixName,
    },
  ]

  //closed days are set to 0 so won't be bigger
  const nextOpeningTimeStamp =
    timeStampsfromToday[1].openingTimestamp >
    timeStampsfromToday[0].openingTimestamp
      ? timeStampsfromToday[1].openingTimestamp
      : timeStampsfromToday[2].openingTimestamp >
        timeStampsfromToday[0].openingTimestamp
      ? timeStampsfromToday[2].openingTimestamp
      : timeStampsfromToday[3].openingTimestamp >
        timeStampsfromToday[0].openingTimestamp
      ? timeStampsfromToday[3].openingTimestamp
      : timeStampsfromToday[4].openingTimestamp >
        timeStampsfromToday[0].openingTimestamp
      ? timeStampsfromToday[4].openingTimestamp
      : timeStampsfromToday[5].openingTimestamp >
        timeStampsfromToday[0].openingTimestamp
      ? timeStampsfromToday[5].openingTimestamp
      : timeStampsfromToday[6].openingTimestamp >
        timeStampsfromToday[0].openingTimestamp
      ? timeStampsfromToday[6].openingTimestamp
      : timeStampsfromToday[0].openingTimestamp

  const nextOpeningDay = Object.keys(daysLookup).find(
    key => daysLookup[key] === nextOpeningTimeStamp.getDay()
  )
  const nextOpeningHour = nextOpeningTimeStamp.getHours()
  const nextOpeningMinutes =
    nextOpeningTimeStamp.getMinutes() > 9
      ? nextOpeningTimeStamp.getMinutes()
      : `0${nextOpeningTimeStamp.getMinutes()}`

  console.log(nextOpeningTimeStamp)
  console.log(nextOpeningDay)
  console.log(nextOpeningHour)

  let openingInfo

  if (timings[todayName].opening === 'closed') {
    //it's closed all day today: when will it next be open?
    openingInfo = `Closed | Opens ${nextOpeningDay} ${nextOpeningHour}:${nextOpeningMinutes}`
  } else if (todayOpeningTimeStamp > currentTime) {
    //in this case the service has not yet opened today (but will)
    openingInfo = `Closed | Opens ${timings[todayName].opening}`
  } else if (currentTime > todayClosingTimeStamp) {
    //in this case it was open today but has closed: when will it next be open?
    openingInfo = `Closed | Opens ${nextOpeningDay} ${nextOpeningHour}:${nextOpeningMinutes}`
  } else {
    //in this case the service should be open now
    openingInfo = `Open | Closes ${timings[todayName].closing}`
  }

  return openingInfo
}

const data = {
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
    opening: 'closed',
    closing: 'closed',
  },
  Mon: {
    opening: '16:00',
    closing: '19:00',
  },
}

console.log(calcOpeningClosing(data))
