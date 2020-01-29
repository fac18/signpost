export const calcOpeningClosing = timings => {
  //getDay() returns a number - this table will be used to convert it to the name of the day
  //(Sunday is 0, Monday is 1, etc)
  const daysLookup = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  //set up for time/date calculations: what is the day/time now
  const today = new Date()
  //convert the JS day to the name of the day
  const todayName = daysLookup[today.getDay()]
  const currentTime = today.getTime()

  //JS date object for today's opening times
  let todayOpeningTimeStamp = new Date()
  if (timings[todayName].opening === "closed") {
    todayOpeningTimeStamp = 0
  } else {
    const [todayOpeningHour, todayOpeningMinutes] = timings[
      todayName
    ].opening.split(":")
    todayOpeningTimeStamp.setHours(todayOpeningHour, todayOpeningMinutes)
  }

  //for services that are open now - when will they close?
  const todayClosingTimeStamp = new Date()
  const [todayClosingHour, todayClosingMinutes] = timings[
    todayName
  ].closing.split(":")
  todayClosingTimeStamp.setHours(todayClosingHour, todayClosingMinutes)

  //for services which are closed - when will they open?
  //this array will be added to by for loop below to contain an object for every day of the week
  //maybe that's not good coding practice....
  //element 0 is for today, element 1 will be tomorrow, etc
  let allDaysTimeStamps = [
    {
      openingTimestamp: todayOpeningTimeStamp,
      jsDayRef: today.getDay(),
      todayName: todayName,
    },
  ]

  //create an object for each successive day of the week (i.e. tomorrow onwards)
  for (let i = 1; i < 7; i++) {
    let daysAfterToday = i
    let jsCodeDayOfWeek =
      allDaysTimeStamps[i - 1].jsDayRef + 1 > 6
        ? 0
        : allDaysTimeStamps[i - 1].jsDayRef + 1
    let dayTimeStamp = new Date()
    let dayName = daysLookup[jsCodeDayOfWeek]
    if (timings[dayName].opening === "closed") {
      dayTimeStamp = 0
    } else {
      const [openingHour, openingMinutes] = timings[dayName].opening.split(":")
      dayTimeStamp.setHours(openingHour, openingMinutes)
      dayTimeStamp.setDate(dayTimeStamp.getDate() + daysAfterToday)
    }
    allDaysTimeStamps.push({
      openingTimestamp: dayTimeStamp,
      jsDayRef: jsCodeDayOfWeek,
      todayName: dayName,
    })
  }

  //identifies the next day that the service will be open
  //closed days are set to 0 so won't be bigger
  const nextOpeningTimeStamp = allDaysTimeStamps.find(
    element => element.openingTimestamp > allDaysTimeStamps[0].openingTimestamp
  ).openingTimestamp

  //look up the name of the day, and also save the hour and mins as variables for the display text
  const nextOpeningDay = daysLookup[nextOpeningTimeStamp.getDay()]
  const nextOpeningHour = nextOpeningTimeStamp.getHours()
  const nextOpeningMinutes =
    nextOpeningTimeStamp.getMinutes() > 9
      ? nextOpeningTimeStamp.getMinutes()
      : `0${nextOpeningTimeStamp.getMinutes()}`

  //the variable that will be displayed in InfoBar: will be set by one of the if outcomes below
  let openingInfo

  if (timings[todayName].opening === "closed") {
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
