async function postEditData(state) {
  const response = await fetch(`/api/edit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(state),
  })
  return await response.json()
}

postEditData()
  .then(data => {
    console.log(data)
  })
  .catch(console.log)

export default postEditData
