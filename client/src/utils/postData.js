export const postData = selectedService => {
  fetch(`/api/airtable?q=${selectedService}`)
    .then(res => res.json())
    .then(info => setSelectedServiceData(info.records))
}
