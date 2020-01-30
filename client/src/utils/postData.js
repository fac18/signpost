async function postAddServiceData(state) {
  const response = await fetch(`/api/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(state),
  })
  return await response.json()
}

postAddServiceData()
  .then(data => {
    console.log(data)
  })
  .catch(console.log)

export default postAddServiceData
