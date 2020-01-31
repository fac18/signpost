require('dotenv').config()

const express = require('express')
const path = require('path')
const https = require('https')
const app = express()
const bodyParser = require('body-parser')
let DB_URL = process.env.DB_URL
let ADD_URL = process.env.ADD_URL
let EDIT_URL = process.env.EDIT_URL

// Variables for posting data to Airtable db
let token = process.env.AIRTABLE_TOKEN
let Airtable = require('airtable')
let base = new Airtable({ apiKey: token }).base('appnOxIi3Xwhtwq3N')
Airtable.configure({
  endpointUrl: ADD_URL,
  apiKey: { token },
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')))

// Call api from airtable
app.get(`/api/airtable`, (req, res) => {
  if (process.env.NODE_ENV === 'test') {
    DB_URL = process.env.TEST_DB_URL
  }
  const airtableUrl = `${DB_URL}?api_key=${process.env.AIRTABLE_TOKEN}&view=${req.query.q}`

  console.log('Query', req.query.q)
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

// Post input data from client to server (airtable db)

app.post(`/api/add`, (req, res) => {
  base('Add Reviews').create(
    [
      {
        fields: {
          Title: req.body.Title,
          Location: req.body.Location,
          Opening_Times: req.body.Opening_Times,
          Service: req.body.Service,
          Contact_Name: req.body.Contact_Name,
          Contact_Details: req.body.Contact_Details,
        },
      },
    ],
    function(err, records) {
      if (err) {
        console.error(err)
        return
      }
      records.forEach(function(record) {
        console.log(record.getId())
      })
    }
  )
})

// Post suggested input from client to server (airtable db)
Airtable.configure({
  endpointUrl: EDIT_URL,
  apiKey: { token },
})
app.post(`/api/edit`, (req, res) => {
  base('Suggestions Reviews').create(
    [
      {
        fields: {
          textInput: req.body.textInput,
        },
      },
    ],
    function(err, records) {
      if (err) {
        console.error(err)
        return
      }
      records.forEach(function(record) {
        console.log(record.getId())
      })
    }
  )
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Signpost server listening on ${port}`)
