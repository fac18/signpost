require('dotenv').config()

const express = require('express')
const path = require('path')
const https = require('https')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')))

app.get(`/api/airtable`, (req, res) => {
  const airtableUrl = `https://api.airtable.com/v0/appnOxIi3Xwhtwq3N/Services%20Database?api_key=${process.env.AIRTABLE_TOKEN}&view=${req.query.q}`

  console.log(req.query.q)
  console.log('has entered server endpoint airtable')

  https.get(airtableUrl, response => {
    console.log('starting request')
    let data = ''
    response.on('data', chunk => {
      data += chunk
    })

    response.on('end', () => {
      console.log(data)
      res.end(data)
    })
  })
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Signpost server listening on ${port}`)
