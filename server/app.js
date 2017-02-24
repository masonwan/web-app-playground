const express = require('express')
const path = require('path')

const app = express()

app
  .get('/head-script-:id-sync.js', (req, res) => {
    setTimeout(() => {
      res.send(`console.log('Script ${req.params.id} in head, sync')`)
    }, 100)
  })
  .get('/head-script-:id-async.js', (req, res) => {
    setTimeout(() => {
      res.send(`console.log('Script ${req.params.id} in head, async')`)
    }, Math.random() * 500)
  })
  .get('/body-script-:id.js', (req, res) => {
    setTimeout(() => {
      res.send(`console.log('Script ${req.params.id} in body')`)
    }, Math.random() * 100)
  })
  .use('/', express.static(path.join(__dirname, `../public`)))

module.exports = app