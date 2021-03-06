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

// app.get('/', (req, res) => {

// 	const ip = req.headers['x-real-ip'] 
// 	console.log('ip of request ', req.headers['x-real-ip'])
// 	const geoloc = require('geoip-lite').lookup(ip) 
// 	console.log('visited from ', geoloc.city, geoloc.region, geoloc.country)
// 	const textMessage = `counter: ${ip}: ${geoloc.city}, ${geoloc.region}, ${geoloc.country}`
// 	sendText(textMessage)

// 	res.end()
// }) 

app.get('/homepage', (req, res) => {

	const ip = req.headers['x-real-ip'] 
	console.log('ip of request ', req.headers['x-real-ip'])
	const geoloc = require('geoip-lite').lookup(ip) 
	console.log('visited from ', geoloc.city, geoloc.region, geoloc.country)
	const textMessage = `portfolio: ${ip}: ${geoloc.city}, ${geoloc.region}, ${geoloc.country}`
	sendText(textMessage)

	res.end()
}) 

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
