const getData = selectedService => {
  return fetch(`/api/airtable?q=${selectedService}`)
    .then(res => res.json())
    .catch(console.log)
}

export default getData
