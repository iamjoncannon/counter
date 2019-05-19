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

	const ip = req.headers['x-real-ip'] 
	console.log('ip of request ', req.headers['x-real-ip'])
	const geoloc = require('geoip-lite').lookup(ip) 
	// sendText('hitting')
	console.log('visited from ', geoloc.city, geoloc.region, geoloc.country, )

  res.end()
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
