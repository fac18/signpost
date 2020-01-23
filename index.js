require('dotenv').config();

const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const https = require('https');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  );
  // Return them as json
  res.json(passwords);
  console.log(`Sent ${count} passwords`);
});

app.get('/api/airtable', (req, res) => {
  const airtableUrl = `https://api.airtable.com/v0/appnOxIi3Xwhtwq3N/Services%20Database?api_key=${process.env.AIRTABLE_TOKEN}`;
  console.log('has entered server endpoint airtable');

  https.get(airtableUrl, response => {
    console.log('starting request');
    let data = '';
    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      console.log(data);
      res.end(data);
    });
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Signpost server listening on ${port}`);
