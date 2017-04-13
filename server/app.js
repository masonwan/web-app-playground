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
  .get('/body-script-sync-:id.js', (req, res) => {
    setTimeout(() => {
      res.send(`console.log('Script ${req.params.id} in body, sync')`)
    }, Math.random() * 100)
  })
  .get('/body-script-async-:id.js', (req, res) => {
    setTimeout(() => {
      res.send(`console.log('Script ${req.params.id} in body, async')`)
    }, Math.random() * 100)
  })
  .use('/', express.static(path.join(__dirname, `../public`)))

module.exports = app