const getData = selectedService => {
  fetch(`/api/airtable?q=${selectedService}`)
    .then(res => res.json())
    .catch(console.log)
}

export default getData
