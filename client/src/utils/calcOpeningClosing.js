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

  //for services which are closed - when will they open?
  let outputArray = [
    {
      openingTimestamp: todayOpeningTimeStamp,
      jsDayRef: today.getDay(),
      todayName: todayName,
    },
  ]

  for (let i = 1; i < 7; i++) {
    let daysAfterToday = i
    let jsCodeDayOfWeek =
      outputArray[i - 1].jsDayRef + 1 > 6 ? 0 : outputArray[i - 1].jsDayRef + 1
    let dayTimeStamp = new Date()
    let dayName = Object.keys(daysLookup).find(
      key => daysLookup[key] === jsCodeDayOfWeek
    )
    if (timings[dayName].opening === 'closed') {
      dayTimeStamp = 0
    } else {
      const [openingHour, openingMinutes] = timings[dayName].opening.split(':')
      dayTimeStamp.setHours(openingHour, openingMinutes)
      dayTimeStamp.setDate(dayTimeStamp.getDate() + daysAfterToday)
    }
    outputArray.push({
      openingTimestamp: dayTimeStamp,
      jsDayRef: jsCodeDayOfWeek,
      todayName: dayName,
    })
  }

  //closed days are set to 0 so won't be bigger
  const nextOpeningTimeStamp =
    outputArray[1].openingTimestamp > outputArray[0].openingTimestamp
      ? outputArray[1].openingTimestamp
      : outputArray[2].openingTimestamp > outputArray[0].openingTimestamp
      ? outputArray[2].openingTimestamp
      : outputArray[3].openingTimestamp > outputArray[0].openingTimestamp
      ? outputArray[3].openingTimestamp
      : outputArray[4].openingTimestamp > outputArray[0].openingTimestamp
      ? outputArray[4].openingTimestamp
      : outputArray[5].openingTimestamp > outputArray[0].openingTimestamp
      ? outputArray[5].openingTimestamp
      : outputArray[6].openingTimestamp > outputArray[0].openingTimestamp
      ? outputArray[6].openingTimestamp
      : outputArray[0].openingTimestamp

  const nextOpeningDay = Object.keys(daysLookup).find(
    key => daysLookup[key] === nextOpeningTimeStamp.getDay()
  )
  const nextOpeningHour = nextOpeningTimeStamp.getHours()
  const nextOpeningMinutes =
    nextOpeningTimeStamp.getMinutes() > 9
      ? nextOpeningTimeStamp.getMinutes()
      : `0${nextOpeningTimeStamp.getMinutes()}`

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
    opening: '00:00',
    closing: '02:00',
  },
  Thu: {
    opening: 'closed',
    closing: 'closed',
  },
  Fri: {
    opening: '10:00',
    closing: '12:00',
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
