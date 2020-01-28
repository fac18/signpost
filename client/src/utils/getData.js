import React, { useState } from 'react'

// API call

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`)
    return
  }
  return response.json()
}

export const getData = querystring => {
  return fetch(
    `https://api.airtable.com/v0/appnOxIi3Xwhtwq3N/Services%20Database?api_key=${process.env.AIRTABLE_TOKEN}&view=${queryString}`
  )
    .then(checkResponse)
    .then(data => {})
    .catch(err => {
      throw new Error(`fetch getData failed ${err}`)
    })
}

export default getData
