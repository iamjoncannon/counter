'use strict'

const express = require('express')
const path = require('path')
const app = express()
const sendText = require('../send_sms.js')

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', true)
// static middleware

app.get('*', (req, res) => {

  console.log(req.ip)
  // sendText('hitting')
  console.log(require('geoip-lite').lookup(req.ip))

  res.end()
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
