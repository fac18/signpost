export const constructTimingsObject = selectedMarkerData => {
  return {
    Mon: {
      opening: selectedMarkerData.fields.MondayOpening,
      closing: selectedMarkerData.fields.MondayClosing,
    },
    Tue: {
      opening: selectedMarkerData.fields.TuesdayOpening,
      closing: selectedMarkerData.fields.TuesdayClosing,
    },
    Wed: {
      opening: selectedMarkerData.fields.WednesdayOpening,
      closing: selectedMarkerData.fields.WednesdayClosing,
    },
    Thu: {
      opening: selectedMarkerData.fields.ThursdayOpening,
      closing: selectedMarkerData.fields.ThursdayClosing,
    },
    Fri: {
      opening: selectedMarkerData.fields.FridayOpening,
      closing: selectedMarkerData.fields.FridayClosing,
    },
    Sat: {
      opening: selectedMarkerData.fields.SaturdayOpening,
      closing: selectedMarkerData.fields.SaturdayClosing,
    },
    Sun: {
      opening: selectedMarkerData.fields.SundayOpening,
      closing: selectedMarkerData.fields.SundayClosing,
    },
  }
}
