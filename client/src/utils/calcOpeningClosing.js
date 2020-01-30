export const calcOpeningClosing = timings => {
  //getDay() returns a number - this table will be used to convert it to the name of the day
  //(Sunday is 0, Monday is 1, etc)
  const daysLookup = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  //set up for next time/date calculations: what is the day/time now?
  const today = new Date()
  const todayName = daysLookup[today.getDay()]
  const currentTime = today.getTime()

  //creates JS date object for today's opening times
  const todayOpeningTimestamp = () => {
    let timeStamp = new Date()
    if (timings[todayName].opening === 'closed') {
      timeStamp = 0
    } else {
      const [todayOpeningHour, todayOpeningMinutes] = timings[
        todayName
      ].opening.split(':')
      timeStamp.setHours(todayOpeningHour, todayOpeningMinutes)
    }
    return timeStamp
  }

  //closing timestamp for services that are open now - when will they close?
  const todayClosingTimestamp = () => {
    const timeStamp = new Date()
    const [todayClosingHour, todayClosingMinutes] = timings[
      todayName
    ].closing.split(':')
    timeStamp.setHours(todayClosingHour, todayClosingMinutes)
    return timeStamp
  }

  //for services which are closed - when will they open?
  //this array will be added to by for loop below to contain an object for every day of the week
  //maybe that's not good coding practice....
  //element 0 is for today, element 1 will be tomorrow, etc

  const allDaysTimeStamps = () => {
    let allDaysTimeStampsArray = [
      {
        openingTimestamp: todayOpeningTimestamp(),
        jsDayRef: today.getDay(),
        todayName: todayName,
      },
    ]

    //create an object for each successive day of the week (i.e. tomorrow onwards)
    for (let i = 1; i < 7; i++) {
      let daysAfterToday = i
      let jsCodeDayOfWeek =
        allDaysTimeStampsArray[i - 1].jsDayRef + 1 > 6
          ? 0
          : allDaysTimeStampsArray[i - 1].jsDayRef + 1
      let dayTimeStamp = new Date()
      let dayName = daysLookup[jsCodeDayOfWeek]
      if (timings[dayName].opening === 'closed') {
        dayTimeStamp = 0
      } else {
        const [openingHour, openingMinutes] = timings[dayName].opening.split(
          ':'
        )
        dayTimeStamp.setHours(openingHour, openingMinutes)
        dayTimeStamp.setDate(dayTimeStamp.getDate() + daysAfterToday)
      }
      allDaysTimeStampsArray.push({
        openingTimestamp: dayTimeStamp,
        jsDayRef: jsCodeDayOfWeek,
        todayName: dayName,
      })
    }
    return allDaysTimeStampsArray
  }

  //identifies the next day that the service will be open by looking for next bigger timestamp
  //closed days' timestamps are set to 0 so won't be selected
  const nextOpeningTimeStamp = allDaysTimeStamps().find(
    element =>
      element.openingTimestamp > allDaysTimeStamps()[0].openingTimestamp
  ).openingTimestamp

  //look up the name of the day, and also save the hour and mins as variables for the display text
  const nextOpeningDay = daysLookup[nextOpeningTimeStamp.getDay()]
  const nextOpeningHour = nextOpeningTimeStamp.getHours()
  const nextOpeningMinutes =
    nextOpeningTimeStamp.getMinutes() > 9
      ? nextOpeningTimeStamp.getMinutes()
      : `0${nextOpeningTimeStamp.getMinutes()}`

  //decide which scenario applies and return the relevant string
  if (timings[todayName].opening === 'closed') {
    //it's closed all day today: when will it next be open?
    return `Closed | Opens ${nextOpeningDay} ${nextOpeningHour}:${nextOpeningMinutes}`
  } else if (todayOpeningTimestamp() > currentTime) {
    //in this case the service has not yet opened today (but will)
    return `Closed | Opens ${timings[todayName].opening}`
  } else if (currentTime > todayClosingTimestamp()) {
    //in this case it was open today but has closed: when will it next be open?
    return `Closed | Opens ${nextOpeningDay} ${nextOpeningHour}:${nextOpeningMinutes}`
  } else {
    //in this case the service should be open now
    return `Open | Closes ${timings[todayName].closing}`
  }
}
